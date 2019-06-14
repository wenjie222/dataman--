<template>
	<div class="table">
		<div class="container">
			<div class="picShow">
				<div class="left">
					<div class="mstitle">
						<span>pic00001.jpg</span>
						<span>
							<el-button type="primary">下载</el-button>
						</span>
					</div>
					<div>
						<img src="../../assets/pic008.jpg" alt="">
					</div>
				</div>
				<div class="right">
					<dl>
						<dt>可信度</dt>
						<dd>
							<el-radio-group v-model="radio2">
						    <el-radio :label="3">重要</el-radio>
						    <el-radio :label="6">普通</el-radio>
						  </el-radio-group>
						</dd>
					</dl>
					<dl>
						<dt>标签</dt>
						<dd>
							<em>
								<el-tag type="success" style="background-color: #01dbff">领域险</el-tag>
								<el-tag type="info" style="background-color: #ff51b6">标准数据</el-tag>
								<el-tag type="warning" style="background-color: #fcd957">中英对照</el-tag>
								<el-input
								  class="input-new-tag"
								  v-if="inputVisible"
								  v-model="inputValue"
								  ref="saveTagInput"
								  size="small"
								  @keyup.enter.native="handleInputConfirm"
								  @blur="handleInputConfirm"
								>
								</el-input>
								<a class="add" href="">+</a>
							</em>
						</dd>
					</dl>
					<dl>
						<dt>备注</dt>
						<dd>
							<el-input type="textarea"></el-input>
						</dd>
					</dl>
					<dl>
						<dt>文件详情</dt>
						<dd>
							<p><span>类型:</span> <em>JPG</em></p>
							<p><span>大小:</span> <em>28KB</em></p>
							<p><span>作者:</span> <em>李大文</em></p>
							<p><span>创建时间:</span> <em>2016-11-15 21:02:36</em></p>
							<p><span>修改时间:</span> <em>2016-11-15 21:02:36</em></p>
							<p><span>文件目录:</span> <em style="color:#409eff;">\\2015年数据\\立项工作\工作报告</em></p>
						</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment/moment';
export default {
	name: 'basetable',
	data() {
		return {
			inputVisible: false,
			radio2: '3',
			activeName2: 'first',
			tableData: [
				{
					node: 'id',
					type: 'string',
					tags: '唯一标号',
					integrity: '90%'
				},
				{
					node: 'American_draft',
					type: 'string',
					tags: '添加标签',
					integrity: '20%'
				},
				{
					node: 'nickname',
					type: 'string',
					tags: '添加标签',
					integrity: '56%'
				},
				{
					node: 'email',
					type: 'string',
					tags: '邮箱',
					integrity: '60%'
				},
				{
					node: 'password',
					type: 'string',
					tags: '密码',
					integrity: '40%'
				},
				{
					node: 'wechatname',
					type: 'string',
					tags: '微信昵称',
					integrity: '50%'
				}
			],
			cur_page: 1,
			multipleSelection: [],
			is_search: false,
			searchResult: '',
			hasError: false,
			match: false,
			form: {
				checkName: '',
				checkTime: '',
				checkMain: '',
				checkResults: ''
			},
			
			idx: -1,
			formInline: {
			  phone: '14752167983',
			  gender: ''
			},
			value13: '',

			total:0,//默认数据总数
			pagesize:5,//每页的数据条数
			currentPage:1,//默认开始页面
			pages: 0,
			listTotal: 0
		}
	},
	mounted: function () {
	  
	},
	methods: {
		handleClick(tab, event) {
				console.log(tab, event);
	 		},
	  handleCurrentChange(val) {
				this.currentPage = val;
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(255, 255, 255, 1)',
					target: document.querySelector('.el-table')
				});
				setTimeout(() => {
				  loading.close();
				}, 500);


				let _this = this;
				let mm = _this.value13;
				
				let startTimeDate = new Date(mm[0]);
				let endTimeDate = new Date(mm[1]);

				let startTime = startTimeDate.getTime()
				let endTime = endTimeDate.getTime(endTimeDate)

				let query_time_interval = {
				  start: startTime,
				  end: endTime
				}

				this.$api.get('lxf/tels/chkvdt/log?type=name', {
					pageNum: val,
					pageSize: 10,
					query_time_interval
				}, response => {
				 if (response.status >= 200 && response.status < 300) {
					this.tableData = [];
					this.tableData = response.data.list;
					this.listTotal = response.data.total;
					this.pages = response.data.pages;
					console.log(this.pages);
				 } else {
					console.log(response.message);
				 }
				});

			},
			// 获取 easy-mock 的模拟数据
			// getData() {
			   
			// },
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
	}
}

</script>

<style scoped lang="scss">
	.container{
		/*background-color: #fff;*/
		height: 100%;
		box-sizing: border-box;
		padding:10px;
	}
	.table{
		height: 100%;
	}

	.mstitle{
		line-height: 30px;
		span{
			color:#409EFF;
		}
	}

	.picShow{
		display:flex;
		justify-content: space-between;
		.mstitle{
			display:flex;
			justify-content: space-between;
			padding-bottom: 10px;
		}
		.left{
			flex:1;
			background-color: #fff;
			border-radius: 4px;
			padding:10px;
			box-sizing: border-box;
			margin-right: 10px;
			img{
				display: block;
				width:100%;
			}
		}
		.right{
			width:400px;
			box-sizing: border-box;
			background-color: #413f4c;
			padding:10px;
			color: #fff;
			.el-radio{
				color: #fff;
			}
			dl{
				padding:0 0 10px 0;
			}
			dd{
				padding:10px 10px 10px 20px;
				.el-tag{
					color: #fff;
				}
				em{
					font-style: normal;
				}
				.add{
					width: 18px;
					height: 18px;
					display: inline-block;
					border:1px solid #fff;
					border-radius: 100%;
					color: #fff;
					text-align:center;
					line-height: 14px;
					font-size: 18px;
					margin-left:4px;
				}
				p{
					line-height: 36px;
					font-size:14px;
					span{
						display: inline-block;
						width:80px;
						text-align: right;
					}
				}
			}
		}
	}
</style>
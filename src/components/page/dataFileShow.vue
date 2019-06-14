<template>
	<div class="table">
		<div class="container">
			<div class="picShow">
				<div class="left">
					<div class="mstitle">
						<span>立项报告.docx</span>
						<span>
							<el-button type="primary">下载</el-button>
						</span>
					</div>
					<div class="mainInfo">
						<h5>2.1 云存储</h5>
						<p>平台将所有原始数据和治理完的数据进行统一云存储，原始数据按照云盘的方式将所有的数据进行统一云存储，原始数据按照云盘的方式将所有数据的原始信息进行存储，包括文件路径、文件目录结构、重复文件等，保证原始信息的原汁原味，而对于治理完的数据统一用数据库进行存储。</p>
						<h5>2.2 价值评估</h5>
						<p>治理过程中如果发现原始数据文件有重复，对于重复文件会给出详细说明；任务内的有效数据进行统一云存储，原始数据按照云盘的方式将所有这些文件重复、任务内与整个系统内有哪些文件重复、净增文件数有多少、重复率有多少，原始信息对于重复文件进行治理，从而可以减少治理过程和存储。</p>
						<h5>2.3 数据预处理</h5>
						<p>数据预处理会自动对一些特殊类型文件进行处理，主要包括压缩文件以及压缩文件的数据进行统一云存储，原始数据按照云盘的方式将所有压缩文件的自动解压、邮件及邮件附件的自动解析、文件的Meta信息（文件创建人、创建路径、文件目录结构、重复文件、创建日期、文件类型、文件大小、照片的光圈信息等）等信息的提取。</p>
						<h5>2.4 数据自动解析</h5>
						<p>数据自动解析会对原始文件进行结构化和文本信息的自动解析处理，针对不同的数据文件有不同的解析策略。对于结构化文件，系统能够自动识别分隔符，并将数据全部处理为结构化数据，存放于云存储。</p>
					</div>
				</div>
				<div class="right">
					<dl>
						<dt>文件详情</dt>
						<dd>
							<p><span>类型:</span> <em>JPG</em></p>
							<p><span>大小:</span> <em>28KB</em></p>
							<p><span>作者:</span> <em>李大文</em></p>
							<p><span>创建时间:</span> <em>2016-11-15 21:02:36</em></p>
							<p><span>修改时间:</span> <em>2016-11-15 21:02:36</em></p>
							<p><span>字数:</span> <em>83873</em></p>
							<p><span>文件目录:</span> <em style="color:#409eff;">\\2015年数据\\立项工作\工作报告</em></p>
						</dd>
					</dl>

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
					<dl class="atags">
						<dt>命名实体</dt>
						<dd>
							<p>
								<span>人名:</span>
								<em>
									<el-tag size="small" type="info" closable>张三**</el-tag>
								</em>
							</p>
							<p>
								<span>地名:</span>
								<em>
									<el-tag size="small" type="info" closable>北京</el-tag>
								</em>
							</p>
							<p>
								<span>其它实体:</span>
								<em>
									<el-tag size="small" type="info" closable>汽车</el-tag>
								</em>
							</p>
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
			border-bottom: 1px solid #ebebeb;
		}
		.left{
			flex:1;
			background-color: #fff;
			border-radius: 4px;
			padding:10px;
			box-sizing: border-box;
			margin-right: 10px;
			.mainInfo{
				padding:20px;
				h5{
					font-size: 24px;
					line-height: 40px;
					padding:20px 0;
				}
				p{
					font-size: 14px;
					line-height: 30px;
				}
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

			.atags{
				dd{
					p{
						.el-tag--info{
					    border-color: rgba(144, 146, 152, 0.2);
					    background-color: #fff;
					    color: #909399;
					    width:auto;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="table">
		<div class="container">
			<div class="bottom-wrap">
				<div class="handle-box">
					<div>
						<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" style="padding-top: 0">
							<el-form-item prop="userType">
								<el-select v-model="formInline.userType" placeholder="选择数据空间">
								  <el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>
					 		</el-form-item>


					 		<el-form-item prop="userTypea">
								<el-select v-model="formInline.userTypea" placeholder="选择任务状态">
								  <el-option
									v-for="item in optionsa"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>
					 		</el-form-item>

					 	</el-form>
					</div>
					
					
				</div>

				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					
					<el-table-column prop="numId" align="center" label="序号" width="80">
					</el-table-column>

					<el-table-column prop="proName" align="center" label="数据空间" width="180">
					</el-table-column>

					<el-table-column prop="nodeName" align="center" label="数据批次">
					</el-table-column>

					<el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
					<el-table-column prop="finishTime" align="center" label="完成时间"></el-table-column>
					<el-table-column prop="" align="center" label="任务进度">
						<template slot-scope="scope">
							<el-progress :percentage="scope.row.total"></el-progress>
						</template>
					</el-table-column>

					<el-table-column prop="control" align="center" label="操作" width="200" >
						<template slot-scope="scope">
			        

			        <span v-if="scope.row.total === 100">
			        	<el-button type="text" size="small" class="control">
			        		<i class="fa fa-edit"></i>
				        </el-button>
				        <el-button type="text" size="small" class="control">
				        	<i class="fa fa-trash-o"></i>
				        </el-button>
			        </span>

			        <span v-else>
			        	正在上传的任务不可以进行操作
			        </span>

			      </template>
					</el-table-column>
				</el-table>
				<div class="pagination">
					<el-pagination background @current-change="handleCurrentChange" :page-size="10"
	  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
					</el-pagination>
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
			tableData: [
				{
					numId: '1',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 30
				},
				{
					numId: '2',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 100
				},
				{
					numId: '3',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 50
				},
				{
					numId: '4',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 80
				},
				{
					numId: '5',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 100
				},
				{
					numId: '6',
					proName: '测试数据空间',
					nodeName: '测试数据空间',
					createTime: '2019-11-15 21:02:36',
					finishTime: '2019-11-15 21:02:36',
					total: 30
				},
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
			options: [
			  {
				value: '0',
				label: '属性组'
			  }, {
				value: '1',
				label: '字段类型'
			  }
			],
			optionsa: [
			  {
				value: '0',
				label: '已完成'
			  }, {
				value: '1',
				label: '未完成'
			  }
			],
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
	.handle-box {
		display: flex;
		justify-content: space-between;
		white-space: nowrap;
	}

	.top-wrap,.el-row{
		width:100%;
	}

	.information{
		h6{
			font-size: 16px;
			color: #666;
			line-height: 30px;
			em{
				color: #1d87ff;
				font-style: normal;
			}
		}
	}



	.control{
		.el-button--small{
			padding-top: 0;
			padding-bottom: 0;
		}
		.fa{
			color:#999;
			/*font-size: 24px;*/
		}
		.fa-edit:hover{
				color:#1cc4ff;
		}
		.fa-trash-o:hover{
				color:#ff2266;
		}
	}
</style>
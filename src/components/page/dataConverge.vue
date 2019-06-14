<template>
	<div class="table">
		<div class="container">
			<div class="bottom-wrap">
				<div class="handle-box">
					<div style="padding: 17px 10px 0;float: right">
					  <router-link to="/dataConvergeView" class="a1">
					  	<el-button type="primary" icon="el-icon-plus" >新建</el-button>
					  </router-link>
					  <el-button type="danger" icon="el-icon-delete">删除</el-button>
					</div>
					<div>
						<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
							<el-form-item label="创建时间">
								<div class="handle-box">
									<el-date-picker
									  v-model="value13"
									  type="daterange"
									  start-placeholder="开始日期"
									  end-placeholder="结束日期"
									  :default-time="['00:00:00', '23:59:59']">
									</el-date-picker>
								</div>
							</el-form-item>

							<el-form-item label="数据资源(数据表)" prop="name">
							  <el-input v-model.trim="formInline.name" placeholder="请输入表名"></el-input>
							</el-form-item>

							<el-form-item label="算子" prop="name">
							  <el-input v-model.trim="formInline.name" placeholder="请输入算子名称"></el-input>
							</el-form-item>

							<el-form-item prop="name">
							  <el-input v-model.trim="formInline.name" placeholder="名称/备注"></el-input>
							</el-form-item>

							<el-form-item><el-button type="primary" icon="el-icon-search" @click="search">查询</el-button></el-form-item>
						</el-form>
					</div>
				</div>
				<el-table :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"></el-table-column>
					<el-table-column prop="numId" align="center" label="序号" width="80">
					</el-table-column>

					<el-table-column prop="taskName" align="center" label="任务名称" sortable width="180">
					</el-table-column>

					<el-table-column prop="medium" align="center" label="数据资源（数据表）" width="220">
					</el-table-column>

					<el-table-column prop="operator" align="center" label="算子" width="120">
					</el-table-column>

					<el-table-column prop="state" align="center" label="状态" width="80">
					</el-table-column>
					

					<el-table-column prop="createTime" align="center" label="创建时间">
					</el-table-column>

					<el-table-column prop="info" align="center" label="备注">
					</el-table-column>

					<el-table-column prop="control" align="center" label="操作" >
						<template slot-scope="scope">

							  <el-tooltip class="item" effect="dark" content="执行" placement="top">
							<el-button type="text" size="small" class="control">
								<i class="fa fa-play"></i>
							</el-button>
						</el-tooltip>

						  <el-tooltip class="item" effect="dark" content="编辑" placement="top">
							<router-link to="/dataConvergeView" class="a1">
					  		<el-button type="text" size="small" class="control">
									<i class="fa fa-edit"></i>
								</el-button>
					  	</router-link>
					  </el-tooltip>


					    <el-tooltip class="item" effect="dark" content="删除" placement="top">

							<el-button type="text" size="small" class="control">
								<i class="fa fa-trash-o"></i>
							</el-button>
						</el-tooltip>

				  </template>
					</el-table-column>
				</el-table>
				<div class="pagination">
					<el-pagination background @current-change="handleCurrentChange" :page-size="10"
	  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
					</el-pagination>
				</div>
			</div>

			<div class="drawWrap" style="display: none;">
				<div class="drawLeft">
					流程预览
				</div>
				<div class="drawRight">
					<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						<el-table-column prop="idNo" align="center" label="序号"  width="60"></el-table-column>
						<el-table-column prop="operator" align="center" label="算子名称"  width="180"></el-table-column>
						<el-table-column prop="state" align="center" label="算子状态"  ></el-table-column>
					</el-table>
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
				tableData2: [
					// 流程预览
					{
						idNo: '1',
						operator: 'MySQL抽取算子',
						state: '已完成'
					},{
						idNo: '2',
						operator: 'Oracle抽取算子',
						state: '已完成'
					},{
						idNo: '3',
						operator: 'Kafka数据接入算子',
						state: '已完成'
					},{
						idNo: '4',
						operator: '数据清洗算子',
						state: '已完成'
					},{
						idNo: '5',
						operator: '数据分组算子',
						state: '已完成'
					},{
						idNo: '6',
						operator: '数据清洗算子',
						state: '进行中'
					},{
						idNo: '7',
						operator: '数据复制算子',
						state: '未启动'
					},{
						idNo: '8',
						operator: '数据关联算子',
						state: '未启动'
					},{
						idNo: '9',
						operator: '数据复制算子',
						state: '未启动'
					}

				],
				tableData: [
					// {
					// 	isCheck: true,
					// 	numId: '1',
					// 	taskName: '客户数据汇聚',
					// 	medium: 'MySQL、Oracle',
					// 	operator: '抽取、清洗、分组、复制、关联',
					// 	state: ' 运行成功',
					// 	createTime: '2019-03-12 15:30:00',
					// 	info: '--'
					// },
					// {
					// 	isCheck: true,
					// 	numId: '2',
					// 	taskName: '手机App数据汇聚',
					// 	medium: 'MySQL、Oracle',
					// 	operator: '抽取、清洗、分组、复制、关联',
					// 	state: '运行中',
					// 	createTime: '2019-03-24 15:30:00',
					// 	info: '--'
					// },
					
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
				  phone: '',
				  name: ''
				},
				value13: '',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,

				options: [
				  {
					value: 0,
					label: '管理员'
				  }, {
					value: 1,
					label: '普通用户'
				  }
				]
			}
		},
		mounted: function () {
		  
		},
		methods: {
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


			search(formName){

			}
		}
	}

</script>

<style scoped lang="scss">
	.handle-box {
		margin-bottom: 10px;
	}

	.del-dialog-cnt{
		font-size: 16px;
		text-align: center
	}
	.table{
		width: 100%;
		font-size: 14px;
	}

	.control{
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
		.fa-pencil:hover{
			color: #1c88ff;
		}
	}


	.drawWrap{
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		margin-top:20px;
		padding: 20px;
		.drawLeft{
			flex:1;
			background:  url(../../assets/pic02.png) no-repeat center center;
			background-size: contain;
			height: 700px;
			font-size: 16px;
		}
		.drawRight{
			width:360px;

			/*border:1px solid #ccc;*/
		}
	}

	
</style>

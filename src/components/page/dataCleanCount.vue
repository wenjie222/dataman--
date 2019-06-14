<template>
	<div class="table">
		<div class="container">
			
			<div class="bottom-wrap">
				<div class="mstitle">
					清洗规则字段内容必填项统计
				</div>
				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column prop="ruleCate" align="center" label="规则类" width="80"></el-table-column>

					<el-table-column prop="ruleName" align="center" label="规则名称" sortable width="180"></el-table-column>

					<el-table-column prop="inputText" align="center" label="输入字段"></el-table-column>

					<el-table-column prop="require" align="center" label="是否必填" width="180"></el-table-column>
					<el-table-column prop="info" align="center" label="输入限制"></el-table-column>

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
						ruleCate: '列操作',
						ruleName: '新建列',
						inputText: '列名',
						require: '是',
						info: '不允许填充特殊字符，长度小于30个字符'
					},
					{
						ruleCate: '',
						ruleName: '复制列',
						inputText: '数据类型',
						require: '是',
						info: '限制输入与所选数据类型相同内容'
					},
					{
						ruleCate: '',
						ruleName: '删除列',
						inputText: '填充列',
						require: '是',
						info: '拼接列允许2-5拼接'
					},
					{
						ruleCate: 'ce操作',
						ruleName: '长尾字段替换',
						inputText: '目标列',
						require: '是',
						info: '2-10，默认为2'
					},
					{
						ruleCate: '行规则',
						ruleName: '删除行',
						inputText: '目标列',
						require: '是',
						info: '>0，默认为1'
					},
					{
						ruleCate: '',
						ruleName: '新建列',
						inputText: '列名',
						require: '是',
						info: '不允许填充特殊字符，长度小于30个字符'
					},
					{
						ruleCate: '',
						ruleName: '新建列',
						inputText: '列名',
						require: '是',
						info: '不允许填充特殊字符，长度小于30个字符'
					},
					{
						ruleCate: '',
						ruleName: '新建列',
						inputText: '列名',
						require: '是',
						info: '不允许填充特殊字符，长度小于30个字符'
					},
					{
						ruleCate: '',
						ruleName: '新建列',
						inputText: '列名',
						require: '是',
						info: '不允许填充特殊字符，长度小于30个字符'
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

	.mstitle{
		line-height: 30px;
		padding-bottom: 10px;
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
	}
</style>
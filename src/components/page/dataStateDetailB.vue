<template>
	<div class="table">
		<div class="container">
			<!-- <div class="mstitle">
				<span>American</span>
				<span><i class="fa fa-edit"></i></span>
			</div> -->
			 <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
		    <el-tab-pane label="列展示" name="first"> -->
		    	<!-- <el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column prop="node" align="center" label="字段" width="280"></el-table-column>

					<el-table-column prop="type" align="center" label="类型" ></el-table-column>

					<el-table-column prop="tags" align="center" label="标签"></el-table-column>

					<el-table-column prop="integrity" align="center" label="完整度" width="80"></el-table-column>
				</el-table>

				<div class="pagination">
					<el-pagination background @current-change="handleCurrentChange" :page-size="10"
	  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
					</el-pagination>
				</div> -->
		    <!-- </el-tab-pane> -->




		    <!-- <el-tab-pane label="表展示" name="second"> -->
		    	
		    	<div data-v-8380f9d6="" class="el-table table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--small">
									   <div class="el-table__body-wrapper is-scrolling-none">
									   	<table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="100%">
									     <colgroup>
									      <col name="el-table_2_column_4" width="12%" />
									      <col name="el-table_2_column_5" width="12%" />
									      <col name="el-table_2_column_6" width="12%" />
									      <col name="el-table_2_column_7" width="12%" />
									      <col name="el-table_2_column_8" width="12%" />
									      <col name="el-table_2_column_9" width="12%" />
									     </colgroup>
									     <tbody>
									      <tr class="el-table__row tableFrist">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>idno</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>name</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>gender</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>age</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>phone</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>regist_time</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      
									      </tr>
									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>用户ID</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>姓名</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>性别</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>年龄</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>电话号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>注册时间</span>
										      </td>
									      </tr>

									       <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>身份证号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-button @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>手机号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
									      </tr>



									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>17142119********5X</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>张飞扬</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>22</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13098761234</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-08-25 04:20:43</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>23090319********9X</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>邹紫萱</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>30</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18039684510</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2013-09-25 07:50:46</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>37142119********22</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>吴明</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>34</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>14704728915</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-01-05 12:28:10</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>47142119********28</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>马颂</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>37</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13479038654</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 18:03:53</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>57142119********19</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>方然</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>28</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18039684510</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 16:09:51</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>63090319********58</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>鲁哲</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>36</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>15052718630</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 14:03:33</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>77142119********83</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>郑子涵</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>30</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18957926803</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 13:13:45</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>87012319********76</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>卫鑫</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>18</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13851802964</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 11:16:53</span>
										      </td>
									      </tr>
									      



									      <!---->
									     </tbody>
									    </table>

									    <!---->
									    <!---->
									   </div>
									   <!---->
									   <!---->
									   <!---->
									   <!---->
									   <div class="el-table__column-resize-proxy" style="display: none;"></div>
									  </div>

										
									<div class="pagination">
										<el-pagination background @current-change="handleCurrentChange" :page-size="10"
						  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
										</el-pagination>
									</div>

		    <!-- </el-tab-pane> -->
		  <!-- </el-tabs>	 -->
		</div>
	</div>
</template>

<script>
import moment from 'moment/moment';
export default {
	name: 'basetable',
	data() {
		return {
			activeName2: 'first',
			tableData: [
				{
					node: 'idno',
					type: 'varchar',
					tags: '身份证号',
					integrity: '100%'
				},
				{
					node: 'name',
					type: 'varchar',
					tags: '姓名',
					integrity: '100%'
				},
				{
					node: 'gender',
					type: 'varchar',
					tags: '性别',
					integrity: '100%'
				},
				{
					node: 'age',
					type: 'int',
					tags: '年龄',
					integrity: '100%'
				},
				{
					node: 'phone',
					type: 'varchar',
					tags: '手机号',
					integrity: '100%'
				},
				{
					node: 'regist_time',
					type: 'varchar',
					tags: '注册时间',
					integrity: '100%'
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
		addTag2(){

		},
		addTag3(){

		},
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
		background-color: #fff;
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

	.tableFrist{
		td{
			position: relative;
			b{
				display: none;
				position: absolute;
				width:20px;
				height: 20px;
				top:0;
				right: 0;
				font-size:16px;
				cursor: pointer;
				.fa-edit:hover{
					color:#1a89fd;
				}
			}
		}
	}
</style>
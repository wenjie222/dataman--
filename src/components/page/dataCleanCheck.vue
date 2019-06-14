<template>
	<div class="table">
		<div class="container">
			
			<div class="bottom-wrap">
				<div class="toptitle" style="padding-bottom:10px;">
					<div class="left">
						<!-- <el-form :inline="true" :model="form8" ref="form8" class="sadd el-form el-form--label-right">
							<el-form-item prop="userType" label="任务名称" :label-width="formLabelWidth">
								<el-input v-model.trim="formInline.name" style="width: 193px;" placeholder="登录名/联系方式/备注"></el-input>
					 		</el-form-item>


					 		<el-form-item prop="userTypea" label="任务数据表选择" :label-width="formLabelWidth">
								<el-select v-model="formInline.userTypea" placeholder="全部类型">
								  <el-option
									v-for="item in optionsa"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>
					 		</el-form-item>

					 	</el-form> -->
					 	<!-- <div class="" style="display: inline-block;width:calc(100% - 350px);vertical-align: top;">
					 		<b>描述：</b>
					 		<span>导出收到几点开始圣诞节，导出收到几点开始圣诞节导出收到几点开始圣诞节导出收到几点开始圣诞节导出收到几点开始圣诞节，导出收到几点开始圣诞节导出收到几点开始圣诞节</span>
					 	</div> -->
					</div>
					<div class="right">
						<router-link to="/dataCleanSet"><el-button type="primary">编辑</el-button></router-link>
						<el-button type="primary" @click="dialogFormVisible7 = true">查看质量报告</el-button>
						<el-button type="danger">执行</el-button>
					</div>
				</div>
				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">

					<el-table-column prop="name" align="center" label="表名" width="180"></el-table-column>
					<el-table-column prop="status" align="center" label="清洗状态" sortable width="180"></el-table-column>
					<el-table-column prop="starttime" align="center" label="开始时间"></el-table-column>
					<el-table-column prop="endtime" align="center" label="结束时间" width="180"></el-table-column>
					<el-table-column prop="costtime" align="center" label="耗时(ms)" width="80"></el-table-column>

					<el-table-column align="center" label="操作">
						<template slot-scope="scope">
							<span v-if="scope.row.info !== ''" style="cursor: pointer;" @click="">
								<router-link to="dataCleanSetDis">{{scope.row.info}}</router-link>
							</span>
							<span v-else>{{scope.row.info}}</span>
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



			<el-dialog title="新建数据表" :visible.sync="dialogFormVisible2" width="440px">

			<el-form :model="form4" ref="form4" class="add el-form el-form--label-right">
				 <el-form-item label="数据表类型" :label-width="formLabelWidth">
		      <el-select v-model="form4.region2" placeholder="请选择">
		        <el-option label="数据库表" value="shanghai"></el-option>
		        <el-option label="数据空间表" value="beijing"></el-option>
		        <el-option label="本地文件夹" value="beijing"></el-option>
		      </el-select>
		    </el-form-item> 
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="数据质量报告" :visible.sync="dialogFormVisible7" width="1000px">
			
			<div class="ml_itemv">
				<div class="ml_itema">
					<div>报告时间: <span>2019-05-13 10:21:26</span></div>
					<div>
						<div>数据质量综合评分: </div>
						<div style="margin:20px 0 0 20px">
							<el-progress type="circle" :percentage="80" status="text"><span>80</span> 分</el-progress>
						</div>
					</div>
				</div>

				
				<div class="ml_itema" >
					<div>
						<div class="aatitle">数据源</div>
						<p><span>数据源名称:</span> <b>CRM 数据</b></p>
						<p><span>数据源类型:</span> <b>MySQL</b></p>
						<p><span>数据源地址:</span> <b>192.168.10.126:3306</b></p>
						<p><span>数据库名称:</span> <b>frmc</b></p>
						<p><span>质量稽核表:</span> <b>customer、stock</b></p>
					</div>
				</div>
			</div>


			<div>
				<div class="aatitle">整体评分报告</div>
				<div class="ml_itemk">
					<div class="ml_itemkt">
						<div id="myChart" ref="myChart" :style="{width: '300px', height: '300px'}"></div>
					</div>
					<div class="ml_itemkt" style="width:700px;">
						<div id="myChart2" ref="myChart2" :style="{width: '700px', height: '300px'}"></div>
					</div>
				</div>
				
			</div>

			<div style="margin:20px 0 0 0">
				<div class="aatitle">表评分详情</div>
				<el-tabs type="border-card">
				  <el-tab-pane label="customer">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>89</em></div>
				  			<div id="myChart3" ref="myChart3" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>金融</em></p>
					  		<p><span>实体模型:</span> <em>金融</em></p>
					  		<p><span>总数据行:</span> <em>2828</em></p>
					  		<p><span>合规数据:</span> <em>1902</em></p>
				  		</div>
				  	</div>
				  	<div class="aatitle">列数据质量分析</div>
				  	<div>
				  		<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="colName" align="center" label="列名"></el-table-column>
								<el-table-column prop="colType" align="center" label="列类型"></el-table-column>
								<el-table-column prop="colTo" align="center" label="列标准映射"></el-table-column>
								<el-table-column prop="islow" align="center" label="列合规性规则"></el-table-column>
								<el-table-column prop="colEm" align="center" label="列空值"></el-table-column>

								<el-table-column prop="colFin" align="center" label="列完整度"></el-table-column>
								<el-table-column prop="colFin2" align="center" label="列唯一性"></el-table-column>
								<el-table-column prop="colFin3" align="center" label="列一致性"></el-table-column>

								<el-table-column prop="islows" align="center" label="列合规度"></el-table-column>
								<el-table-column prop="total" align="center" label="列总评分"></el-table-column>
							</el-table>
				  	</div>
				  	<div class="aatitle">其它质量问题汇总</div>
							<div style="padding-left: 20px;">
								<el-collapse v-model="activeNamesa" @change="handleChangea">
								  <el-collapse-item title="数据延迟 [及时性]" name="1">
								    <div>数据接入延迟超过6小时</div>
								  </el-collapse-item>
								  <el-collapse-item title="数据中断 [其它]" name="2">
								    <div>未检测到 2019-05-13 的数据</div>
								  </el-collapse-item>
								</el-collapse>
							</div>

				  </el-tab-pane>
				  <el-tab-pane label="stock">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>90</em></div>
				  			<div id="myChart4" ref="myChart4" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>金融</em></p>
					  		<p><span>实体模型:</span> <em>金融</em></p>
					  		<p><span>总数据行:</span> <em>2828</em></p>
					  		<p><span>合规数据:</span> <em>1902</em></p>
				  		</div>
				  	</div>
				  	<div class="aatitle">列数据质量分析</div>
				  	<div>
				  		<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="colName" align="center" label="列名"></el-table-column>
								<el-table-column prop="colType" align="center" label="列类型"></el-table-column>
								<el-table-column prop="colTo" align="center" label="列标准映射"></el-table-column>
								<el-table-column prop="islow" align="center" label="列合规性规则"></el-table-column>
								<el-table-column prop="colEm" align="center" label="列空值"></el-table-column>

								<el-table-column prop="colFin" align="center" label="列完整度"></el-table-column>
								<el-table-column prop="colFin2" align="center" label="列唯一性"></el-table-column>
								<el-table-column prop="colFin3" align="center" label="列一致性"></el-table-column>

								<el-table-column prop="islows" align="center" label="列合规度"></el-table-column>
								<el-table-column prop="total" align="center" label="列总评分"></el-table-column>
							</el-table>
				  	</div>
				  	<div class="aatitle">其它质量问题汇总</div>
							<div style="padding-left: 20px;">
								<el-collapse v-model="activeNamesa" @change="handleChangea">
								  <el-collapse-item title="数据延迟 [及时性]" name="1">
								    <div>数据接入延迟超过6小时</div>
								  </el-collapse-item>
								  <el-collapse-item title="数据中断 [其它]" name="2">
								    <div>未检测到 2019-05-13 的数据</div>
								  </el-collapse-item>
								</el-collapse>
							</div>
				  </el-tab-pane>
				</el-tabs>
			</div>
			<div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible7 = false">下  载</el-button>
		    <el-button type="primary" @click="dialogFormVisible7 = false">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="表数据" :visible.sync="dialogFormVisible40" width="900px">
		 <el-table :data="tableData8" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	  		<el-table-column prop="text1" align="center" label="telephone_no"></el-table-column>
	  		<el-table-column prop="text2" align="center" label="app_name"></el-table-column>
	  		<el-table-column prop="text3" align="center" label="is_loan_app"></el-table-column>
	  		<el-table-column prop="text4" align="center" label="registe_time"></el-table-column>
	  	</el-table>
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible40 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible40 = false">下载</el-button>
	  </div>
	</el-dialog>





	</div>
</template>

<script>
	import echarts from 'echarts';
	import moment from 'moment/moment';
	export default {
		name: 'basetable',
		data() {
			return {
				dialogFormVisible2: false,
				formLabelWidth: '110px',
				dialogFormVisible7: true,
				dialogFormVisible40: false,
				activeNamesa: [],

				tableData7: [
					{
						colName: 'idcardno',
						colType: 'varchar',
						colTo: '身份证号',
						islow: '北京身份证号验证规则',
						colEm: '0',
						colFin: '90%',
						islows: '90%',
						total: '96',
						colFin2: '80%',
						colFin3: '90%',
					},
					{
						colName: 'name',
						colType: 'varchar',
						colTo: '姓名',
						islow: '姓名长度验证',
						colEm: '0',
						colFin: '100%',
						islows: '90%',
						total: '94',
						colFin2: '80%',
						colFin3: '-',
					}
				],


				form4: {
					name: '',
					region2: ''
				},

				form8:{
					userTypea: ''
				},
				tableData: [
					{
						name: 't_profile',
						status: '完成',
						starttime: '2019-05-16 10:00:00',
						endtime: '2019-05-16 10:01:30',
						costtime: '90003',
						info: '预览'
					},
					{
						name: 't_dx',
						status: '清洗中',
						starttime: '2019-05-16 10:00:00',
						endtime: '--',
						costtime: '--',
						info: ''
					},
					{
						name: 't_weblog',
						status: '清洗中',
						starttime: '2019-05-16 10:00:02',
						endtime: '--',
						costtime: '--',
						info: ''
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

				optionsa: [
				  {
					value: 0,
					label: '数据库表'
				  }, {
					value: 1,
					label: '数据空间表'
				  },{
					value: 2,
					label: '本地文件夹'
				  },
				],
				options: [
				  {
					value: 0,
					label: '管理员'
				  }, {
					value: 1,
					label: '普通用户'
				  }
				],


				tableData8: [
					{
						text1: '155****2804',
						text2: '美团',
						text3: '0',
						text4: '2018-08-25 	04:50:46',
					},
					{
						text1: '136****2607',
						text2: '拼多多',
						text3: '2',
						text4: '2013-09-25 	04:50:46',
					},
					{
						text1: '150****7958',
						text2: '微信',
						text3: '2',
						text4: '2018-01-05 	12:28:10',
					},
					{
						text1: '150****7958',
						text2: '12306',
						text3: '1',
						text4: '2018-09-06 	18:03:53',
					},
					{
						text1: '150****7958',
						text2: '百度',
						text3: '2',
						text4: '2018-10-12 	11:14:45',
					}
				],
			}
		},
		mounted: function () {
		  this.dialogFormVisible7 = false
		  this.$nextTick(function () {
        this.drawLine();
        this.drawLine2();
        this.drawLine3();
        this.drawLine4();
      });
		},
		methods: {
			drawLine(){
				var myChart = this.$refs.myChart;
				var option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 100 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let aaChart = echarts.init(myChart);
        aaChart.setOption(option);
			},



			drawLine2(){
				var myChart2 = this.$refs.myChart2;
				let option = {
				    legend: {},
				    tooltip: {},
				    dataset: {
			        source: [
		            ['product', '综合评分', '合理性', '一致性', '唯一性', '及时性', '准确性', '完整性'],
		            ['customer', 43.3, 85.8, 93.7, 60, 70.4, 50.2, 80],
		            ['stock', 70, 80.2, 65.4, 90, 72, 66, 77],
			        ]
				    },
				    xAxis: {type: 'category'},
				    yAxis: {},
				    series: [
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'}
				    ]
				}
				let bbChart = echarts.init(myChart2);
        bbChart.setOption(option);
			},


			drawLine3(){
				var myChart3 = this.$refs.myChart3;
				var option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 80 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let ccChart = echarts.init(myChart3);
        ccChart.setOption(option);
			},


			drawLine4(){
				var myChart4 = this.$refs.myChart4;
				let option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 80 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let ddChart = echarts.init(myChart4);
        ddChart.setOption(option);
			},

			 handleChangea(val) {
        console.log(val);
      },


			addNew(){
				this.dialogFormVisible2 = true
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


			search(formName){

			},

			handleNodeClick7(data){
				console.log(data)
				let _this = this;
				_this.form8.sources = data.label;
			},
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
			font-size: 24px;
		}
		.fa-edit:hover{
				color:#1cc4ff;
		}
		.fa-trash-o:hover{
				color:#ff2266;
		}
	}


	.toptitle{
		display: flex;
		justify-content: space-between;
		.left{
			flex: 1;
		}
		.right{
			/*width:240px;*/
		}
	}


	.sadd{
		width: 330px;
		display: inline-block;
		.el-form-item__label{
			width:100px;
			text-align: right;
		}
		.el-form-item--small.el-form-item{
			margin-bottom: 10px;
			width:100%;
		}
		.el-form--inline .el-form-item__content{
			width:100%;
		}
		
		.el-select{
			width:100%;
		}
		.el-textarea__inner{
			height: 100%;
		}
	}




	.add{
		.el-form-item__label{
			width:100px;
			text-align: right;
		}
		.el-form-item--small.el-form-item{
			margin-bottom: 10px;
			width:100%;
		}
		.el-form--inline .el-form-item__content{
			width:100%;
		}
		
		.el-select{
			width:100%;
		}
		.el-textarea__inner{
			height: 100%;
		}
	}


	.nititle{
		display: flex;
		justify-content: space-between;
		line-height: 30px;
		padding:10px 0;
		.txtRed{
			color: red;
		}
	}


	.ml_itemv{
		display: flex;
		border-bottom: 1px dashed #ccc;
		padding-bottom: 20px;
		.ml_itema{
			width:50%;
			p{
				line-height: 30px;
			}
		}
	}

	.ml_itemk{
		display: flex;
		border-bottom: 1px dashed #ccc;
		padding-bottom: 20px;
		.ml_itemkt{
			/*width: 50%;*/
		}
	}

	.aatitle{
		font-size:18px;
		color: #333;
		padding:10px 0;
	}

	.score{
		em{
			font-size: 22px;
			font-style: normal;
		}
	}
	.textInfo{
		display: flex;
		border-bottom:1px dashed #ccc;
		padding-bottom: 10px;
		>div{
			display: inline-block;
			width:49.5%;
			h5{
				font-size: 18px;
				padding-left: 30px;
			}
			p{
				line-height: 30px;
				em{
					font-style: normal;
				}
				span{
					display: inline-block;
					vertical-align: middle;
					text-align: right;
					width:100px;
				}
			}
		}
	}
</style>
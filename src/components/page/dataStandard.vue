<template>
	<div class="table">
		<div class="container">
				<div class="content">
	    		<div class="sideLeft">
	    			<div class="mstitle">
	    				<div>行业标准管理</div>
	    				<div>
	    					<el-dropdown>
								  <span class="el-dropdown-link">
								    管理<i class="el-icon-arrow-down el-icon--right"></i>
								  </span>
								  <el-dropdown-menu slot="dropdown">
								    <el-dropdown-item @click.native="dsman">行业标准管理</el-dropdown-item>
								  </el-dropdown-menu>
								</el-dropdown>
	    				</div>
	    			</div>

	    			<div class="cateList">
	    				<div>
	    					<el-tree 
	    					:data="dataTree" 
	    					accordion 
	    					:props="defaultProps"
								node-key="id"
								:default-expanded-keys="[2, ]"
	    					@node-click="handleNodeClick">
	    						<span slot-scope="{ node, data }">
        						<span>{{ node.label }}</span>
        						<span v-if="data.num !== '0' " style="color: #1d87fd">（{{ data.num }}）</span>
        						<span v-else></span>
        					</span>
	    					</el-tree>
	    				</div>
	    			</div>
	    		</div>
	    		<div class="mainRight">
	    			<div class="mstitle" style="border-bottom: 0 none">
	    				<div style="line-height: 32px">实体模型</div>
	    				<div>
	    					<el-form :inline="true" :model="formInlineR" ref="formInlineR" class="demo-form-inline">
	    						<el-form-item prop="name">
	    							<el-input
									    placeholder="请输入内容"
									    v-model.trim="formInline.name">
									    <i slot="prefix" class="el-input__icon el-icon-search"></i>
									  </el-input>
									</el-form-item>
									<el-form-item>
										<el-button type="primary" icon="el-icon-search">查询</el-button>
									</el-form-item>
									<el-form-item>
										<el-button type="primary" icon="el-icon-plus" @click="addNew">新建实体模型</el-button>
									</el-form-item>
								</el-form>
	    				</div>
	    			</div>

	    			<div class="datalist">
	    				<ul>
	    					<li v-for="(item, index) in datalist">
	    						
    							<dl @click="jump(index)">
	    							<dt>
	    								<img src="../../assets/pic01.png" alt="">
	    							</dt>
	    							<dd>
	    								<h5>{{item.modelname}}</h5>
	    								<p><span>{{item.desc}}</span></p>
	    								<p>
	    									<em>属性数:</em><span>{{item.pronum}}</span>
	    									<em>属性组数</em><span>{{item.progroup}}</span>
	    									<em>规则数</em><span>{{item.ruleTotal}}</span>
	    									<em>创建人:</em><span>{{item.createname}}</span>
	    									<em>创建时间:</em><span>{{item.time}}</span>
	    								</p>
	    							</dd>
	    						</dl>
	    						<div class="iconControl">
	    							<i class="fa fa-edit" @click="editEs(index)"></i>
	    							<i class="fa fa-trash-o"></i>
	    						</div>
	    					</li>
	    					
	    					
	    				</ul>

	    				<div class="pagination">
								<el-pagination background @current-change="handleCurrentChange" :page-size="10"
				  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
								</el-pagination>
							</div>
	    			</div>
	    		</div>
	    	</div>
		</div>


		<el-dialog title="新建实体模型" :visible.sync="dialogFormVisible" width="440px">
		  <el-form :model="form8" ref="form8" class="add el-form el-form--label-right">
		  	<el-form-item label="实体模型名称" :label-width="formLabelWidth">
		      <el-input v-model="form8.name" auto-complete="off"></el-input>
		    </el-form-item>


		    <el-form-item label="分组" :label-width="formLabelWidth">
		      <el-select v-model="form8.region" placeholder="请选择">
		        <el-option label="网络" value="0"></el-option>
		        <el-option label="金融" value="1"></el-option>
		        <el-option label="医疗" value="2"></el-option>
		      </el-select>
		    </el-form-item>

		    <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form8.desc"></el-input>
			  </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addNewJump">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="行业标准管理" :visible.sync="dialogFormVisible3" width="500px">

      <div style="margin:0 0 10px 0;">
      	  <el-button type="primary" size="small">新增行业标准组</el-button>
      </div>

			<el-table :data="tableData4" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
				<el-table-column prop="name" align="center" label="名称">
			
				</el-table-column>
				<el-table-column prop="" align="left" label="操作" width="120">
					<template slot-scope="scope">
		        <el-button type="text" size="small" class="control">
		        	<i class="fa fa-edit"></i>
		        </el-button>
		        <el-button type="text" size="small" class="control">
		        	<i class="fa fa-trash-o"></i>
		        </el-button>
		      </template>
				</el-table-column>
			</el-table>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
		  </div>
	</el-dialog>



	<el-dialog title="编辑项目" :visible.sync="dialogFormVisible6" width="440px">

			<el-form :model="form9" ref="form9" class="add el-form el-form--label-right">
				<el-form-item label="名称" :label-width="formLabelWidth">
		      <el-input v-model="form9.name" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="分组" :label-width="formLabelWidth">
		      <el-select v-model="form9.region" placeholder="请选择">
		        <el-option label="网络" value="网络"></el-option>
		        <el-option label="金融" value="金融"></el-option>
		        <el-option label="医疗" value="医疗"></el-option>
		      </el-select>
		    </el-form-item>

		     <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form9.desc" :rows="6"></el-input>
			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible6 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible6 = false">确 定</el-button>
		  </div>

		</el-dialog>



	</div>
</template>

<script>
	export default {
		name: 'name',
		data() {
			return {
				formLabelWidth: '100px',
				dialogFormVisible: false,
				dialogFormVisible3: false,

				dialogFormVisible6: false,
				form:{
					name1: '',
					region1: '',
					name2: '',
					region2: '',
					desc:''
				},

				form8:{
					name: '',
					region: '',
					desc: ''
				},
				form9: {
					name1: '',
					desc: ''
				},

				datalist: [
					{
						modelname: '网络数据客户身份模型',
						desc: '描述网络数据中用户身份的标准模型',
						pronum: '6',
						progroup: '2',
						ruleTotal: '20',
						createname: 'admin',
						time: "2019-05-11",
						group: '金融'
					},
					{
						modelname: '短信数据模型',
						desc: '描述短信常用属性及其校验标准',
						pronum: '6',
						progroup: '2',
						ruleTotal: '10',
						createname: 'admin',
						time: "2019-03-08",
						group: '金融'
					},
					{
						modelname: '上网日志数据模型',
						desc: '描述上网行为常用属性及其校验标准',
						pronum: '5',
						progroup: '2',
						ruleTotal: '15',
						createname: 'admin',
						time: "2019-01-02",
						group: '金融'
					}
				],


				dataTree: [{
          label: '网络',
          num: '20',
          children: [
          	{
	            label: '网络数据客户身份模型',
	            num: '0',
	            children: []
          	},
          	{
	            label: '短信数据模型',
	            num: '0',
	            children: []
          	},
          	{
	            label: '上网日志数据模型',
	            num: '0',
	            children: []
          	}
          ]
        }, {
          label: '金融',
          num: '10',
          children: [{
            label: '二级 2-1',
            num: '0',
            children: []
          }, {
            label: '二级 2-2',
            num: '0',
            children: []
          }]
        }, {
          label: '医疗',
          num: '15',
          children: [{
            label: '二级 3-1',
            num: '0',
            children: []
          }, {
            label: '二级 3-2',
            num: '0',
            children: []
          }]
        }],

        defaultProps: {
          children: 'children',
          label: 'label',
          num: 'num'
        },


				tableData4:[
				{
					name: '网络',
				},
				{
					name: '金融',
				},
				{
					name: '医疗',
				}
			],

				activeName2: 'first',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
				formInline:{
					key: '',
				},
				formInlineR:{
					resource: '',
				},
			}
		},
		mounted: function () {
		  
		},
		methods: {
			jump(data){
				// alert(data);
				if(data === 0){
					this.$router.push('/dataModel');
				}else if(data === 1){
					this.$router.push('/dataModelB');
				}else{
					this.$router.push('/dataModelC');
				}
			},
			dsman(){
				this.dialogFormVisible3 = true
			},
			addNew(){
				this.dialogFormVisible = true
			},
			addNewJump(){
				this.dialogFormVisible = false;
				this.$router.push('/dataModel');
			},
			editEs(index){
				this.dialogFormVisible6 = true;
				let _this = this;
				_this.form9.name = _this.datalist[index].modelname;
				_this.form9.desc = _this.datalist[index].desc;
				_this.form9.region = _this.datalist[index].group;
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



			handleNodeClick(data) {  //左侧树点击
        console.log(data);
      },
      
		}
	}

</script>

<style scoped lang="scss">
	.table{
		height: 100%;
		/*background-color: #fff;*/
	}

	.content{
		display: flex;
	}

	.container{
		height: 100%;
		.el-tabs__nav-wrap{
			background-color: #eef1f3;
		}
	}

	.sideLeft{
		width: 266px;
    border: 1px solid #ebebeb;
    height: 100%;
    margin-right: 20px;
    background-color: #fff;
	}

	.mainRight{
		flex:1;
		/*border:1px solid #ccc;*/
		border: 1px solid #ebebeb;
		background-color: #fff;
	}

	.mstitle {
		display:flex;
    justify-content: space-between;
    padding:10px;
    border-bottom: 1px solid #ebebeb;
    .el-dropdown{
    	color:#1d87fd;
    	cursor: pointer;
    }
    .demo-form-inline{
    	padding-top: 0;
    }
	}

	.cateList{
		ul{
			padding:20px 0;
			li{
				list-style: none;
				font-size:14px;
				padding:8px 20px;
				span{

				}
				em{
					font-style: normal;
					color: #1d87fd;
				}
			}
		}
	}


	.datalist{
		ul{
			li{
				display: flex;
				justify-content: space-between;
				padding:10px 20px 10px 10px;
				border-bottom: 1px solid #ebebeb;
				align-items: center;
				a{
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					/*border-bottom: 1px solid #ebebeb;*/
					padding:10px 0;
					align-items:center;
				}
				.iconControl{
					min-width: 60px;
					.fa{
						display: inline-block;
						color: #666;
						/*font-size:20px;*/
						margin-left:10px;
					}
					.fa-edit:hover{
						color: #2ac9ff;
					}
					.fa-trash-o:hover{
						color:#ff2267;
					}
				}

				dl{
					dt{
						display: inline-block;
						vertical-align: middle;
						width: 50px;
						padding:0 10px;
					}
					dd{
						display: inline-block;
						vertical-align: middle;
						padding-left: 10px;
						h5{
							font-size: 16px;
							color: #000;
							line-height: 28px;
						}
						p{
							font-size: 14px;
							line-height: 26px;
							span{
								color: #666;
								padding-right: 10px;
							}
							em{
								font-style: normal;
								color: #000;
								padding-right: 4px;
							}
						}
					}
				}
			}
		}
	}

	.add{
		width: 400px;
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
	}


	.control{
		.fa{
			color: #666;
			/*font-size:20px;*/
			margin-left:10px;
		}
		.fa-edit:hover{
			color: #2ac9ff;
		}
		.fa-trash-o:hover{
			color:#ff2267;
		}
	}
</style>
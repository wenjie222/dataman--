<template>
	<div class="table">
		<div class="container">
			<div class="top-wrap">
				<div class="information">
					<el-row>
					  <el-col :span="12">
					  	<div class="grid-content bg-purple">
					  		<h6>上网日志数据模型</h6>
								<p>概述:描述上网行为常用属性及其校验标准</p>
					  	</div>
					  </el-col>
					  <el-col :span="12">
					  	<div class="grid-content bg-purple-light">
					  		<h6>属性组: <em>2</em></h6>
					  		<h6>属性数: <span>5</span></h6>
					  	</div>
					  </el-col>
					</el-row>
				</div>
			</div>
			
			<div class="bottom-wrap">
				<div class="handle">
					<div  style="text-align: right;">
						<el-button type="primary" icon="el-icon-setting" @click="manPro">属性组管理</el-button>
						<el-button type="warning" icon="el-icon-plus" @click="addPro">新增属性</el-button>
						<el-button type="success" icon="el-icon-download">导入</el-button>
						<el-dropdown split-button type="danger" icon="el-icon-upload2">
						  导出
						  <el-dropdown-menu slot="dropdown">
						    <el-dropdown-item>sql文件</el-dropdown-item>
						    <el-dropdown-item>xml文件</el-dropdown-item>
						  </el-dropdown-menu>
						</el-dropdown>
						<el-button type="success" ><i class="fa fa-save"></i> 保存</el-button>
					</div>
					<div style="padding-bottom: 10px;">
						<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" style="padding-top: 0">
							<el-form-item prop="userType" label="字段类型">
								<el-select v-model="formInline.userType" placeholder="选择字段类型">
								  <el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>
					 		</el-form-item>

					 		<el-form-item prop="userType" label="属性分组">
					 			<el-select v-model="formInline.userTypeaa" placeholder="选择属性分组">
								   <el-option label="基本信息" value="基本信息"></el-option>
		        			 <el-option label="联系方式" value="联系方式"></el-option>
								</el-select>
								
					 		</el-form-item>
					 		<el-form-item prop="userType" label=" 关键字">
					 			<el-input
						    placeholder="搜索属性"
						    v-model.trim="formInline.name">
						    <i slot="prefix" class="el-input__icon el-icon-search"></i>
						    </el-input>
					 		</el-form-item>
					 		<el-form-item>
						 		<el-button type="primary">搜索</el-button>
						 	</el-form-item>
					 	</el-form>
					</div>
					
					
				</div>

				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					
					<el-table-column prop="numId" align="center" label="序号" width="80">
					</el-table-column>

					<el-table-column prop="proName" align="center" label="属性名称" width="180">
					</el-table-column>

					<el-table-column prop="nodeName" align="center" sortable label="字段名">
					</el-table-column>

					<el-table-column prop="proType" align="center" sortable label="字段类型" width="180">
					</el-table-column>

					<el-table-column prop="info" align="center" label="备注" width="180">
					</el-table-column>
					<el-table-column prop="cate" align="center" sortable label="分组">
					</el-table-column>
					<el-table-column align="center" label="属性合法性规则">
						<template slot-scope="scope">
							<span @click="showSetInfo" v-if="scope.row.ruleName !== ''">{{scope.row.ruleName}}</span>
							<span v-else @click="showSet">设置</span>
						</template>
					</el-table-column>


					<el-table-column prop="control" align="center" label="操作" width="180" >
						<template slot-scope="scope">
							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
				        <el-button type="text" size="small" class="control" @click="editPro(scope.index, scope.row)">
				        	<i class="fa fa-edit"></i>
				        </el-button>
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
		</div>



		<el-dialog title="属性合法性规则" :visible.sync="dialogFormVisible" width="440px">
		  <el-form :model="form" ref="form" class="add el-form el-form--label-right">


		  	<el-form-item label="规则名称" :label-width="formLabelWidth">
		      <el-input v-model="form.name1" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form.desc"></el-input>
			  </el-form-item>

		    <el-form-item label="规则定义" :label-width="formLabelWidth">
		      <el-input v-model="form.name2" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="规则示例" :label-width="formLabelWidth">
		      <el-input v-model="form.name3" auto-complete="off"></el-input>
		    </el-form-item>

		   
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="属性合法性规则" :visible.sync="dialogFormVisible5" width="440px">
		  <el-form :model="form5" ref="form5" class="add el-form el-form--label-right">


		  	<el-form-item label="规则名称" :label-width="formLabelWidth">
		      <el-input v-model="form5.name" auto-complete="off"></el-input>
		    </el-form-item>
		    <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form5.desc"></el-input>
			  </el-form-item>

		    <el-form-item label="规则定义" :label-width="formLabelWidth">
		      <el-input v-model="form5.rule" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="规则示例" :label-width="formLabelWidth">
		      <el-input v-model="form5.example" auto-complete="off"></el-input>
		    </el-form-item>

		   
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible5 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible5 = false">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="新增属性" :visible.sync="dialogFormVisible2" width="440px">
		  <el-form :model="form2" ref="form2" class="add el-form el-form--label-right">


		  	<el-form-item label="属性名称" :label-width="formLabelWidth">
		      <el-input v-model="form2.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="字段名" :label-width="formLabelWidth">
		      <el-input v-model="form2.name2" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="字段类型" :label-width="formLabelWidth">
		      <el-select v-model="form2.region1">
			      	<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
						  </el-option>
					</el-select>
		    </el-form-item>

		    <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form2.desc"></el-input>
			  </el-form-item>

			  <el-form-item label="分组" :label-width="formLabelWidth">
		      <el-select v-model="form2.region2" placeholder="请选择">
		        <el-option label="基本信息" value="基本信息"></el-option>
		        <el-option label="联系方式" value="联系方式"></el-option>
		      </el-select>
		    </el-form-item>
		   
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="属性组管理" :visible.sync="dialogFormVisible3" width="500px">

			<div style="margin:0 0 10px 0;">
      	  <el-button type="primary" size="small">新增属性组</el-button>
      </div>

			<el-table :data="tableData4" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
				<el-table-column prop="name" align="center" label="名称" width="80">
					
				</el-table-column>
				<el-table-column prop="info" align="center" label="描述">
					
				</el-table-column>
				<el-table-column prop="" align="center" label="操作" width="120">
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



		<el-dialog title="编辑" :visible.sync="dialogFormVisible4" width="440px">

			<el-form :model="form6" ref="form6" class="add el-form el-form--label-right">
				<el-form-item label="属性名称" :label-width="formLabelWidth">
		      <el-input v-model="form6.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="字段名" :label-width="formLabelWidth">
		      <el-input v-model="form6.name2" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="字段类型" :label-width="formLabelWidth">
		      <el-select v-model="form6.region1">
			      	<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
						  </el-option>
					</el-select>
		    </el-form-item>

		     <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form6.desc"></el-input>
			  </el-form-item>

			  <el-form-item label="分组" :label-width="formLabelWidth">
		      <el-select v-model="form6.region2" placeholder="请选择">
		        <el-option label="金融" value="金融"></el-option>
		        <el-option label="网信" value="网信"></el-option>
		        <el-option label="医疗" value="医疗"></el-option>
		      </el-select>
		    </el-form-item>
			</el-form>


		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible4 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible4 = false">确 定</el-button>
		  </div>
		</el-dialog>


	</div>
</template>

<script>
import moment from 'moment/moment';
export default {
	name: 'basetable',
	data() {
		return {
			dialogFormVisible: false,
			dialogFormVisible2: false,
			dialogFormVisible3: false,

			dialogFormVisible4: false,

			dialogFormVisible5: false,
			formLabelWidth: '100px',
			form:{
				name1: '',
				name2: '',
				name3: '',
				desc:''
			},

			form5:{
				name: '北京居民身份证验证规则',
				desc: '110开头共18位，以数字或X结尾',
				rule: '110\\d{14}[0-9X]',
				example: '11010519881230512X'
			},

			form2:{
					name1: '',
					region1: '',
					name2: '',
					region2: '',
					desc:''
				},

				form6:{
					name1: '',
					region1: '',
					name2: '',
					region2: '',
					desc:''
				},


			tableData: [
				{
					numId: '1',
					proName: '手机号',
					nodeName: 'phone',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: false,
					ruleName: ' 手机号验证规则'
				},
				{
					numId: '2',
					proName: 'IMEI号码',
					nodeName: 'imei',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: false,
					ruleName: 'IMEI验证规则'
				},{
					numId: '3',
					proName: '访问域名',
					nodeName: 'domain',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: '域名验证规则'
				},{
					numId: '4',
					proName: '访问URL',
					nodeName: 'url',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: 'URL校验规则'
				},{
					numId: '5',
					proName: '访问时间',
					nodeName: 'access_time',
					proType: 'varchar',
					info: '',
					cate: '联系方式',
					rules: true,
					ruleName: '标准时间格式校验规则'
				}
			],
			tableData4:[
				{
					name: '基本信息',
					info: '例如姓名、性别等'
				},
				{
					name: '联系方式',
					info: '例如手机号、邮箱等'
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
			options: [
			  {
				value: 'int',
				label: 'int'
			  }, {
				value: 'float',
				label: 'float'
			  }, {
				value: 'double',
				label: 'double'
			  }, {
				value: 'varchar',
				label: 'varchar'
			  }, {
				value: 'long',
				label: 'long'
			  }, {
				value: 'blob',
				label: 'blob'
			  }, {
				value: 'clob',
				label: 'clob'
			  }
			],
			idx: -1,
			formInline: {
			  phone: '14752167983',
			  gender: '',
			  userType:'',
			  userTypeaa: ''
			},
			value13: '',
			total:0,//默认数据总数
			pagesize:5,//每页的数据条数
			currentPage:1,//默认开始页面
			pages: 0,
			listTotal: 0,
		}
	},
	mounted: function () {
	  
	},
	methods: {
		showSet(){
			this.dialogFormVisible = true
		},

		showSetInfo(){
			this.dialogFormVisible5 = true
		},

		addPro(){
			this.dialogFormVisible2 = true
		},

		manPro(){
			let _this = this;
			this.dialogFormVisible3 = true;

		},

		editPro(index, row){
			let _this = this;
			console.log(row.proType)
			this.dialogFormVisible4 = true;
			_this.form6.name1 = row.proName;
			_this.form6.name2 = row.nodeName;
			_this.form6.region1 = row.proType;
			_this.form6.desc = row.info;
			_this.form6.region2 = row.cate;
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
</style>
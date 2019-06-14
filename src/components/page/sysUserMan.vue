<template>
	<div class="table">
		<div class="container">
			<div class="bottom-wrap">
				<div class="handle-box">
					<div style="padding: 17px 10px 0;float: right">
			  <el-button type="primary" icon="el-icon-plus" @click="addUser">新建</el-button>
			  <el-button type="danger" icon="el-icon-delete">删除</el-button>
			</div>
					<div>
						<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
							<el-form-item>
								<el-select v-model="formInline.usertype" placeholder="用户类型">
								  <el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>
							</el-form-item>

							<el-form-item>
								<div class="handle-box">
									<el-date-picker
									  v-model="formInline.value13"
									  type="daterange"
									  start-placeholder="开始日期"
									  end-placeholder="结束日期"
									  :default-time="['00:00:00', '23:59:59']">
									</el-date-picker>
								</div>
							</el-form-item>

							<el-form-item label="关键字" prop="name">
							  <el-input v-model.trim="formInline.name" placeholder="登录名/联系方式/备注"></el-input>
							</el-form-item>
							<el-form-item><el-button type="primary" icon="el-icon-search" @click="search">查询</el-button></el-form-item>
						</el-form>
					</div>
				</div>
				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"> </el-table-column>
					<!-- <el-table-column prop="numId" align="center" sortable label="序号" width="80">
					</el-table-column> -->

					<el-table-column prop="username" align="center" sortable label="登录名称" width="180">
					</el-table-column>

					<el-table-column prop="nickname" align="center" label="昵称" sortable width="180">
					</el-table-column>

					

					<el-table-column prop="usertype" align="center" sortable label="类型">
					</el-table-column>

					<el-table-column prop="createTime" :formatter="dateFormat" align="center" sortable label="创建时间" width="180">
					</el-table-column>

					<el-table-column prop="phoneNum" align="center" label="联系方式" width="180">
					</el-table-column>

					<el-table-column prop="description" align="center" label="备注">
					</el-table-column>


					<el-table-column prop="control" align="center" label="操作">
						<template slot-scope="scope">
							<el-tooltip class="item" effect="dark" content="重置密码" placement="top">
						<el-button type="text" size="small" class="control" @click="resetPass
						">
							<i class="fa fa-refresh"></i>
						</el-button>
					  </el-tooltip>

							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
						<el-button type="text" size="small" class="control" @click="modifyUser(scope.$index, scope.row)">
							<i class="fa fa-edit"></i>
						</el-button>
					  </el-tooltip>
					  <el-tooltip class="item" effect="dark" content="删除" placement="top">
						<el-button type="text" size="small" class="control" @click="delItem(scope.$index, scope.row)">
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





		<el-dialog title="添加用户信息" :visible.sync="dialogFormVisible" width="440px">
		  <el-form :model="form" ref="form" class="add el-form el-form--label-right">
			<el-row>
				<el-col>
					 <el-form-item label="登录名称" :label-width="formLabelWidth">
						  <el-input v-model="form.username" auto-complete="off"></el-input>
						</el-form-item>
				</el-col>
			</el-row>
		   
			<el-form-item label="昵称" :label-width="formLabelWidth">
			  <el-input v-model="form.nickname" auto-complete="off"></el-input>
			</el-form-item>

			<!--  <el-form-item label="性别" :label-width="formLabelWidth">
			  <el-radio-group v-model="form.radio">
					<el-radio :label="3">男</el-radio>
					<el-radio :label="6">女</el-radio>
				  </el-radio-group>
			</el-form-item> -->


			<el-form-item label="登录密码" :label-width="formLabelWidth">
			  <el-input v-model="form.password" auto-complete="off" placeholder="请输入6-12位由数字或字母"></el-input>
			</el-form-item>
			<el-form-item label=" 确认密码" :label-width="formLabelWidth">
			  <el-input v-model="form.checkedPassword" auto-complete="off"  placeholder="请输入6-12位由数字或字母"></el-input>
			</el-form-item>
			<el-form-item label="用户类型" :label-width="formLabelWidth">
			  <el-select v-model="form.usertype" placeholder="选择用户类型">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					  </el-option>
			  </el-select>
			</el-form-item>
			<el-form-item label="联系方式" :label-width="formLabelWidth">
			  <el-input v-model="form.phoneNum" auto-complete="off"></el-input>
			</el-form-item>
			
			<el-form-item label="备注" :label-width="formLabelWidth">
				<el-input v-model="form.description" type="textarea"></el-input>
			  </el-form-item>
		  </el-form>

		  <div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="adduserdata" >确 定</el-button>
		  </div>
		</el-dialog>

		<el-dialog title="修改用户信息" :visible.sync="dialogFormVisible2" width="440px">
		  <el-form :model="form2" ref="form2" class="add el-form el-form--label-right">
			
		   
			<el-form-item label="昵称" :label-width="formLabelWidth">
			  <el-input v-model="form2.nickname" auto-complete="off"></el-input>
			</el-form-item>

			<!--  <el-form-item label="性别" :label-width="formLabelWidth">
			  <el-radio-group v-model="form2.radio">
					<el-radio :label="3">男</el-radio>
					<el-radio :label="6">女</el-radio>
				  </el-radio-group>
			</el-form-item> -->

			<el-form-item label="联系方式" :label-width="formLabelWidth">
			  <el-input v-model="form2.phoneNum" auto-complete="off"></el-input>
			</el-form-item>

			 <el-form-item label="备注" :label-width="formLabelWidth">
				<el-input type="textarea" v-model="form2.description"></el-input>
			  </el-form-item>
		   
		  </el-form>
		  <div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible2 = false">取 消</el-button>
			<el-button type="primary" @click="modify">确 定</el-button>
		  </div>
		</el-dialog>

	</div>
</template>

<script>
	import moment from 'moment/moment';
	import global_   from  './../common/Global'
	export default {
		name: 'basetable',
		data() {
			return {

				formLabelWidth: '100px',
				

				dialogFormVisible: false,

				form:{
					username: '',
					nickname: '',
					password: '',
					checkedPassword: '',
					usertype: '',
					phoneNum: '',
					description: '',
					createTime:''
					// name: '',
					
					// radio: '3',
					// desc: ''
				},


				dialogFormVisible2: false,

				form2:{
					username: '',
					nickname: '',
					description: '',
					phoneNum: ''
				},

				tableData: [],

				cur_page: 1,
				multipleSelection: [],
				is_search: false,
				searchResult: '',
				hasError: false,
				match: false,

				// form: {
				//   checkName: '',
				//   checkTime: '',
				//   checkMain: '',
				//   checkResults: ''
				// },

				idx: -1,
				formInline: {
				  value13: '',
				  name: '',
				  usertype: '',
				},
				value13: '',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,

				options: global_.userType //用户类型
			}
		},
		mounted: function () {
		  this.getData();
		},
		methods: {
			dateFormat:function(row, column) {  //格式化时间
			  var date = row[column.property];
			  if (date == undefined) {return "";}
			  return moment(date).format("YYYY-MM-DD HH:mm:ss");  
			},
			getData(){
				let _this = this;

				this.$api.get('datagovern/system/user', {
					start: 0,
					size: 10
				}, response => {
				 if (response.status >= 200 && response.status < 300) {
					console.log(response.data);
					this.tableData = [];
					this.tableData = response.data.content;
					// this.listTotal = response.data.total;
					// this.pages = response.data.pages;
					// console.log(this.pages);
				 } else {
					console.log(response.message);
				 }
				});

			},
			resetPass(){
				this.$message({
				  message: '重置密码成功',
				  type: 'success'
				});
			},
			addUser(){
				this.dialogFormVisible = true;
			},
			modifyUser(index, row){
				let _this = this;
				this.dialogFormVisible2 = true;
				console.log(row);
				_this.form2.username = row.username;
				_this.form2.nickname = row.nickname;
				_this.form2.phoneNum = row.phoneNum;
				_this.form2.description = row.description;
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

				

			},
			// 获取 easy-mock 的模拟数据
			// getData() {
			   
			// },
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},


			search(){
				console.log(this.formInline);
				// let _this = this;
				// this.$api.post('/datagovern/system/label/{type}/search', {
				// 	username: this.formInline.username,
				// 	nickname: this.form.nickname,
				// 	password: this.form.password,
				// 	usertype: this.form.usertype,
				// 	phoneNum: this.form.phoneNum,
				// 	description: this.form.description
				// }, response => {
				//  if (response.status >= 200 && response.status < 300) {
				// 	console.log(response.data);
				// 	this.$message({
	   //        message: '提交成功',
	   //        type: 'success'
	   //      });
	   //      this.dialogFormVisible=false;
	   //      this.getData();

				// 	// this.tableData = [];
				// 	// this.tableData = response.data.content;
					
				// 	// this.listTotal = response.data.total;
				// 	// this.pages = response.data.pages;
				// 	// console.log(this.pages);
				//  } else {
				// 	console.log(response.message);
				//  }
				// });
			},
			modify(){
				let _this = this;
				this.$api.put('/datagovern/system/user', {
					username: this.form2.username,
					nickname: this.form2.nickname,
					phoneNum: this.form2.phoneNum,
					description: this.form2.description
				}, response => {
				 if (response.status >= 200 && response.status < 300) {
					console.log(response.data);
					this.$message({
	          message: '修改成功',
	          type: 'success'
	        });
	        this.dialogFormVisible2=false;
	        this.getData();

					// this.tableData = [];
					// this.tableData = response.data.content;
					
					// this.listTotal = response.data.total;
					// this.pages = response.data.pages;
					// console.log(this.pages);
				 } else {
					console.log(response.message);
					console.log(this.form2)
				 }
				});
			},
			adduserdata(){
				var reg1 = /^[A-Za-z0-9]{1,12}$/;//数字、26个英文字母      6-12个字符
				let _this = this;
				if(this.form.username === ''){
					this.$message({
	          message: '登录名称不能为空',
	          type: 'warning'
	        });
				}
				else if(this.form.nickname === ''){
					this.$message({
	          message: '昵称不能为空',
	          type: 'warning'
	        });
				}else if(!this.form.password.match(reg1)){
					// var reg=/^[0-9]{6,12}$|^[a-zA-Z]{6,12}$/;//全是数字或全是字母     6-12个字符
							this.$message({
		          message: '密码请输入字母或数字组成的字符',
		          type: 'warning'
		        });
				}else if(this.form.password === '' || this.form.password.length > 12 || this.form.password.length < 6){
						this.$message({
	          message: '密码格式不正确',
	          type: 'warning'
	        });
				}else if(this.form.checkedPassword === '' || this.form.checkedPassword.length > 12 || this.form.checkedPassword.length < 6){
						this.$message({
	          message: '确认密码格式不正确',
	          type: 'warning'
	        });
				}else if(this.form.password !== this.form.checkedPassword){
						this.$message({
	          message: '密码和确认密码不相等',
	          type: 'warning'
	        });
				}
				

				this.$api.post('datagovern/system/user', {
					username: this.form.username,
					nickname: this.form.nickname,
					password: this.form.password,
					usertype: this.form.usertype,
					phoneNum: this.form.phoneNum,
					description: this.form.description
				}, response => {
				 if (response.status >= 200 && response.status < 300) {
					console.log(response.data);
					this.$message({
	          message: '提交成功',
	          type: 'success'
	        });
	        this.dialogFormVisible=false;
	        this.getData();

					// this.tableData = [];
					// this.tableData = response.data.content;
					
					// this.listTotal = response.data.total;
					// this.pages = response.data.pages;
					// console.log(this.pages);
				 } else {
					console.log(response.message);
				 }
				});
			},

			delItem(index, row){
				let names = row.username;

				this.$api.delete('/datagovern/system/user', {
					names
				}, response => {
				 if (response.status >= 200 && response.status < 300) {
					console.log(response.data);
					this.$message({
	          message: '删除成功',
	          type: 'success'
	        });
	        this.getData();
				 } else {
					console.log(response.message);
				 }
				});

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

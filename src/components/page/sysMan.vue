<template>
	<div class="table">
		<div class="container">
			<el-row :gutter="20" class="list">
			  <el-col :span="6"><div class="grid-content">
			  	<router-link to="/sysUserMan" class="a1">
			  		<i class="fa fa-user-o"></i>
			  		<p>用户管理</p>
			  	</router-link>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
			  	<router-link to="/sysTagsMan" class="a2">
			  		<i class="fa fa-tag"></i>
			  		<p>标签管理</p>
			  	</router-link>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
			  	<a href="" class="a3">
			  		<i class="fa fa-calendar-check-o"></i>
			  		<p>任务管理</p>
			  	</a>
			  </div></el-col>
			  <el-col :span="6"><div class="grid-content">
			  	<a href="" class="a4">
			  		<i class="fa fa-cog"></i>
			  		<p>配置管理</p>
			  	</a>
			  </div></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	import moment from 'moment/moment';
	export default {
		name: 'basetable',
		data() {
			let validPhone = function(rules, value, callback) {
		if (value === '') {
		  callback(new Error('请输入手机号'));
		} else {
			console.log('111');
		  if(value){
			value = value.trim();
		  }
		  console.log('222');
		  let TEL_REGEXP = /(?:^1[3456789]|^9[28])\d{9}$/;
		  if(!TEL_REGEXP.test(value)) {
			callback(new Error('手机号格式不正确'));
			console.log('333');
		  } else {
			callback();
		  }
		}
	  };
			return {
				tableData: [],
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

				rules: {
					phone: [{required: true, validator: validPhone, trigger: 'blur'}],
					name: [
			{ required: true, message: '请输入姓名', trigger: 'blur' },
			{ min: 2, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
		  ]
				}
			}
		},
		mounted: function () {
		  this.$api.get('lxf/tels/chkvdt/log?type=name', {
				pageNum: 1,
				pageSize: 10
		  }, response => {
		  if (response.status >= 200 && response.status < 300) {
				this.tableData = response.data.list;
				this.listTotal = response.data.total;
				this.pages = response.data.pages;
		   } else {
			  console.log(response.message);
		   }
		  });
		},
		methods: {
			dateFormat:function(row, column) {
			  var date = row[column.property];
			  if (date == undefined) {return "";}
			  return moment(date).format("YYYY-MM-DD HH:mm:ss");  
			},
			onSubmit(formName) {
			  let _this = this;
			  _this.match = false;
			  _this.hasError = false;
			  let _formInline = _this.formInline;
			  console.log(_formInline);

			  let telephone_no = _formInline.phone;
			  let target = _formInline.name;

			  _this.searchResult = '';

				this.$refs[formName].validate((valid) => {
			if (valid) {
			  // alert('submit!');
				  this.$api.get('lxf/tels/chkvdt?type=name', {
							telephone_no: telephone_no,
							target: target
						}, response => {
						 if (response.status >= 200 && response.status < 300) {
							console.log(response.data.match);
							let result = response.data.match;
							if(result){
							  _this.searchResult = '恭喜，您输入验证的信息相匹配！'
							  _this.match = true
							}else{
							  _this.searchResult = '很抱歉，您验证的信息不匹配！'
							  _this.hasError = true
							}
							_this.search();
						 } else {
							console.log(response.message);
						 }
					});
			}else {
				this.$message.error('手机号或姓名输入有误，请检查后重新输入');
			// console.log('error submit!!');
			return false;
		  }
		});
			},
			// 分页导航
			handleCurrentChange(val) {
				this.currentPage = val;
				// this.getData();
				console.log(val);


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
			search(formName) {
			  const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(255, 255, 255, 0.7)',
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
			  console.log(startTime,endTime);

			  let query_time_interval = {
					start: startTime,
					end: endTime
			  }

			  this.$api.get('lxf/tels/chkvdt/log?type=name', {
			  pageNum: 1,
			  pageSize: 10,
			  query_time_interval
			  }, response => {
			   if (response.status >= 200 && response.status < 300) {
				  this.tableData = response.data.list;
				  this.listTotal = response.data.total;
				  console.log(this.listTotal);
			   } else {
				  console.log(response.message);
			   }
			  });
			},
			handleClick(val){
				console.log(val);
				let _this = this;
				_this.value13 = '';
				_this.formInline.phone = val.telephone_no;
				_this.formInline.name = val.target;
				_this.onSubmit();
			}
		}
	}

</script>

<style scoped lang="scss">
	$colorBlue: #0086f0;
	$colorOrange: #f90;
	$colorGreen: #3fc6d1;
	$colorPurple: #8a4ce9;
	.container{
		.list{
			a{
				display: block;
				text-align: center;
				background-color: #fff;
				border-radius: 4px;
				padding:30px;
				.fa{
					font-size:30px;
					border-radius: 100%;
					width:80px;
					height: 80px;
					border-width: 1px;
					border-style: solid;
					text-align: center;
					line-height: 80px;
					margin-bottom: 10px;
				}
				p{
					font-size: 18px;
				}
				&.a1{
					.fa,p{
						color:$colorBlue;
						border-color: $colorBlue;
					}
				}
				&.a2{
					.fa,p{
						color:$colorOrange;
						border-color: $colorOrange;
					}
				}
				&.a3{
					.fa,p{
						color:$colorGreen;
						border-color: $colorGreen;
					}
				}
				&.a4{
					.fa,p{
						color:$colorPurple;
						border-color: $colorPurple;
					}
				}
			}
		}
	}
</style>

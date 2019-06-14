<template>
	<div class="login-wrap" v-loading="loading">
		<div class="ms-login">
			<div class="ms-title">
				<!-- 联信服 - 贷前数据核验系统 -->
			</div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
				<el-form-item prop="username">
					<el-input v-model="ruleForm.username" placeholder="请输入用户名">
						<el-button slot="prepend" icon="el-icon-lx-people"></el-button>
					</el-input>
				</el-form-item>
				<el-form-item prop="password" placeholder="请输入密码">
					<el-input type="password" placeholder="password" v-model="ruleForm.password">
						<el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
					</el-input>
				</el-form-item>

				<div class="login-btn">
					<el-button type="primary" @click="login">登录</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
import md5 from 'js-md5'
export default {
	data: function(){
	  return {
	  	loading: false,
		  ruleForm: 
			{
					username: 'client',
					password: '123456789'
			},
		  rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
		  },
	  }
  },
  methods: {
	  login(){
				let _this = this
				this.loading = true;
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("username");
				sessionStorage.removeItem("usertype");
				let username = _this.ruleForm.username, password = md5(_this.ruleForm.password);
				if(username === '' || password === ''){
					this.$message.error('请填写用户名及密码');
					return false;
				}else{
					this.$api.post('/datagovern/home/login', {username:username, password:password}, response => {
						if (response.status >= 200 && response.status < 300) {
							if(response.data.code === '0'){
								// console.log(response.data);


								let data = response.data;
								sessionStorage.setItem("token",data.token);
								sessionStorage.setItem("username",data.username);
								sessionStorage.setItem("usertype",data.userType);
							  // this.$router.push('/');

							   setTimeout(() => {
							   	this.$message({
										message: '登录成功',
										type: 'success',
										duration: 500
									});
							   	this.loading = false;
							    this.$router.push('/');
							   }, 2000);
							}else{
								this.$message.error('用户名或密码错误，请检查后重新登录');
							}
						} else {
							console.log(response.message);
							return false;
						}
					})
				} 
	  }
  }
}
</script>

<style scoped lang="scss">
.login-wrap{
  position: relative;
  width:100%;
  height:100%;
  background-image: url(../../assets/login-bg.jpg);
  background-size: 100%;
}
.ms-title{
  width:100%;
  height: 110px;
  text-align: center;
  color: #fff;
  /*border-bottom: 1px solid #ddd;*/
  background: url(../../assets/logoS.png) no-repeat center 20px;
}
.ms-login{
  position: absolute;
  left:50%;
  top:50%;
  width:520px;
  margin:-190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255,255,255, 0.3);
  overflow: hidden;
}
.ms-content{
  padding: 10px 30px 30px;
}
.login-btn{
  text-align: center;
}
.login-btn button{
  width:100%;
  height:36px;
  margin-bottom: 10px;
}
.login-tips{
  font-size:12px;
  line-height:30px;
  color:#fff;
}
.el-form-item--small.el-form-item{
	margin-bottom: 10px;
}
</style>
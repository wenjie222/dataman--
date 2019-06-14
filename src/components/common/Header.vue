<template>
	<div class="header">
		<!-- 折叠按钮 -->
		
		<div class="logo"></div>
		<div class="collapse-btn" @click="collapseChage">
			<span></span>
		</div>
		<div class="companyName">
			{{name}}
		</div>
		<div class="header-right">
			<div class="header-user-con">
				<!-- 全屏显示 -->
				<!-- <div class="btn-fullscreen" @click="handleFullScreen">
					<el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
						<i class="el-icon-rank"></i>
					</el-tooltip>
				</div> -->

				<el-popover
				  placement="bottom"
				  width="400"
				  trigger="click">
				  <div>
				  	<div class="title"><i class="fa fa-tasks"></i>  数据汇聚</div>
				  	<span>客户身份及行为数据汇聚</span><el-progress :percentage="70"></el-progress>
				  </div>
				  <div>
				  	<div class="title"><i class="fa fa-volume-up"></i> 数据清洗</div>
				  	<span>客户身份及行为数据清洗</span><el-progress :percentage="40"></el-progress>
				  </div>
				  <div>
				  	<div class="title"><i class="fa fa-file-text-o"></i> 数据质量稽核</div>
				  	<span>客户身份及行为数据质量稽核</span><el-progress :percentage="30"></el-progress>
				  </div>
				  <div>
				  	<div class="title"><i class="fa fa-send"></i>  数据发布</div>
				  	<span>客户身份及行为数据发布</span><el-progress :percentage="90"></el-progress>
				  </div>

				  <el-button slot="reference"><i class="fa fa-indent"></i></el-button>
				</el-popover>

				<!-- 消息中心 -->
				<!-- <div class="btn-bell">
					<el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
						<router-link to="/tabs">
							<i class="el-icon-bell"></i>
						</router-link>
					</el-tooltip>
					<span class="btn-bell-badge" v-if="message"></span>
				</div> -->
				<!-- 用户头像 -->
				<div class="user-avator"><img src="static/img/img.jpg"></div>
				<!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{username}} <i class="el-icon-caret-bottom"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<!-- <a href="http://blog.gdfengshuo.com/about/" target="_blank">
							<el-dropdown-item>关于作者</el-dropdown-item>
						</a>
						<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
							<el-dropdown-item>项目仓库</el-dropdown-item>
						</a> -->
						<el-dropdown-item divided  command="loginout">退出登录</el-dropdown-item>
						<!-- <el-dropdown-item divided >修改密码</el-dropdown-item>
						<el-dropdown-item divided >修改用户信息</el-dropdown-item> -->
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
	</div>
</template>
<script>
	import bus from '../common/bus';
	export default {
		data() {
			return {
				collapse: false,
				fullscreen: false,
				name: '',
			}
		},
		computed:{
			username(){
				let username = sessionStorage.getItem('username');
				return username ? username : this.name;
			}
		},
		methods:{
			// 用户名下拉菜单选择事件
			handleCommand(command) {
				if(command == 'loginout'){
					sessionStorage.removeItem("username");
					sessionStorage.removeItem("token");
					sessionStorage.removeItem("usertype");
					this.$router.push('/login');
				}
			},
			// 侧边栏折叠
			collapseChage(){
				// this.collapse = !this.collapse;
				// bus.$emit('collapse', this.collapse);
			},
			// 全屏事件
			// handleFullScreen(){
			// 	let element = document.documentElement;
			// 	if (this.fullscreen) {
			// 		if (document.exitFullscreen) {
			// 			document.exitFullscreen();
			// 		} else if (document.webkitCancelFullScreen) {
			// 			document.webkitCancelFullScreen();
			// 		} else if (document.mozCancelFullScreen) {
			// 			document.mozCancelFullScreen();
			// 		} else if (document.msExitFullscreen) {
			// 			document.msExitFullscreen();
			// 		}
			// 	} else {
			// 		if (element.requestFullscreen) {
			// 			element.requestFullscreen();
			// 		} else if (element.webkitRequestFullScreen) {
			// 			element.webkitRequestFullScreen();
			// 		} else if (element.mozRequestFullScreen) {
			// 			element.mozRequestFullScreen();
			// 		} else if (element.msRequestFullscreen) {
			// 			// IE11
			// 			element.msRequestFullscreen();
			// 		}
			// 	}
			// 	this.fullscreen = !this.fullscreen;
			// }
		},
		mounted(){
			if(document.body.clientWidth < 1500){
				this.collapseChage();
			}
		}
	}
</script>
<style scoped>
	.header {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		font-size: 22px;
		/*color: #fff;*/
	}
	.collapse-btn{
		float: left;
		padding: 0 21px;
		cursor: pointer;
		line-height: 70px;
		height: 70px;
		/*border-left:1px solid #15286e;*/
	}
	.companyName{
		float: left;
		line-height: 70px;
		/*color: #fff;*/
		font-size:18px;
	}
	.collapse-btn span{
		width:30px;
		position: relative;
		height: 20px;
		border-top:1px solid #000;
		border-bottom:1px solid #000;
		display: block;
		top:22px;
		cursor: pointer;
	}
	.collapse-btn span:before{
		position: absolute;
		width:100%;
		top:9px;
		height: 1px;
		background: #000;
		content:'';
		left:0;
	}
	.header .logo{
		float: left;
		width:170px;
		line-height: 70px;
		background: url(../../assets/logo_white.png) no-repeat center center #1c88ff;
		background-size: 80% auto;
		height: 70px;
		/*border-right:1px solid #1c88ff;*/
	}

	.header-right{
		float: right;
		padding-right: 50px;

	}
	.header-user-con{
		display: flex;
		height: 70px;
		align-items: center;
	}
	.btn-fullscreen{
		transform: rotate(45deg);
		margin-right: 5px;
		font-size: 24px;
		display: none;
	}
	.btn-bell, .btn-fullscreen{
		position: relative;
		width: 30px;
		height: 30px;
		text-align: center;
		border-radius: 15px;
		cursor: pointer;
	}
	.btn-bell-badge{
		position: absolute;
		right: 0;
		top: -2px;
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background: #f56c6c;
		color: #000;
	}
	.btn-bell .el-icon-bell{
		color: #fff;
	}
	.user-name{
		margin-left: 10px;
	}
	.user-avator{
		margin-left: 20px;
	}
	.user-avator img{
		display: block;
		width:40px;
		height:40px;
		border-radius: 50%;
	}
	.el-dropdown-link{
		color: #1c88ff;
		cursor: pointer;
	}
	.el-dropdown-menu__item{
		text-align: center;
	}
</style>

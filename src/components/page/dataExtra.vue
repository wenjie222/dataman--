<template>
	<div class="table">
		<div class="mstitle" style="border-bottom: 0 none">
			<div style="line-height: 32px">&nbsp;</div>
			<div>
				<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
					<el-form-item>
						<el-input
					    placeholder="通过文件名称和标签筛选"
					    v-model.trim="formInline.name">
					    <i slot="prefix" class="el-input__icon el-icon-search"></i>
					  </el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" icon="el-icon-search">搜索</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>


		<div class="list">
			<ul>
				<li>
						<div class="intitle">
						<router-link	to="/dataExtraView"><span>网络数据空间</span></router-link>
						<!-- <a href=""><i class="fa fa-cog"></i></a> -->
						<el-dropdown>
				      <span class="el-dropdown-link">
				        <i class="fa fa-cog"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <!-- <el-dropdown-item @click.native="addNew">编辑</el-dropdown-item> -->
				        <el-dropdown-item>删除</el-dropdown-item>
				        <el-dropdown-item @click.native="sourceCheck">上传</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
					</div>
					<div class="inmain">
						<p>网络数据萃取及管理，包含客户身份、短信及上网行为日志等数据</p>
					</div>
					<div class="infoot">
						<p><span>创建人:</span> <em>admin</em></p>
						<p><span>创建人:</span> <em>2019-03-07</em></p>
						<p>
							<span>文件数:</span>
							<em class="textBlue">376</em>
						</p>
						<p>
							<span>数据表:</span>
							<em class="textBlue">52</em>
						</p>
					</div>
					
				</li>
				

				<li>
					<div @click="addNew">
						<i class="fa fa-plus"></i>
					</div>
				</li>
			</ul>
		</div>






		<el-dialog id="test" title="新增数据空间" :visible.sync="dialogFormVisible1" width="440px">

			<el-form :model="form1" ref="form1" class="add el-form el-form--label-right">

		    <el-form-item label="空间名称" :label-width="formLabelWidth">
		      <el-input v-model="form1.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="form1.desc" type="textarea" :rows="6" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>

		   <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible1 = false"">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="新建上传" :visible.sync="dialogFormVisible2" width="840px">

			<el-form :model="form2" ref="form2" class="add el-form el-form--label-right">

		   <!--  <el-form-item label="数据空间" :label-width="formLabelWidth">
		      <el-select v-model="form2.region2" placeholder="请选择数据空间">
		        <el-option label="数据空间A" value="shanghai"></el-option>
		        <el-option label="数据空间B" value="beijing"></el-option>
		      </el-select>
		    </el-form-item> -->

		    <el-form-item label="数据集" :label-width="formLabelWidth">
		      <el-input v-model="form2.name2" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="数据描述" :label-width="formLabelWidth">
		      <el-input v-model="form2.name3" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="选择文件" :label-width="formLabelWidth">
		      <el-select v-model="form2.region3" placeholder="请选择">
		        <el-option label="本地文件" value="shanghai"></el-option>
		        <el-option label="在线数据" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>

		  </el-form>

	    <div>
	    	<el-upload
					  class="upload-demo"
					  multiple
					  ref="upload"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  :auto-upload="false">
					  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
					  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
					  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
					</el-upload>
	    </div>

		  <!-- <div style="border:1px solid #ccc;">
		  	<img src="../../assets/list.png" alt="" style="display: block;width: 100%;">
		  </div> -->

		   <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="statea">确 定</el-button>
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
				dialogFormVisible1: false,
				dialogFormVisible2: false,
				formLabelWidth: '110px',
				formInline:{
					name: '',
				},
				form1:{
					name1: '',
					desc: ''
				},
				form2: {
					name1: '',
					name2: '',
					name3: '',
					region3: ''
				},


				fileList: []
			}
		},
		mounted: function () {
		  
		},
		methods: {
			addNew(){
				this.dialogFormVisible1 = true
			},
			sourceCheck(){
				this.dialogFormVisible1 = false;
				this.dialogFormVisible2 = true;
			},

			statea(){
				localStorage.removeItem("addItem");
				localStorage.setItem("addItem", 1);
				const loading = this.$loading({
					lock: true,
					text: 'Loading',
					spinner: 'el-icon-loading',
					background: 'rgba(255, 255, 255, 1)',
					target: document.querySelector('#test')
				});
				setTimeout(() => {
				  loading.close();
				}, 500);

			 	this.$router.push('dataExtraView');
			},
	  	handleCurrentChange(val) {
				
			},
			// 获取 easy-mock 的模拟数据
			// getData() {
			   
			// },
			handleSelectionChange(val) {
				
			},



			submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
		}
	}

</script>

<style scoped lang="scss">
	.table{
		background-color: #fff;
		height: 100%;
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

	.list{
		ul{
			/*display: flex;
			justify-content: space-between;*/

			padding:10px;
			white-space: normal;
			width: 100%;
			box-sizing: border-box;
			flex-wrap:wrap;
			li{
				display: inline-block;
				vertical-align: top;
				overflow:hidden;
				width:28%;
				background-color: #fafafa;
				border:1px solid #e5e5e5;
				padding: 10px;
				box-sizing: border-box;
				border-radius: 4px;
				list-style: none;
				margin:0 2% 20px 2%;
				height: 180px;
				.intitle{
					display: flex;
					justify-content: space-between;
					.fa{
						color: #1b88fd;
						/*font-size: 20px;*/
					}
				}
				.inmain{
					padding:10px 0;
					p{
						font-size: 14px;
						color:#666;
						line-height: 26px;
					}
				}
				.infoot{
					p{
						display: inline-block;
						width:48%;
						line-height: 30px;
						font-size: 14px;
						em{
							font-style: normal;
						}
						.textBlue{
							color: #1b88fd;
							font-size: 20px;
						}
					}
				}

				&:last-child{
					background-color: #fff;
					cursor: pointer;
					div{
						width:100%;
						height: 100%;
						line-height: 170px;
						text-align:center;
						.fa{
							color: #ff9801;
							font-size: 50px;
						}
					}
				}
			}
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
		img{
			display: block;
			width: 100%;
		}
	}
</style>

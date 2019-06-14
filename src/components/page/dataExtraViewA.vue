<template>
	<div class="table">
		  
		  <div class="ttop">
		  	<ul>
		  		<li>
		  			<router-link to="/dataExtraView">数据空间</router-link>
		  		</li>
		  		<li class="active">
		  			<router-link to="/dataExtraView">文件浏览</router-link>
		  		</li>
		  		<li>
		  			<router-link to="/dataExtraView">数据表结构</router-link>
		  		</li>
		  	</ul>
		  </div>
	  	<div class="topWrapb">
	  		<div class="name">
	  			<i class="fa fa-cube"></i>
	  			客户数据
	  		</div>
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
							<!-- <p>共<span> 4 </span>项</p> -->
							<el-button type="primary" icon="el-icon-search">查询</el-button>
						</el-form-item>
					</el-form>
	  		</div>
	  	</div>
	  	<div class="itemcc">
	  		<div class="left">
	  			<el-collapse v-model="activeNames" @change="handleChange">
					  <el-collapse-item title="全部文件" name="1">
					    <div>
					    	<el-checkbox-group v-model="checkList">
							    <el-checkbox label="2015年数据"></el-checkbox>
							    <el-checkbox label="新增硬盘数据"></el-checkbox>
							  </el-checkbox-group>
					    </div>
					  </el-collapse-item>
					  <el-collapse-item title="全部分类" name="1">
					    <div class="itlist">
					    	<router-link to="/dataExtraViewD"><p><span>图片</span> <em>(3883)</em></p></router-link>
					    	<router-link to="/dataExtraViewA"><p class="active"><span>音频视频</span> <em>(871)</em></p></router-link>
					    	<router-link to="/dataExtraViewC"><p><span>文档</span> <em>(63782)</em></p></router-link>
					    	<router-link to="/dataExtraViewB"><p><span>其他</span> <em>(63782)</em></p></router-link>
					    </div>
					  </el-collapse-item>
					</el-collapse>
	  		</div>
	  		<div class="right">
	  			<el-table :data="tableDataV" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="60"  align="center"></el-table-column>

						<el-table-column prop="dataSet" align="center" label="数据集名称" width="160">
							<template slot-scope="scope">
								<span>
									<i v-if="scope.row.icoType === 'video-camera'"  class="fa fa-video-camera"></i>
									<i v-else class="fa fa-volume-down"></i>
									<em>{{scope.row.dataSet}}</em>
								</span>
							</template>
						</el-table-column>

						<el-table-column prop="volume" align="center" label="大小"></el-table-column>

						<el-table-column prop="time" align="center" label="创建时间" width="180"></el-table-column>

						<el-table-column align="center" label="标注信息" width="80">
							<template slot-scope="scope">
								<span v-if="scope.row.isFinish === 'true'" class="text_redd">已标注</span>
								<span v-else class="text_greenn">未标注</span>
							</template>
						</el-table-column>

						<el-table-column align="center" label="结构化">
							<template slot-scope="scope">
								<span v-if="scope.row.Structured === 'true'" class="text_redd">结构化</span>
								<span v-else class="text_greenn">非结构化</span>
							</template>
						</el-table-column>

						<el-table-column align="center" label="操作">
							<template slot-scope="scope">
								<a href=""><i class="fa fa-tag"></i></a>
								<a href=""><i class="fa fa-list-ul"></i></a>
							</template>
						</el-table-column>

						<el-table-column prop="taskName" align="center" label="下载">
							<template slot-scope="scope">
								<a href=""><i class="fa fa-download"></i></a>
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

	</div>
</template>

<script>
	import moment from 'moment/moment';
	export default {
		name: 'basetable',
		data() {
			return {
        inputVisible: false,
        inputValue: '',
				radio2: 3,
				checkList: ['选中且禁用','复选框 A'],
				activeName2: 'second',
				activeNames: ['1'],
				formInline:{
					name: '',
				},
				tableDataV: [
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'video-camera'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'volume-down'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'video-camera'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'video-camera'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'volume-down'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'video-camera'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'volume-down'
					},
					{
						isCheck: true,
						dataSet: 'test_video.mp4',
						volume: '1024MB',
						time: '2016-11-15 21:02:36',
						isFinish: true,
						Structured: true,
						icoType: 'video-camera'
					}
				],
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,


				options: [{
          value: '1',
          label: '数据集1'
        }, {
          value: '2',
          label: '数据集2'
        }, {
          value: '3',
          label: '数据集3'
        }, {
          value: '4',
          label: '数据集4'
        }, {
          value: '5',
          label: '数据集5'
        }],
        value: ''
			}
		},
		mounted: function () {
		  console.log(this.activeName2);
		},
		methods: {
			jumpA(){
				console.log('jumpA');
			},
	  	handleCurrentChange(val) {
				
			},
			// 获取 easy-mock 的模拟数据
			// getData() {
			   
			// },
			handleSelectionChange(val) {
				
			},
			 handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.activeName2);
        let that = this;

        if(that.activeName2 === 'first'){
        	console.log('ccc');
        	this.activeName2 = 'second';
        	this.$router.push("dataExtraView");
        }
      },
      handleChange(val) {
        console.log(val);
      },


      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }

		}
	}

</script>

<style scoped lang="scss">
	.table{
		/*background-color: #fff;*/
		/*height: 100%;*/
	}
	.topWrap{
		text-align: right;
		background-color: #fff;
		padding:10px 10px;
		.fa{
			margin-right:6px;
		}
	}





	.el-tabs--border-card{
		background-color: transparent;
		border:0 none;
	}

	.topWrapb{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding-left: 10px;
		padding-bottom: 10px;
		.name{
			height: 32px;
			line-height: 32px;
		}
	}

	.itemcc{
		display: flex;
		/*align-items: center;*/
		height: 100%;
		justify-content: space-between;
		.left{
			border:1px solid #ebebeb;
			width:260px;
			padding:5px 10px;
			background-color: #fff;
			.el-checkbox-group{
		  	.el-checkbox{
		  		display: block;
		  		padding-left: 15px;
		  		padding-bottom: 10px;
		  	}
		  	.el-checkbox+.el-checkbox{
		  		margin-left: 0
		  	}
		  }
		  .itlist{
		  	.active{
					color: #409eff;
				}
		  	p{
		  		line-height: 30px;
		  		padding-left: 15px;
		  		em{
		  			color: #409eff;
		  			font-style: normal;
		  		}
		  	}
		  }
		}
		.right{
			flex:1;
			margin:0 0 0 10px;
			padding:10px;
			background-color: #fff;
		}
	}


	.sgmain{
		display: flex;
		height: 100%;
		justify-content: space-between;
		.left{
			flex:1;
			background-color: #fff;
			padding:0 10px;
		}
		.right{
			width:400px;
			border:1px solid #ccc;
			margin-left: 10px;
			background-color: #413f4c;
			.cftitle{
				background-color: #373542;
				height: 32px;
				padding:10px;
				color: #fff;
				line-height: 32px;
				.fa{
					padding:0 4px;
				}
				.fa-braille{
					color: #06bcec;
				}
			}
			.cbmain{
				background-color: #413f4c;
				ul{
					padding: 10px;
					li{
						color: #fff;
						font-size: 14px;
						line-height: 32px;
						.txt_left{
							display: inline-block;
							vertical-align: top;
							color: #fff;
							width:80px;
							text-align: right;
							padding:0 4px 0 0;
						}
						em{
							font-size: 14px;
							color: #fff;
							font-style: normal;
						}
						.el-tag{
							margin-right: 3px;
							color: #fff;
							cursor: pointer;
							/*background-color: #fb55b9;*/
							.el-icon-close{
								color: #fff;
							}
							.el-icon-close:hover{
								color: #fff;
								background-color: transparent;
							}
						}
					}
				}
				.el-radio{
					color: #fff;
				}
				.add{
					width: 18px;
					height: 18px;
					display: inline-block;
					border:1px solid #fff;
					border-radius: 100%;
					color: #fff;
					text-align:center;
					line-height: 14px;
					font-size: 18px;
					margin-left:4px;
				}
			}
		}
	}

	.ttop{
		background-color: #fff;
		padding:10px 10px 0 10px;
		display: none;
		ul{
			li{
				display: inline-block;
				a{
					display: inline-block;
					vertical-align: middle;
					height: 30px;
					line-height: 30px;
					padding:0 8px;
					color: #666;
				}
			}
			.active{
				background-color: #1a89fd;
				a{
					color:#fff;
				}
			}
		}
	}

	.fa-list-ul{
  	color: #268eff;
  	/*font-size: 20px;*/
  	margin-left: 10px;
  }
	.fa-tag{
		color: #ffb441;
		font-size: 20px;
	}
	.fa-download{
		color: #f61d6e;
		font-size: 20px;
	}
</style>

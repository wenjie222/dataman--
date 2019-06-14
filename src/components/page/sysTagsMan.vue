<template>
	<div class="table">
		<div class="container">
			<template>
			  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick"  class="sytm">
			    <el-tab-pane label="文件标签" name="first" class="aa">
			    	<div class="content">
			    		<div class="sideLeft">
			    			<div class="search">
			    				<el-form :inline="true" :model="formInline" class="demo-form-inline">
									  <el-form-item>
									    <el-input v-model="formInline.key" placeholder="请输入关键词"></el-input>
									  </el-form-item>
									  <el-form-item>
									  	<el-button type="primary">查询</el-button>
									  </el-form-item>
									</el-form>
			    			</div>


			    			<div>
			    				<vue-tree-edit :treeData="treeData" @delSelect="remove" @append="append" @editData="edit"></vue-tree-edit> 
			    			</div>
			    		</div>
			    		<div class="mainRight">
			    			<div class="topWrap clearfix">
			    				<div class="float:right">
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
												<el-button type="danger" icon="el-icon-delete">删除</el-button>
											</el-form-item>

			    						<el-form-item>
										    <el-radio-group v-model="formInlineR.resource">
										      <el-radio label="全选"></el-radio>
										      <el-radio label="反选"></el-radio>
										    </el-radio-group>
											</el-form-item>

											<el-form-item prop="userType">
												<el-select v-model="formInlineR.userType" placeholder="排序方式">
												  <el-option
													v-for="item in options"
													:key="item.value"
													:label="item.label"
													:value="item.value">
													<span style="float: left; color: #8492a6; font-size: 13px">{{item.label}}</span>
													<span style="float: right; color: #8492a6; font-size: 13px"><i class="fa fa-arrow-up"></i></span>
													<span style="float: right;margin-right:5px; color: #8492a6; font-size: 13px"><i class="fa fa-arrow-down"></i></span>
												  </el-option>
												</el-select>
									 		</el-form-item>
									 	</el-form>
			    				</div>
			    			</div>

			    			<div class="qiuckSearch">
			    				<span>A</span>
			    				<span>B</span>
			    				<span>C</span>
			    				<span>D</span>
			    				<span>E</span>
			    				<span>F</span>
			    				<span>G</span>
			    				<span>H</span>
			    				<span>I</span>
			    				<span>J</span>
			    				<span>K</span>
			    				<span>L</span>
			    				<span>M</span>
			    				<span>N</span>
			    				<span>O</span>
			    				<span>P</span>
			    				<span>Q</span>
			    				<span>R</span>
			    				<span>S</span>
			    				<span>T</span>
			    				<span>U</span>
			    				<span>V</span>
			    				<span>W</span>
			    				<span>X</span>
			    				<span>Y</span>
			    				<span>Z</span>
			    			</div>


			    			<div class="tagsList">
			    				<el-tag
									  :key="tag"
									  v-for="tag in dynamicTags"
									  size="medium"
									  closable
									  :disable-transitions="false"
									  @click="handleClick(tag)"
									  @close="handleClose(tag)">
									  {{tag}}
									</el-tag>
									<el-input
									  class="input-new-tag"
									  v-if="inputVisible"
									  v-model="inputValue"
									  ref="saveTagInput"
									  size="small"
									  @keyup.enter.native="handleInputConfirm"
									  @blur="handleInputConfirm"
									>
									</el-input>
									<el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>

			    			</div>

			    		</div>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="列标签" name="second" class="aa">
			    	<div class="content">
			    		<div class="sideLeft">
			    			<div class="search">
			    				<el-form :inline="true" :model="formInline" class="demo-form-inline">
									  <el-form-item>
									    <el-input v-model="formInline.key" placeholder="请输入关键词"></el-input>
									  </el-form-item>
									  <el-form-item>
									  	<el-button type="primary">查询</el-button>
									  </el-form-item>
									</el-form>
			    			</div>


			    			<div>
			    				<vue-tree-edit :treeData="treeData2" @delSelect="remove" @append="append" @editData="edit"></vue-tree-edit> 
			    			</div>
			    		</div>
			    		<div class="mainRight">
			    			<div class="topWrap clearfix">
			    				<div class="float:right">
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
												<el-button type="danger" icon="el-icon-delete">删除</el-button>
											</el-form-item>

			    						<el-form-item>
										    <el-radio-group v-model="formInlineR.resource">
										      <el-radio label="全选"></el-radio>
										      <el-radio label="反选"></el-radio>
										    </el-radio-group>
											</el-form-item>

											<el-form-item prop="userType">
												<el-select v-model="formInlineR.userType" placeholder="排序方式">
												  <el-option
													v-for="item in options"
													:key="item.value"
													:label="item.label"
													:value="item.value">
													<span style="float: left; color: #8492a6; font-size: 13px">{{item.label}}</span>
													<span style="float: right; color: #8492a6; font-size: 13px"><i class="fa fa-arrow-up"></i></span>
													<span style="float: right;margin-right:5px; color: #8492a6; font-size: 13px"><i class="fa fa-arrow-down"></i></span>
												  </el-option>
												</el-select>

												
									 		</el-form-item>
									 	</el-form>
			    				</div>
			    			</div>

			    			<div class="qiuckSearch">
			    				<span>A</span>
			    				<span>B</span>
			    				<span>C</span>
			    				<span>D</span>
			    				<span>E</span>
			    				<span>F</span>
			    				<span>G</span>
			    				<span>H</span>
			    				<span>I</span>
			    				<span>J</span>
			    				<span>K</span>
			    				<span>L</span>
			    				<span>M</span>
			    				<span>N</span>
			    				<span>O</span>
			    				<span>P</span>
			    				<span>Q</span>
			    				<span>R</span>
			    				<span>S</span>
			    				<span>T</span>
			    				<span>U</span>
			    				<span>V</span>
			    				<span>W</span>
			    				<span>X</span>
			    				<span>Y</span>
			    				<span>Z</span>
			    			</div>


			    			<div class="tagsList">
			    				<el-tag
									  :key="tag"
									  v-for="tag in dynamicTags2"
									  size="medium"
									  closable
									  :disable-transitions="false"
									  @click="handleClick(tag)"
									  @close="handleClose(tag)">
									  {{tag}}
									</el-tag>
									<el-input
									  class="input-new-tag"
									  v-if="inputVisible"
									  v-model="inputValue"
									  ref="saveTagInput"
									  size="small"
									  @keyup.enter.native="handleInputConfirm"
									  @blur="handleInputConfirm"
									>
									</el-input>
									<el-button v-else class="button-new-tag" size="small" @click="showInput">+</el-button>

			    			</div>

			    		</div>
			    	</div>
			    </el-tab-pane>
			  </el-tabs>
			</template>
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
				formInline:{
					key: '',
				},
				formInlineR:{
					resource: '',
				},

				options:[
					{
					value: 0,
					label: '创建时间'
				  }, {
					value: 1,
					label: '首字母'
				  },{
					value: 2,
					label: '字数'
				  }
				],

				dynamicTags: ['网络下载', '客户提交', '系统导出'],
				dynamicTags2: ['身份证号', '手机号'],
	      inputVisible: false,
	      inputValue: '',

				treeData:[
	       {
	        "id": 1,
	        "name": "全部",
	        "level": 1,
	        "child": [
	          {
	            "id": 2,
	            "name": "文件来源",
	            "level": 2,
	            "child": [
	              {
	                "id": 3,
	                "name": "网络下载",
	                "level": 3,
	                "child": []
	              },
	              {
	                "id": 31,
	                "name": "客户提交",
	                "level": 3,
	                "child": []
	              },
	              {
	                "id": 32,
	                "name": "系统导出",
	                "level": 3,
	                "child": []
	              },
	            ]
	          },
	          {
	            "id": 4,
	            "name": "文件大小",
	            "level": 2,
	            "child": [
	            	{
	                "id": 41,
	                "name": "小文件",
	                "level": 4,
	                "child": []
	              },
	              {
	                "id": 42,
	                "name": "中小文件",
	                "level": 4,
	                "child": []
	              },
	              {
	                "id": 43,
	                "name": "大文件",
	                "level": 4,
	                "child": []
	              },
	              {
	                "id": 44,
	                "name": "超大文件",
	                "level": 4,
	                "child": []
	              }
	            ]
	          },
	          {
	            "id": 5,
	            "name": "系统来源",
	            "level": 2,
	            "child": [
	            	{
	                "id": 51,
	                "name": "FRMC",
	                "level": 3,
	                "child": []
	              },
	              {
	                "id": 52,
	                "name": "CRM",
	                "level": 3,
	                "child": []
	              },
	            ]
	          }
	        ]
	      }],

	      treeData2:[
	       {
	        "id": 1,
	        "name": "全部",
	        "level": 1,
	        "child": [
	          {
	            "id": 2,
	            "name": "号码",
	            "level": 2,
	            "child": [
	              {
	                "id": 11,
	                "name": "物理身份",
	                "level": 3,
	                "child": [
	                  {
	                	"id": 12,
	                  "name": "身份证号",
	                  "level": 4,
	                  "child": []
	                 },
	                  {
	                	"id": 13,
	                  "name": "手机号码",
	                  "level": 4,
	                  "child": []
	                 },
	                ]
	              },
	              {
	                "id": 2,
	                "name": "虚拟身份",
	                "level": 2,
	                "child": [
	                	{
	                	"id": 21,
	                  "name": "QQ号",
	                  "level": 3,
	                  "child": []
	                 },{
	                	"id": 22,
	                  "name": "UIN",
	                  "level": 3,
	                  "child": []
	                 },{
	                	"id": 23,
	                  "name": "UID",
	                  "level": 3,
	                  "child": []
	                 },
	                ]
	              },
	              {
	                "id": 3,
	                "name": "时间日期",
	                "level": 2,
	                "child": [
	                	{
	                	"id": 31,
	                  "name": "出生日期",
	                  "level": 3,
	                  "child": []
	                 },
	                 {
	                	"id": 32,
	                  "name": "注册时间",
	                  "level": 3,
	                  "child": []
	                 }
	                ]
	              },
	            ]
	          },
	          
	        ]
	      }]
			}
		},
		mounted: function () {
		  
		},
		methods: {
			handleClick(tab, event) {
        console.log(tab, event);
      },
      remove(obj,node){
	      this.treeData = obj;
	    },
	    append(obj,data,node,e){
	      this.treeData = obj;
	    },
	    edit(obj,data,node,e){
	      this.treeData = obj;
	    },


	    //tag edit
	    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleClick(tag){
      	console.log('test');
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
		height: 100%;
		background-color: #fff;
	}
	.el-tabs {
		display:flex;
    flex-flow: column nowrap;
    height: 100%;
		.el-tabs__content{
			height: calc(100% - 60px);
			position: absolute;
			flex-grow: 1;
		}
		.aa{
			height: 100%
		}
	}

	.container{
		height: 100%;
		background-color: #fff;
		.el-tabs__nav-wrap{
			background-color: #eef1f3;
		}
	}
	.content{
		display: flex;
		height: 100%;
		.sideLeft{
			width:266px;
			border:1px solid #ccc;
			height: 100%;
			margin-right:20px;
			.search{
				padding:10px;
				min-width: 266px;
				.el-form--inline .el-form-item{
					margin-right: 0;
				}
			}
		}
		.mainRight{
			flex:1;
			border:1px solid #ccc;
			.topWrap{
				padding:10px;
				/*float: right;*/
				.el-form{
					text-align: right;
				}
			}
			.qiuckSearch{
				background-color: #fafafa;
				height: 56px;
				line-height: 56px;
				padding-left: 20px;
				span{
					padding:0 6px;
					cursor: pointer;
					display: inline-block;
					vertical-align: top;
				}
			}

			.tagsList{
				padding:20px;
			}
			.el-tag--medium{height: 32px;line-height: 32px;}
			  .el-tag + .el-tag {
					margin-left: 10px;
				}
				.button-new-tag {
					margin-left: 10px;
					height: 32px;
					line-height: 12px;
					width: 90px;
					color: #ff2367;
					font-size: 28px;
					vertical-align: middle;
				}
				.input-new-tag {
					width: 90px;
					margin-left: 10px;
					vertical-align: bottom;
				}
		}
	}
</style>

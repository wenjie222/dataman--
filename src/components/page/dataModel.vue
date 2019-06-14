<template>
	<div class="table dataModel">
		<div class="container">
			 <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
		    <el-tab-pane label="属性管理" name="first">
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
				</el-tab-pane>
				<el-tab-pane label="规则管理" name="second">
					<div class="bottom-wrap">
						<div class="handle">
							<div style="display: flex;justify-content: space-between;padding-bottom: 10px">
								<div>
									<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" style='padding-top: 0'>
										<el-form-item>
								      <el-select v-model="form.region" placeholder="类型">
								        <el-option
													v-for="item in optionsSel"
													:key="item.value"
													:label="item.label"
													:value="item.value">
												  </el-option>
								      </el-select>
								    </el-form-item>
								    <el-form-item prop="name">
										  <el-input v-model.trim="formInline.name" placeholder="名称/备注"></el-input>
										</el-form-item>

										<el-form-item>
											<el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
										</el-form-item>
								  </el-form>

								</div>
								<div  style="text-align: right;">
									<el-button type="danger" icon="el-icon-del">批量删除</el-button>
									<el-button type="warning" icon="el-icon-check">启用</el-button>
									<el-button type="danger" icon="el-icon-download">禁用</el-button>
								</div>
							</div>
							<div class="xbox">
								<div class="side" >
									<el-tree 
			    					:data="dataTree" 
			    					accordion 
			    					:props="defaultProps"
			    					node-key="id"
			    					:default-expanded-keys="[1]"
			    					@node-click="handleNodeClick">
			    						<span class="ft12" slot-scope="{ node, data }">
		        						<div><span>{{ node.label }}</span>
		        						<span v-if="data.num !== '0' " style="color: #1d87fd">（{{ data.num }}）</span>
		        						<span v-else></span></div>
		        						<span class="addRel" @click="() => addRel(node, data)">添加规则</span>
		        					</span>
			    					</el-tree>
								</div>
								<div class="main">
									
								</div>
							</div>

						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
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




		<el-dialog title="规则" :visible.sync="dialogFormVisible6" width="460px">
			<div class="title">规则信息</div>
		  <el-form :model="form6a" ref="form6a" class="add el-form el-form--label-right">
		  	<!-- <el-form-item label="属性名称" :label-width="formLabelWidth">
		      <el-input v-model="form2.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="字段名" :label-width="formLabelWidth">
		      <el-input v-model="form2.name2" auto-complete="off"></el-input>
		    </el-form-item> -->

		    <el-form-item label="规则类型" :label-width="formLabelWidth">
		      <el-select v-model="form6a.type" @change="form6aSel">
		      	<el-option
							v-for="item in optionsSelB"
							:key="item.value"
							:label="item.label"
							:value="item.value">
					  </el-option>
					</el-select>
		    </el-form-item>

		    <el-form-item label="代号" :label-width="formLabelWidth">
		      <el-input v-model="form6.ruleName" auto-complete="off"></el-input>
		    </el-form-item>
		    <p style="color: red;font-size: 12px;padding-left: 100px;">*空值检查建议以NULL开头</p>

		    <!-- <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form2.desc"></el-input>
			  </el-form-item> -->

			  <!-- <el-form-item label="分组" :label-width="formLabelWidth">
		      <el-select v-model="form2.region2" placeholder="请选择">
		        <el-option label="基本信息" value="基本信息"></el-option>
		        <el-option label="联系方式" value="联系方式"></el-option>
		      </el-select>
		    </el-form-item> -->
		   
		  </el-form>
		  <div class="title" style="border-top: 1px dashed #ccc;padding:10px 0;margin-top: 10px;">规则配置</div>
        <!-- 空值检查 -->
		  	<div v-if="form6a.type ==='0' "  class="bb">
		  		<el-form :model="form6b" ref="form6b" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6b.type" multiple>
				      	<el-option
									v-for="item in optionsSel"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							  </el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="联合不为空" :label-width="formLabelWidth">
						  <el-checkbox v-model="form6b.checkedall"></el-checkbox>
						  <span style="font-size: 12px">勾选表示所有字段不能同时为空。不勾选表示每个字段都不能为空</span>
						</el-form-item>
						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6b.regular"></el-input>
					  </el-form-item>
					  <el-form-item label="规则描述" prop="desc" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6b.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>
        
        <!-- 值域检查 -->
		  	<div v-else-if="form6a.type ==='1' "  class="">
		  		<el-form :model="form6c" ref="form6c" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6c.type">
				      	<el-option
									v-for="item in options6c"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							  </el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="值域范围" :label-width="formLabelWidth">
				      <el-input v-model="form6c.interval" auto-complete="off" placeholder="例如:[8, 20]"></el-input>
				    </el-form-item>
						
						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6c.regular"></el-input>
					  </el-form-item>
					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6c.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>

		  	<!-- 规范检查 -->
		  	<div v-else-if="form6a.type ==='2' "  class="">
		  		<el-form :model="form6d" ref="form6d" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6d.type">
				      	<el-option
									v-for="item in options6d"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							  </el-option>
							</el-select>
						</el-form-item>

				    <el-form-item label="正则匹配" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6d.regular"></el-input>
					  </el-form-item>
						
						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6d.filter"></el-input>
					  </el-form-item>
					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6d.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>

		  	<!-- 逻辑检查 -->
		  	<div v-else-if="form6a.type ==='3' "  class="">
		  		<el-form :model="form6e" ref="form6e" class="add el-form el-form--label-right">
				    <el-form-item label="检查公式" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6e.regular"></el-input>
					  </el-form-item>
						
						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6e.filter"></el-input>
					  </el-form-item>

					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6e.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>

		  	<!-- 重复数据检查 -->
		  	<div v-else-if="form6a.type ==='4' "  class="bb">
		  		<el-form :model="form6f" ref="form6f" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6f.type" multiple>
				      	<el-option
									v-for="item in optionsSel"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							  </el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6f.regular"></el-input>
					  </el-form-item>
					  <el-form-item label="规则描述" prop="desc" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6f.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>


		  	<!-- 及时性检查 -->
		  	<div v-else-if="form6a.type ==='5' "  class="bb">
		  		<el-form :model="form6g" ref="form6g" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6g.type">
				      	<el-option
									v-for="item in optionsSele"
									:key="item.value"
									:label="item.label"
									:value="item.value">
							  </el-option>
							</el-select>
						</el-form-item>
						
						<el-form-item label="延迟容忍" :label-width="formLabelWidth">
							<el-input placeholder="请输入内容" v-model="form6g.time" class="input-with-select input-with-selectg" type="number">
						    <el-select v-model="form6g.type2" slot="append" placeholder="请选择">
						      <el-option label="月" value="0"></el-option>
						      <el-option label="日" value="1"></el-option>
						      <el-option label="时" value="2"></el-option>
						      <el-option label="分" value="3"></el-option>
						      <el-option label="秒" value="4"></el-option>
						    </el-select>
						  </el-input>
				      <!-- <el-input v-model="form6c.interval" auto-complete="off" placeholder="例如:[8, 20]"></el-input> -->
				    </el-form-item>


						<el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6g.regular"></el-input>
					  </el-form-item>
					  <el-form-item label="规则描述" prop="desc" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6g.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>


		  	<!-- 记录缺失检查 -->
		  	<div v-else-if="form6a.type ==='6' "  class="bb">
		  		<el-form :model="form6h" ref="form6h" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6h.type" placeholder="请选择">
					      <el-option label="表行数" value="0"></el-option>
					    </el-select>
						</el-form-item>
						
						<el-form-item label="延迟容忍" :label-width="formLabelWidth">
					    <el-select v-model="form6h.type2" placeholder="请选择">
					      <el-option label="=" value="0"></el-option>
					      <el-option label=">" value="1"></el-option>
					      <el-option label=">=" value="2"></el-option>
					    </el-select>
				    </el-form-item>


				    <el-form-item label="期望值" :label-width="formLabelWidth">
				      <el-input v-model="form6h.interval" auto-complete="off" placeholder="例如:[8, 20]"></el-input>
				    </el-form-item>

					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6h.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>



		  	<!-- 引用完整性检查 -->
		  	<div v-else-if="form6a.type ==='7' "  class="bb">
		  		<el-form :model="form6i" ref="form6h" class="add el-form el-form--label-right">
		  			<el-form-item label="检查字段" :label-width="formLabelWidth">
			  			<el-select v-model="form6i.type" placeholder="请选择">
					      <el-option label="表行数" value="0"></el-option>
					    </el-select>
						</el-form-item>
						
						<el-form-item label="数据源" :label-width="formLabelWidth">
					    <el-select v-model="form6i.type2" placeholder="请选择">
					      <el-option label="=" value="0"></el-option>
					      <el-option label=">" value="1"></el-option>
					      <el-option label=">=" value="2"></el-option>
					    </el-select>
				    </el-form-item>

				    <el-form-item label="对照表" :label-width="formLabelWidth">
					    <el-select v-model="form6i.type3" placeholder="请选择">
					      <el-option label="=" value="0"></el-option>
					      <el-option label=">" value="1"></el-option>
					      <el-option label=">=" value="2"></el-option>
					    </el-select>
				    </el-form-item>

				    <el-form-item label="比照字段" :label-width="formLabelWidth">
					    <el-select v-model="form6i.type4" placeholder="请选择">
					      <el-option label="=" value="0"></el-option>
					      <el-option label=">" value="1"></el-option>
					      <el-option label=">=" value="2"></el-option>
					    </el-select>
				    </el-form-item>

				    <el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6i.filter"></el-input>
					  </el-form-item>
				    

					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6i.desc"></el-input>
					  </el-form-item>
		  		</el-form>
		  	</div>



		  	<!-- sql检查 -->
		  	<div v-else="form6a.type ==='8' "  class="bb">
		  		<el-form :model="form6j" ref="form6j" class="add el-form el-form--label-right">
		  			
		  			<el-form-item label="sql脚本" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6j.sql"></el-input>
					  </el-form-item>

				    <el-form-item label="过滤条件" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6j.filter"></el-input>
					  </el-form-item>
				    

					  <el-form-item label="规则描述" :label-width="formLabelWidth">
					    <el-input type="textarea" v-model="form6j.desc"></el-input>
					  </el-form-item>

		  		</el-form>
		  	</div>
		  <div>

		  <div class="title" style="border-top: 1px dashed #ccc;padding:10px 0;margin-top: 10px;">规则使用</div>
		  <div>
		  	<el-form :model="form6k" ref="form6k" class="el-form el-form--label-right">

		  		<div class="halfwidth">
		  			<el-form-item label="启用状态" :label-width="formLabelWidth">
						  <el-checkbox v-model="form6k.check">启用</el-checkbox>
						</el-form-item>
		  		</div>
		  		<div class="halfwidth">
						<el-form-item label="问题级别" :label-width="formLabelWidth">
						  <el-rate
							  v-model="form6k.score"
							  :max=3
							  disabled
							  show-text
							  :texts="['一般', '重要', '严重']"
							  text-color="#ff9900"
							  score-template="{value}">
							</el-rate>
						</el-form-item>
					</div>
					<div class="halfwidth">
						<el-form-item label="权重配置" :label-width="formLabelWidth">
				      <el-input v-model="form6k.scale" auto-complete="off"></el-input>
				    </el-form-item>
				  </div>
				  <div class="halfwidth">
				    <el-form-item label="权重配置" :label-width="formLabelWidth">
				      <span>{{form6k.gloscale}}</span>
				    </el-form-item>
				  </div>
		  	</el-form>
		  </div>
		  	
		  </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible6 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible6 = false">确 定</el-button>
		  </div>
		</el-dialog>


	</div>
</template>

<script>
// import moment from 'moment/moment';
import global_   from  './../common/Global'
export default {
	name: 'basetable',
	data() {
		return {
			dialogFormVisible: false,
			dialogFormVisible2: false,
			dialogFormVisible3: false,

			dialogFormVisible4: false,

			dialogFormVisible5: false,

			dialogFormVisible6: true,
			formLabelWidth: '100px',

			activeName: 'second',
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


			form6a:{
				type: '8',
				ruleName: '',
			},

			form6b: {   //空值检测
				type: [],   //检查字段数组
				checkedall: false,  //是否不为空
				regular: '',  //正则表达式
				desc: ''  //描述
			},

			form6c: {  // 值域检测
				type: [],   //检查字段数组
				regular: '',  //正则表达式
				interval: '',  //值域范围
				desc: ''  //描述
			},

			form6d: {  // 规范检测
				type: '',   //检查字段数组
				filter: '',  //过滤条件
				regular: '',  //正则表达式
				desc: ''  //描述
			},

			form6e: {   //逻辑检测
				filter: '',  //过滤条件
				regular: '',  //正则表达式
				desc: ''  //描述
			},

			form6f:{  //重复数据检查
				type: [],   //检查字段数组
				regular: '',  //正则表达式
				desc: ''  //描述
			},


			form6g:{  //及时性数据检查
				type: '',   //检查字段数组
				type2: '',   //检查字段数组
				regular: '',  //正则表达式
				desc: '',  //描述
				time: ''
			},

			form6h:{  //及时性数据检查
				type: '0',   //检查字段数组
				type2: '0',   //检查字段数组
				interval: '',  //期望值
				desc: '',  //描述
			},

			form6i:{  //及时性数据检查
				type: '0',   //检查字段数组
				type2: '0',   //检查字段数组
				type3: '0',   //检查字段数组
				type4: '0',   //检查字段数组
				interval: '',  //期望值
				desc: '',  //描述
			},

			form6j: {  //sql检查
				filter: '',  //过滤条件
				sql: '',  //正则表达式
				desc: ''  //描述
			},


			form6k: {
				check: false, // 启用状态
				score: 2,  //评分
				scale: '', //权重占比
				gloscale: '' // 全局占比
			},


			tableData: [
				{
					numId: '1',
					proName: '身份证号',
					nodeName: 'idno',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: false,
					ruleName: '北京市身份证号验证规则'
				},
				{
					numId: '2',
					proName: '姓名',
					nodeName: 'name',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: ''
				},
				{
					numId: '3',
					proName: '性别',
					nodeName: 'gender',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: ''
				},
				{
					numId: '4',
					proName: '年龄',
					nodeName: 'age',
					proType: 'int',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: ''
				},
				{
					numId: '5',
					proName: '手机号',
					nodeName: 'phone',
					proType: 'varchar',
					info: '',
					cate: '联系方式',
					rules: true,
					ruleName: ''
				},
				{
					numId: '6',
					proName: '注册时间',
					nodeName: 'regist_time',
					proType: 'varchar',
					info: '',
					cate: '基本信息',
					rules: true,
					ruleName: ''
				},
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



			optionsSel: [
			  {
				value: '身份证号',
				label: '身份证号'
			  },
			  {
				value: '姓名',
				label: '姓名'
			  },
			  {
				value: '年龄',
				label: '年龄'
			  },
			  {
				value: '手机号',
				label: '手机号'
			  },
			  {
				value: '注册时间',
				label: '注册时间'
			  }
			],

			optionsSelB: global_.checkRules,   // 规则类型

			options6c: [
				{
					label: '年龄(age)',
					value: 'age'
				}
			],

			options6d: [
				{
					label: '身份证号(idno)',
					value: 'idno',
				},
				{
					label: '姓名(name)',
					value: 'name',
				},
				{
					label: '性别(gender)',
					value: 'gender',
				},
				{
					label: '年龄(age)',
					value: 'age',
				},
				{
					label: '手机号码(phone)',
					value: 'phone',
				},
				{
					label: '注册时间(regist_time)',
					value: 'regist_time',
				},
			],


			optionsSele: [
				{
					label: '注册时间',
					value: 'regist_time',
				},
				{
					label: '登录时间',
					value: 'login_time',
				},
			],
			
			dataTree: [
				{   //左侧树
          label: '规则',
          id: 1,
          num: '20',
          children: [
          	{
	            label: '空值检查',
	            num: '10',
	            children: []
          	},
          	{
	            label: '值域检查',
	            num: '15',
	            children: []
          	},
          	{
	            label: '规范检查',
	            num: '10',
	            children: []
          	},
          	{
	            label: '逻辑检查',
	            num: '8',
	            children: []
          	},
          	{
	            label: '重复数据检查',
	            num: '4',
	            children: []
          	},
          	{
	            label: '及时性检查',
	            num: '6',
	            children: []
          	},
          	{
	            label: '记录缺失检查',
	            num: '5',
	            children: []
          	},
          	{
	            label: '引用完整性检查',
	            num: '3',
	            children: []
          	},
          	{
	            label: '离群值检查',
	            num: '8',
	            children: []
          	},
          	{
	            label: '波动检查',
	            num: '7',
	            children: []
          	},
          	{
	            label: '平衡性检查',
	            num: '6',
	            children: []
          	},
          	{
	            label: 'sql检查',
	            num: '6',
	            children: []
          	},
          	{
	            label: '数据集检查',
	            num: '3',
	            children: []
          	}
          ]
        }],

        defaultProps: {
          children: 'children',
          label: 'label',
          num: 'num'
        }
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

			handleNodeClick(data) {  //左侧树点击
        console.log(data);
      },

      search(){

      },

      addRel(node, data){
      	console.log('cc')
      },

      form6aSel(val){
      	
      },
      form6bSel(val){
      	console.log(val)
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


	.xbox{
		display: flex;
		justify-content: space-between;
		.side{
			width:260px;
			border:1px solid #ebebeb;
			box-sizing: border-box;
			padding:10px;

			.ft12{
				display: flex;
				width: 100%;
				justify-content: space-between;
			}
			.addRel{
				visibility: hidden;
				border:1px solid #1d87fd;
				border-radius: 2px;
				color: #1d87fd;
				padding:2px 4px;
			}
		}
		.main{
			flex:1;
		}
	}

	.halfwidth{
		width:49%;
		display:inline-block;
		overflow:hidden;
	}
	.el-rate{
		margin-top: 6px;
	}
</style>
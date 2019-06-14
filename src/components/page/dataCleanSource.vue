<template>
	<div class="table">
		<div class="container">


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
			    			<div class="handle-box">
									<div style="padding: 17px 10px 0;float: right">
									  <el-button type="primary" icon="el-icon-plus" @click="addSource">新建</el-button>
									  <el-button type="danger" icon="el-icon-delete">删除</el-button>
									</div>
									<div>
										<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
											<el-form-item>
									      <el-select v-model="form.region" placeholder="类型">
									        <el-option
														v-for="item in options"
														:key="item.value"
														:label="item.label"
														:value="item.value">
													  </el-option>
									      </el-select>
									    </el-form-item>

									   <!--  <el-form-item>
									      <el-select v-model="form.region2" placeholder="状态">
									        <el-option label="通过" value="shanghai"></el-option>
									        <el-option label="未通过" value="beijing"></el-option>
									      </el-select>
									    </el-form-item> -->

											<!-- <el-form-item label="创建时间" >
												<div class="handle-box">
													<el-date-picker
													  v-model="value13"
													  type="daterange"
													  start-placeholder="开始日期"
													  end-placeholder="结束日期"
													  :default-time="['00:00:00', '23:59:59']">
													</el-date-picker>
												</div>
											</el-form-item> -->

											<el-form-item prop="name">
											  <el-input v-model.trim="formInline.name" placeholder="名称/备注"></el-input>
											</el-form-item>

											<el-form-item><el-button type="primary" icon="el-icon-search" @click="search">查询</el-button></el-form-item>
										</el-form>
									</div>
								</div>
								


								<el-table :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
									<el-table-column type="selection" width="60"  align="center"></el-table-column>
									<el-table-column prop="numId" align="center" label="序号" width="60">
									</el-table-column>

									<el-table-column prop="taskName" align="center" label="名称">
									</el-table-column>

									<el-table-column prop="type" align="center" label="类型" width="80">
									</el-table-column>

									<el-table-column prop="IP" align="center" label="地址" width="120">
									</el-table-column>

									<el-table-column prop="state" align="center" label="连接测试" width="80">
									</el-table-column>

									<el-table-column prop="createTime" align="center" label="获取时间" width="140">
									</el-table-column>

									<el-table-column prop="info" align="center" label="备注"  width="140">
									</el-table-column>

									<el-table-column prop="control" align="center" label="操作" >
											<template slot-scope="scope">
												<!-- <el-tooltip class="item" effect="dark" content="查看质量报告" placement="top">
													<el-button type="text" size="small" class="control" @click="dialogFormVisible7 = true">
														<i class="fa fa-file-text-o"></i>
													</el-button>
												</el-tooltip> -->
												<el-tooltip class="item" effect="dark" content="编辑详情" placement="top">
													<el-button type="text" size="small" class="control" @click="modifyInfo(scope.index, scope.row)">
														<i class="fa fa-edit"></i>
													</el-button>
												</el-tooltip>

												<el-tooltip class="item" effect="dark" content="查看详情" placement="top">
													<router-link to="/dataCleanSourceB">
											  		<el-button type="text" size="small" class="control">
															<i class="fa fa-sitemap"></i>
														</el-button>
													</router-link>
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
		</div>



		<el-dialog title="新加数据源" :visible.sync="dialogFormVisible" width="440px">

		  <el-form :model="form" ref="form" class="add el-form el-form--label-right">
		     <el-form-item label="数据源类型" :label-width="formLabelWidth">
		      <el-select v-model="form.type" placeholder="请选择数据源类型">
		       <!--  <el-option label="MySQL" value="shanghai"></el-option>
		        <el-option label="DBSource" value="beijing"></el-option>
		      </el-select> -->
		      <el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					  </el-option>
					</el-select>
		    </el-form-item>
		  </el-form>

      <!-- sql -->
		  <div v-if="form.type === '0'">
		  	<el-form :model="forma" ref="forma" class="add el-form el-form--label-right">
		    	<el-form-item label="数据源地址" :label-width="formLabelWidth">
			      <el-input v-model="forma.address" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="数据库名称" :label-width="formLabelWidth">
			      <el-input v-model="forma.sourcename" auto-complete="off"></el-input>
			    </el-form-item>
			   
			    <el-form-item label="用户名" :label-width="formLabelWidth">
			      <el-input v-model="forma.username" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="密码" :label-width="formLabelWidth">
			      <el-input v-model="forma.ps" auto-complete="off"></el-input>
			    </el-form-item>
		    </el-form>
		  </div>

		  <!-- oracle -->
		  <div v-if="form.type === '1'">
		  	<el-form :model="formb" ref="formb" class="add el-form el-form--label-right">
		    	<el-form-item label="数据源地址" :label-width="formLabelWidth">
			      <el-input v-model="formb.address" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="数据库名称" :label-width="formLabelWidth">
			      <el-input v-model="formb.sourcename" auto-complete="off"></el-input>
			    </el-form-item>
			   
			    <el-form-item label="用户名" :label-width="formLabelWidth">
			      <el-input v-model="formb.username" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="密码" :label-width="formLabelWidth">
			      <el-input v-model="formb.ps" auto-complete="off"></el-input>
			    </el-form-item>
		    </el-form>
		  </div>



		  <!-- elasticsearch -->
		  <div v-if="form.type === '2'">
		  	<el-form :model="formc" ref="formc" class="add el-form el-form--label-right">

		  		<el-form-item label="集群名称" :label-width="formLabelWidth">
			      <el-input v-model="formc.sourcename" auto-complete="off"></el-input>
			    </el-form-item>


		    	<el-form-item label="集群地址" :label-width="formLabelWidth">
			      <el-input v-model="formc.address" auto-complete="off" placeholder="host:port, 多个节点使用，号隔开"></el-input>
			    </el-form-item>

			    
			   
			    <el-form-item label="嗅探集群" :label-width="formLabelWidth">
			      <el-checkbox v-model="formc.checkedall"></el-checkbox>
			       <el-tooltip class="item" effect="dark" content="显示帮助信息" placement="top">
							<span style="font-size: 12px">
								<i class="fa fa-question-circle-o"></i>
							</span>
						</el-tooltip>
			    </el-form-item>

			    <el-form-item label="索引名称" :label-width="formLabelWidth">
			      <el-input v-model="formc.ps" auto-complete="off"></el-input>
			    </el-form-item>
		    </el-form>
		  </div>



		  <!-- hbase -->
		  <div v-if="form.type === '3'">
		  	<el-form :model="formd" ref="formd" class="add el-form el-form--label-right">
		  		<el-form-item label="ZK集群地址" :label-width="formLabelWidth">
			      <el-input v-model="formd.sourcename" auto-complete="off"></el-input>
			    </el-form-item>

		    	<el-form-item label="ZK客户端端口" :label-width="formLabelWidth">
			      <el-input v-model="formd.address" auto-complete="off" placeholder="host:port, 多个节点使用，号隔开"></el-input>
			    </el-form-item>

			    <el-form-item label="zk根目录" :label-width="formLabelWidth">
			      <el-input v-model="formd.ps" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="命名空间" :label-width="formLabelWidth">
			      <el-input v-model="formd.spacename" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="启用Kerberos" :label-width="formLabelWidth">
			      <el-checkbox v-model="formd.checkedall"></el-checkbox>
			    </el-form-item>

			    <div v-if="formd.checkedall === true">
			    	<el-form-item label="principal名称" :label-width="formLabelWidth">
				      <el-input v-model="formd.ppname" auto-complete="off"></el-input>
				    </el-form-item>

			     	<el-form-item label="keytab文件" :label-width="formLabelWidth">
				      <el-input v-model="formd.keyfile" auto-complete="off"></el-input>
				    </el-form-item>
			    </div>
		    </el-form>
		  </div>



		  <!-- hive -->
		  <div v-if="form.type === '4'">
		  	<el-form :model="forme" ref="forme" class="add el-form el-form--label-right">

		  		<el-form-item label="数据源地址" :label-width="formLabelWidth">
			      <el-input v-model="forme.sourcename" auto-complete="off"></el-input>
			    </el-form-item>

		    	<el-form-item label="数据库/模式" :label-width="formLabelWidth">
			      <el-input v-model="forme.address" auto-complete="off" placeholder="host:port, 多个节点使用，号隔开"></el-input>
			    </el-form-item>

			    <el-form-item label="用户名" :label-width="formLabelWidth">
			      <el-input v-model="forme.ps" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="密码" :label-width="formLabelWidth">
			      <el-input v-model="forme.spacename" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="启用Kerberos" :label-width="formLabelWidth">
			      <el-checkbox v-model="forme.checkedall"></el-checkbox>
			    </el-form-item>

			    <div v-if="forme.checkedall === true">
			    	<el-form-item label="principal名称" :label-width="formLabelWidth">
				      <el-input v-model="forme.ppname" auto-complete="off"></el-input>
				    </el-form-item>

			     	<el-form-item label="keytab文件" :label-width="formLabelWidth">
				      <el-input v-model="forme.keyfile" auto-complete="off"></el-input>
				    </el-form-item>

				    <el-form-item label="hive服务principal" :label-width="formLabelWidth">
				      <el-input v-model="forme.hivename" auto-complete="off"></el-input>
				    </el-form-item>
			    </div>
		    </el-form>
		  </div>



		  <!-- kafka -->
		  <div v-if="form.type === '5'">
		  	<el-form :model="formf" ref="formf" class="add el-form el-form--label-right">

		  		<el-form-item label="broker列表" :label-width="formLabelWidth">
			      <el-input v-model="formf.sourcename" auto-complete="off"></el-input>
			    </el-form-item>

		    	<el-form-item label="组ID" :label-width="formLabelWidth">
			      <el-input style="width:174px" v-model="formf.address" auto-complete="off"></el-input>
			      <el-button type="primary">自动生成</el-button>
			    </el-form-item>

			    <el-form-item label="读取策略" :label-width="formLabelWidth">
			       <el-radio-group v-model="formf.radio">
					    <el-tooltip class="item" effect="dark" content="提示文字1" placement="top"><el-radio :label="3">earliest</el-radio></el-tooltip>
					    <el-tooltip class="item" effect="dark" content="提示文字2" placement="top"><el-radio :label="6">latest</el-radio></el-tooltip>
					    <el-tooltip class="item" effect="dark" content="提示文字3" placement="top"><el-radio :label="9">none</el-radio></el-tooltip>
					  </el-radio-group>
			    </el-form-item>

			    <el-form-item label="主题名称" :label-width="formLabelWidth">
			      <el-input v-model="formf.spacename" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="schemaregistry" :label-width="formLabelWidth">
			      <el-input v-model="formf.schreg" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="schema名称" :label-width="formLabelWidth">
			      <el-input v-model="formf.schname" auto-complete="off"></el-input>
			    </el-form-item>

			    <el-form-item label="启用Kerberos" :label-width="formLabelWidth">
			      <el-checkbox v-model="formf.checkedall"></el-checkbox>
			    </el-form-item>

			    <div v-if="formf.checkedall === true">
			    	<el-form-item label="principal名称" :label-width="formLabelWidth">
				      <el-input v-model="formf.ppname" auto-complete="off"></el-input>
				    </el-form-item>

			     	<el-form-item label="keytab文件" :label-width="formLabelWidth">
				      <el-input v-model="formf.keyfile" auto-complete="off"></el-input>
				    </el-form-item>
			    </div>
		    </el-form>
		  </div>

    


	    <el-form :model="formk" ref="formk" class="add el-form el-form--label-right">
		    <el-form-item label=" " :label-width="formLabelWidth">
		     	  <el-button size="mini" type="primary">测试连接</el-button>
		    </el-form-item>

		    <el-form-item label="自定义数据源名称" :label-width="formLabelWidth">
		      <el-input v-model="formk.nickname" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="formk.desc"></el-input>
			  </el-form-item>
	  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="编辑" :visible.sync="dialogFormVisible3" width="440px">
		  <el-form :model="form2" ref="form2" class="add el-form el-form--label-right">
		     <el-form-item label="数据源类型" :label-width="formLabelWidth">
		      <el-select v-model="form2.type" disabled placeholder="请选择数据源类型">
		       <!--  <el-option label="MySQL" value="shanghai"></el-option>
		        <el-option label="DBSource" value="beijing"></el-option>
		      </el-select> -->
		      <el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					  </el-option>
					</el-select>

		    </el-form-item>

		    <el-form-item label="数据源地址" :label-width="formLabelWidth">
		      <el-input v-model="form2.address" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="数据库名称" :label-width="formLabelWidth">
		      <el-input v-model="form2.sourcename" auto-complete="off"></el-input>
		    </el-form-item>
		   
		    <el-form-item label="用户名" :label-width="formLabelWidth">
		      <el-input v-model="form2.username" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="密码" :label-width="formLabelWidth">
		      <el-input v-model="form2.ps" auto-complete="off"></el-input>
		    </el-form-item>
		   

		    <el-form-item label=" " :label-width="formLabelWidth">
		     	  <el-button size="mini" type="primary">测试连接</el-button>
		    </el-form-item>

		    <el-form-item label="自定义数据源名称" :label-width="formLabelWidth">
		      <el-input v-model="form2.nickname" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form2.desc"></el-input>
			  </el-form-item>
		   
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="获取表结构" :visible.sync="dialogFormVisible2" width="740px">
			<div class="sminfo">
				<p><span>数据源名称:</span> <em></em></p>
				<p><span>数据源类型:</span> <em></em></p>
				<p><span>数据源地址:</span> <em></em></p>
				<p><span>表名:</span> <em></em></p>
				<p><span>表备注:</span> <em>
					<el-input style="width:594px" placeholder="请输入内容"></el-input>
				</em></p>
				<p><span>字段信息如下</span> <em></em></p>
			</div>
			<div>
				<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"></el-table-column>
					<el-table-column prop="numId" align="center" label="序号" width="80"></el-table-column>
					<el-table-column prop="nodeName" align="center" label="字段名" width="80"></el-table-column>
					<el-table-column prop="nodeLength" align="center" label="字段长度" width=""></el-table-column>
					<el-table-column prop="isCid" align="center" label="是否主键" width="80"></el-table-column>
					<el-table-column prop="isEmpty" align="center" label="是否不为空" width="120"></el-table-column>
					<el-table-column prop="info" align="center" label="备注" width=""></el-table-column>
				</el-table>
			</div>
			<div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
		</el-dialog>



		<el-dialog title="数据质量报告" :visible.sync="dialogFormVisible7" width="1000px">
			
			<div class="ml_itemv">
				<div class="ml_itema">
					<div>报告时间: <span>2019-05-13 10:21:26</span></div>
					<div>
						<div>数据质量综合评分: </div>
						<div style="margin:20px 0 0 20px">
							<el-progress type="circle" :percentage="80" status="text"><span>80</span> 分</el-progress>
						</div>
					</div>
				</div>

				
				<div class="ml_itema" >
					<div>
						<div class="aatitle">数据源</div>
						<p><span>数据源名称:</span> <b>CRM 数据</b></p>
						<p><span>数据源类型:</span> <b>MySQL</b></p>
						<p><span>数据源地址:</span> <b>192.168.10.126:3306</b></p>
						<p><span>数据库名称:</span> <b>frmc</b></p>
						<p><span>质量稽核表:</span> <b>customer、stock</b></p>
					</div>
				</div>
			</div>


			<div>
				<div class="aatitle">整体评分报告</div>
				<div class="ml_itemk">
					<div class="ml_itemkt">
						<div id="myChart5" ref="myChart5" :style="{width: '300px', height: '300px'}"></div>
					</div>
					<div class="ml_itemkt" style="width:700px;">
						<div id="myChart6" ref="myChart6" :style="{width: '700px', height: '300px'}"></div>
					</div>
				</div>
				
			</div>

			<div style="margin:20px 0 0 0">
				<div class="aatitle">表评分详情</div>
				<el-tabs type="border-card">
				  <el-tab-pane label="customer">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>89</em></div>
				  			<div id="myChart7" ref="myChart7" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>金融</em></p>
					  		<p><span>实体模型:</span> <em>金融</em></p>
					  		<p><span>总数据行:</span> <em>2828</em></p>
					  		<p><span>合规数据:</span> <em>1902</em></p>
				  		</div>
				  	</div>
				  	<div class="aatitle">列数据质量分析</div>
				  	<div>
				  		<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="colName" align="center" label="列名"></el-table-column>
								<el-table-column prop="colType" align="center" label="列类型"></el-table-column>
								<el-table-column prop="colTo" align="center" label="列标准映射"></el-table-column>
								<el-table-column prop="islow" align="center" label="列合规性规则"></el-table-column>
								<el-table-column prop="colEm" align="center" label="列空值"></el-table-column>

								<el-table-column prop="colFin" align="center" label="列完整度"></el-table-column>
								<el-table-column prop="colFin2" align="center" label="列唯一性"></el-table-column>
								<el-table-column prop="colFin3" align="center" label="列一致性"></el-table-column>

								<el-table-column prop="islows" align="center" label="列合规度"></el-table-column>
								<el-table-column prop="total" align="center" label="列总评分"></el-table-column>
							</el-table>
				  	</div>
				  	<div class="aatitle">其它质量问题汇总</div>
							<div style="padding-left: 20px;">
								<el-collapse v-model="activeNamesa" @change="handleChangea">
								  <el-collapse-item title="数据延迟 [及时性]" name="1">
								    <div>数据接入延迟超过6小时</div>
								  </el-collapse-item>
								  <el-collapse-item title="数据中断 [其它]" name="2">
								    <div>未检测到 2019-05-13 的数据</div>
								  </el-collapse-item>
								</el-collapse>
							</div>

				  </el-tab-pane>
				  <el-tab-pane label="stock">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>90</em></div>
				  			<div id="myChart8" ref="myChart8" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>金融</em></p>
					  		<p><span>实体模型:</span> <em>金融</em></p>
					  		<p><span>总数据行:</span> <em>2828</em></p>
					  		<p><span>合规数据:</span> <em>1902</em></p>
				  		</div>
				  	</div>
				  	<div class="aatitle">列数据质量分析</div>
				  	<div>
				  		<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="colName" align="center" label="列名"></el-table-column>
								<el-table-column prop="colType" align="center" label="列类型"></el-table-column>
								<el-table-column prop="colTo" align="center" label="列标准映射"></el-table-column>
								<el-table-column prop="islow" align="center" label="列合规性规则"></el-table-column>
								<el-table-column prop="colEm" align="center" label="列空值"></el-table-column>

								<el-table-column prop="colFin" align="center" label="列完整度"></el-table-column>
								<el-table-column prop="colFin2" align="center" label="列唯一性"></el-table-column>
								<el-table-column prop="colFin3" align="center" label="列一致性"></el-table-column>

								<el-table-column prop="islows" align="center" label="列合规度"></el-table-column>
								<el-table-column prop="total" align="center" label="列总评分"></el-table-column>
							</el-table>
				  	</div>
				  	<div class="aatitle">其它质量问题汇总</div>
							<div style="padding-left: 20px;">
								<el-collapse v-model="activeNamesa" @change="handleChangea">
								  <el-collapse-item title="数据延迟 [及时性]" name="1">
								    <div>数据接入延迟超过6小时</div>
								  </el-collapse-item>
								  <el-collapse-item title="数据中断 [其它]" name="2">
								    <div>未检测到 2019-05-13 的数据</div>
								  </el-collapse-item>
								</el-collapse>
							</div>
				  </el-tab-pane>
				</el-tabs>
			</div>
			<div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible7 = false">下  载</el-button>
		    <el-button type="primary" @click="dialogFormVisible7 = false">确 定</el-button>
		  </div>
		</el-dialog>



	</div>
</template>

<script>
	import moment from 'moment/moment';
	import echarts from 'echarts';
	import global_   from  './../common/Global'
	export default {
		name: 'basetable',
		data() {
			return {
				formLabelWidth: '140px',
				dialogFormVisible: false,
				dialogFormVisible2: false,
				dialogFormVisible3: false,
				dialogFormVisible7: true,
				activeNamesa: [],
				tableData7: [
					{
						colName: 'idcardno',
						colType: 'varchar',
						colTo: '身份证号',
						islow: '北京身份证号验证规则',
						colEm: '0',
						colFin: '90%',
						islows: '90%',
						total: '96',
						colFin2: '80%',
						colFin3: '90%',
					},
					{
						colName: 'name',
						colType: 'varchar',
						colTo: '姓名',
						islow: '姓名长度验证',
						colEm: '0',
						colFin: '100%',
						islows: '90%',
						total: '94',
						colFin2: '80%',
						colFin3: '-',
					}
				],


				form:{
					type: '0',
				},


				form2:{
					type: '0',
					address: '',
					sourcename: '',
					username: '',
					ps: '',
					nickname: '',
					desc: ''
				},


				forma:{  // mysql
					address: '',
					sourcename: '',
					username: '',
					ps: ''
				},

				formb:{  // orcale
					address: '',
					sourcename: '',
					username: '',
					ps: ''
				},

				formc:{  // orcale
					address: '',
					sourcename: '',
					username: '',
					checkedall: false
				},

				formd:{  // orcale
					address: '',
					sourcename: '',
					username: '',
					spacename: '',
					checkedall: false,
					ppname: '',
					keyfile: ''
				},


				forme:{  // orcale
					address: '',
					sourcename: '',
					username: '',
					spacename: '',
					checkedall: false,
					ppname: '',
					keyfile: '',
					hivename: ''
				},

				formf:{  // orcale
					address: '',
					sourcename: '',
					username: '',
					spacename: '',
					checkedall: false,
					ppname: '',
					keyfile: '',
					hivename: '',

					schreg: '',
					schname: '',
					radio: 3
				},

				formk:{
					nickname: '',
					desc: ''
				},

				activeName2: 'first',
				formInline:{
					key: '',
				},
				formInlineR:{
					resource: '',
				},

				options: global_.sourceType,   // 规则类型

				tableData: [
					{
						isCheck: true,
						numId: '1',
						taskName: '移动数据资源库',
						type: 'mysql',
						IP: '192.168.10.126:3306',
						state: '通过',
						createTime: '2019-04-15 19:26:38',
						info: ''
					}
				],

				tableData2: [
					{
						isCheck: false,
						numId: '1',
						nodeName: '',
						nodeLength: '',
						isCid: '是',
						isEmpty: '是',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '2',
						nodeName: '',
						nodeLength: '',
						isCid: '是',
						isEmpty: '是',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '3',
						nodeName: '',
						nodeLength: '',
						isCid: '是',
						isEmpty: '是',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '4',
						nodeName: '',
						nodeLength: '',
						isCid: '是',
						isEmpty: '是',
						info: '测试'
					},
				],
				treeData:[
	       {
	        "id": 1,
	        "name": "全部",
	        "level": 1,
	        "child": [
	          {
	            "id": 2,
	            "name": "网络",
	            "level": 2,
	            "child": [
	              {
	                "id": 3,
	                "name": "移动互联网",
	                "level": 3,
	                "child": []
	              },
	              {
	                "id": 31,
	                "name": "微博",
	                "level": 3,
	                "child": []
	              }
	            ]
	          },
	          {
	            "id": 4,
	            "name": "金融",
	            "level": 2,
	            "child": []
	          },
	          {
	            "id": 5,
	            "name": "医疗",
	            "level": 2,
	            "child": []
	          },
	        ]
	      }],
	      value13: '',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
			}
		},
		mounted: function () {
			this.dialogFormVisible7 = false
		  this.$nextTick(function () {
        this.drawLine10();
        this.drawLine2();
        this.drawLine3();
        this.drawLine4();
      });
		},
		methods: {
			drawLine10(){
				var myChart5 = this.$refs.myChart5;
				let option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 100 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let maChart = echarts.init(myChart5);
        maChart.setOption(option);
			},



			drawLine2(){
				var myChart6 = this.$refs.myChart6;
				let option = {
				    legend: {},
				    tooltip: {},
				    dataset: {
			        source: [
		            ['product', '综合评分', '合理性', '一致性', '唯一性', '及时性', '准确性', '完整性'],
		            ['customer', 43.3, 85.8, 93.7, 60, 70.4, 50.2, 80],
		            ['stock', 70, 80.2, 65.4, 90, 72, 66, 77],
			        ]
				    },
				    xAxis: {type: 'category'},
				    yAxis: {},
				    series: [
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'},
				        {type: 'bar'}
				    ]
				}
				let bbChart = echarts.init(myChart6);
        bbChart.setOption(option);
			},


			drawLine3(){
				var myChart7 = this.$refs.myChart7;
				var option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 80 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let ccChart = echarts.init(myChart7);
        ccChart.setOption(option);
			},


			drawLine4(){
				var myChart8 = this.$refs.myChart8;
				let option = {
            title : {},
            tooltip : {
              trigger: 'axis'
            },
            calculable : true,
            polar : [
              {
	              name: { show: true,textStyle:{fontSize:16,color:"#32cd32"}},
	              indicator : [
                  {text : '一致性', max  : 100},
                  {text : '唯一性', max  : 100},
                  {text : '及时性', max  : 100},
                  {text : '合理性', max  : 100},
                  {text : '准确性', max  : 100},
                  {text : '完整性', max  : 100}
	              ],center : ['50%','50%'],
	              radius : 80 //半径，可放大放小雷达图
              }
            ],
            series : [
							{
							  name:'',
							  type: 'radar',//图表类型 radar为雷达图
							  itemStyle: {
							    normal: {
					          lineStyle: {
					              color :"#87cefa",
					              width : 2
					          },
					          areaStyle: {
					              color:"rgba(247,78,78,.78)",
					              type: 'default'
					          }
					     		}
							  },
							  symbolSize :6,
							  data : [{
							    value:[100,100,100,40,100,40]
							  }]
							}
            ]
        };

        let ddChart = echarts.init(myChart8);
        ddChart.setOption(option);
			},


			 handleChangea(val) {
        console.log(val);
      },


			showInfo(){
				this.dialogFormVisible2 = true;
			},
			addSource(){
				this.dialogFormVisible = true;
			},
			modifyInfo(index, row){
				let _this = this;
				this.dialogFormVisible3 = true;

				console.log(row.ip);

				_this.form2.type = '0';
				_this.form2.address = row.IP;
				_this.form2.sourcename = row.taskName;
				_this.form2.username = 'admin';
				_this.form2.ps = '*******';
				_this.form2.nickname = 'test';
				_this.form2.desc = row.info;
			},
			search(){
				console.log('cc');
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
		/*height: 100%;*/
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
		padding: 10px;
		box-sizing: border-box;
		.sideLeft{
			width:266px;
			border:1px solid #e8e8e8;
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
		}
	}

	.control{
		.fa{
			color:#d0d0d0;
			/*font-size:20px;*/
			margin:0 4px;
		}
		.fa-pencil-square-o:hover{
			color:#44cfff;
		}
		.fa-sitemap:hover{
			color:#1c88ff;
		}
		.fa-trash-o:hover{
			color: #ff2266;
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

	.sminfo{
		.el-dialog__body{
			padding-top: 10px;
		}
		p{
			line-height: 30px;
			span{
				display: inline-block;
				vertical-align: middle;
				width: 100px;
				text-align: right;
			}
			em{
				font-style: normal;
				display: inline-block;
				vertical-align: middle;
			}
		}
	}



	.nititle{
		display: flex;
		justify-content: space-between;
		line-height: 30px;
		padding:10px 0;
		.txtRed{
			color: red;
		}
	}


	.ml_itemv{
		display: flex;
		border-bottom: 1px dashed #ccc;
		padding-bottom: 20px;
		.ml_itema{
			width:50%;
			p{
				line-height: 30px;
			}
		}
	}

	.ml_itemk{
		display: flex;
		border-bottom: 1px dashed #ccc;
		padding-bottom: 20px;
		.ml_itemkt{
			/*width: 50%;*/
		}
	}

	.aatitle{
		font-size:18px;
		color: #333;
		padding:10px 0;
	}

	.score{
		em{
			font-size: 22px;
			font-style: normal;
		}
	}
	.textInfo{
		display: flex;
		border-bottom:1px dashed #ccc;
		padding-bottom: 10px;
		>div{
			display: inline-block;
			width:49.5%;
			h5{
				font-size: 18px;
				padding-left: 30px;
			}
			p{
				line-height: 30px;
				em{
					font-style: normal;
				}
				span{
					display: inline-block;
					vertical-align: middle;
					text-align: right;
					width:100px;
				}
			}
		}
	}
</style>

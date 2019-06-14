<template>
	<div class="table">
		<div class="container">
			<div class="tablist clearfix">
				<div style="display: flex;justify-content: space-between;padding:0 0 10px 0;border-bottom: 1px solid #ccc;">
				<div class="rightContorl">
					<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline" style="padding-top:0;">
						<el-form-item prop="name" label="关键词">
							<el-input
						    placeholder="请输入内容"
						    v-model.trim="formInline.name">
						    <i slot="prefix" class="el-input__icon el-icon-search"></i>
						  </el-input>
						</el-form-item>
						<el-form-item label="任务状态">
							<el-select v-model="formInline.userType" placeholder="选择任务状态">
							  <el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							  </el-option>
							</el-select>
				 		</el-form-item>

				 		<el-form-item label="任务类型">
							<el-select v-model="formInline.userType2" placeholder="选择任务类型">
							  <el-option
								v-for="item in options2"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							  </el-option>
							</el-select>
				 		</el-form-item>


						<el-form-item>
							<el-button type="primary">查询</el-button>
						</el-form-item>
						<el-form-item>
							
						</el-form-item>
					</el-form>
				</div>

				<div class="left"><el-button type="primary" icon="el-icon-plus" @click="addItem">新建任务</el-button></div>
				</div>


				<div>
						<div class="datalist">
							<ul>
								<li>
									<!-- <div class="state">质量稽核</div> -->
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>客户身份及行为数据清洗</h5>
		    								<p><span>网络数据客户身份、短信及上网行为等数据的清洗</span></p>
		    								<p>
		    									<em>创建人:</em><span>admin</span>
		    									<em>创建时间:</em><span>2019-03-16 10:23:13</span>
		    									<em>稽核报告来源任务类型:</em><span>数据清洗任务</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<!-- <el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip> -->
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<!-- <li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>手机App数据汇聚</h5>
		    								<p><span>根据平台内容数据模型对表t_telephoneno_app进行清洗任务</span></p>
		    								<p>
		    									<em>创建人:</em><span>admin</span>
		    									<em>创建时间:</em><span>2019-03-06 10:30:24</span>
		    									<em>稽核报告来源任务类型:</em><span>数据汇聚任务</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li> -->

								<li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>客户身份及行为数据质量稽核</h5>
		    								<p><span>对汇聚并清洗后的全量客户数据进行质量稽核</span></p>
		    								<p>
		    									<em>创建人:</em><span>admin</span>
		    									<em>创建时间:</em><span>2019-03-06 10:30:24</span>
		    									<em>稽核报告来源任务类型:</em><span>数据稽核任务</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								
							</ul>
						</div>
						<div class="pagination">
								<el-pagination background @current-change="handleCurrentChange" :page-size="10"
				  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
								</el-pagination>
							</div>
					</div>




				<!-- <el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="全部" name="first">
					
				</el-tab-pane>
				<el-tab-pane label="进行中(231)" name="second">
					<div>
						<div class="datalist">
							<ul>
								<li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
							</ul>
						</div>
						<div class="pagination">
								<el-pagination background @current-change="handleCurrentChange" :page-size="10"
				  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
								</el-pagination>
							</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="已完成(178)" name="third">
					<div>
						<div class="datalist">
							<ul>
								<li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<div class="state">质量稽核</div>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
								<li>
									<router-link to="/dataAuditView">
										<dl>
		    							<dt>
		    								<img src="../../assets/pic01.png" alt="">
		    							</dt>
		    							<dd>
		    								<h5>精英人物数据模型</h5>
		    								<p><span>IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型IT行业精英人物的数据模型</span></p>
		    								<p>
		    									<em>属性数:</em><span>1213</span>
		    									<em>属性组数</em><span>3323</span>
		    									<em>创建人:</em><span>王显示</span>
		    									<em>创建时间:</em><span>2019/03/06 10:23:13</span>
		    								</p>
		    							</dd>
		    						</dl>
									</router-link>
	    						<div class="iconControl">
	    							<el-tooltip class="item" effect="dark" content="编辑" placement="top">
									    <a href="javascript:void(0)" @click="editItem"><i class="fa fa-edit"></i></a>
									  </el-tooltip>
	    							<el-tooltip class="item" effect="dark" content="删除" placement="top">
									    <a href=""><i class="fa fa-trash-o"></i></a>
									  </el-tooltip>
										<a href="javascript:void(0)"><i class="fa fa-server"></i></a>

										<el-tooltip class="item" effect="dark" content="执行" placement="top">
									    <a href="javascript:void(0)"><i class="fa fa-play"></i></a>
									  </el-tooltip>
										<el-tooltip class="item" effect="dark" content="质量报告" placement="top">
									    <a href="javascript:void(0)" @click="moreInfo"><i class="fa fa-file-text-o"></i></a>
									  </el-tooltip>
	    						</div>
								</li>
							</ul>
						</div>
						<div class="pagination">
								<el-pagination background @current-change="handleCurrentChange" :page-size="10"
				  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
								</el-pagination>
							</div>
					</div>
				</el-tab-pane>
			  </el-tabs> -->
			</div>
		</div>


		<el-dialog title="新建任务" :visible.sync="dialogFormVisible" width="440px">
			<el-form :model="form9" ref="form9" class="add el-form el-form--label-right">
				<el-form-item label="任务名称" :label-width="formLabelWidth">
		      <el-input v-model="form9.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form9.desc"></el-input>
			  </el-form-item>

			  <el-form-item label="数据源选择" :label-width="formLabelWidth">
			  	<el-input v-model="form9.sources" v-popover:popover4 auto-complete="off"></el-input>

		    	<el-popover
					  ref="popover4"
					  placement="bottom"
					  width="400"
					  trigger="click">
					  <div class="treePop" style="max-height: 200px;overflow-y: auto;">
					  	<el-tree
							  class="filter-tree"
							  :data="data7"
							  :props="defaultProps7"
							  default-expand-all
							  @node-click="handleNodeClick7"
							  ref="tree7">
							</el-tree>
					  </div>
					</el-popover>

			  </el-form-item>

			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addNewItem">确 定</el-button>
		  </div>

		</el-dialog>


		<!-- <el-dialog title="新建项目" :visible.sync="dialogFormVisible2" width="440px">

			<el-form :model="form8" ref="form8" class="add el-form el-form--label-right">
				<el-form-item label="任务名称" :label-width="formLabelWidth">
		      <el-input v-model="form8.name1" auto-complete="off"></el-input>
		    </el-form-item>

		     <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form8.desc" :rows="6"></el-input>
			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>

		</el-dialog> -->




		<el-dialog title="修改任务" :visible.sync="dialogFormVisible2" width="440px">

			<el-form :model="form8" ref="form8" class="add el-form el-form--label-right">
				<el-form-item label="任务名称" :label-width="formLabelWidth">
		      <el-input v-model="form8.name1" auto-complete="off"></el-input>
		    </el-form-item>

		     <el-form-item label="备注" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form8.desc" :rows="6"></el-input>
			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="数据质量报告" :visible.sync="dialogFormVisible7" width="1000px">
			<div >
				
			
			<div class="ml_itemv" >
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
						<p><span>数据源名称:</span> <b>移动数据资源库</b></p>
						<p><span>数据源类型:</span> <b>MySQL</b></p>
						<p><span>数据源地址:</span> <b>192.168.10.126:3306</b></p>
						<p><span>数据库名称:</span> <b>ydsjzyk</b></p>
						<p><span>质量稽核表:</span> <b>t_profile、t_dx、t_weblog</b></p>
					</div>
				</div>
			</div>


			<div>
				<div class="aatitle">整体评分报告</div>
				<div class="ml_itemk">
					<div class="ml_itemkt">
						<div id="myChart" ref="myChart" :style="{width: '300px', height: '300px'}"></div>
					</div>
					<div class="ml_itemkt" style="width:700px;">
						<div id="myChart2" ref="myChart2" :style="{width: '700px', height: '300px'}"></div>
					</div>
				</div>
				
			</div>

			<div style="margin:20px 0 0 0">
				<div class="aatitle">表评分详情</div>
				<el-tabs type="border-card">
				  <el-tab-pane label="t_profile">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>89</em></div>
				  			<div id="myChart3" ref="myChart3" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>网络</em></p>
					  		<p><span>实体模型:</span> <em>网络客户身份模型</em></p>
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
				  <el-tab-pane label="t_dx" >
				  	<div id="pdfDom">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>90</em></div>
				  			<div id="myChart4" ref="myChart4" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>网络</em></p>
					  		<p><span>实体模型:</span> <em>短信数据模型</em></p>
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
						</div>
				  </el-tab-pane>
				  <el-tab-pane label="t_weblog" name="third">
				  	<div class="textInfo">
				  		<div>
				  			<div class="score">综合评分: <em>87</em></div>
				  			<div id="myChart5" ref="myChart5" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
				  		</div>
				  		<div style="padding-top:100px">
					  		<p><span>行业标准:</span> <em>网络</em></p>
					  		<p><span>实体模型:</span> <em>上网日志数据模型</em></p>
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

			</div>



			<!-- <Quareport></Quareport> -->

			<div slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="getPdf()">下  载</el-button>
		    <el-button type="primary" @click="dialogFormVisible7 = false">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import moment from 'moment/moment';
	// import Quareport from '../common/Quareport';
	export default {
		name: 'basetable',
		// components: { Quareport },
		data() {
			return {
				htmlTitle: '页面导出PDF文件名',
				formLabelWidth: '100px',
				dialogFormVisible: false,
				dialogFormVisible2: false,

				dialogFormVisible7: true,

				activeNamesa: [],
				
				form9: {
					name1: '',
					desc: '',
					sources: ''
				},
				form8: {
					name1: '',
					desc: ''
				},

				tableData7: [
					{
						colName: 'idcardno',
						colType: 'varchar',
						colTo: '身份证号',
						islow: '北京身份证号验证规则',
						colEm: '0',
						colFin: '100%',
						islows: '80%',
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
					},
					{
						colName: 'gender',
						colType: 'varchar',
						colTo: '性别',
						islow: '性别校验规则',
						colEm: '3',
						colFin: '99.9%',
						islows: '99.8%',
						total: '97',
						colFin2: '-',
						colFin3: '-',
					},
					{
						colName: 'age',
						colType: 'int',
						colTo: '年龄',
						islow: '年龄范围校验',
						colEm: '7',
						colFin: '99.8%',
						islows: '99.8%',
						total: '94',
						colFin2: '-',
						colFin3: '-',
					},
					{
						colName: 'phone',
						colType: 'varchar',
						colTo: '手机号',
						islow: '手机号校验规则',
						colEm: '52',
						colFin: '98.16%',
						islows: '96.8%',
						total: '75',
						colFin2: '75%',
						colFin3: '79%',
					},
					{
						colName: 'regist_time',
						colType: 'varchar',
						colTo: '注册时间',
						islow: '时间格式校验',
						colEm: '35',
						colFin: '98.76%',
						islows: '98.76%',
						total: '98',
						colFin2: '-',
						colFin3: '-',
					},
				],

				tableData8: [
					{
						colName: 'C1',
						colType: 'SFRG',
						colTo: '-',
						islow: '-',
						colEm: '0',
						colFin: '90%',
						islows: '90%',
						total: '90'
					}
				],
				tableData4: [
					{
						dataSource: 'A',
						colName: '-',
						finish: '95%',
						islow: '90%',
						total: '95'
					},
					{
						dataSource: 'B',
						colName: '-',
						finish: '90%',
						islow: '90%',
						total: '90'
					},
					{
						dataSource: 'C',
						colName: '-',
						finish: '95%',
						islow: '90%',
						total: '90'
					},
				],


				data7: [
					{
	          label: '全部',
	          children: [{
	            label: '网络',
	            children: [
	            	{
	              	label: '移动互联网',
	              	children:[{
	              		label: '移动数据资源库',
	              		children: []
	              		}
	              	]
	            	},
	            	{
	              	label: '微博'
	            	},
	            ]
	          }]
	        }, {
	          label: '金融'
	        }, {
	        	label: '医疗'
	        }
				],
        defaultProps7: {
          children: 'children',
          label: 'label'
        },

        visible: false,


				

				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
				 activeName: 'first',
				 formInline: {
					 userType: '',
					 userType2: ''
				 },
				  options: [
				  {
					value: '全部',
					label: '全部'
				  }, {
					value: '已完成',
					label: '已完成'
				  },{
					value: '未开始',
					label: '未开始'
				  },{
					value: '进行中',
					label: '进行中'
				  },{
					value: '执行失败',
					label: '执行失败'
				  }
				],
				options2: [
				  {
					value: '数据清洗任务',
					label: '数据清洗任务'
				  }, {
					value: '数据汇聚任务',
					label: '数据汇聚任务'
				  },{
					value: '质量稽核任务',
					label: '质量稽核任务'
				  }
				]
			}
		},
		mounted: function () {
		  // this.drawLine();
		  this.dialogFormVisible7 = false
		  this.$nextTick(function () {
        this.drawLine();
        this.drawLine2();
        this.drawLine3();
        this.drawLine4();
        this.drawLine5();
      });
		},
		methods: {
			drawLine(){
				var myChart = this.$refs.myChart;
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

        let aaChart = echarts.init(myChart);
        aaChart.setOption(option);
			},



			drawLine2(){
				var myChart2 = this.$refs.myChart2;
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
				let bbChart = echarts.init(myChart2);
        bbChart.setOption(option);
			},


			drawLine3(){
				var myChart3 = this.$refs.myChart3;
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

        let ccChart = echarts.init(myChart3);
        ccChart.setOption(option);
			},


			drawLine4(){
				var myChart4 = this.$refs.myChart4;
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

        let ddChart = echarts.init(myChart4);
        ddChart.setOption(option);
			},

			drawLine5(){
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

        let ddChart = echarts.init(myChart5);
        ddChart.setOption(option);
			},


			 handleChangea(val) {
        console.log(val);
      },


      addNewItem(){
      	this.dialogFormVisible = false;
      	this.$router.push('dataAuditB');
      },

			addItem(){
				this.dialogFormVisible = true;
			},

			editItem(){
				this.dialogFormVisible2 = true;
			},

			moreInfo(){
				this.dialogFormVisible7 = true
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


			handleNodeClick7(data){
				console.log(data)
				let _this = this;
				_this.form9.sources = data.label;
			},


			// downloadPdf(){
			// 	let _this = this;
			// 	_this.dialogFormVisible7 = false;
			// 	getPdf();
			// }

		}
	}

</script>

<style scoped lang="scss">
	.table{
		height: 100%;
		background-color: #fff;	
		padding-top:10px;
	}
	.tablist{
		padding:0 20px 10px;
		position: relative;
		.rightContorl{
			/*position: absolute;
			top:0px;
			right: 10px;
			z-index: 2;*/
		}
	}
	.msTitle{
		font-size: 18px;
		color: #000;
		font-weight: bold;
		padding:10px 20px 0;
	}
	.datalist{
		li{
			display: flex;
			flex-wrap: nowrap;
			justify-content: space-between;
			border-bottom: 1px solid #ebebeb;
			padding:10px 0;
			 align-items:center;
			h5{
				font-size: 16px;
				color: #333;
				b{
					color: #fff;
					padding:2px 10px;
					font-size: 14px;
					margin-left: 10px;
				}
				.doing{
					background-color: #1c88ff;
				}
				.finish{
					background-color: #f90;
				}
			}
			p{
				color: #666;
				line-height: 30px;
				font-size: 14px;
				span{
					padding-right: 10px;
				}
			}
			.controlIcon{
				span{
					position: relative;
					top:-3px;
				}
				.fa{
					color: #999;
					/*font-size: 20px;*/
					margin-right: 4px;
				}
				.fa-edit:hover{color:#2dc8ff;}
				.fa-trash-o:hover{color:#f26;}
				.fa-send-o:hover{color:#a627c6;}
				.fa-list:hover{color:#1685da;}
			}
		}
	}

	.el-tabs__nav-wrap{
		padding:10px 0;
	}

	.datalist{
		ul{
			li{
				display: flex;
				justify-content: space-between;
				padding:10px 20px 10px 10px;
				border-bottom: 1px solid #ebebeb;
				align-items: center;
				position: relative;
				.state{
					position: absolute;
					padding:2px 10px;
					background-color: #f90;
					color:#fff;
					top:0;
					right:0;
					font-size:12px;
				}
				.iconControl{
					.fa{
						color: #666;
						/*font-size:20px;*/
						margin-left:10px;
					}
					.fa-edit:hover{
						color: #2fc9fd;
					}
					.fa-trash-o:hover{
						color:#ff2267;
					}
					.fa-server:hover{
						color:#14c7b4;
					}
					.fa-file-text-o:hover{
						color:#1685da;
					}
				}

				dl{
					dt{
						display: inline-block;
						vertical-align: middle;
						width: 50px;
						padding:0 10px;
					}
					dd{
						display: inline-block;
						vertical-align: middle;
						padding-left: 10px;
						h5{
							font-size: 16px;
							color: #000;
							line-height: 28px;
						}
						p{
							font-size: 14px;
							line-height: 26px;
							span{
								color: #666;
								padding-right: 10px;
							}
							em{
								font-style: normal;
								color: #000;
								padding-right: 4px;
							}
						}
					}
				}
			}
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
		.el-textarea__inner{
			height: 100%;
		}
	}


	/*.ml_itema{
		display: flex;
		border-bottom:1px dashed #ccc;
		>div{
			width:50%;
			padding:10px 5px;
		}
	}*/

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
</style>

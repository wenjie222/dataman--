<template>
	<div class="table">
		<div class="container">
			<div class="tablist clearfix">
				<div style="height: 1px;display: flex;justify-content: space-between;z-index: 22;position: relative;">
					<span>&nbsp;</span>
					<span style="position: relative;top:4px;right: 10px;">
						<!-- <el-button type="danger"><i class="fa fa-play-circle-o"></i> 执行</el-button> -->
						<el-button type="primary" @click="dialogFormVisible7 = true">查看质量报告</el-button>
					</span>
				</div>
				<el-tabs v-model="activeName" @tab-click="handleClick" type="card">
					<el-tab-pane label="t_profile" name="first">
						<div class="msTitle">
							<h5>客户身份表</h5>
						</div>
						<div class="main">
							<div class="mainLeft">
								<div class="item_a">
									<p><span>数据源名称:</span> <em>移动数据资源库</em></p>
									<p><span>数据源地址:</span> <em>192.168.10.126:3306</em></p>
									<p><span>数据表:</span> <em>t_profile</em></p>
								</div>
								<div class="item_b">
									<div class="title">列数据详情</div>
									<ul>
										<li>
											<div class="mintitle">
												<span>gender</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: block;">
												<el-tabs v-model="activeNameA" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析" name="first">
														<ol class="panelList">
															<li style="width: 80%">
																<span>男</span>
																<em>73644</em>
															</li>
															
															<li style="width: 76%">
																<span>女</span>
																<em>73982</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>列空值:</span> <em class="text_b">0</em></li>
																<li><span>列完整度:</span> <em class="text_b">100%</em></li>
																<li><span>列唯一性:</span> <em class="text_b">--</em></li>
																<li><span>列一致性:</span> <em class="text_b">95%</em></li>
																<li><span>列合规度:</span> <em class="text_b">95%</em></li>
																<li><span>列评分:</span> <em class="text_b">92</em></li>
															</ol>
															
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em> 金融</em></li>
																<li><span>实体模型:</span> <em>金融客户数据模型</em></li>
																<li><span>列映射:</span> <em>性别</em></li>
																<li><span>列合法性标准:</span> <em>性别校验规则</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>phone</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>idno</span>
												<em><i class="fa fa-times-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="mainRight">
								<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">

									<el-table-column prop="numId" align="center" label="序号" width="100">
									</el-table-column>

									<el-table-column prop="idNo" align="center" label="idno(身份证号)" sortable width="180">
									</el-table-column>

									<el-table-column prop="name" align="center" label="name(姓名)" width="100">
									</el-table-column>

									<el-table-column prop="gender" align="center" label="gender(性别)" width="120">
									</el-table-column>

									<el-table-column prop="age" align="center" label="age(年龄)" width="80">
									</el-table-column>
									<el-table-column prop="mobilephone" align="center" label="phone(手机号)" width="160">
									</el-table-column>

									<!-- <el-table-column prop="phone" align="center" label="phone(固定电话)">
									</el-table-column> -->

									<el-table-column prop="regist" align="center" label="regist_time(注册时间)">
									</el-table-column>

								</el-table>
								<div class="pagination">
									<el-pagination background @current-change="handleCurrentChange" :page-size="10"
					  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
									</el-pagination>
								</div>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="t_dx" name="second">
						<div class="msTitle">
							<h5>短信行为表</h5>
						</div>
						<div class="main">
							<div class="mainLeft">
								<div class="item_a">
									<p><span>数据源名称:</span> <em>移动数据资源库</em></p>
									<p><span>数据源地址:</span> <em>192.168.10.123:3306</em></p>
									<p><span>数据表:</span> <em>t_dx</em></p>
								</div>
								<div class="item_b">
									<div class="title">列数据详情</div>
									<ul>
										<li>
											<div class="mintitle">
												<span>c_dxxh</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: block;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析" name="first">
														<ol class="panelList">
															<li style="width: 50%">
																<span>22001</span>
																<em>1</em>
															</li>
															<li style="width: 50%">
																<span>22002</span>
																<em>1</em>
															</li>
															<li style="width: 50%">
																<span>22003</span>
																<em>1</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>列空值:</span> <em class="text_b">0</em></li>
																<li><span>列完整度:</span> <em class="text_b">100%</em></li>
																<li><span>列唯一性:</span> <em class="text_b">--</em></li>
																<li><span>列一致性:</span> <em class="text_b">95%</em></li>
																<li><span>列合规度:</span> <em class="text_b">95%</em></li>
																<li><span>列评分:</span> <em class="text_b">92</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>网络</em></li>
																<li><span>实体模型:</span> <em>短信数据模型</em></li>
																<li><span>列映射:</span> <em>短信序号</em></li>
																<li><span>列合法性标准:</span> <em>数值验证规则</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>c_ydz</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>c_ydzyysid</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>c_mddz</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>c_mddzyysid</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>c_dxnr</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="mainRight">
								<el-table :data="tableData81" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						  		<el-table-column prop="text1" align="center" label="序号"></el-table-column>
						  		<el-table-column prop="text2" align="center" label="c_dxxh"></el-table-column>

						  		<el-table-column prop="text3" align="center" label="c_yysip"></el-table-column>
						  		<el-table-column prop="text4" align="center" label="c_ydz"></el-table-column>
						  		<el-table-column prop="text5" align="center" label="c_ydzyysid"></el-table-column>

						  		<el-table-column prop="text6" align="center" label="c_ydzhd"></el-table-column>

						  		<el-table-column prop="text7" align="center" label="c_ydzsssid"></el-table-column>
						  		<el-table-column prop="text8" align="center" label="c_ydzsphm"></el-table-column>
						  		<el-table-column prop="text9" align="center" label="c_mddz"></el-table-column>
						  		<el-table-column prop="text10" align="center" label="c_mddzyysid"></el-table-column>
						  		<el-table-column prop="text11" align="center" label="c_mddzhd"></el-table-column>
						  		<el-table-column prop="text12" align="center" label="c_mddzsphm"></el-table-column>
						  		<el-table-column prop="text13" align="center" label="c_sfccdx"></el-table-column>
						  		<el-table-column prop="text14" align="center" label="c_ccdxxh"></el-table-column>
						  		<el-table-column prop="text15" align="center" label="c_ccdxxlh"></el-table-column>
						  		<el-table-column prop="text16" align="center" show-overflow-tooltip label="c_dxnr"></el-table-column>

						  		<el-table-column prop="text17" align="center" label="c_nrzymd5"></el-table-column>
						  	</el-table>
								<div class="pagination">
									<el-pagination background @current-change="handleCurrentChange" :page-size="10"
					  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
									</el-pagination>
								</div>
							</div>
						</div>
					</el-tab-pane>

					<el-tab-pane label="t_weblog" name="third">
						<div class="msTitle">
							<h5>上网日志表</h5>
						</div>
						<div class="main">
							<div class="mainLeft">
								<div class="item_a">
									<p><span>数据源名称:</span> <em>移动数据资源库</em></p>
									<p><span>数据源地址:</span> <em>192.168.10.123:3306</em></p>
									<p><span>数据表:</span> <em>t_weblog</em></p>
								</div>
								<div class="item_b">
									<div class="title">列数据详情</div>
									<ul>
										<li>
											<div class="mintitle">
												<span>phone</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: block;">
												<el-tabs v-model="activeNameC" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析" name="a">
														<ol class="panelList">
															<li  style="width: 63%">
																<span>18707258394</span>
																<em>632</em>
															</li>
															<li style="width: 55%">
																<span>15225386017</span>
																<em>547</em>
															</li>
															<li style="width: 44%">
																<span>18659063812</span>
																<em>446</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="b">
														<div class="info_b">
															<ol>
																<li><span>列空值:</span> <em class="text_b">0</em></li>
																<li><span>列完整度:</span> <em class="text_b">100%</em></li>
																<li><span>列唯一性:</span> <em class="text_b">--</em></li>
																<li><span>列一致性:</span> <em class="text_b">95%</em></li>
																<li><span>列合规度:</span> <em class="text_b">95%</em></li>
																<li><span>列评分:</span> <em class="text_b">92</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="c">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>网络</em></li>
																<li><span>实体模型:</span> <em>上网日志数据模型</em></li>
																<li><span>列映射:</span> <em>手机号</em></li>
																<li><span>列合法性标准:</span> <em>手机号验证规则</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>imei</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>domain</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
											<div class="abmain" style="display: none;">
												<el-tabs v-model="activeNameB" @tab-click="handleClick" type="card">
													<el-tab-pane label="数据剖析">
														<ol class="panelList">
															<li>
																<span>张三王</span>
																<em>10</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
															<li style="width: 50%">
																<span>张三王</span>
																<em>5</em>
															</li>
														</ol>
														<div class="info_s">注：仅展示前10个文本数据项</div>
														<div class="info_s"><a href="">新增文本筛选</a></div>
													</el-tab-pane>
													<el-tab-pane label="数据质量" name="second">
														<div class="info_b">
															<ol>
																<li><span>总数量:</span> <em class="text_b">200</em></li>
															</ol>
															<ol>
																<li><span>空数据量:</span> <em>200</em></li>
																<li><span>非空数据量:</span> <em>200</em></li>
																<li><span>数据完整度:</span> <em>89.9</em></li>
															</ol>
															<ol>
																<li><span>合规数据:</span> <em class="text_b">200</em></li>
																<li><span>数据合规度:</span> <em class="text_b">50%</em></li>
															</ol>
														</div>
													</el-tab-pane>
													<el-tab-pane label="业务模型" name="third">
														<div class="info_b">
															<ol>
																<li><span>行业标准:</span> <em>200</em></li>
																<li><span>实体模型:</span> <em>200</em></li>
																<li><span>列映射:</span> <em>89.9</em></li>
																<li><span>列合法性标准:</span> <em>89.9</em></li>
															</ol>
														</div>
													</el-tab-pane>
												</el-tabs>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>url</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
										</li>
										<li>
											<div class="mintitle">
												<span>access_time</span>
												<em><i class="fa fa-check-circle"></i></em>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="mainRight">
								<el-table :data="tableData82" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						  		<el-table-column prop="text1" align="center" label="序号"></el-table-column>
						  		<el-table-column prop="text2" align="center" label="phone"></el-table-column>
						  		<el-table-column prop="text3" align="center" label="imei" width="160"></el-table-column>
						  		<el-table-column prop="text4" align="center" label="domain"></el-table-column>
						  		<el-table-column prop="text5" align="center" show-overflow-tooltip label="url"></el-table-column>
						  		<el-table-column prop="text6" align="center" label="access_time"></el-table-column>
						  		<el-table-column prop="text7" align="center" label="label"></el-table-column>
						  	</el-table>
								<div class="pagination">
									<el-pagination background @current-change="handleCurrentChange" :page-size="10"
					  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
									</el-pagination>
								</div>
							</div>
						</div>
					</el-tab-pane>
			  </el-tabs>
			</div>

			<el-dialog title="实体模型" :visible.sync="dialogFormVisible3" width="440px">

			<el-form :model="form7" ref="form7" class="add el-form el-form--label-right">
				

				<el-form-item label="行业标准" :label-width="formLabelWidth">
		      <el-select v-model="form7.region2" placeholder="请选择">
		        <el-option label="精英人物通信行为" value="shanghai"></el-option>
		        <el-option label="精英人物通信行为" value="beijing"></el-option>
		        <el-option label="精英人物通信行为" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>


		    <el-form-item label="实体模型" :label-width="formLabelWidth">
		      <el-select v-model="form7.region1" placeholder="请选择">
		        <el-option label="分组A" value="shanghai" ></el-option>
		        <el-option label="分组B" value="beijing"></el-option>
		        <el-option label="分组C" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>

		     <el-form-item label="实体模型描述" prop="desc" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form7.desc" :rows="6"></el-input>
			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
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
					  		<p><span>实体模型:</span> <em>网络数据客户身份模型</em></p>
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
				  <el-tab-pane label="t_dx">
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
			<div slot="footer" class="dialog-footer">
		    <a @click="dialogFormVisible7 = false" href="../static/img/DQ-report.pdf" download="DQ-report.pdf">下  载</a>&nbsp;&nbsp;
		    <el-button type="primary" @click="dialogFormVisible7 = false">确 定</el-button>
		  </div>
		</el-dialog>






		</div>
	</div>
</template>

<script>
	import echarts from 'echarts';
	import moment from 'moment/moment';
	export default {
		name: 'basetable',
		data() {
			return {
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
				formLabelWidth: '100px',
				dialogFormVisible3: false,
				dialogFormVisible7: true,
				form7: {
					region1: 'shanghai',
					region2: 'shanghai',
					desc: '处理任务相关的数据，包括任务基本信息处理人物相关的数据，包括人物基本信息和通话行为数据。处理任务相关的数据，包括任务基本信息处理人物相关的数据，包括人物基本信息和通话行为数据。'
				},

				tableData: [
					{
						numId: '1',
						idNo: '37142119********5X',
						name: '张飞扬',
						gender: '男',
						age: '22',
						mobilephone: '13098761234',
						phone: '010-67217279',
						regist: '2018-08-25 04:20:43'
					},{
						numId: '2',
						idNo: '13090319********9X',
						name: '邹紫萱',
						gender: '男',
						age: '30',
						mobilephone: '18039684510',
						phone: '18039684510',
						regist: '2013-09-25 07:50:46'
					},{
						numId: '3',
						idNo: '37142119********22',
						name: '吴明',
						gender: '女',
						age: '34',
						mobilephone: '14704728915',
						phone: '010-67217279',
						regist: '2018-01-05 12:28:10'
					},{
						numId: '4',
						idNo: '37142119********28',
						name: '马颂',
						gender: '男',
						age: '37',
						mobilephone: '13479038654',
						phone: '010-67217279',
						regist: '2018-09-06 18:03:53'
					},{
						numId: '5',
						idNo: '37142119********19',
						name: '方然',
						gender: '女',
						age: '28',
						mobilephone: '18039684510',
						phone: '010-67217279',
						regist: '2018-09-06 16:09:51'
					},{
						numId: '6',
						idNo: '13090319********58',
						name: '鲁哲',
						gender: '男',
						age: '36',
						mobilephone: '15052718630',
						phone: '010-67217279',
						regist: '2018-09-06 14:03:33'
					},{
						numId: '7',
						idNo: '37142119********83',
						name: '郑子涵',
						gender: '女',
						age: '30',
						mobilephone: '18957926803',
						phone: '010-67217279',
						regist: '2018-09-06 13:13:45'
					},{
						numId: '8',
						idNo: '37012319********76',
						name: '卫鑫',
						gender: '男',
						age: '18',
						mobilephone: '13851802964',
						phone: '010-67217279',
						regist:'2018-09-06 13:13:45'
					},
				],
				tableData81: [
					{
					  text1:'1',
					  text2:'22001',
					  text3:'144.82.15.217',
					  text4:'13397227094',
					  text5:'1',
					  text6:'133',
					  text7:'13',
					  text8:'NULL',
					  text9:'13365119312',
					  text10:'1',
					  text11:'133',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'2',
					  text2:'22002',
					  text3:'132.166.109.34',
					  text4:'15067447898',
					  text5:'2',
					  text6:'150',
					  text7:'15',
					  text8:'NULL',
					  text9:'15718200427',
					  text10:'3',
					  text11:'157',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'3',
					  text2:'22003',
					  text3:'168.72.201.115',
					  text4:'15219331828',
					  text5:'1',
					  text6:'152',
					  text7:'27',
					  text8:'NULL',
					  text9:'13568138235',
					  text10:'2',
					  text11:'135',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'},
					{
					  text1:'4',
					  text2:'22004',
					  text3:'140.153.201.33',
					  text4:'15794806518',
					  text5:'2',
					  text6:'157',
					  text7:'28',
					  text8:'NULL',
					  text9:'15244070772',
					  text10:'3',
					  text11:'152',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'5',
					  text2:'22005',
					  text3:'154.28.48.66',
					  text4:'13535840954',
					  text5:'1',
					  text6:'135',
					  text7:'41',
					  text8:'NULL',
					  text9:'13327954811',
					  text10:'2',
					  text11:'133',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'6',
					  text2:'22006',
					  text3:'185.91.80.241',
					  text4:'13425279700',
					  text5:'3',
					  text6:'134',
					  text7:'38',
					  text8:'NULL',
					  text9:'13141899048',
					  text10:'1',
					  text11:'131',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'7',
					  text2:'22007',
					  text3:'150.165.203.235',
					  text4:'15812260227',
					  text5:'3',
					  text6:'158',
					  text7:'17',
					  text8:'NULL',
					  text9:'15662478051',
					  text10:'1',
					  text11:'156',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'8',
					  text2:'22008',
					  text3:'180.244.203.168',
					  text4:'15217263103',
					  text5:'1',
					  text6:'152',
					  text7:'42',
					  text8:'NULL',
					  text9:'13218254437',
					  text10:'2',
					  text11:'132',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					},
					{
					  text1:'9',
					  text2:'22009',
					  text3:'158.88.109.247',
					  text4:'15948489380',
					  text5:'3',
					  text6:'159',
					  text7:'28',
					  text8:'NULL',
					  text9:'15637707213',
					  text10:'3',
					  text11:'156',
					  text12:'NULL',
					  text13:'0',
					  text14:'0',
					  text15:'0',
					  text16:'家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。',
					  text17:'NULL'
					}
				],

				tableData82:[
					{
					  text1:'1',
					  text2:'18707258394',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-01/6/DVF9QSO4REARNPQ0.html',
					  text6:'2018-09-05 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'2',
					  text2:'15225386017',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-02/11/DV3N66LE8HJTB3ZE.html',
					  text6:'2018-10-14 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'3',
					  text2:'18659063812',
					  text3:'865712096315834',
					  text4:'www.cnblogs.com',
					  text5:'https://www.cnblogs.com/jthb/p/4152195.html',
					  text6:'2018-12-06 00:00:00',
					  text7:'技术'
					},
					{
					  text1:'4',
					  text2:'15836415078',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-03/12/DVWQE94GPM68AGO7.html',
					  text6:'2018-12-20 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'5',
					  text2:'15340682153',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-04/6/DVQ4G0OR7151KV5X.html',
					  text6:'2018-09-06 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'6',
					  text2:'15846950327',
					  text3:'865712096315834',
					  text4:'sports.sina.com.cn',
					  text5:'http://sports.sina.com.cn/basketball/nba/2018-01-03/doc-ihnfikve6375955.shtml',
					  text6:'2018-09-19 00:00:00',
					  text7:'体育'
					},
					{
					  text1:'7',
					  text2:'15617235409',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-02/0/DVGPQAKT44QCN8LC.html',
					  text6:'2018-10-18 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'8',
					  text2:'15013647958',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-05/12/DVO07RC700NH0X6N.html',
					  text6:'2018-12-10 00:00:00',
					  text7:'新闻'
					},
					{
					  text1:'9',
					  text2:'13619832607',
					  text3:'865712096315834',
					  text4:'www.cnblogs.com',
					  text5:'https://www.cnblogs.com/jthb/p/0257070.html',
					  text6:'2018-11-26 00:00:00',
					  text7:'技术'
					},
					{
					  text1:'10',
					  text2:'15559312804',
					  text3:'865712096315834',
					  text4:'news.163.com',
					  text5:'https://news.163.com/18/18-01-02/0/DVCE8W8TWRIDHOL4.html',
					  text6:'2018-12-18 00:00:00',
					  text7:'新闻'
					}
				],


				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
				activeName: 'first',
				activeNameA: 'first',
				activeNameB: 'first',
				activeNameC: 'a',
				formInline: {
					userType: ''
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

				activeNamesa: [],


				options: [
				  {
					value: 0,
					label: '线上工作区'
				  }, {
					value: 1,
					label: '测试工作区'
				  }
				]
			}
		},
		mounted: function () {
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
			 handleChangea(val) {
        console.log(val);
      },
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



			moreInfo(){
				this.dialogFormVisible3 = true;
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

		}
	}

</script>

<style scoped lang="scss">
	.table{
		/*height: 100%;*/
		background-color: #fff;	
		padding-top:10px;
	}
	.tablist{
		padding:0 20px 10px;
		position: relative;
		.rightContorl{
			position: absolute;
			top:0px;
			right: 10px;
			z-index: 2;
		}
	}
	.msTitle{
		font-size: 18px;
		color: #000;
		font-weight: bold;
		padding:10px;
		display: flex;
		justify-content: space-between;
		line-height: 32px;
	}

	.main{
		display: flex;
		white-space: nowrap;
		justify-content: space-between;
		align-items: top;
		.mainLeft{
			width:292px;
			.item_a{
				padding:10px 0;
				border:1px solid #ccc;
				p{
					line-height: 30px;
					font-size: 14px;
					span{
						display: inline-block;
						width:90px;
						line-height: 30px;
						vertical-align: middle;
						text-align: right;
					}
					em{
						display: inline-block;
						vertical-align: middle;
						font-style: normal;
					}
				}
			}
			.item_b{
				border:1px solid #ccc;
				margin-top:10px;
				.title{
					line-height: 32px;
					/*border-bottom:1px solid #ccc;*/
					padding:0 10px;
				}
				.mintitle{
					display: flex;
					padding:0 10px;
					border-top:1px solid #ccc;
					border-bottom:1px solid #ccc;
					justify-content: space-between;
					line-height: 32px;
					.fa-check-circle{color: #0079d7;}
					.fa-times-circle{color: #ff2266;}
				}
			}
		}
		.mainRight{
			flex:1;
			margin-left: 10px;
			overflow:auto;
		}
	}

	.panelList{
		margin:0 4px;
		li{
			display: flex;
			justify-content: space-between;
			min-width: 100px;
			background-color: #1c88ff;
			color: #fff;
			margin-bottom: 6px;
			padding:4px 6px;
			font-size: 12px;
			em{
				font-style: normal;
			}
		}
	}

	.info_s{
		font-size: 12px;
		line-height: 24px;
		padding:0 10px;
		a{
			color: #0090ff;
		}
	}

	.info_b{
		padding:0 10px;
		ol{
			border-bottom:1px dashed #ccc;
			padding:4px 0;
			li{
				font-size: 14px;
				font-style: normal;
				line-height: 32px;
				list-style: none;
				span{
					display: inline-block;
					width:100px;
					text-align: right;
				}
				em{
					font-style: normal;
				}
				.text_b{
					color: #0090ff;
				}
			}
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

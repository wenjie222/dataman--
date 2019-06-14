<template>
	<div class="table">
		<div class="container">
			<div class="topNav">
				<span>&nbsp;</span>
				<span>
					<el-button type="primary">添加表</el-button>
					<router-link to="dataAuditView"><el-button type="danger"><i class="fa fa-play-circle-o"></i> 执行</el-button></router-link>
					<el-button type="primary">保存</el-button>
				</span>
			</div>
			<template>
			  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			    <el-tab-pane label="t_profile" name="first" class="topWrapItem">
			    	<div class="main">
			    		<div class="mainLeft">
			    			<div style="padding:0 10px 10px"><el-button type="primary"  @click="dialogFormVisible = true">选择实体模型</el-button></div>
			    			<div style="padding:0 10px;">
									 <div data-v-8380f9d6="" class="el-table table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--small">
									   <div class="el-table__body-wrapper is-scrolling-none">
									   	<table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="100%">
									     <colgroup>
									      <col name="el-table_2_column_4" width="12%" />
									      <col name="el-table_2_column_5" width="12%" />
									      <col name="el-table_2_column_6" width="12%" />
									      <col name="el-table_2_column_7" width="12%" />
									      <col name="el-table_2_column_8" width="12%" />
									      <col name="el-table_2_column_9" width="12%" />
									     </colgroup>
									     <tbody>
									      <tr class="el-table__row tableFrist">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>idno</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>name</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>gender</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>age</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>phone</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>regist_time</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      
									      </tr>
									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>用户ID</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>姓名</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>性别</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>年龄</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>电话号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>注册时间</span>
										      </td>
									      </tr>

									       <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>身份证号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-button @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>手机号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-button  @click="addTag2" type="text">设置标准列映射</el-button>
										      </td>
									      </tr>



									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>17142119********5X</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>张飞扬</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>22</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13098761234</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-08-25 04:20:43</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>23090319********9X</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>邹紫萱</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>30</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18039684510</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2013-09-25 07:50:46</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>37142119********22</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>吴明</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>34</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>14704728915</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-01-05 12:28:10</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>47142119********28</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>马颂</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>37</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13479038654</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 18:03:53</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>57142119********19</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>方然</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>28</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18039684510</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 16:09:51</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>63090319********58</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>鲁哲</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>36</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>15052718630</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 14:03:33</span>
										      </td>
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>77142119********83</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>郑子涵</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>女</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>30</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>18957926803</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 13:13:45</span>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>87012319********76</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>卫鑫</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>男</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>18</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>13851802964</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>2018-09-06 11:16:53</span>
										      </td>
									      </tr>
									      



									      <!---->
									     </tbody>
									    </table>

									    <!---->
									    <!---->
									   </div>
									   <!---->
									   <!---->
									   <!---->
									   <!---->
									   <div class="el-table__column-resize-proxy" style="display: none;"></div>
									  </div>

										
									<div class="pagination">
										<el-pagination background @current-change="handleCurrentChange" :page-size="10"
						  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
										</el-pagination>
									</div>
								</div>
			    		</div>
			    		
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="t_dx" name="second">
			    	<div class="main">
			    		<div class="mainLeft">
			    			<div style="padding:0 10px 10px"><el-button type="primary"  @click="dialogFormVisible = true">选择实体模型</el-button></div>
			    			<div style="padding:0 10px;">
									 <div data-v-8380f9d6="" class="el-table table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--small">
									   <div class="el-table__body-wrapper is-scrolling-none">
									    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="300%">
									     <colgroup>
									      <!-- <col name="el-table_2_column_4" width="100px" />
									      <col name="el-table_2_column_5" width="100px" />
									      <col name="el-table_2_column_6" width="100px" />
									      <col name="el-table_2_column_7" width="100px" />
									      <col name="el-table_2_column_8" width="100px" />
									      <col name="el-table_2_column_9" width="100px" />
									      <col name="el-table_2_column_10" width="100px" />
									      <col name="el-table_2_column_11" width="100px" />
									      <col name="el-table_2_column_12" width="100px" />
									      <col name="el-table_2_column_13" width="100px" />
									      <col name="el-table_2_column_14" width="100px" />
									      <col name="el-table_2_column_15" width="100px" />
									      <col name="el-table_2_column_16" width="100px" />
									      <col name="el-table_2_column_17" width="100px" />
									      <col name="el-table_2_column_18" width="100px" />
									      <col name="el-table_2_column_19" width="100px" /> -->
									     </colgroup>
									     <tbody>
									      <tr class="el-table__row tableFrist">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>c_dxxh</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>c_yysip</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>c_ydz</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>c_ydzyysid</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>

										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>c_ydzhd</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>


										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>c_ydzsssid</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>

										      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
										      	<span>c_ydzsphm</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>c_mddz</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
										      	<span>c_mddzyysid</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
										      	<span>c_mddzhd</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
										      	<span>c_mddzsphm</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
										      	<span>c_sfccdx</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_16 is-center el-table-column--selection">
										      	<span>c_ccdxxh</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_17 is-center el-table-column--selection">
										      	<span>c_ccdxxlh</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_18 is-center el-table-column--selection">
										      	<span>c_dxnr</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td><td rowspan="1" colspan="1" class="el-table_2_column_19 is-center el-table-column--selection">
										      	<span>c_nrzymd5</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      
										      
									      </tr>
									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    int<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>短信序号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>运营商IP</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>源地址</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>源地址运营商ID</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>源地址号段</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>源地址所属省</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
										      	<span>源地址SP号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>目的地址</span>
										      </td>

										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>目的地址运营商ID</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>目的地址号段</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>目的地址SP号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>是否超长短信</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>超长短信序号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>超长短信序列号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>短信内容</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
										      	<span>内容MD5校验码</span>
										      </td>
										      
									      </tr>

									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>短信序号</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-button @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>源地址</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>源地址运营商ID</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>

										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>目的地址</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>目的地址运营商ID</span>
										      </td>

										       <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>

										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>短信内容</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-button  @click="addTag9" type="text">设置标准列映射</el-button>
										      </td>
									      </tr>

												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22001</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>144.82.15.217</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13397227094</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>133</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13365119312</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>133</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22002</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>132.166.109.34</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15067447898</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>150</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15718200427</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>157</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22003</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>168.72.201.115</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15219331828</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>152</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>27</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13568138235</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>135</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22004</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>140.153.201.33</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15794806518</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>157</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>28</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15244070772</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>152</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22005</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>154.28.48.66</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13535840954</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>135</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>41</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13327954811</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>133</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22006</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>185.91.80.241</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13425279700</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>134</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>38</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13141899048</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>131</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22007</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>150.165.203.235</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15812260227</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>158</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>17</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15662478051</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>156</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22008</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>180.244.203.168</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15217263103</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>152</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>42</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13218254437</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>132</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22009</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>158.88.109.247</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15948489380</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>159</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>28</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15637707213</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>3</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>156</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>
												<tr class="el-table__row">
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>22010</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>119.105.15.174</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>15635335897</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>2</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>156</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>29</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>13529678070</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>1</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>135</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>0</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>家装提示木工篇：柜体背板与墙面接触的地方要两道防潮处理一层防潮漆一层防潮膜，可以有效避免潮湿的天气柜体起霉的问题。——美迪小潘。</span>
												</td>
												<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
												<span>NULL
												</span>
												</td>
												</tr>

									     



									      <!---->
									     </tbody>
									    </table>
									    <!---->
									    <!---->
									   </div>
									   <!---->
									   <!---->
									   <!---->
									   <!---->
									   <div class="el-table__column-resize-proxy" style="display: none;"></div>
									  </div>

										
									<div class="pagination">
										<el-pagination background @current-change="handleCurrentChange" :page-size="10"
						  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
										</el-pagination>
									</div>
								</div>
			    		</div>
			    	</div>
			    </el-tab-pane>



			    <el-tab-pane label="t_weblog" name="third">
			    	<div class="main">
			    		<div class="mainLeft">
			    			<div style="padding:0 10px 10px"><el-button type="primary"  @click="dialogFormVisible = true">选择实体模型</el-button></div>
			    			<div style="padding:0 10px;">
									 <div data-v-8380f9d6="" class="el-table table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--small">
									   <div class="el-table__body-wrapper is-scrolling-none">
									    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="100%">
									     <colgroup>
									      <col name="el-table_2_column_4" width="12%" />
									      <col name="el-table_2_column_5" width="12%" />
									      <col name="el-table_2_column_6" width="12%" />
									      <col name="el-table_2_column_7" width="12%" />
									      <col name="el-table_2_column_8" width="12%" />
									      <col name="el-table_2_column_9" width="12%" />
									     </colgroup>
									     <tbody>
									      <tr class="el-table__row tableFrist">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>phone</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>imei</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>domain</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>url</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>access_time</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>label</span>
										      	<b @click="addTag3"><i class="fa fa-edit"></i></b>
										      </td>
										      
									      </tr>
									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<el-dropdown>
														  <span class="el-dropdown-link">
														    varchar<i class="el-icon-arrow-down el-icon--right"></i>
														  </span>
														  <el-dropdown-menu slot="dropdown">
														    <el-dropdown-item>int</el-dropdown-item>
																<el-dropdown-item>float</el-dropdown-item>
																<el-dropdown-item>double</el-dropdown-item>
																<el-dropdown-item>varchar</el-dropdown-item>
																<el-dropdown-item>long</el-dropdown-item>
																<el-dropdown-item>blob</el-dropdown-item>
																<el-dropdown-item>clob</el-dropdown-item>
														  </el-dropdown-menu>
														</el-dropdown>
										      </td>
										      
									      </tr>


									      <tr class="el-table__row">
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>手机号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<span>IMEI号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
										      	<span>访问域名</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
										      	<span>访问url</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
										      	<span>访问时间</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
										      	<span>网页标签</span>
										      </td>
									      </tr>

									      <tr>
									     		<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>手机号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>IMEI号码</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>访问域名</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>访问url</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
										      	<span>访问时间</span>
										      </td>
										      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
										      	<el-button @click="dialogFormVisible83 = true" type="text">设置标准列映射</el-button>
										      </td>
										    </tr>






									      
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15559312804</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-02/0/DVCE8W8TWRIDHOL4.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-12-18 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>13619832607</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>www.cnblogs.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://www.cnblogs.com/jthb/p/0257070.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-11-26 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>技术
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15013647958</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-05/12/DVO07RC700NH0X6N.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-12-10 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15617235409</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-02/0/DVGPQAKT44QCN8LC.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-10-18 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15846950327</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>sports.sina.com.cn</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>http://sports.sina.com.cn/basketball/nba/2018-01-03/doc-ihnfikve6375955.shtml</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-09-19 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>体育
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15340682153</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-04/6/DVQ4G0OR7151KV5X.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-09-06 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15836415078</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-03/12/DVWQE94GPM68AGO7.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-12-20 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>18659063812</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>www.cnblogs.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://www.cnblogs.com/jthb/p/4152195.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-12-06 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>技术
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>15225386017</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-02/11/DV3N66LE8HJTB3ZE.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-10-14 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>
													<tr class="el-table__row">
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>18707258394</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>865712096315834</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>news.163.com</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>https://news.163.com/18/18-01-01/6/DVF9QSO4REARNPQ0.html</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>2018-09-05 00:00:00</span>
													</td>
													<td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
													<span>新闻
													</span>
													</td>
													</tr>


									      



									      <!---->
									     </tbody>
									    </table>
									    <!---->
									    <!---->
									   </div>
									   <!---->
									   <!---->
									   <!---->
									   <!---->
									   <div class="el-table__column-resize-proxy" style="display: none;"></div>
									  </div>

										
									<div class="pagination">
										<el-pagination background @current-change="handleCurrentChange" :page-size="10"
						  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
										</el-pagination>
									</div>
								</div>
			    		</div>
			    	</div>
			    </el-tab-pane>

			    
			  </el-tabs>
			</template>
		</div>


		<!-- <el-dialog title="实体名称" :visible.sync="dialogFormVisible" width="440px">

			<el-form :model="form4" ref="form4" class="add el-form el-form--label-right">
				 <el-form-item label="实体名称" :label-width="formLabelWidth">
		      <el-select v-model="form4.region2" placeholder="请选择">
		        <el-option label="金融业务模型名称" value="shanghai"></el-option>
		        <el-option label="互联网精英任务数据模型" value="beijing"></el-option>
		        <el-option label="IT资产模型" value="test1"></el-option>
		        <el-option label="北京社保模型" value="test2"></el-option>
		      </el-select>
		    </el-form-item> 
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog> -->


		<el-dialog title="实体模型选择" :visible.sync="dialogFormVisible" width="440px">

			<el-form :model="form4" ref="form4" class="add el-form el-form--label-right">
				<el-form-item label="模型名称" :label-width="formLabelWidth">
			  	<el-input v-model="form5.sources" v-popover:popover8 auto-complete="off"></el-input>
		    	<el-popover
					  ref="popover8"
					  placement="bottom"
					  width="400"
					  trigger="click">
					  <div class="treePop" style="max-height: 200px;overflow-y: auto;">
					  	<el-tree
							  class="filter-tree"
							  :data="data8"
							  :props="defaultProps8"
							  default-expand-all
							  @node-click="handleNodeClick8"
							  ref="tree8">
							</el-tree>
					  </div>
					</el-popover>

			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
		  </div>
		</el-dialog>





		<el-dialog title="设置标准列映射" :visible.sync="dialogFormVisible2" width="440px">

			<el-form :model="form81" ref="form81" class="add el-form el-form--label-right">

				<!-- <el-form-item label="标签类型" :label-width="formLabelWidth">
		      <el-select v-model="form6.region1" placeholder="请选择">
		        <el-option label="系统标签" value="shanghai"></el-option>
		        <el-option label="自定义标签" value="beijing"></el-option>
		        <el-option label="分组A" value="test1"></el-option>
		      </el-select>
		    </el-form-item>

		    <el-form-item label="自定义标签名称" :label-width="formLabelWidth">
		      <el-input v-model="form6.name1" auto-complete="off"></el-input>
		    </el-form-item>




				 <el-form-item label="标签选择" :label-width="formLabelWidth">
		      <el-select v-model="form6.region2" multiple placeholder="请选择">
		        <el-option label="金融业务模型名称" value="shanghai"></el-option>
		        <el-option label="互联网精英任务数据模型" value="beijing"></el-option>
		        <el-option label="IT资产模型" value="test1"></el-option>
		        <el-option label="北京社保模型" value="test2"></el-option>
		      </el-select>
		    </el-form-item> -->

		    <el-form-item label="实体模型列映射" :label-width="formLabelWidth">
		      <el-select v-model="form81.region3" placeholder="请选择">
		        <el-option label="姓名" value="姓名"></el-option>
		        <el-option label="手机号" value="手机号"></el-option>
		        <el-option label="身份证号" value="身份证号"></el-option>
		        <el-option label="出生日期" value="出生日期"></el-option>
		        <el-option label="性别" value="性别"></el-option>
		        <el-option label="注册时间" value="注册时间"></el-option>
		      </el-select>
		    </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="设置标准列映射" :visible.sync="dialogFormVisible8" width="440px">

			<el-form :model="form82" ref="form82" class="add el-form el-form--label-right">

				<!-- <el-form-item label="标签类型" :label-width="formLabelWidth">
		      <el-select v-model="form6.region1" placeholder="请选择">
		        <el-option label="系统标签" value="shanghai"></el-option>
		        <el-option label="自定义标签" value="beijing"></el-option>
		        <el-option label="分组A" value="test1"></el-option>
		      </el-select>
		    </el-form-item>

		    <el-form-item label="自定义标签名称" :label-width="formLabelWidth">
		      <el-input v-model="form6.name1" auto-complete="off"></el-input>
		    </el-form-item>




				 <el-form-item label="标签选择" :label-width="formLabelWidth">
		      <el-select v-model="form6.region2" multiple placeholder="请选择">
		        <el-option label="金融业务模型名称" value="shanghai"></el-option>
		        <el-option label="互联网精英任务数据模型" value="beijing"></el-option>
		        <el-option label="IT资产模型" value="test1"></el-option>
		        <el-option label="北京社保模型" value="test2"></el-option>
		      </el-select>
		    </el-form-item> -->

		    <el-form-item label="实体模型列映射" :label-width="formLabelWidth">
		      <el-select v-model="form82.region3" placeholder="请选择">
		        <el-option label="短信序号" value="短信序号"></el-option>
		        <el-option label="源地址" value="源地址"></el-option>
		        <el-option label="地址运营商ID" value="地址运营商ID"></el-option>
		        <el-option label="目的地址" value="目的地址"></el-option>
		        <el-option label="目的地址运营商ID" value="目的地址运营商ID"></el-option>
		        <el-option label="短信内容" value="短信内容"></el-option>
		      </el-select>
		    </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible8 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible8 = false">确 定</el-button>
		  </div>
		</el-dialog>



		<el-dialog title="设置标准列映射" :visible.sync="dialogFormVisible83" width="440px">

			<el-form :model="form83" ref="form83" class="add el-form el-form--label-right">

				<!-- <el-form-item label="标签类型" :label-width="formLabelWidth">
		      <el-select v-model="form6.region1" placeholder="请选择">
		        <el-option label="系统标签" value="shanghai"></el-option>
		        <el-option label="自定义标签" value="beijing"></el-option>
		        <el-option label="分组A" value="test1"></el-option>
		      </el-select>
		    </el-form-item>

		    <el-form-item label="自定义标签名称" :label-width="formLabelWidth">
		      <el-input v-model="form6.name1" auto-complete="off"></el-input>
		    </el-form-item>




				 <el-form-item label="标签选择" :label-width="formLabelWidth">
		      <el-select v-model="form6.region2" multiple placeholder="请选择">
		        <el-option label="金融业务模型名称" value="shanghai"></el-option>
		        <el-option label="互联网精英任务数据模型" value="beijing"></el-option>
		        <el-option label="IT资产模型" value="test1"></el-option>
		        <el-option label="北京社保模型" value="test2"></el-option>
		      </el-select>
		    </el-form-item> -->

		    <el-form-item label="实体模型列映射" :label-width="formLabelWidth">
		      <el-select v-model="form83.region3" placeholder="请选择">
		        <el-option label="手机号" value="手机号"></el-option>
		        <el-option label="IMEI号码" value="IMEI号码"></el-option>
		        <el-option label="访问域名" value="访问域名"></el-option>
		        <el-option label="访问URL" value="访问URL"></el-option>
		        <el-option label="访问时间" value="访问时间"></el-option>
		      </el-select>
		    </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible83 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible83 = false">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="设置标准列映射" :visible.sync="dialogFormVisible9" width="440px">

			<el-form :model="form9" ref="form9" class="add el-form el-form--label-right">

				<el-form-item label="标签类型" :label-width="formLabelWidth">
		      <el-select v-model="form9.region1" placeholder="请选择">
		        <el-option label="系统标签" value="系统标签"></el-option>
		      </el-select>
		    </el-form-item>

		    <!-- <el-form-item label="标签选择" :label-width="formLabelWidth">
		      <el-select v-model="form9.region2" multiple placeholder="请选择">
		        <el-option label="金融业务模型名称" value="shanghai"></el-option>
		        <el-option label="互联网精英任务数据模型" value="beijing"></el-option>
		        <el-option label="IT资产模型" value="test1"></el-option>
		        <el-option label="北京社保模型" value="test2"></el-option>
		      </el-select>
		    </el-form-item> -->


		    <el-form-item label="列标签名称" :label-width="formLabelWidth">
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
		    <el-button @click="dialogFormVisible9 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible9 = false">确 定</el-button>
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
				dialogFormVisible: false,
				dialogFormVisible2: false,
				dialogFormVisible9: false,


				dialogFormVisible8: false,
				dialogFormVisible83: false,

				formLabelWidth: '110px',

				form4: {
					region1: '',
					region2: ''
				},

				form81: {
					region3: ''
				},

				form82: {
					region3: ''
				},

				form83: {
					region3: ''
				},


				form5:{
				sources: '',
				},

				form6: {
					region1: '',
					region2: '',
					region3: '',
					name1: ''
				},

				form9: {
					region1: '',
					region2: '',
					sources: ''
				},

				activeName2: 'first',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
				formInline: {
					 userType: ''
				},
				options: [
				  {
					value: 0,
					label: '全部类型'
				  }, {
					value: 1,
					label: '测试工作区'
				  }
				],
				tableData: [
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					},
					{
						columnName: 'TableA',
						dataSourceType: '数据库数据表',
						IP: '92.168.12.122',
						dataListType: 'MySQL',
						dataListName: 'TableB',
						createTime: '2019.03.12 15:30:00',
						total: '1722',
					}
				],

				data7: [
					{
	          label: '全部',
	          children: [{
	            label: '号码',
	            children: [
	            	{
	              	label: '物理身份',
	              	children: [
	              		{
	              			label: '身份证号'
	              		},
	              		{
	              			label: '手机号码'
	              		},
	              	]
	            	},
	            	{
	              	label: '虚拟身份',
	              	children: [{
	              			label: 'QQ号码'
	              		},
	              		{
	              			label: 'UIN'
	              		},
	              		{
	              			label: 'UID：'
	              		}
	              	]
	            	},
	            ]
	          },
	          {
	          	label: '时间日期',
	          	children: [
	          		{
	          			label: '出生日期'
	          		},
	          		{
	          			label: '注册时间'
	          		},
	          	]
	          }
	          ]
	        }
				],
        defaultProps7: {
          children: 'children',
          label: 'label'
        },
        visible: false,



				data8: [
					{
	          label: '全部',
	          children: [
	          	{
	            	label: '网络',
	            	children: [
	            		{
	            			label: '网络数据客户身份模型'
	            		},
	            		{
	            			label: '短信数据模型'
	            		},
	            		{
	            			label: '上网日志数据模型'
	            		},
	            	]
	          	},
	          	{
	            	label: '金融',
	          	},
	          	{
	            	label: '医疗',
	          	},
	          ]
	        }
				],
        defaultProps8: {
          children: 'children',
          label: 'label'
        },
        visible8: false,

			}
		},
		mounted: function () {
		  
		},
		methods: {
			addTag(){
				this.dialogFormVisible = true
			},
			addTag2(){
				this.dialogFormVisible2 = true
			},
			addTag3(){
				this.dialogFormVisible9 = true
			},

			addTag9(){
				this.dialogFormVisible8 = true
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

			handleNodeClick8(data){
				console.log(data)
				let _this = this;
				_this.form5.sources = data.label;
			},

			handleNodeClick7(data){
				console.log(data)
				let _this = this;
				_this.form9.sources = data.label;
			},

		}
	}

</script>

<style scoped lang="scss">
	.table{
		height: 100%;
		background-color: #fff;	
	}

	.main{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding:10px;
		align-items: flex-start ;
		.sideRight{
			width:300px;
			margin-left: 10px;
			.styleList{
				border:1px solid #ebebeb;
				margin-top: 10px;
				ul{
					padding:10px;
					li{
						background-color: #fafafa;
						border:1px solid #ebebeb;
						padding:6px;
						position: relative;
						font-size: 14px;
						list-style: none;
						margin-bottom:10px;
						p{
							line-height: 24px;
						}
						em{
							font-style: normal;
							display: inline-block;
							vertical-align: middle;
							width:80px;
							text-align: right;
						}
						b{
							font-weight: normal;
							display: inline-block;
							vertical-align: middle;
							color: #1c88ff;
						}
						span{
							width:30px;
							height: 30px;
							position: absolute;
							top:0;
							right: 0;
							font-size: 24px;
							line-height: 30px;
							text-align: right;
							cursor: pointer;
						}
					}
				}
			}
			.title{
				padding:6px 10px;
				border-bottom: 1px solid #ebebeb;
				display: flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				h6{
					font-size: 14px;
					line-height: 32px;
				}
			}
		}
		.mainLeft{
			flex:1;
		}
	}

	.tableFrist{
		td{
			position: relative;
			b{
				position: absolute;
				width:20px;
				height: 20px;
				top:0;
				right: 0;
				font-size:16px;
				cursor: pointer;
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
	}

	.topNav{
		height: 1px;
		display: flex;
		justify-content: space-between;
		position: relative;
		z-index: 22;
		top:4px;
	}
</style>

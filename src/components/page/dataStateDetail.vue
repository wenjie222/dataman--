<template>
	<div class="table">
		<div class="container">
			<!-- <div class="mstitle">
				<span>American</span>
				<span><i class="fa fa-edit"></i></span>
			</div> -->
			 <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
		    <el-tab-pane label="列展示" name="first"> -->
		    	<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column prop="node" align="center" label="字段" width="280"></el-table-column>

					<el-table-column prop="type" align="center" label="类型" ></el-table-column>

					<el-table-column prop="tags" align="center" label="标签"></el-table-column>

					<el-table-column prop="integrity" align="center" label="完整度" width="80"></el-table-column>
				</el-table>

				<div class="pagination">
					<el-pagination background @current-change="handleCurrentChange" :page-size="10"
	  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
					</el-pagination>
				</div>
		    <!-- </el-tab-pane> -->




		    <!-- <el-tab-pane label="表展示" name="second">
		    	
		    	<div data-v-8380f9d6="" class="el-table table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition el-table--small">
					  <div class="el-table__body-wrapper is-scrolling-none">
					    <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" width="100%">
					     <colgroup>
					      <col name="el-table_2_column_4" width="8%" />
					      <col name="el-table_2_column_5" width="8%" />
					      <col name="el-table_2_column_6" width="8%" />
					      <col name="el-table_2_column_7" width="8%" />
					      <col name="el-table_2_column_8" width="8%" />
					      <col name="el-table_2_column_9" width="8%" />
					      <col name="el-table_2_column_10" width="8%" />
					      <col name="el-table_2_column_11" width="8%" />


					      <col name="el-table_2_column_11" width="8%" />
					      <col name="el-table_2_column_11" width="8%" />
					      <col name="el-table_2_column_11" width="8%" />
					      <col name="el-table_2_column_11" width="8%" />
					     </colgroup>
					     <tbody>
					      <tr class="el-table__row tableFrist">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>ID</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>age</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>gender</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>phone</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>email</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>address</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>company</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>collage</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>register</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>friend</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>


						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>coin</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>postcode</span>
						      	<b><i class="fa fa-edit"></i></b>
						      </td>
					      </tr>
					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-dropdown>
										  <span class="el-dropdown-link">
										    Init<i class="el-icon-arrow-down el-icon--right"></i>
										  </span>
										  <el-dropdown-menu slot="dropdown">
										    <el-dropdown-item>String</el-dropdown-item>
										    <el-dropdown-item>Boolean</el-dropdown-item>
										    <el-dropdown-item>Init</el-dropdown-item>
										  </el-dropdown-menu>
										</el-dropdown>
						      </td>
					      </tr>


					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>人员编号</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>标准映射</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>人员性别</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>移动号码</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>邮箱地址</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>居住地</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>工作单位</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>毕业院校</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>注册时间</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>朋友个数</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>邮政编码</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>用户ID</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>手机号码</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>用户邮箱</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<el-button type="text">添加标签</el-button>
						      </td>
					      </tr>



					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>

					      <tr class="el-table__row">
						      <td rowspan="1" colspan="1" class="el-table_2_column_4 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_5 is-center el-table-column--selection">
						      	<span>2</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_6 is-center el-table-column--selection">
						      	<span>F</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_7 is-center el-table-column--selection">
						      	<span>155****4352</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_8 is-center el-table-column--selection">
						      	<span>3597****@qq.com</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_9 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_10 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_11 is-center el-table-column--selection">
						      	<span>test</span>
						      </td>

						      <td rowspan="1" colspan="1" class="el-table_2_column_12 is-center el-table-column--selection">
						      	<span>-</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_13 is-center el-table-column--selection">
						      	<span>0</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_14 is-center el-table-column--selection">
						      	<span>3</span>
						      </td>
						      <td rowspan="1" colspan="1" class="el-table_2_column_15 is-center el-table-column--selection">
						      	<span>null</span>
						      </td>
					      </tr>
					      

					     </tbody>
					    </table>
					   </div>
					   <div class="el-table__column-resize-proxy" style="display: none;"></div>
					  </div>	
						<div class="pagination">
							<el-pagination background @current-change="handleCurrentChange" :page-size="10"
			  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
							</el-pagination>
						</div>

		    </el-tab-pane> -->
		  <!-- </el-tabs>	 -->
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
			tableData: [
				{
					node: 'idno',
					type: 'varchar',
					tags: '身份证号',
					integrity: '100%'
				},
				{
					node: 'name',
					type: 'varchar',
					tags: '姓名',
					integrity: '100%'
				},
				{
					node: 'gender',
					type: 'varchar',
					tags: '性别',
					integrity: '100%'
				},
				{
					node: 'age',
					type: 'int',
					tags: '年龄',
					integrity: '100%'
				},
				{
					node: 'phone',
					type: 'varchar',
					tags: '手机号',
					integrity: '100%'
				},
				{
					node: 'regist_time',
					type: 'varchar',
					tags: '注册时间',
					integrity: '100%'
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
			
			idx: -1,
			formInline: {
			  phone: '14752167983',
			  gender: ''
			},
			value13: '',

			total:0,//默认数据总数
			pagesize:5,//每页的数据条数
			currentPage:1,//默认开始页面
			pages: 0,
			listTotal: 0
		}
	},
	mounted: function () {
	  
	},
	methods: {
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
	.container{
		background-color: #fff;
		height: 100%;
		box-sizing: border-box;
		padding:10px;
	}
	.table{
		height: 100%;
	}

	.mstitle{
		line-height: 30px;
		span{
			color:#409EFF;
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
				.fa-edit:hover{
					color:#1a89fd;
				}
			}
		}
	}
</style>
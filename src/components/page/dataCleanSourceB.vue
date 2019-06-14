<template>
	<div class="table">
		<div class="container">
			<div class="content">
    		<!-- <div class="sideLeft">
    			<div class="search">
    				<el-form :inline="true" :model="formInline" class="demo-form-inline">
						  <el-form-item>
						    <el-input v-model="formInline.key" placeholder="审批人"></el-input>
						  </el-form-item>
						  <el-form-item>
						  	<el-button type="primary">查询</el-button>
						  </el-form-item>
						</el-form>
    			</div>
    			<div>
    				<el-tree :data="treeData" :props="defaultProps"   node-key="id" :default-expanded-keys="[1, 2]" @node-click="handleNodeClick"></el-tree>

    			</div>
    		</div> -->
    		<div class="mainRight">
    			<div class="handle-box">
						<div style="padding: 17px 10px 0;float: right;">
						  <!-- <el-button type="primary" icon="el-icon-plus" @click="showCheck">重新获取表结构</el-button> -->
						  <el-button type="danger" icon="el-icon-delete">删除</el-button>
						</div>
						<div>
							<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
								<el-form-item>
									<div class="handle-box">
										<el-date-picker
										  v-model="value13"
										  type="daterange"
										  start-placeholder="开始日期"
										  end-placeholder="结束日期"
										  :default-time="['00:00:00', '23:59:59']">
										</el-date-picker>
									</div>
								</el-form-item>

								<el-form-item prop="name">
								  <el-input v-model.trim="formInline.name" placeholder="名称/备注"></el-input>
								</el-form-item>

								<el-form-item><el-button type="primary" icon="el-icon-search" @click="search">查询</el-button></el-form-item>
							</el-form>
						</div>
					</div>



					<el-table :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="60"  align="center"></el-table-column>
						<el-table-column prop="numId" align="center" label="序号" width="80">
						</el-table-column>

						<el-table-column prop="taskName" align="center" label="表名" sortable width="180">
						</el-table-column>

						<el-table-column prop="createTime" align="center" label="获取时间">
						</el-table-column>

						<el-table-column prop="info" align="center" label="备注">
						</el-table-column>

						<el-table-column prop="control" align="center" label="操作" width="180" >
								<template slot-scope="scope">
									<el-tooltip class="item" effect="dark" content="查看表结构" placement="top">
									  <el-button type="text" size="small" class="control" @click="showInfo(scope.row)">
											<i class="fa fa-line-chart"></i>
										</el-button>
									</el-tooltip>

									<el-tooltip class="item" effect="dark" content="重新获取表结构" placement="top">
										<el-button type="text" size="small" class="control" @click="showCheckcc">
											<i class="fa fa-refresh"></i>
										</el-button>
									</el-tooltip>

									<el-tooltip class="item" effect="dark" content="预览" placement="top">
							  		<el-button type="text" size="small" class="control"  @click="showdata(scope.row)">
											<i class="fa fa-map-o"></i>
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
			 </div>
		</div>



		<el-dialog title="获取表结构" :visible.sync="dialogFormVisible2" width="740px">
			<div>
				<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"></el-table-column>
					<el-table-column prop="numId" align="center" label="序号" width="80"></el-table-column>
					<el-table-column prop="nodeName" align="center" label="字段名" width="80"></el-table-column>
					<el-table-column prop="nodeLength" align="center" label="字段类型" ></el-table-column>
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


		<el-dialog title="获取表结构" :visible.sync="dialogFormVisible22" width="740px">
			<div>
				<el-table :data="tableData22" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"></el-table-column>
					<el-table-column prop="numId" align="center" label="序号" width="80"></el-table-column>
					<el-table-column prop="nodeName" align="center" label="字段名" width="120"></el-table-column>
					<el-table-column prop="nodeLength" align="center" label="字段类型" ></el-table-column>
					<el-table-column prop="isCid" align="center" label="是否主键" width="80"></el-table-column>
					<el-table-column prop="isEmpty" align="center" label="是否不为空" width="80"></el-table-column>
					<el-table-column prop="info" align="center" label="备注" width=""></el-table-column>
				</el-table>
			</div>
			<div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible22 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible22 = false">确 定</el-button>
		  </div>
		</el-dialog>


		<el-dialog title="获取表结构" :visible.sync="dialogFormVisible23" width="740px">
			<div>
				<el-table :data="tableData23" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="60"  align="center"></el-table-column>
					<el-table-column prop="numId" align="center" label="序号" width="80"></el-table-column>
					<el-table-column prop="nodeName" align="center" label="字段名" width="80"></el-table-column>
					<el-table-column prop="nodeLength" align="center" label="字段类型" ></el-table-column>
					<el-table-column prop="isCid" align="center" label="是否主键" width="80"></el-table-column>
					<el-table-column prop="isEmpty" align="center" label="是否不为空" width="120"></el-table-column>
					<el-table-column prop="info" align="center" label="备注" width=""></el-table-column>
				</el-table>
			</div>
			<div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible23 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible23 = false">确 定</el-button>
		  </div>
		</el-dialog>




		<el-dialog title="查找/选择数据表" :visible.sync="dialogFormVisible3" width="1100px">
			<el-form :inline="true" :model="formInlineN" ref="formInline" class="demo-form-inline">
				<el-form-item>
		      <el-select v-model="formInlineN.region" placeholder="类型">
		        <el-option label="MySQL" value="shanghai"></el-option>
		        <el-option label="DBSource" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>

		    <el-form-item>
		      <el-select v-model="formInlineN.region" placeholder="状态">
		        <el-option label="MySQL" value="shanghai"></el-option>
		        <el-option label="DBSource" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
				<el-form-item>
					<div class="handle-box">
						<el-date-picker
						  v-model="value13"
						  type="daterange"
						  start-placeholder="开始日期"
						  end-placeholder="结束日期"
						  :default-time="['00:00:00', '23:59:59']">
						</el-date-picker>
					</div>
				</el-form-item>

				<el-form-item prop="name">
				  <el-input v-model.trim="formInlineN.name" placeholder="名称/备注"></el-input>
				</el-form-item>

				<el-form-item><el-button type="primary" icon="el-icon-search" @click="search">查询</el-button></el-form-item>
			</el-form>


			<div class="mask-03">
				<div class="sideLeft">
    			<div class="search">
    				<el-form :inline="true" :model="formInline" class="demo-form-inline">
						  <el-form-item>
						    <el-input v-model="formInline.key" placeholder="审批人"></el-input>
						  </el-form-item>
						  <el-form-item>
						  	<el-button type="primary">查询</el-button>
						  </el-form-item>
						</el-form>
    			</div>
    			<div>
    				<vue-tree-edit :treeData="treeData"></vue-tree-edit> 
    			</div>
    		</div>
    		<div class="ssright">
    			<el-table :data="tableData3" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
						<el-table-column type="selection" width="60"  align="center"></el-table-column>
						<el-table-column prop="numId" align="center" label="序号" width="80"></el-table-column>
						<el-table-column prop="nodeName" align="center" label="表名" width="80"></el-table-column>
						<el-table-column prop="time" align="center" label="获取时间" width=""></el-table-column>
						<el-table-column prop="info" align="center" label="备注" width="100"></el-table-column>

						<el-table-column prop="node" align="center" label="字段名"></el-table-column>


					</el-table>
    		</div>
			</div>
		</el-dialog>


		<el-dialog title="表数据" :visible.sync="dialogFormVisible40" width="900px">
		 <el-table :data="tableData8" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	  		<el-table-column prop="text1" align="center" label="序号"></el-table-column>
	  		<el-table-column prop="text2" align="center" label="idno"></el-table-column>
	  		<el-table-column prop="text3" align="center" label="name"></el-table-column>
	  		<el-table-column prop="text4" align="center" label="gender"></el-table-column>
	  		<el-table-column prop="text5" align="center" label="age"></el-table-column>
	  		<el-table-column prop="text6" align="center" label="phone"></el-table-column>
	  		<el-table-column prop="text7" align="center" label="registe_time"></el-table-column>
	  	</el-table>
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible40 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible40 = false">下载</el-button>
	  </div>
	</el-dialog>


	<el-dialog title="表数据" :visible.sync="dialogFormVisible41" width="900px">
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
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible41 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible41 = false">下载</el-button>
	  </div>
	</el-dialog>


	<el-dialog title="表数据" :visible.sync="dialogFormVisible42" width="900px">
		 <el-table :data="tableData82" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	  		<el-table-column prop="text1" align="center" label="序号"></el-table-column>
	  		<el-table-column prop="text2" align="center" label="phone"></el-table-column>
	  		<el-table-column prop="text3" align="center" label="imei" width="160"></el-table-column>
	  		<el-table-column prop="text4" align="center" label="domain"></el-table-column>
	  		<el-table-column prop="text5" align="center" show-overflow-tooltip label="url"></el-table-column>
	  		<el-table-column prop="text6" align="center" label="access_time"></el-table-column>
	  		<el-table-column prop="text7" align="center" label="label"></el-table-column>
	  	</el-table>
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible42 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible42 = false">下载</el-button>
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
				dialogFormVisible3: false,
				dialogFormVisible2: false,
				dialogFormVisible40: false,
				dialogFormVisible41: false,
				dialogFormVisible42: false,

				dialogFormVisible22: false,
				dialogFormVisible23: false,
				activeName2: 'first',
				formInline:{
					key: '',
				},
				formInlineR:{
					resource: '',
				},

				formInlineN: {
					name:'',
					region: ''
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

				tableData: [
					{
						isCheck: true,
						numId: '1',
						taskName: 't_profile',
						createTime: '2019-05-16 10:53:15',
						info: '客户身份数据表'
					},{
						isCheck: true,
						numId: '2',
						taskName: 't_dx',
						createTime: '2019-05-14 13:23:10',
						info: '短信行为表'
					},{
						isCheck: true,
						numId: '3',
						taskName: 't_weblog',
						createTime: '2019-04-03 15:31:10',
						info: '上网日志表'
					}
				],

				tableData2: [
					{
						isCheck: false,
						numId: '1',
						nodeName: 'idno',
						nodeLength: 'varchar',
						isCid: '否',
						isEmpty: '是',
						info: '用户编号'
					},
					{
						isCheck: false,
						numId: '2',
						nodeName: 'name',
						nodeLength: 'varchar',
						isCid: '否',
						isEmpty: '否',
						info: '姓名'
					},
					{
						isCheck: false,
						numId: '3',
						nodeName: 'gender',
						nodeLength: 'varchar',
						isCid: '否',
						isEmpty: '否',
						info: '性别'
					},
					{
						isCheck: false,
						numId: '4',
						nodeName: 'age',
						nodeLength: 'int',
						isCid: '否',
						isEmpty: '否',
						info: '年龄'
					},
					{
						isCheck: false,
						numId: '5',
						nodeName: 'phone',
						nodeLength: 'varchar',
						isCid: '否',
						isEmpty: '是',
						info: '电话号码'
					},
					{
						isCheck: false,
						numId: '6',
						nodeName: 'registtime',
						nodeLength: 'varchar',
						isCid: '否',
						isEmpty: '否',
						info: '注册时间'
					}
				],

				tableData22: [
					{
					  isCheck:false,
					  numId:'1',
					  nodeName:'c_dxxh',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:'短信序号'
					},
					{
					  isCheck:false,
					  numId:'2',
					  nodeName:'c_yysip',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'运营商IP'
					},
					{
					  isCheck:false,
					  numId:'3',
					  nodeName:'c_ydz',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'源地址'
					},
					{
					  isCheck:false,
					  numId:'4',
					  nodeName:'c_ydzyysid',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:'源地址运营商ID'
					},
					{
					  isCheck:false,
					  numId:'5',
					  nodeName:'c_ydzhd',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:''
					},
					{
					  isCheck:false,
					  numId:'6',
					  nodeName:'c_ydzsssid',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:''
					},
					{
					  isCheck:false,
					  numId:'7',
					  nodeName:'c_ydzsphm',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:''
					},
					{
					  isCheck:false,
					  numId:'8',
					  nodeName:'c_mddz',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'目的地址'
					},
					{
					  isCheck:false,
					  numId:'9',
					  nodeName:'c_mddzyysid',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:'目的地址运营商ID'
					},
					{
					  isCheck:false,
					  numId:'10',
					  nodeName:'c_mddzhd',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:''
					},
					{
					  isCheck:false,
					  numId:'11',
					  nodeName:'c_mddzsphm',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:''
					},
					{
					  isCheck:false,
					  numId:'12',
					  nodeName:'c_sfccdx',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:'是否超长短信'
					},
					{
					  isCheck:false,
					  numId:'13',
					  nodeName:'c_ccdxxh',
					  nodeLength:'int',
					  isCid:'否',
					  isEmpty:'否',
					  info:'超长短信序号'
					},
					{
					  isCheck:false,
					  numId:'14',
					  nodeName:'c_ccdxxlh',
					  nodeLength:'bigint',
					  isCid:'否',
					  isEmpty:'否',
					  info:'超长短信序列号'
					},
					{
					  isCheck:false,
					  numId:'15',
					  nodeName:'c_dxnr',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'短信内容'
					},
					{
					  isCheck:false,
					  numId:'16',
					  nodeName:'c_nrzymd5',
					  nodeLength:'bigint',
					  isCid:'否',
					  isEmpty:'否',
					  info:'内容MD5校验码'
					}
				],
				tableData23: [
					{
					  isCheck:false,
					  numId:'1',
					  nodeName:'phone',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'是',
					  info:'手机号'
					},
					{
					  isCheck:false,
					  numId:'2',
					  nodeName:'imei',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'IMEI号码'
					},
					{
					  isCheck:false,
					  numId:'3',
					  nodeName:'domain',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'访问域名'
					},
					{
					  isCheck:false,
					  numId:'4',
					  nodeName:'url',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'访问URL'
					},
					{
					  isCheck:false,
					  numId:'5',
					  nodeName:'access_time',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'访问时间'
					},
					{
					  isCheck:false,
					  numId:'6',
					  nodeName:'label',
					  nodeLength:'varchar',
					  isCid:'否',
					  isEmpty:'否',
					  info:'网页标签'
					}
				],



				tableData3: [
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
					{
						isCheck: false,
						numId: '1',
						nodeName: 'table-A',
						time: '2019-03-12 12:00:00',
						isCid: '是',
						node: '[字段a],[字段b],[字段c],[字段d]',
						info: '测试'
					},
				],


				tableData8: [
					{
					  text1:'1',
					  text2:'37142119********5X',
					  text3:'张飞扬',
					  text4:'男',
					  text5:'22',
					  text6:'13098761234',
					  text7:'2018-08-25 04:20:43'
					},
					{
					  text1:'2',
					  text2:'13090319********9X',
					  text3:'邹紫萱',
					  text4:'女',
					  text5:'30',
					  text6:'18039684510',
					  text7:'2013-09-25 07:50:46'
					},
					{
					  text1:'3',
					  text2:'37142119********22',
					  text3:'吴明',
					  text4:'女',
					  text5:'34',
					  text6:'14704728915',
					  text7:'2018-01-05 12:28:10'
					},
					{
					  text1:'4',
					  text2:'37142119********28',
					  text3:'马颂',
					  text4:'男',
					  text5:'37',
					  text6:'13479038654',
					  text7:'2018-09-06 18:03:53'
					},
					{
					  text1:'5',
					  text2:'37142119********19',
					  text3:'方然',
					  text4:'女',
					  text5:'28',
					  text6:'18345684510',
					  text7:'2018-09-06 16:09:51'
					},
					{
					  text1:'6',
					  text2:'13090319********58',
					  text3:'鲁哲',
					  text4:'男',
					  text5:'36',
					  text6:'15052718630',
					  text7:'2018-09-06 14:03:33'
					},
					{
					  text1:'7',
					  text2:'37142119********83',
					  text3:'郑子涵',
					  text4:'男',
					  text5:'30',
					  text6:'18957926803',
					  text7:'2018-09-06 13:13:45'
					},
					{
					  text1:'8',
					  text2:'37012319********76',
					  text3:'卫鑫',
					  text4:'男',
					  text5:'18',
					  text6:'13851802964',
					  text7:'2018-09-06 13:13:45'
					},
					{
					  text1:'9',
					  text2:'11010119********32',
					  text3:'袁敏',
					  text4:'男',
					  text5:'42',
					  text6:'18731768924',
					  text7:'2018-09-05 12:13:42'
					},
					{
					  text1:'10',
					  text2:'11010119********34',
					  text3:'苗勇',
					  text4:'男',
					  text5:'33',
					  text6:'15165297014',
					  text7:'2018-09-06 13:13:45'
					}
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


				treeData:[
	      	{
	        "id": 1,
	        "name": "全部",
	        "level": 1,
	        "child": [
	          {
	            "id": 2,
	            "name": "CRM数据",
	            "level": 2,
	            "child": [
	              {
	                "id": 3,
	                "name": "人员信息",
	                "level": 3,
	                "child": []
	              },
	              {
	                "id": 31,
	                "name": "通信信息",
	                "level": 3,
	                "child": []
	              }
	            ]
	          },
	          {
	            "id": 4,
	            "name": "基础库",
	            "level": 2,
	            "child": []
	          }
	        ]
	      }
	      ],

	      defaultProps: {
          children: 'child',
          label: 'name'
        },



	      value13: '',
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,
			}
		},
		mounted: function () {
		  
		},
		methods: {

			showCheckcc(){
				 this.$message({
          message: '获取表结构成功!',
          type: 'success'
        });
			},
			handleNodeClick(data) {
        console.log(data);
      },
			showCheck(){
				this.dialogFormVisible3 = true;
			},
			showInfo(data){
				// this.dialogFormVisible2 = true;
				console.log(data);
				if(data.numId === '1'){
					this.dialogFormVisible2 = true;
				}else if(data.numId === '2'){
					this.dialogFormVisible22 = true;
				}else{
					this.dialogFormVisible23 = true;
				}
			},

			showdata(data){
				if(data.numId === '1'){
					this.dialogFormVisible40 = true;
				}else if(data.numId === '2'){
					this.dialogFormVisible41 = true;
				}else{
					this.dialogFormVisible42 = true;
				}
			},
			search(){
				console.log('cc');
			}
			,
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
			/*height: 100%;*/
			margin-right:20px;
			.search{
				padding:10px;
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
		.fa-sliders:hover{
			color:#ff9e0c;
		}
	}

	.mask-03{
		display: flex;
		.ssright{
			flex:1;
		}
	}

	.sminfo{
		p{
			padding:4px 0;
			span{
				display: inline-block;
				width: 90px;
				text-align: right;
			}
		}
	}
</style>

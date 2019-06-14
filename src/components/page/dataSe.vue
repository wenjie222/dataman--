<template>
	<div class="table">
		<div class="container">
			<template>
			  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="结构化数据查询" name="first">
						<div style="width: 440px;margin:0 auto;">
							<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
    						<el-form-item prop="name">
    							<el-input
								    placeholder="请输入内容"
								    v-model.trim="formInline.name">
								    <i slot="prefix" class="el-input__icon el-icon-search"></i>
								  </el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" icon="el-icon-search" @click="searchA">查询</el-button>
								</el-form-item>
							</el-form>
						</div>
						<div class="tagGroup">
							<dl class="infoA">
								<dt>数据范围:</dt>
								<dd>
									<span>
										网络数据空间
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk1">查看全部</a></p>
								</dd>
							</dl>

							<dl class="infoB">
								<dt>数据标签:</dt>
								<dd>
									<span>
										手机号码
										<i class="fa fa-times"></i>
									</span>
									<span>
										注册时间
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk2">查看全部</a></p>
								</dd>
							</dl>
						</div>
						<div style="padding:10px 20px;" v-show="showA">
							<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="targetName" align="center" label="命中表"  width="180"></el-table-column>
								<el-table-column prop="sheetType" align="center" label="表类型"  ></el-table-column>
								<el-table-column prop="targetNode" align="center" label="命中字段"  ></el-table-column>
								<el-table-column prop="proto" align="center" label="所属任务"  ></el-table-column>
								<el-table-column prop="total" align="center" label="总命中数量"  ></el-table-column>
								<el-table-column align="center" label="操作" >
									<template slot-scope="scope">
										<a href="javascript:void(0)"  @click="showdata(scope.row)"><i class="fa fa-list-ul"></i></a>
										<a href="javascript:void(0)"><i class="fa fa-download"></i></a>
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
					<el-tab-pane label="文档数据查询" name="second">
						<div style="width: 440px;margin:0 auto;">
							<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
    						<el-form-item prop="name">
    							<el-input
								    placeholder="请输入内容"
								    v-model.trim="formInline.name">
								    <i slot="prefix" class="el-input__icon el-icon-search"></i>
								  </el-input>
								</el-form-item>
								<el-form-item>
									<!-- <router-link to="/dataSeRe" >	<el-button type="primary" icon="el-icon-search">查询</el-button></router-link> -->
									<el-button type="primary" @click="searchB" icon="el-icon-search">查询</el-button>

								</el-form-item>
							</el-form>
						</div>
						<div class="tagGroup">
							<dl class="infoA">
								<dt>数据范围:</dt>
								<dd>
									<span>
										网络数据空间
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk3">查看全部</a></p>
								</dd>
							</dl>

							<dl class="infoB">
								<dt>数据标签:</dt>
								<dd>
									<p><a href="javascript:void(0);" @click="showCk2">查看全部</a></p>
								</dd>
							</dl>
						</div>
						<div style="padding:10px 20px;" v-show="showB" class="astest">
							<el-table :data="tableData9" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="targetName" align="center" label="命中数据集"  width="180"></el-table-column>
								<el-table-column prop="total" align="center" label="命中文件数"  ></el-table-column>
								<el-table-column prop="proto" align="center" label="数据空间"  ></el-table-column>
								<el-table-column align="center" label="操作" >
									<template slot-scope="scope">
										<span @click="jump"><i class="fa fa-list-ul"></i></span>
										<!-- <router-link	to="/dataExtraView"></router-link> -->
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
			  </el-tabs>
			</template>
		</div>

		<el-dialog title="数据范围选择" :visible.sync="dialogFormVisible1" width="400px">
			<div class="semain">
				<el-row>
				  <el-col :span="24">
				  	<div class="grid-content bg-purple">
				  		<div class="left">
				  			<div class="setitle">
				  				工作区
				  			</div>
				  			<div class="chk">
				  				<template>
								  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">网络数据清洗工作区</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <!-- <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
								    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group> -->
								</template>

								
				  			</div>
				  			<div class="setitle">
				  				数据空间
				  			</div>

				  			<div class="chk">
				  				<template>
									  <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3">网络数据空间</el-checkbox>
									  <div style="margin: 15px 0;"></div>
									  <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange3">
									    <el-checkbox v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox>
									  </el-checkbox-group>
									</template>
							</div>
				  		</div>
				  	</div>
				  </el-col>
				  <!-- <el-col :span="18">
				  	<div class="grid-content bg-purple-light">
				  		<div class="right">
				  			<template>
								  <el-tabs v-model="activeName4" type="card" @tab-click="handleClick2">
								    <el-tab-pane label="已选择" name="firsta">
								    	<el-tag>数据清洗任务1</el-tag>
								    	<el-table :data="tableData4" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
												<el-table-column prop="name" align="center" label="表名"></el-table-column>
												<el-table-column prop="type" align="center" label="表类型"></el-table-column>
												<el-table-column prop="total" align="center" label="数据量"></el-table-column>
												<el-table-column prop="time" align="center" label="创建时间" width="180"></el-table-column>

												<el-table-column prop="" align="center" label="操作" >
													<template slot-scope="scope">
										        <span style="color:#ff507f;">删除</span>
										      </template>
												</el-table-column>
											</el-table>

											<el-table :data="tableData4" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
												<el-table-column prop="imei" align="center" label="imei"></el-table-column>
												<el-table-column prop="os_name" align="center" label="设备系统"></el-table-column>
												<el-table-column prop="device_type" align="center" label="设备品牌"></el-table-column>
												<el-table-column prop="manufacturer" align="center" label="型号" width="180"></el-table-column>

												<el-table-column prop="" align="center" label="操作" >
													<template slot-scope="scope">
										        <span style="color:#409eff;">选择</span>
										      </template>
												</el-table-column>
											</el-table>
								    </el-tab-pane>
								    <el-tab-pane label="选择区" name="secondb">
								    	<el-tag>数据清洗任务1</el-tag>
								    	<el-table :data="tableData5" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
												

												<el-table-column prop="name" align="center" label="表名"></el-table-column>
												<el-table-column prop="type" align="center" label="表类型"></el-table-column>
												<el-table-column prop="total" align="center" label="数据量"></el-table-column>
												<el-table-column prop="time" align="center" label="创建时间" width="180"></el-table-column>

												<el-table-column prop="" align="center" label="操作" >
													<template slot-scope="scope">
										        <span style="color:#409eff;">选择</span>
										      </template>
												</el-table-column>
											</el-table>
								    </el-tab-pane>
								  </el-tabs>
								</template>
				  		</div>
				  	</div>
				  </el-col> -->
				</el-row>
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible1 = false">确 定</el-button>
		  </div>
	</el-dialog>



	<el-dialog title="数据范围选择" :visible.sync="dialogFormVisible2" width="800px">
			<div class="semain">
				<el-row>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="left">
				  			<div class="setitle">
				  				标签类别
				  			</div>
				  			<div class="chk">
				  				<template>
								  <el-checkbox :indeterminate="isIndeterminate5" v-model="checkAll5" @change="handleCheckAllChange5">人物标签</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <el-checkbox-group v-model="checkedCities5" @change="handleCheckedCitiesChange5">
								    <el-checkbox v-for="city in cities5" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
								</template>

								<template>
								  <el-checkbox :indeterminate="isIndeterminate6" v-model="checkAll6" @change="handleCheckAllChange6">行业标签</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <el-checkbox-group v-model="checkedCities6" @change="handleCheckedCitiesChange6">
								    <el-checkbox v-for="city in cities6" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
								</template>

								<template>
								  <el-checkbox :indeterminate="isIndeterminate7" v-model="checkAll7" @change="handleCheckAllChange7">专有标签</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <el-checkbox-group v-model="checkedCities7" @change="handleCheckedCitiesChange7">
								    <el-checkbox v-for="city in cities7" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
								</template>
				  			</div>
				  		</div>
				  	</div>
				  </el-col>
				  <el-col :span="18">
				  	<div class="grid-content bg-purple-light">
				  		<div class="right">
				  			<template>
								  <el-tabs v-model="activeName6" type="card" @tab-click="handleClick2">
								    <el-tab-pane label="已选择" name="firstas">
								    	<el-tag>基础属性标签</el-tag>
								    	<div style="padding:10px">
								    		<el-tag
											  :key="tag"
											  v-for="tag in dynamicTags"
											  closable
											  :disable-transitions="false"
											  @close="handleClose(tag)">
											  {{tag}}
											</el-tag>
								    	</div>
								    </el-tab-pane>
								    <el-tab-pane label="选择区" name="secondbs">
								    	<el-tag>基础属性标签</el-tag>
								    	<div class="checkboxGroup5" style="padding:10px">
								    		<!-- <el-tag
											  :key="tag"
											  v-for="tag in dynamicTags2"
											  closable
											  :disable-transitions="false"
											  @close="handleClose(tag)">
											  {{tag}}
											</el-tag> -->
											
											<el-checkbox-group v-model="checkboxGroup5" size="small">
									      <el-checkbox label="姓名" border></el-checkbox>
									      <el-checkbox label="昵称" border></el-checkbox>
									      <el-checkbox label="外号" border></el-checkbox>
									      <el-checkbox label="职位" border></el-checkbox>
									    </el-checkbox-group>

								    	</div>
								    </el-tab-pane>
								  </el-tabs>
								</template>
				  		</div>
				  	</div>
				  </el-col>
				</el-row>
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible2 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
		  </div>
	</el-dialog>


	<el-dialog title="数据范围选择" :visible.sync="dialogFormVisible3" width="440px">
			<div class="semain">
				
				  	<div class="grid-content bg-purple">
				  		<div class="left">
				  			<div class="setitle">
				  				工作区
				  			</div>
				  			<div class="chk">
				  				<template>
								  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">网络数据清洗工作区</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <!-- <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
								    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group> -->
								</template>

								
				  			</div>
				  			<div class="setitle">
				  				数据空间
				  			</div>

				  			<div class="chk">
				  				<template>
									  <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3">网络数据空间</el-checkbox>
									  <div style="margin: 15px 0;"></div>
									  <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange3">
									    <el-checkbox v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox>
									  </el-checkbox-group>
									</template>
									<!-- <template>
									  <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange4">数据空间2</el-checkbox>
									  <div style="margin: 15px 0;"></div>
									  <el-checkbox-group v-model="checkedCities4" @change="handleCheckedCitiesChange4">
									    <el-checkbox v-for="city in cities4" :label="city" :key="city">{{city}}</el-checkbox>
									  </el-checkbox-group>
									</template> -->
							</div>
				  		</div>
				  	</div>
				  
			</div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
		  </div>
	</el-dialog>




	<el-dialog title="结果详情列表" :visible.sync="dialogFormVisible4" width="900px">
		<el-tabs v-model="activeName9" type="card" @tab-click="handleClick3">
	    <el-tab-pane label="查询结果" name="firstmb">
	    	<el-table :data="tableData8" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	    		<el-table-column prop="text1" align="center" label="telephone_no"></el-table-column>
	    		<el-table-column prop="text2" align="center" label="app_name"></el-table-column>
	    		<el-table-column prop="text3" align="center" label="is_loan_app"></el-table-column>
	    		<el-table-column prop="text4" align="center" label="registe_time"></el-table-column>
	    	</el-table>
	    </el-tab-pane>
	    <!-- <el-tab-pane label="filed1" name="secondmb">
	    	<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
					<el-table-column prop="imei" align="center" label="imei"></el-table-column>
					<el-table-column prop="os_name" align="center" label="设备系统"></el-table-column>
					<el-table-column prop="device_type" align="center" label="设备品牌"></el-table-column>
					<el-table-column prop="manufacturer" align="center" label="型号" width="180"></el-table-column>
	    	</el-table>
	    </el-tab-pane> -->
	  </el-tabs>
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible4 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible4 = false">下载</el-button>
	  </div>
	</el-dialog>






	<el-dialog title="表数据" :visible.sync="dialogFormVisible40" width="900px">
		 <el-table :data="tableData80" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
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
	const cityOptions = ['网络数据清洗工作区'];
	const cityOptions2 = ['数据清洗任务4'];
	const cityOptions3 = ['2017年第3季度数据', '2017年第4季度数据','2018年第1季度数据','2018年第2季度数据','2018年第3季度数据','2018年第4季度数据'];
	const cityOptions4 = ['数据集2', '数据集3'];


  const cityOptions5 = ['基础属性标签','位置属性标签','社交属性标签']; 
  const cityOptions6 = ['互联网行业标签','金融行业标签','医疗行业标签', '警务标签']; 
  const cityOptions7 = ['安全领域标签','报文数据标签','画像数据标签', '境外标签']; 

	export default {
		name: 'basetable',
		data() {
			return {
				dialogFormVisible1: false,
				dialogFormVisible2: false,

				dialogFormVisible3: false,

				dialogFormVisible4: false,


				dialogFormVisible40: false,
				dialogFormVisible41: false,
				dialogFormVisible42: false,

				checkAll: false,
        checkedCities: ['数据清洗任务1'],
        cities: cityOptions,
        isIndeterminate: true,



        checkAll2: false,
        checkedCities2: ['数据清洗任务4'],
        cities2: cityOptions2,
        isIndeterminate2: true,


         checkAll3: true,
        checkedCities3: ['2017年第3季度数据','2017年第4季度数据','2018年第1季度数据','2018年第2季度数据','2018年第3季度数据','2018年第4季度数据'],
        cities3: cityOptions3,
        isIndeterminate3: true,

        checkAll4: false,
        checkedCities4: ['数据集2'],
        cities4: cityOptions4,
        isIndeterminate4: true,


        checkAll5: false,
        checkedCities5: ['基础属性标签'],
        cities5: cityOptions5,
        isIndeterminate5: true,


        checkAll6: false,
        checkedCities6: ['互联网行业标签'],
        cities6: cityOptions6,
        isIndeterminate6: true,



        checkAll7: false,
        checkedCities7: ['安全领域标签'],
        cities7: cityOptions7,
        isIndeterminate7: true,


        activeName4: 'firsta',
        activeName6: 'firstas',
        activeName9: 'firstmb',

        dynamicTags: ['人员姓名', '昵称', '代号', '外号'],



        dynamicTags2: ['人员姓名', '昵称', '代号', '外号'],

        checkboxGroup5: ['人员姓名', '昵称', '代号', '外号'],

				tableData2: [
					{
						targetName: 't_profile',
						sheetType: 'MySQL',
						targetNode: 'idno,phone',
						proto: '客户身份及行为数据清洗',
						total: '9487'
					},
					{
						targetName: 't_dx',
						sheetType: 'MySQL',
						targetNode: 'c_yysip,c_ydz,c_ydzyysid,c_mddz,c_mddzyysid',
						proto: '客户身份及行为数据清洗',
						total: '1687'
					},{
						targetName: 't_weblog',
						sheetType: 'MySQL',
						targetNode: 'phone,imei,url',
						proto: '客户身份及行为数据清洗',
						total: '1732'
					},
				],

				tableData9: [
					{
						targetName: '2017年第3季度数据',
						sheetType: 'ElasticSearch数据表',
						targetNode: 'telephone_no(3)、is_loan_app(6)',
						proto: '网络数据空间',
						total: '7'
					},
					{
						targetName: '2017年第4季度数据',
						sheetType: 'MySQL数据表',
						targetNode: 'customer_name(3)、product_id(6)、risk_eval_score(10)',
						proto: '网络数据空间',
						total: '12'
					},{
						targetName: '2018年第3季度数据',
						sheetType: 'Hive数据表',
						targetNode: 'user_name(4)、target(2)、param_desc(6)',
						proto: '网络数据空间',
						total: '6'
					},
				],


				tableData4: [
					{
						name: 't_mcustomer',
						type: '数据库数据表',
						total: '1200',
						time: '2019.04.01 12:00:00'
					}
				],


				tableData5: [
					{
						name: 't_query_log',
						type: '数据库数据表',
						total: '789',
						time: '2019.04.14 12:00:00'
					},
					{
						name: 't_telephoneno_app',
						type: '数据库数据表',
						total: '320',
						time: '2019.04.10 12:00:00'
					}
				],




				tableData7: [
					{
						imei: '350149782659276',
						os_name: 'Android',
						device_type: 'Meizu',
						manufacturer: 'note',
					},
					{
						imei: '350153874961832',
						os_name: 'Android',
						device_type: 'vivo',
						manufacturer: 'X5',
					},
					{
						imei: '350168342523560',
						os_name: 'Android',
						device_type: 'vivo',
						manufacturer: 'X3',
					},
					{
						imei: '350218763537206',
						os_name: 'iPhone',
						device_type: 'IOS',
						manufacturer: 'X',
					},


					{
						imei: '350235879428901',
						os_name: 'Android',
						device_type: 'vivo',
						manufacturer: 'X5',
					},
					{
						imei: '350235879428901',
						os_name: 'Android',
						device_type: 'OPPO',
						manufacturer: 'R9',
					}
				],


				tableData8: [
					{
						text1: '155****2804',
						text2: '美团',
						text3: '0',
						text4: '2018-08-25 	04:50:46',
					},
					{
						text1: '136****2607',
						text2: '拼多多',
						text3: '2',
						text4: '2013-09-25 	04:50:46',
					},
					{
						text1: '150****7958',
						text2: '微信',
						text3: '2',
						text4: '2018-01-05 	12:28:10',
					},
					{
						text1: '150****7958',
						text2: '12306',
						text3: '1',
						text4: '2018-09-06 	18:03:53',
					},
					{
						text1: '150****7958',
						text2: '百度',
						text3: '2',
						text4: '2018-10-12 	11:14:45',
					}
				],



				tableData80: [
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





				inputVisible: false,
        inputValue: '',
				activeName2: 'first',
				formInline: {
					name:''
				},
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,



				showA: false,
				showB: false,
			}
		},
		mounted: function () {
		  // this.tableData2 = [];
		},
		methods: {

			showdata(data){
				console.log(data);
				if(data.total === '9487'){
					this.dialogFormVisible40 = true;
				}else if(data.total === '1687'){
					this.dialogFormVisible41 = true;
				}else{
					this.dialogFormVisible42 = true;
				}
			},



			searchA(){
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

	      this.showA = true
			},

			searchB(){
				const loading = this.$loading({
	        lock: true,
	        text: 'Loading',
	        spinner: 'el-icon-loading',
	        background: 'rgba(255, 255, 255, 1)',
	        target: document.querySelector('.astest')
	      });
	      setTimeout(() => {
	        loading.close();
	      }, 500);
	      this.showB = true
			},

			 handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },


      handleCheckAllChange2(val) {
        this.checkedCities2 = val ? cityOptions2 : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
      },

      handleCheckAllChange3(val) {
        this.checkedCities3 = val ? cityOptions3 : [];
        this.isIndeterminate3 = false;
      },
      handleCheckedCitiesChange3(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities3.length;
        this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.cities3.length;
      },

      handleCheckAllChange4(val) {
        this.checkedCities4 = val ? cityOptions4 : [];
        this.isIndeterminate4 = false;
      },
      handleCheckedCitiesChange4(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities4.length;
        this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.cities4.length;
      },


      handleCheckAllChange5(val) {
        this.checkedCities5 = val ? cityOptions5 : [];
        this.isIndeterminate5 = false;
      },
      handleCheckedCitiesChange5(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities5.length;
        this.isIndeterminate5 = checkedCount > 0 && checkedCount < this.cities5.length;
      },



      handleCheckAllChange6(val) {
        this.checkedCities6 = val ? cityOptions6 : [];
        this.isIndeterminate6 = false;
      },
      handleCheckedCitiesChange6(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities6.length;
        this.isIndeterminate6 = checkedCount > 0 && checkedCount < this.cities6.length;
      },


      handleCheckAllChange7(val) {
        this.checkedCities7 = val ? cityOptions7 : [];
        this.isIndeterminate7 = false;
      },
      handleCheckedCitiesChange7(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities7.length;
        this.isIndeterminate7 = checkedCount > 0 && checkedCount < this.cities7.length;
      },



      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },




			handleClick(tab, event) {
				console.log(tab, event);
		  },

		  handleClick2(tab, event) {
				console.log(tab, event);
		  },

		   handleClick3(tab, event) {
				console.log(tab, event);
		  },



		  showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },


      showCk1(){
      	this.dialogFormVisible1 = true;
      },

      showCk2(){
      	this.dialogFormVisible2 = true;
      },



       showCk3(){
      	this.dialogFormVisible3 = true;
      },





      showInfo(){
      	this.dialogFormVisible4 = true
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags2.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
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

			jump(){
				localStorage.removeItem("current");
				localStorage.setItem("current", 1);
				this.$router.push('dataExtraView');
			},
		}
	}
</script>

<style scoped lang="scss">
	.container,.table{
		background-color: #fff;
		height: 100%;
	}
	.el-tag + .el-tag {
    margin-left: 10px;
  }

  .tagGroup{
  	padding:0 20px;
  	dl{
  		display: inline-block;
  		vertical-align: middle;
  	}
  	.el-tag--small .el-icon-close{color:#fff;}
  	.infoA{
  		margin-right: 80px;
  		dt{
  			display: inline-block;
  			vertical-align: middle;
  			font-weight: normal;
  			font-size: 14px;
  		}
  		dd{
  			color: #fff;
  			display: inline-block;
  			vertical-align: middle;
  			span{
  				background-color: #0090ff;
  				color: #fff;
  				border-color: #0090ff;
  				font-size: 12px;
  				padding:0 10px;
  				display: inline-block;
  				line-height: 32px;
  				border-radius: 4px;
  				.fa{
  					font-size: 16px;
  					width:20px;
  					height: 20px;
  					text-align: center;
  					line-height: 20px;
  					cursor: pointer;
  					margin-left: 5px;
  					position: relative;
  					top:2px;
  				}
  				.fa-times:hover{
  					background-color: #fff;
  					color: #0090ff;
  					border-radius: 100%;
  				}
  			}
  		}
  		p{
  			display: inline-block;
  			vertical-align: middle;
  			line-height: 32px;
  			padding-left: 20px;
  			a{
  				color:#0090ff;
  			}
  		}
  	}
  	.infoB{
  		dt{
  			display: inline-block;
  			vertical-align: middle;
  			font-weight: normal;
  			font-size: 14px;
  		}
  		dd{
  			color: #fff;
  			display: inline-block;
  			vertical-align: middle;
  			span{
  				background-color: #f90;
  				color: #fff;
  				border-color: #f90;
  				font-size: 12px;
  				padding:0 10px;
  				display: inline-block;
  				line-height: 32px;
  				border-radius: 4px;
  				.fa{
  					font-size: 16px;
  					width:20px;
  					height: 20px;
  					text-align: center;
  					line-height: 20px;
  					cursor: pointer;
  					margin-left: 5px;
  					position: relative;
  					top:2px;
  				}
  				.fa-times:hover{
  					background-color: #fff;
  					color: #f90;
  					border-radius: 100%;
  				}
  			}
  		}
  		p{
  			display: inline-block;
  			vertical-align: middle;
  			line-height: 32px;
  			padding-left: 20px;
  			a{
  				color:#0090ff;
  			}
  		}
  	}
  }

  .demo-form-inline{
  	padding:0 20px 10px;
  	text-align: right;
  	.el-input{
  		width: 300px;
  	}
  }
  .el-input--small .el-input__inner{
  	width:300px;
  }

  .fa-list-ul,.fa-download{
  	color: #9b9b9b;
  	font-size: 16px;
  	margin:0 6px;
  }

  .fa-list-ul:hover{color:#2e91ff;}
  .fa-download:hover{color:#f60f6b;}


  .el-checkbox-group{
  	.el-checkbox{
  		display: block;
  		width: 100%;
  		margin-left:30px;
  		margin-bottom: 5px;
  	}
  }

  .semain{
  	.left{
  		border:1px solid #ccc;
  		.setitle{
  			color: #000;
  			background-color: #f5f5f5;
  			height: 36px;
  			border-bottom:1px solid #ccc;
  			text-align: center;
  			line-height: 36px;
  		}
  		.chk{
  			padding:10px;
  		}
  	}
  	.right{
  		/*border:1px solid #ccc;*/
  		margin-left:10px;
  	}
  }

   .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .checkboxGroup5{
  	.el-checkbox-group .el-checkbox{
  		display: inline-block;
  		width: auto;
  		margin-left:0;
  		margin-right:5px;
  		padding-right: 15px;
  	}
  }
</style>

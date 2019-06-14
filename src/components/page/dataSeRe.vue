<template>
	<div class="table">
		<div class="container">
			<template>
			  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="结构化数据查询" name="first">
						<div >
							<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
    						<el-form-item prop="name">
    							<el-input
								    placeholder="请输入内容"
								    v-model.trim="formInline.name">
								    <i slot="prefix" class="el-input__icon el-icon-search"></i>
								  </el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" icon="el-icon-search">查询</el-button>
								</el-form-item>
							</el-form>
						</div>
						<div class="tagGroup">
							<dl class="infoA">
								<dt>数据范围:</dt>
								<dd>
									<span>
										TableA
										<i class="fa fa-times"></i>
									</span>
									<span>
										TableB
										<i class="fa fa-times"></i>
									</span>
									<span>
										TableC
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk1">查看全部</a></p>
								</dd>
							</dl>

							<dl class="infoB">
								<dt>数据标签:</dt>
								<dd>
									<span>
										列标签A
										<i class="fa fa-times"></i>
									</span>
									<span>
										列标签B
										<i class="fa fa-times"></i>
									</span>
									<span>
										列标签C
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk2">查看全部</a></p>
								</dd>
							</dl>
						</div>
						<div style="padding:10px 20px;">
							<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="targetName" align="center" label="命中表"  width="180"></el-table-column>
								<el-table-column prop="sheetType" align="center" label="表类型"  ></el-table-column>
								<el-table-column prop="targetNode" align="center" label="命中字段"  ></el-table-column>
								<el-table-column prop="proto" align="center" label="所属任务"  ></el-table-column>
								<el-table-column prop="total" align="center" label="总命中数量"  ></el-table-column>
								<el-table-column align="center" label="操作" >
									<template slot-scope="scope">
										<a href="javascript:void(0)" @click="showInfo"><i class="fa fa-list-ul"></i></a>
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
						<div>
							<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
    						<el-form-item prop="name">
    							<el-input
								    placeholder="请输入内容"
								    v-model.trim="formInline.name">
								    <i slot="prefix" class="el-input__icon el-icon-search"></i>
								  </el-input>
								</el-form-item>
								<el-form-item>
									<router-link to="/dataSeRe">	<el-button type="primary" icon="el-icon-search">查询</el-button></router-link>
								</el-form-item>
							</el-form>
						</div>
						<div class="tagGroup">
							<dl class="infoA">
								<dt>数据范围:</dt>
								<dd>
									<span>
										TableC
										<i class="fa fa-times"></i>
									</span>
									<span>
										TableB
										<i class="fa fa-times"></i>
									</span>
									<span>
										TableA
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk1">查看全部</a></p>
								</dd>
							</dl>

							<dl class="infoB">
								<dt>数据标签:</dt>
								<dd>
									<span>
										列标签C
										<i class="fa fa-times"></i>
									</span>
									<span>
										列标签B
										<i class="fa fa-times"></i>
									</span>
									<span>
										列标签A
										<i class="fa fa-times"></i>
									</span>
									<p><a href="javascript:void(0);" @click="showCk2">查看全部</a></p>
								</dd>
							</dl>
						</div>
						<div style="padding:10px 20px;">
							<el-table :data="tableData2" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
								<el-table-column prop="targetName" align="center" label="命中表"  width="180"></el-table-column>
								<el-table-column prop="sheetType" align="center" label="表类型"  ></el-table-column>
								<el-table-column prop="targetNode" align="center" label="命中字段"  ></el-table-column>
								<el-table-column prop="proto" align="center" label="所属任务"  ></el-table-column>
								<el-table-column prop="total" align="center" label="总命中数量"  ></el-table-column>
								<el-table-column align="center" label="操作" >
									<template slot-scope="scope">
										<a href=""><i class="fa fa-list-ul"></i></a>
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
					</el-tab-pane>
			  </el-tabs>
			</template>
		</div>

		<el-dialog title="数据范围选择" :visible.sync="dialogFormVisible1" width="800px">
			<div class="semain">
				<el-row>
				  <el-col :span="6">
				  	<div class="grid-content bg-purple">
				  		<div class="left">
				  			<div class="setitle">
				  				工作区
				  			</div>
				  			<div class="chk">
				  				<template>
								  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">工作区1</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
								    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
								</template>

								<template>
								  <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">工作区2</el-checkbox>
								  <div style="margin: 15px 0;"></div>
								  <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
								    <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
								</template>
				  			</div>
				  			<div class="setitle">
				  				数据空间
				  			</div>

				  			<div class="chk">
				  				<template>
									  <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3">数据空间1</el-checkbox>
									  <div style="margin: 15px 0;"></div>
									  <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange3">
									    <el-checkbox v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox>
									  </el-checkbox-group>
									</template>
									<template>
									  <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange4">数据空间2</el-checkbox>
									  <div style="margin: 15px 0;"></div>
									  <el-checkbox-group v-model="checkedCities4" @change="handleCheckedCitiesChange4">
									    <el-checkbox v-for="city in cities4" :label="city" :key="city">{{city}}</el-checkbox>
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
								    </el-tab-pane>
								    <el-tab-pane label="配置管理" name="secondb">
								    	<el-tag>数据清洗任务1</el-tag>
								    	<el-table :data="tableData4" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
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
				  </el-col>
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
				  				列标签区
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
								    	<div style="padding:10px">
								    		<el-tag
											  :key="tag"
											  v-for="tag in dynamicTags2"
											  closable
											  :disable-transitions="false"
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
										<el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>

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




	<el-dialog title="结果详情列表" :visible.sync="dialogFormVisible4" width="900px">
		<el-tabs v-model="activeName9" type="card" @tab-click="handleClick3">
	    <el-tab-pane label="查询结果" name="firstmb">
	    	<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	    		<el-table-column prop="text1" align="center" label="filed1"></el-table-column>
	    		<el-table-column prop="text2" align="center" label="filed2"></el-table-column>
	    		<el-table-column prop="text3" align="center" label="filed3"></el-table-column>
	    		<el-table-column prop="text4" align="center" label="filed4"></el-table-column>
	    		<el-table-column prop="text5" align="center" label="filed5"></el-table-column>
	    		<el-table-column prop="text6" align="center" label="filed6"></el-table-column>
	    	</el-table>
	    </el-tab-pane>
	    <el-tab-pane label="filed1" name="secondmb">
	    	<el-table :data="tableData7" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
	    		<el-table-column prop="text1" align="center" label="filed1"></el-table-column>
	    		<el-table-column prop="text2" align="center" label="filed2"></el-table-column>
	    		<el-table-column prop="text3" align="center" label="filed3"></el-table-column>
	    		<el-table-column prop="text4" align="center" label="filed4"></el-table-column>
	    		<el-table-column prop="text5" align="center" label="filed5"></el-table-column>
	    		<el-table-column prop="text6" align="center" label="filed6"></el-table-column>
	    	</el-table>
	    </el-tab-pane>
	  </el-tabs>
	   <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible4 = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible4 = false">下载</el-button>
	  </div>
	</el-dialog>





	

	</div>
</template>

<script>
	import moment from 'moment/moment';
	const cityOptions = ['数据清洗任务1', '数据清洗任务2', '数据清洗任务3'];
	const cityOptions2 = ['数据清洗任务4'];
	const cityOptions3 = ['数据集1'];
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

				dialogFormVisible4: false,

				checkAll: false,
        checkedCities: ['数据清洗任务1'],
        cities: cityOptions,
        isIndeterminate: true,



        checkAll2: false,
        checkedCities2: ['数据清洗任务4'],
        cities2: cityOptions2,
        isIndeterminate2: true,


         checkAll3: false,
        checkedCities3: ['数据集1'],
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

				tableData2: [
					{
						targetName: 'TableA',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableB',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableC',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableD',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableE',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableF',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableG',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableH',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableJ',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
					{
						targetName: 'TableK',
						sheetType: '数据库数据表',
						targetNode: 'ield(3)、field2(6)、field(10)',
						proto: 'Table清洗任务',
						total: '1732'
					},
				],


				tableData4: [
					{
						name: 'TableA',
						type: '数据库数据表',
						total: '12572',
						time: '2019-01-10 14:28:30',
					},
					{
						name: 'TableA',
						type: '数据库数据表',
						total: '12572',
						time: '2019-01-10 14:28:30',
					}
				],


				tableData7: [
					{
						text1: 'testFiled.text',
						text2: 'testValue',
						text3: '实体数据命中',
						text4: '125kb',
						text5: '数据空间A-数据集3',
						text6: '数据空间A-数据集3'
					},
					{
						text1: 'testFiled.text',
						text2: 'testValue',
						text3: '实体数据命中',
						text4: '125kb',
						text5: '数据空间A-数据集3',
						text6: '数据空间A-数据集3'
					},
					{
						text1: 'testFiled.text',
						text2: 'testValue',
						text3: '实体数据命中',
						text4: '125kb',
						text5: '数据空间A-数据集3',
						text6: '数据空间A-数据集3'
					},
					{
						text1: 'testFiled.text',
						text2: 'testValue',
						text3: '实体数据命中',
						text4: '125kb',
						text5: '数据空间A-数据集3',
						text6: '数据空间A-数据集3'
					},
					{
						text1: 'testFiled.text',
						text2: 'testValue',
						text3: '实体数据命中',
						text4: '125kb',
						text5: '数据空间A-数据集3',
						text6: '数据空间A-数据集3'
					},
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
				listTotal: 0
			}
		},
		mounted: function () {
		  
		},
		methods: {

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
			}
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
</style>

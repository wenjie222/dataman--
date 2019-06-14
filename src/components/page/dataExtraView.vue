<template>
	<div class="table">
		<el-tabs type="border-card" v-model="activeName2" @tab-click="handleClick">
		  <el-tab-pane label="概况" name="first">
		  	<div>
		  		<div class="topWrap">
	  		  <el-button type="primary" @click="addNew">
	  		  	<i class="fa fa-edit"></i>编辑空间
	  			</el-button>
	  		  <el-button type="warning" @click="dialogFormVisible6 = true">
	  		  	<i class="fa fa-upload">上传数据</i>
	  		  </el-button>
	  		  <el-button type="danger">
	  		  	<i class="fa fa-trash-o">删除</i>
	  		  </el-button>
		  	</div>
		  	<div class="item_aList">
		  		<ul>
		  			<li>
		  				<span>空间名称</span>
		  				<span>创建人</span>
		  				<span>创建时间</span>
		  				<span>数据集数</span>
		  				<span>文件总数</span>
		  				<span>占用空间</span>
		  			</li>
		  			<li>
		  				<span>网络数据空间</span>
		  				<span>admin</span>
		  				<span>2019-03-06 10:23:32</span>
		  				<span>6</span>
		  				<span>376</span>
		  				<span>5.38GB</span>
		  			</li>
		  		</ul>
		  	</div>

		  	<div class="item_bList">
		  		<div class="left">
		  			<div class="title">数据概况</div>
		  			<div class="main">
		  				<p><span>文件总数:</span><em>376</em></p>
		  				<p><span>重复文件数:</span><em>2</em></p>
		  				<p><span>解压文件数:</span><em>27</em></p>
		  			</div>
		  			<!-- <div class="infooter">
		  				<p>
		  					<span style="background-color: #1e76fe;"></span> <b>文件总数</b>
		  					<span style="background-color: #40c6d1;"></span> <b>重复文件数</b>
		  					<span style="background-color: #894ce8;"></span> <b>解压文件数</b>
		  				</p>
		  			</div> -->
		  		</div>
		  		<div class="right">
		  			<div class="item_bc">
		  				<div class="title">
		  					<span>数据表</span>
		  					<a @click="showTable" href="javascript:void(0)">查看</a>
		  				</div>
		  				<div class="main">
		  					<p><span>数量:</span> <em>26</em></p>
		  					<p><span>已标注:</span> <em>10</em></p>
		  					<p><span>系统结构化:</span> <em>15</em></p>
		  					<p><span>未标注:</span> <em>16</em></p>
		  					<p><span>加工合成:</span> <em>11</em></p>
		  				</div>
		  			</div>
		  			<div class="item_bd">
		  				<div class="title">
		  					<span>多媒体文件</span>
		  					<router-link to="/dataExtraViewA"><a href="javascript:void(0)">查看</a></router-link>
		  				</div>

		  				<div class="main">
		  					<p><span>图片总数:</span> <em>36</em></p>
		  					<p><span>音频视频总数:</span> <em>8</em></p>
		  					<p><span>占用空间:</span> <em>8MB</em></p>
		  					<p><span>占用空间:</span> <em>12MB</em></p>
		  					<p><span>创建时间:</span> <em>2019.04.19</em></p>
		  					<p><span>创建时间:</span> <em>2019.04.23</em></p>
		  				</div>

		  			</div>
		  		</div>
		  	</div>

		  	<div class="item_cList">
		  		<div class="left">
		  			<div class="title">
		  				<span>数据概况</span>
		  				<a @click="jumpSec" href="javascript:void(0)">更多</a>
		  			</div>
		  			<div class="main">
		  				<el-table  :data="tableData" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">

								<el-table-column prop="name" align="center" label="数据集" width="180">
								</el-table-column>

								<el-table-column prop="total" align="center" label="文件总数" width="80">
								</el-table-column>

								<el-table-column prop="space" align="center" label="占用空间">
								</el-table-column>

								<el-table-column prop="time" align="center" label="上传时间" width="180">
								</el-table-column>

							</el-table>
		  			</div>
		  		</div>
		  		<div class="right">
		  			<div class="item_bc">
		  				<div class="title">
		  					<span>文档</span>
		  					<router-link to="/dataExtraViewC"><a href="javascript:void(0)">查看</a></router-link>
		  				</div>
		  				<div class="main">
		  					<p><span>办公文档:</span> <em>167</em></p>
		  					<p><span>Word:</span> <em>24</em></p>
		  					<p><span>Excel:</span> <em>36</em></p>
		  					<p><span>Powerpoint:</span> <em>15</em></p>
		  					<p><span>Txt:</span> <em>34</em></p>
		  					<p><span>CAJ:</span> <em>2</em></p>
		  					<p><span>PDF:</span> <em>15</em></p>
		  					<p><span>占用空间:</span> <em>57.72MB</em></p>
		  					<p><span>已标注:</span> <em>24</em></p>
		  					<p><span>未标注:</span> <em>13</em></p>
		  					<p><span>创建时间:</span> <em>2019.04.22</em></p>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		  	</div>
		  </el-tab-pane>
		  <el-tab-pane label="文件浏览" name="second">
		  	<div class="topWrapb">
		  		<div class="name">
		  			<i class="fa fa-cube"></i>
		  			网络数据空间
		  		</div>
		  		<div>
		  			<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
							<el-form-item>
								<el-input
							    placeholder="通过文件名称和标签筛选"
							    v-model.trim="formInline.name">
							    <i slot="prefix" class="el-input__icon el-icon-search"></i>
							  </el-input>
							</el-form-item>
							<el-form-item>
								<p>共<span> 4 </span>项</p>
							</el-form-item>
						</el-form>
		  		</div>
		  	</div>
		  	<div class="itemcc">
		  		<div class="left">
		  			<el-collapse v-model="activeNames" @change="handleChange">
						  <el-collapse-item title="全部文件" name="1">
						    <div>
						    	<!-- <el-checkbox-group v-model="checkList">
								    <el-checkbox label="2017年第3季度数据" checked></el-checkbox>
								    <el-checkbox label="2017年第4季度数据"></el-checkbox>
								    <el-checkbox label="2018年第1季度数据"></el-checkbox>
								    <el-checkbox label="2018年第2季度数据"></el-checkbox>
								    <el-checkbox label="2018年第3季度数据"></el-checkbox>
								    <el-checkbox label="2018年第4季度数据"></el-checkbox>
								  </el-checkbox-group> -->

								  <el-checkbox-group v-model="selectCities">
								    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
								  </el-checkbox-group>
						    </div>
						  </el-collapse-item>
						  <el-collapse-item title="全部分类" name="2">
						    <div class="itlist">
						    	<router-link to="/dataExtraViewD"><p><span>图片</span> <em>(36)</em></p></router-link>
						    	<router-link to="/dataExtraViewA"><p><span>音频视频</span> <em>(8)</em></p></router-link>
						    	<router-link to="/dataExtraViewC"><p><span>文档</span> <em>(167)</em></p></router-link>
						    	<router-link to="/dataExtraViewB"><p><span>其他</span> <em>(28)</em></p></router-link>
						    </div>
						  </el-collapse-item>
						</el-collapse>
		  		</div>
		  		<div class="right">
		  			<el-table :data="tableDataV" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
							<el-table-column type="selection" width="60"  align="center"></el-table-column>

							<el-table-column prop="dataSet" align="center" label="数据集名称" width="160"></el-table-column>

							<el-table-column prop="fileName" align="center" label="文件名" width="180"></el-table-column>

							<el-table-column prop="volume" align="center" label="大小"></el-table-column>

							<el-table-column prop="time" align="center" label="创建时间" width="180"></el-table-column>

							<el-table-column align="center" label="标注信息" width="80">
								<template slot-scope="scope">
									<span v-if="scope.row.isFinish === 'true'" class="text_redd">已标注</span>
									<span v-else class="text_greenn">未标注</span>
								</template>
							</el-table-column>

							<el-table-column align="center" label="结构化">
								<template slot-scope="scope">
									<span v-if="scope.row.Structured === 'true'" class="text_redd">非结构化</span>
									<span v-else class="text_greenn">结构化</span>
								</template>
							</el-table-column>

							<el-table-column align="center" label="操作">
								<template slot-scope="scope">
									<a href="javascript:void(0)" @click="addTag"><i class="fa fa-tag"></i></a>
									<!-- <a href=""><i class="fa fa-list-ul"></i></a> -->

									<a href="javascript:void(0)" @click="showa"><i class="fa fa-list-ul"></i></a>
								</template>
							</el-table-column>

							<el-table-column prop="taskName" align="center" label="下载">
								<template slot-scope="scope">
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
		  	</div>
		  </el-tab-pane>
		  <el-tab-pane label="数据表浏览" name="third">
		  	<div class="topWrapb">
		  		<div class="name">
		  			<!-- &nbsp; -->
		  			<i class="fa fa-cube"></i>
		  			数据集
		  			<span>
		  				<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
		  			</span>
		  		</div>
		  		<div>
		  			<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
							<el-form-item>
								<el-input
							    placeholder="通过文件名称和标签筛选"
							    v-model.trim="formInline.name">
							    <i slot="prefix" class="el-input__icon el-icon-search"></i>
							  </el-input>
							</el-form-item>
							<el-form-item>
								<!-- <p>共<span> 4 </span>项</p> -->
								<el-button type="primary" icon="el-icon-search">查询</el-button>
							</el-form-item>
						</el-form>
		  		</div>
		  	</div>

		  	<div class="sgmain">
		  		<div class="left">
		  			<el-table :data="tableDataM" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">

							<el-table-column prop="idNO" align="center" label="数据集名称"></el-table-column>

							<el-table-column prop="fileName" align="center" label="表名"></el-table-column>

							<el-table-column prop="source" align="center" label="来源文件"></el-table-column>

							<el-table-column prop="fileType" align="center" label="文件类型"></el-table-column>

							<el-table-column prop="time" align="center" sortable label="创建时间" width="180"></el-table-column>

							<el-table-column prop="total" align="center" label="数据量" width="80"></el-table-column>

							<el-table-column align="center" label="标注信息" width="160">
								<template slot-scope="scope">
									<router-link to="dataStateDetail">表视图</router-link>
									<router-link to="dataStateDetailB">列视图</router-link>
								</template>
							</el-table-column>
						</el-table>

						<div class="pagination">
							<el-pagination background @current-change="handleCurrentChange" :page-size="10"
			  :pager-count="11" :current-page.sync="currentPage" layout="prev, pager, next" :total="listTotal" :pages="pages">
							</el-pagination>
						</div>
		  		</div>
		  		<div class="right">
		  			<div>
		  				<div class="cftitle">
		  					<i class="fa fa-braille"></i>
		  					<span>文件结构化数据</span>
		  					<span>(customer_01.csv)</span>
		  					<i class="fa fa-edit"></i>
		  				</div>
		  				<div class="cbmain">
		  					<ul>
		  						<li><span class="txt_left">创建时间:</span><em>2017-09-15 21:02:36</em></li>
		  						<li><span class="txt_left">数据量:</span><em>389KB</em></li>
		  						<li><span class="txt_left">备注:</span><em></em></li>
		  						<li><span class="txt_left">来源:</span><em>\\testData1\mdf\2017/Q3...</em></li>
		  						<li>
		  							<span class="txt_left">置信度:</span>
		  							<em>
		  								<el-radio-group v-model="radio2">
										    <el-radio :label="3">重要</el-radio>
										    <el-radio :label="6">普通</el-radio>
										  </el-radio-group>
		  							</em>
		  						</li>
		  						<li>
		  							<span class="txt_left">标签:</span>
		  							<em>
											<el-tag type="success" style="background-color: #01dbff">领域险</el-tag>
											<el-tag type="info" style="background-color: #ff51b6">标准数据</el-tag>
											<el-tag type="warning" style="background-color: #fcd957">中英对照</el-tag>

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
											<a class="add" href="">+</a>
		  							</em>
		  						</li>
		  						<li>
		  							<span class="txt_left">操作:</span>
		  							<em>
		  								<el-tag type="success" style="background-color: #2398ff">浏览数据</el-tag>
											<el-tag @click.native="modifyTags" type="info" style="background-color: #00d8ff">加工</el-tag>
											<el-tag type="warning" style="background-color: #ff9900">导出数据</el-tag>
											<el-tag type="danger" style="background-color: #fe2166">移除</el-tag>
		  							</em>
		  						</li>
		  					</ul>
		  				</div>
		  			</div>
		  		</div>
		  	</div>
		  </el-tab-pane>
		</el-tabs>


		<el-dialog title="编辑数据空间信息" :visible.sync="dialogFormVisible1" width="440px">

			<el-form :model="form1" ref="form1" class="add el-form el-form--label-right">

		    <el-form-item label="空间名称" :label-width="formLabelWidth">
		      <el-input v-model="form1.name1" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="描述" :label-width="formLabelWidth">
		      <el-input v-model="form1.desc" type="textarea" :rows="6" auto-complete="off"></el-input>
		    </el-form-item>
		  </el-form>

		   <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible1 = false"">确 定</el-button>
		  </div>
		</el-dialog>



    <el-dialog title="详情" :visible.sync="dialogFormVisible2" width="640px">
    	<div class="mgtitle">
    		<div>项目资料</div>
    		<div>
    			  <el-radio v-model="radio" label="1">重要</el-radio>
    		</div>
    	</div>

    	<div class="mgbox">
    		<dl>
    			<dt>创建时间:</dt>
    			<dd>2016-11-15 21:02:36</dd>
    		</dl>
    		<dl>
    			<dt>修改时间:</dt>
    			<dd>2016-11-15 21:02:36</dd>
    		</dl>
    		<dl>
    			<dt>标签:</dt>
    			<dd>
    				<em>
								<el-tag type="success" style="background-color: #01dbff">领域险</el-tag>
								<el-tag type="info" style="background-color: #ff51b6">标准数据</el-tag>
								<el-tag type="warning" style="background-color: #fcd957">中英对照</el-tag>
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
								<a class="ssadd" href="">+</a>
							</em>
    			</dd>
    		</dl>
    		<!-- <dl>
    			<dt>备注:</dt>
    			<dd><p>关于中东地区的重要资料，关于中东地区的重要资料关于中东地区的重要资料，关于中东地区的重要资料关于中东地区的重要资料，关于中东地区的重要资料关于中东地区的重要资料，关于中东地区的重要资料</p></dd>
    		</dl> -->
    		<dl>
    			<dt>所在目录:</dt>
    			<dd class="text_greenn">\\2015年数据\立项工作\工作报告</dd>
    		</dl>
    	</div>
    </el-dialog>



    <el-dialog title="详情" :visible.sync="dialogFormVisible3" width="640px">
   		<el-form :model="form7" ref="form7" class="add mabox el-form el-form--label-right">

				<el-form-item label="可信度" :label-width="formLabelWidth">
		      <el-radio-group v-model="radio2">
				    <el-radio :label="3">重要</el-radio>
				    <el-radio :label="6">普通</el-radio>
				  </el-radio-group>
		    </el-form-item>

		    <el-form-item label="文件标签" :label-width="formLabelWidth">
			    <em>
						<el-tag type="success" style="background-color: #01dbff">领域险</el-tag>
						<el-tag type="info" style="background-color: #ff51b6">标准数据</el-tag>
						<el-tag type="warning" style="background-color: #fcd957">中英对照</el-tag>
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
						<a class="ssadd" href="">+</a>
					</em>
				</el-form-item>

		    <el-form-item label="备注" :label-width="formLabelWidth">
		      <el-input v-model="form7.name1" type="textarea" :rows="4" auto-complete="off"></el-input>
		    </el-form-item>

		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible3 = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible3 = false">确 定</el-button>
		  </div>
    </el-dialog>




    <el-dialog title="结构化数据表" :visible.sync="dialogFormVisible4" width="640px">
    	<ul class="sglist">
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    		<li><a href="javascript:void(0)" class="text_greenn">数据表名称1</a><span>2655 行</span></li>
    	</ul>
    </el-dialog>



    <el-dialog title="新建任务" :visible.sync="dialogFormVisible5" width="440px">

			<el-form :model="form8" ref="form8" class="add el-form el-form--label-right">
				<el-form-item label="任务名称" :label-width="formLabelWidth">
		      <el-input v-model="form8.name" auto-complete="off"></el-input>
		    </el-form-item>

		    <!-- <el-form-item label="数据源选择" :label-width="formLabelWidth">
			  	<el-input v-model="form8.sources" v-popover:popover4 auto-complete="off"></el-input>
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

			  </el-form-item> -->

		     <el-form-item label="备注" :label-width="formLabelWidth">
			    <el-input type="textarea" v-model="form8.desc" :rows="6"></el-input>
			  </el-form-item>
			</el-form>

		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible5 = false">取 消</el-button>
		    <el-button type="primary" @click="addOther">确 定</el-button>
		  </div>
		</el-dialog>






		<el-dialog title="新建上传" :visible.sync="dialogFormVisible6" width="840px">

			<el-form :model="form67" ref="form67" class="add el-form el-form--label-right">

		   <!--  <el-form-item label="数据空间" :label-width="formLabelWidth">
		      <el-select v-model="form2.region2" placeholder="请选择数据空间">
		        <el-option label="数据空间A" value="shanghai"></el-option>
		        <el-option label="数据空间B" value="beijing"></el-option>
		      </el-select>
		    </el-form-item> -->

		    <el-form-item label="数据集" :label-width="formLabelWidth">
		      <el-input v-model="form67.name2" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="数据描述" :label-width="formLabelWidth">
		      <el-input v-model="form67.name3" auto-complete="off"></el-input>
		    </el-form-item>

		    <el-form-item label="选择文件" :label-width="formLabelWidth">
		      <el-select v-model="form67.region3" placeholder="请选择">
		        <el-option label="本地文件" value="shanghai"></el-option>
		        <el-option label="在线数据" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>

		  </el-form>

	    <div>
	    	<el-upload
					  class="upload-demo"
					  multiple
					  ref="upload"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  :auto-upload="false">
					  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
					  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
					  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
					</el-upload>
	    </div>

		  <!-- <div style="border:1px solid #ccc;">
		  	<img src="../../assets/list.png" alt="" style="display: block;width: 100%;">
		  </div> -->

		   <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible6 = false">取 消</el-button>
		    <el-button type="primary" @click="statea">确 定</el-button>
		  </div>
		</el-dialog>




	</div>
</template>

<script>
	import moment from 'moment/moment';

	const cityOptions = ["2017年第3季度数据", "2017年第4季度数据", "2018年第1季度数据", "2018年第2季度数据", "2018年第3季度数据","2018年第4季度数据"];
	export default {
		name: 'basetable',
		data() {
			return {

				form67: {
					name2: '',
					name3: '',
					region3: ''
				},

				fileList: [],

				form7: {
					name: '',
				},
				inputValue: '',


				dialogFormVisible1: false,
				formLabelWidth: '110px',

				dialogFormVisible2: false,
				dialogFormVisible3: false,
				dialogFormVisible4: false,
				dialogFormVisible5: false,


				dialogFormVisible6: false,
				radio: '1',


				form1:{
					name1: '我的数据空间',
					desc: '处理人物相关的数据，包括任务基本信息处理人物相关的数据。包括人物基本信息和通话行为数据。和通话行为数据。处理人物相关的数据，包括任务基本信息处理人物相关的数据。包括人物基本信息和通话行为数据。和通话行为数据。'
				},

				form8: {
					name: '',
					desc: ''
				},



        inputVisible: false,
        inputValue: '',
				radio2: 3,
				checkList: ['选中且禁用','复选框 A'],
				activeName2: 'first',
				activeNames: ['1'],
				formInline:{
					name: '',
				},
				tableData:[
					{
						name: '2017年第3季度数据',
						total: '7',
						space: '83.00MB',
						time: '2019-04-11'
					},
					{
						name: '2017年第4季度数据',
						total: '14',
						space: '156.08MB',
						time: '2019-04-10'
					},
					{
						name: '2018年第1季度数据',
						total: '8',
						space: '76.83MB',
						time: '2019-05-09'
					},
					{
						name: '2018年第2季度数据',
						total: '19',
						space: '224.56MB',
						time: '2019-03-22'
					},
					{
						name: '2018年第3季度数据',
						total: '13',
						space: '153.34MB',
						time: '2019-05-08'
					},
					{
						name: '2018年第4季度数据',
						total: '13',
						space: '153.34MB',
						time: '2019-05-08'
					}
				],
				tableDataV: [
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_01.csv',
						volume: '389KB',
						time: '2017-09-22 15:43:02',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_02.csv',
						volume: '402KB',
						time: '2017-09-28 11:24:33',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_03.csv',
						volume: '333KB',
						time: '2017-09-01 09:43:09',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_04.csv',
						volume: '347KB',
						time: '2017-09-03 10:23:02',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_05.csv',
						volume: '342KB',
						time: '2017-09-11 17:34:25',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_06.csv',
						volume: '404KB',
						time: '2017-09-22 14:45:14',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2017年第3季度数据',
						fileName: 'customer_07.csv',
						volume: '404KB',
						time: '2017-09-19 14:45:14',
						isFinish: true,
						Structured: true,
					}
				],

				tableDataN: [
					{
						isCheck: true,
						dataSet: '2019年第1季度数据',
						fileName: 'customer_01.csv',
						volume: '404KB',
						time: '2019-05-22 14:45:14',
						isFinish: true,
						Structured: true,
					},
					{
						isCheck: true,
						dataSet: '2019年第1季度数据',
						fileName: 'customer_02.csv',
						volume: '404KB',
						time: '2019-05-19 17:33:14',
						isFinish: true,
						Structured: true,
					}
				],

				
				tableDataM: [
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_01',
						source: 'customer_01.csv',
						fileType: 'csv',
						time: '2017-09-15 21:02:36',
						total: '38'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_02',
						source: 'customer_02.csv',
						fileType: 'csv',
						time: '2017-09-18 21:02:36',
						total: '43'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_03',
						source: 'customer_03.csv',
						fileType: 'csv',
						time: '2017-09-20 21:05:36',
						total: '56'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_04',
						source: 'customer_04.csv',
						fileType: 'csv',
						time: '2017-09-13 18:02:36',
						total: '24'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_05',
						source: 'customer_05.csv',
						fileType: 'csv',
						time: '2017-09-04 18:22:36',
						total: '27'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_06',
						source: 'customer_06.csv',
						fileType: 'csv',
						time: '2016-09-22 15:02:36',
						total: '43'
					},
					{
						idNO: '2017年第3季度数据',
						fileName: 'customer_07',
						source: 'customer_07.csv',
						fileType: 'csv',
						time: '2017-09-28 15:02:36',
						total: '43'
					},
					
				],
				total:0,//默认数据总数
				pagesize:5,//每页的数据条数
				currentPage:1,//默认开始页面
				pages: 0,
				listTotal: 0,


				options: [
				{
          value: '全部',
          label: '全部'
        },{
          value: '2017年第3季度数据',
          label: '2017年第3季度数据'
        }, {
          value: '2017年第4季度数据',
          label: '2017年第4季度数据'
        }, {
          value: '2018年第1季度数据',
          label: '2018年第1季度数据'
        }, {
          value: '2018年第2季度数据',
          label: '2018年第2季度数据'
        }, {
          value: '2018年第3季度数据',
          label: '2018年第3季度数据'
        },  {
          value: '2018年第4季度数据',
          label: '2018年第4季度数据'
        }],
        value: '全部',


        cities: cityOptions,
        selectCities: [""],
        isRouterAlive: false,
			}
		},
		mounted: function () {
			this.test();
			localStorage.removeItem("addItem");
			this.curr();
		},
		methods: {

			curr(){
				var bb = localStorage.getItem("current");
				if(bb === '1'){
					this.activeName2 = "second"
				}
			},


			statea(){
				localStorage.removeItem("addItem");
				localStorage.setItem("addItem", 1);
				// const loading = this.$loading({
				// 	lock: true,
				// 	text: 'Loading',
				// 	spinner: 'el-icon-loading',
				// 	background: 'rgba(255, 255, 255, 1)',
				// 	target: document.querySelector('#test')
				// });
				// setTimeout(() => {
				//   loading.close();
				// }, 500);
				this.dialogFormVisible6 = false;

				this.activeName2 = "second"

			 	// this.$router.push('dataExtraView');
			},
			test(){
				// this.$router.go(0)
				var aa = localStorage.getItem("addItem");
				if(aa === '1'){
					this.tableDataV = [];
					this.tableDataV = this.tableDataN;
					// let obj = {
					// 	label: '2019年第1季度数据'
					// }
					this.cities.push('2019年第1季度数据');
					this.selectCities = ['2019年第1季度数据'];
					this.activeName2 = "second";
				}

			},

			modifyTags(){
				this.dialogFormVisible5 = true;
			},

			addOther(){
				this.dialogFormVisible5 = false;
				this.$router.push('dataCleanSet');
			},

			showTable(){
				this.activeName2 = 'third'
			},

			jumpSec(){
				this.activeName2 = 'second'
			},

			addNew(){
				this.dialogFormVisible1 = true
			},

			showa(){
				this.dialogFormVisible2 = true
			},
			addTag(){
				this.dialogFormVisible3 = true
			},
			addList(){
				this.dialogFormVisible4 = true
			},
	  handleCurrentChange(val) {
				
			},
			// 获取 easy-mock 的模拟数据
			// getData() {
			   
			// },
			handleSelectionChange(val) {
				
			},
			 handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(val) {
        console.log(val);
      },


      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },



      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }

		}
	}

</script>

<style scoped lang="scss">
	.table{
		/*background-color: #fff;*/
		/*height: 100%;*/
	}
	.topWrap{
		text-align: right;
		background-color: #fff;
		padding:10px 10px;
		.fa{
			margin-right:6px;
		}
	}

	.item_aList{
		background-color: #fff;
		padding:10px;
		ul{
			border:1px solid #ebebeb;
			background-color: #fff;
			li{
				display: flex;
				border-bottom:1px solid #ebebeb;
				span{
					width:16%;
					text-align:center;
					line-height: 40px;
				}
				&:last-child{
					border-bottom:0 none;
				}
			}
		}
	}


	

	.item_bList{
		display: flex;
		margin:20px 0;
		
		.left{
			width: 50%;
			background-color: #fff;
			padding:10px;
			border-radius: 4px;
			.main{
				width: 100%;
				height: 260px;
				box-sizing: border-box;
				background: url(../../assets/aa.png) no-repeat center 30px #fff;
				background-size:300px auto;
				p{
					display: inline-block;
					vertical-align: middle;
					width:32%;
					font-size: 14px;
					em{
						font-style: normal;
						font-size: 16px;
						color: #666;
						padding:0 4px;
						display: inline-block;
						vertical-align: middle;
					}
					span{
						display: inline-block;
						vertical-align: middle;
					}
				}
			}
			.title{
				line-height: 30px;
			}
			.infooter{
				p{
					color: #666;
					text-align:right;
					font-weight: normal;
					font-size: 14px;
					b{
						font-style: normal;
						font-size: 16px;
						color: #666;
						padding:0 16px 0 4px;
						display: inline-block;
						vertical-align: middle;
					}
					span{
						display: inline-block;
						vertical-align: middle;
						width: 16px;
						height: 12px;
						border-radius: 6px;
					}
				}
			}
		}
		.right{
			width: 50%;
			box-sizing: border-box;
			padding-left: 20px;
			.item_bc,.item_bd{
				background-color: #fff;
				margin-bottom: 14px;
				padding:10px;
				.title{
					display: flex;
					justify-content: space-between;
					line-height: 30px;
					a{
						color: #409eff;
					}
				}
				.main{
					p{
						width:43%;
						display: inline-block;
						vertical-align: middle;
						line-height: 36px;

						span{
							display: inline-block;
							vertical-align: middle;
							width:120px;
							text-align: right;
						}
						em{
							display: inline-block;
							vertical-align: middle;
							font-style: normal;
							color: #676767;
						}
					}
				}
			}


			.item_bd{
				margin-bottom:0;
			}
		}
	}


	.item_cList{
		display: flex;
		margin:20px 0;
		.left{
			width: 50%;
			background-color: #fff;
			padding:10px;
			border-radius: 4px;
			height: 100%;
			/*.title{
				line-height: 40px;
			}*/
			.title{
				display: flex;
				justify-content: space-between;
				line-height: 40px;
				a{
					color: #409eff;
				}
			}
			.infooter{
				p{
					color: #666;
					text-align:right;
					font-weight: normal;
					font-size: 14px;
					b{
						font-style: normal;
						font-size: 16px;
						color: #666;
						padding:0 16px 0 4px;
						display: inline-block;
						vertical-align: middle;
					}
					span{
						display: inline-block;
						vertical-align: middle;
						width: 16px;
						height: 12px;
						border-radius: 6px;
					}
				}
			}
		}
		.right{
			width: 50%;
			box-sizing: border-box;
			padding-left: 20px;
			.item_bc{
				background-color: #fff;
				padding:10px;
				.title{
					display: flex;
					justify-content: space-between;
					line-height: 40px;
					a{
						color: #409eff;
					}
				}
				.main{
					p{
						width:43%;
						display: inline-block;
						vertical-align: middle;
						line-height: 38px;

						span{
							display: inline-block;
							vertical-align: middle;
							width:120px;
							text-align: right;
						}
						em{
							display: inline-block;
							vertical-align: middle;
							font-style: normal;
							color: #676767;
						}
					}
				}
			}


			.item_bd{
				margin-bottom:0;
			}
		}
	}


	.el-tabs--border-card{
		background-color: transparent;
		border:0 none;
	}

	.topWrapb{
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding-left: 10px;
		padding-bottom: 10px;
		.name{
			height: 32px;
			line-height: 32px;
		}
	}

	.itemcc{
		display: flex;
		/*align-items: center;*/
		height: 100%;
		justify-content: space-between;
		.left{
			border:1px solid #ebebeb;
			width:260px;
			padding:5px 10px;
			background-color: #fff;
			.el-checkbox-group{
		  	.el-checkbox{
		  		display: block;
		  		padding-left: 15px;
		  		padding-bottom: 10px;
		  	}
		  	.el-checkbox+.el-checkbox{
		  		margin-left: 0
		  	}
		  }
		  .itlist{
		  	p{
		  		line-height: 30px;
		  		padding-left: 15px;
		  		em{
		  			color: #409eff;
		  			font-style: normal;
		  		}
		  	}
		  }
		}
		.right{
			flex:1;
			margin:0 0 0 10px;
			padding:10px;
			background-color: #fff;
		}
	}


	.sgmain{
		display: flex;
		height: 100%;
		justify-content: space-between;
		.left{
			flex:1;
			background-color: #fff;
			padding:0 10px;
		}
		.right{
			width:400px;
			border:1px solid #ccc;
			margin-left: 10px;
			background-color: #413f4c;
			.cftitle{
				background-color: #373542;
				height: 32px;
				padding:10px;
				color: #fff;
				line-height: 32px;
				.fa{
					padding:0 4px;
				}
				.fa-braille{
					color: #06bcec;
				}
			}
			.cbmain{
				background-color: #413f4c;
				ul{
					padding: 10px;
					li{
						color: #fff;
						font-size: 14px;
						line-height: 32px;
						.txt_left{
							display: inline-block;
							vertical-align: top;
							color: #fff;
							width:80px;
							text-align: right;
							padding:0 4px 0 0;
						}
						em{
							font-size: 14px;
							color: #fff;
							font-style: normal;
						}
						.el-tag{
							margin-right: 3px;
							color: #fff;
							cursor: pointer;
							/*background-color: #fb55b9;*/
							.el-icon-close{
								color: #fff;
							}
							.el-icon-close:hover{
								color: #fff;
								background-color: transparent;
							}
						}
					}
				}
				.el-radio{
					color: #fff;
				}
				.add{
					width: 18px;
					height: 18px;
					display: inline-block;
					border:1px solid #fff;
					border-radius: 100%;
					color: #fff;
					text-align:center;
					line-height: 14px;
					font-size: 18px;
					margin-left:4px;
				}
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
		img{
			display: block;
			width: 100%;
		}
	}


	.mgtitle{
		padding: 10px 0;
		border-bottom: 1px dashed #ccc;
		>div{
			display: inline-block;
			vertical-align: middle;
			line-height: 30px;
			width:49%;
		}
	}
	.mgbox{
		dl{
			padding:5px 0;
			dt{
				display: inline-block;
				vertical-align: top;
				width:64px;
				text-align: right;
			}
			dd{
				display: inline-block;
				vertical-align: top;
				width:calc(100% - 80px);


				.el-tag{
					color: #fff;
					font-style: normal;
				}

				.ssadd{
					width: 18px;
					height: 18px;
					display: inline-block;
					border:1px solid #000;
					border-radius: 100%;
					color: #000;
					text-align:center;
					line-height: 14px;
					font-size: 18px;
					margin-left:4px;
					font-style: normal;
				}
			}
		}
	}

	.mabox{
		.el-tag{
					color: #fff;
					font-style: normal;
				}

				.ssadd{
					width: 18px;
					height: 18px;
					display: inline-block;
					border:1px solid #000;
					border-radius: 100%;
					color: #000;
					text-align:center;
					line-height: 14px;
					font-size: 18px;
					margin-left:4px;
					font-style: normal;
				}
	}


	.sglist{
		li{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #ccc;
			a,span{
				height: 30px;
				line-height: 30px;
				font-size: 12px;
			}
		}
	}
</style>

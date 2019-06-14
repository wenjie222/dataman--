<template>
	<div class="table">
		<div class="container">
			<div style="display: flex;justify-content: space-between;padding:10px">
				<div >
					<el-dropdown>
					  <el-button type="primary">
					    工程<i class="el-icon-arrow-down el-icon--right"></i>
					  </el-button>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item @click.native="saveInfo">保存</el-dropdown-item>
					    <el-dropdown-item>另存为</el-dropdown-item>
					    <el-dropdown-item>重命名</el-dropdown-item>
					    <el-dropdown-item>导出(图片)</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
					<el-dropdown>
					  <el-button type="primary">
					    选择<i class="el-icon-arrow-down el-icon--right"></i>
					  </el-button>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>全选</el-dropdown-item>
					    <el-dropdown-item>反选</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>

					<el-dropdown>
					  <el-button type="primary">
					    节点<i class="el-icon-arrow-down el-icon--right"></i>
					  </el-button>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>添加数据表</el-dropdown-item>
					    <el-dropdown-item>配置</el-dropdown-item>
					    <el-dropdown-item>产看(数据)</el-dropdown-item>
					    <el-dropdown-item>移除</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>

					<el-dropdown>
					  <el-button type="primary">
					    执行<i class="el-icon-arrow-down el-icon--right"></i>
					  </el-button>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item>执行(当前)</el-dropdown-item>
					    <el-dropdown-item>执行到此节点</el-dropdown-item>
					    <el-dropdown-item>从此节点执行</el-dropdown-item>
					    <el-dropdown-item>执行全部</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
				</div>
				<div>
					<div class="topWrap">
			  		<a href=""><i class="fa fa-plus-square-o"></i>添加</a>
			  		<a href=""><i class="fa fa-check-square-o"></i>全选</a>
			  		<a href=""><i class="fa fa-minus-square-o"></i>反选</a>
			  		<a href=""><i class="fa fa-search"></i>查询</a>
			  		<a href=""><i class="fa fa-cog"></i>配置</a>
			  		<a href=""><i class="fa fa-play-circle-o"></i>执行</a>
			  		<a href=""><i class="fa fa-floppy-o"></i>保存</a>
			  		<a href=""><i class="fa fa-trash-o"></i>删除</a>
			  		<a href=""><i class="fa fa-times"></i>关闭</a>
			  	</div>
				</div>
			</div>
	  	<div class="teProcess">
	  		<div class="nodelist">
	  			<div class="title">
	  				选择算子
	  			</div>
	  			<div class="delist">
	  				<ul>
	  					<li>
  							<span><i class="fa fa-retweet"></i></span>
  							<em>清洗</em>
	  					</li>
	  					<li>
  							<span><i class="fa fa-object-ungroup"></i></span>
  							<em>关联</em>
	  					</li>
	  					<!-- <li>
  							<span><i class="fa fa-crop"></i></span>
  							<em>抽取</em>
	  					</li>
	  					<li>
  							<span><i class="fa fa-copy"></i></span>
  							<em>复制</em>
	  					</li> 
	  					<li>-->
  							<span><i class="fa fa-th-large"></i></span>
  							<em>分组</em>
	  					</li>
	  					<li>
  							<span><i class="fa fa-chain"></i></span>
  							<em>联合</em>
	  					</li>
	  					<!-- <li>
  							<span><i class="fa fa-list-ol"></i></span>
  							<em>排序</em>
	  					</li>
	  					<li>
  							<span><i class="fa fa-external-link"></i></span>
  							<em>去重</em>
	  					</li> -->
	  				</ul>
	  			</div>
	  		</div>

	  		<div>

					  <div class="xFlow">
					    <!-- save -->
					    <!-- <div class="save">
					      <el-button type="primary" plain @click="SaveToJson">保存</el-button>
					      <el-button type="danger" plain @click="Cancel">取消</el-button>
					    </div> -->

					    <!-- flow -->
					    <div class="flow_group">
					      <div id="myPaletteDiv" class="myPaletteDiv"></div>
					      <div id="myDiagramDiv" class="myDiagramDiv"></div>
					    </div>





					  </div>



	  		</div>
	  	</div>
		</div>

<!-- dialog -->
	    <!-- <el-dialog title="填写信息" width="500px" modal close-on-press-escape :close-on-click-modal="false" :lock-scroll="false" :visible.sync="dialogFormVisible">
	      <el-form :model="form" label-width="100px" label-position="left">
	        <el-form-item label="名称">
	          <el-input v-model="form.name"></el-input>
	        </el-form-item>
	      </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="dialogFormVisible = false">取 消</el-button>
	        <el-button type="primary" @click="FormToDiagram">确 定</el-button>
	      </div>
	    </el-dialog> -->



	   <!--  <el-dialog title="数据源参数" width="440px" :visible.sync="dialogFormVisible">
	      <el-form :model="form" label-width="100px" class="add el-form el-form--label-right">
	        <el-form-item label="数据源" :label-width="formLabelWidth">
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
	        </el-form-item>
	        <el-form-item label=" 选择表">
	          <el-select v-model="form8.region2" placeholder="请选择">
			        <el-option label="t_profile" value="t_profile"></el-option>
	 		        <el-option label="t_dx" value="t_dx"></el-option>
			        <el-option label="t_weblog" value="t_weblog"></el-option>
				    </el-select>
	        </el-form-item>
	      </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="dialogFormVisible = false">取 消</el-button>
	        <el-button type="primary" @click="FormToDiagram">确 定</el-button>
	      </div>
	    </el-dialog> -->


	    <el-dialog title="保存任务" width="440px" :visible.sync="dialogFormVisible2">
	      <el-form :model="form" label-width="100px" class="add el-form el-form--label-right">
	        <el-form-item label="任务名称" :label-width="formLabelWidth">
				  	<el-input v-model="form4.name" auto-complete="off"></el-input>
	        </el-form-item>
	        <el-form-item label="任务描述">
	          <el-input v-model="form4.desc" type="textarea" row="6" auto-complete="off"></el-input>
	        </el-form-item>
	      </el-form>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
	        <el-button type="primary" @click="saveForm">确 定</el-button>
	      </div>
	    </el-dialog>

      <!-- 算子 contact	 -->
	    <el-dialog title="算子参数" width="800px" :visible.sync="dialogFormVisible">
	      <el-form :model="form" ref="form" class="add el-form el-form--label-right">
	        <el-form-item label="算子显示名称" :label-width="formLabelWidth">
				  	<el-input v-model="form.name" auto-complete="off"></el-input>
	        </el-form-item>
	        <el-form-item label="识别字段名" :label-width="formLabelWidth">
					  <el-checkbox v-model="form.checkedall">自动识别相同字段名</el-checkbox>
					</el-form-item>
	      </el-form>

	      <div class="title">选择拼接字段</div>
	      <div>
	      	<div class="tableNamelist">
	      		<span>tww <i class="fa fa-table"></i></span>
	      		<span>tww <i class="fa fa-table"></i></span>
	      		<span>输出字段名称</span>
	      	</div>

	      	<div>
	      		<el-form :model="formz" ref="formz" class="add el-form el-form--label-right">

	      			<el-form-item
	      			  class="addItem"
						    v-for="(domain, index) in dynamicValidateForm.domains"
						    :key="domain.key"
						  >

						    <el-select v-model="domain.valuea" placeholder="选择字段类型">
								  <el-option
									v-for="item in formz.optionsA"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>


						    <el-select v-model="domain.valueb" placeholder="选择字段类型">
								  <el-option
									v-for="item in formz.optionsB"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>

						    <el-input v-model="domain.valuec"></el-input>


						    <span style="cursor: pointer" @click.prevent="removeDomain(domain)"><i class="fa fa-times"></i></span>
						  </el-form-item>
							<el-form-item>
								<el-button @click="addDomain">新增</el-button>
							</el-form-item>
	      		</el-form>
	      	</div>

	      </div>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="dialogFormVisible = false">取 消</el-button>
	        <el-button type="primary" @click="submitForm">确 定</el-button>
	      </div>
	    </el-dialog>

	    <!-- 算子 contact	 -->

	    <!-- 算子 contact	 -->
	    <el-dialog title="算子参数" width="440px" :visible.sync="dialogFormVisible3">
	      <el-form :model="form" ref="form" class="add el-form el-form--label-right">
	        <el-form-item label="算子显示名称" :label-width="formLabelWidth">
				  	<el-input v-model="form.name" auto-complete="off"></el-input>
	        </el-form-item>

					<el-form-item label="设置融合方式" :label-width="formLabelWidth">
						<el-select v-model="formk.type" placeholder="选择字段类型">
						  <el-option
							v-for="item in optionsSelB"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						  </el-option>
						</el-select>
					</el-form-item>
	      </el-form>

	      <div class="title">选择拼接字段</div>
	      <div>
	      	<div class="tableNamelistB">
	      		<span>tww <i class="fa fa-table"></i></span>
	      		<span>tww <i class="fa fa-table"></i></span>
	      	</div>

	      	<div>
	      		<el-form :model="formk" ref="formk" class="add el-form el-form--label-right">

	      			<el-form-item
	      			  class="addItemB"
						    v-for="(domain, index) in dynamicValidateFormB.domains"
						    :key="domain.key"
						  >

						    <el-select v-model="domain.valuea" placeholder="选择字段类型">
								  <el-option
									v-for="item in formk.optionsA"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>


						    <el-select v-model="domain.valueb" placeholder="选择字段类型">
								  <el-option
									v-for="item in formk.optionsB"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								  </el-option>
								</el-select>

						    <span style="cursor: pointer" @click.prevent="removeDomainB(domain)"><i class="fa fa-times"></i></span>
						  </el-form-item>
							<el-form-item>
								<el-button @click="addDomainB">新增</el-button>
							</el-form-item>
	      		</el-form>
	      	</div>

	      </div>
	      <div slot="footer" class="dialog-footer">
	        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
	        <el-button type="primary" @click="submitFormB">确 定</el-button>
	      </div>
	    </el-dialog>
	    <!-- 算子 contact	 -->
	</div>
</template>

<script>
	import moment from 'moment/moment';
	import go from 'gojs';
	import global_   from  './../common/Global'
  // let $ = go.GraphObject.make;
	export default {
		name: 'basetable',
		data() {
			return {
				formLabelWidth: '100px',

				form: {
					sources: '',
					region2: ''
				},
				form4: {
					name: '',
					checkedall: false
				},

				formz: {    // 算子 contact
					optionsA: [
						{
							value: '0',
							label: 'tableA'
						},
						{
							value: '1',
							label: 'tableB'
						},
						{
							value: '2',
							label: 'tableC'
						},
					],
					optionsB: [
						{
							value: '7',
							label: 'tableM'
						},
						{
							value: '8',
							label: 'tableK'
						},
						{
							value: '9',
							label: 'tableZ'
						},
					],
				},



				optionsSelB: global_.fusionMode,   // 规则类型



				formk: {    // 算子 join
					optionsA: [
						{
							value: '0',
							label: 'tableA'
						},
						{
							value: '1',
							label: 'tableB'
						},
						{
							value: '2',
							label: 'tableC'
						},
					],
					optionsB: [
						{
							value: '7',
							label: 'tableM'
						},
						{
							value: '8',
							label: 'tableK'
						},
						{
							value: '9',
							label: 'tableZ'
						},
					],
				},

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
	        },
	        {
	          label: '医疗'
	        }
				],
				defaultProps7: {
          children: 'children',
          label: 'label'
        },

        visible: false,



				activeName2: 'first',
			  dialogFormVisible: false,
			  dialogFormVisible2: false,
			  dialogFormVisible3: true,
	      form: {
	        name: "",
	        region: "",
	        date1: "",
	        date2: "",
	        delivery: false,
	        type: [],
	        resource: "",
	        desc: ""
	      },
	      DiagramData: {
	        saveData: null,
	        key: null
	      },


	      dynamicValidateForm: {
          domains: [{
            valuea: '',
            valueb: '',
            valuec: '',
          }]
        },

        dynamicValidateFormB: {
          domains: [{
            valuea: '',
            valueb: '',
          }]
        },

			}
		},
		mounted: function () {
		   // 初始化
	    this.init();
	    //
	    this.load();
	    //
	    this.DiagramGrid();
		},
		computed: {
	    //定义一个模板
	    $() {
	      return go.GraphObject.make; // 定义一个模板
	    },
    // 定义一个画布
	    myDiagram() {
	      return go.GraphObject.make(go.Diagram, "myDiagramDiv", {
	        "undoManager.isEnabled": true, // 撤销和重做
	        initialContentAlignment: go.Spot.Center,
	        allowDrop: true,
	        scrollsPageOnFocus: false, //滚动页焦点
	        "draggingTool.dragsLink": true, //拖动工具拖动链接
	        "draggingTool.isGridSnapEnabled": true, //拖动工具已启用网格捕捉
	        "linkingTool.isUnconnectedLinkValid": false, //链接工具未连接链接有效
	        "linkingTool.portGravity": 200, //链接工具端口重力
	        "relinkingTool.isUnconnectedLinkValid": true, //重新连接工具未连接链接有效
	        "relinkingTool.portGravity": 250, //重新连接工具端口重力
	        "relinkingTool.fromHandleArchetype": go.GraphObject.make(
	          go.Shape,
	          "Diamond",
	          {
	            segmentIndex: 0,
	            cursor: "pointer",
	            desiredSize: new go.Size(8, 8),
	            fill: "tomato",
	            stroke: "darkred"
	          }
	        ),
	        "relinkingTool.toHandleArchetype": go.GraphObject.make(
	          go.Shape,
	          "Diamond",
	          {
	            segmentIndex: -1,
	            cursor: "pointer",
	            desiredSize: new go.Size(8, 8),
	            fill: "darkred",
	            stroke: "tomato"
	          }
	        ),
	        "linkReshapingTool.handleArchetype": go.GraphObject.make(
	          go.Shape,
	          "Diamond",
	          {
	            desiredSize: new go.Size(7, 7),
	            fill: "lightblue",
	            stroke: "deepskyblue"
	          }
	        ),
	        // rotatingTool: go.GraphObject.make(TopRotatingTool),
	        "rotatingTool.snapAngleMultiple": 15,
	        "rotatingTool.snapAngleEpsilon": 15,
	        "undoManager.isEnabled": true
	      });
	    }
 		},
		methods: {

			// 初始化
    init() {
      let _this = this;
      const $ = this.$;
      const myDiagram = this.myDiagram;
      // 节点模板的助手定义
      let nodeStyle = () => {
        return [
          //节点。位置来自节点数据的“loc”属性，
          //按此转换。解析静态方法。
          //如果节点。位置改变，更新节点数据的loc属性，
          //使用点返回。stringify静态方法。
          new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
            go.Point.stringify
          ),
          {
            // 节点。位置在每个节点的中心
            locationSpot: go.Spot.Center
          }
        ];
      };
      //定义一个函数来创建一个通常透明的“端口”。
      //用“name”作为标语牌。
      //“align”用于确定端口相对于节点主体的位置，
      //“spot”用于控制链接如何与端口连接，以及端口是否连接
      //沿着节点的一侧延伸，
      //和boolean“output”和“input”参数控制用户是否可以从端口绘制链接。
      let makePort = (name, align, spot, output, input) => {
        let horizontal =
          align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
        //端口基本上就是一个透明的矩形，它沿着节点的一侧延伸，
        //当鼠标经过它时，它就会变成彩色的
        return $(go.Shape, {
          fill: "transparent", // 在mouseEnter事件处理程序中更改为颜色
          strokeWidth: 0, // 没有中风
          width: horizontal ? NaN : 8, // 如果不是水平拉伸，也就是8宽
          height: !horizontal ? NaN : 8, // 如果不是垂直拉伸，只要8英尺
          alignment: align, // 将端口对准主形状
          stretch: horizontal
            ? go.GraphObject.Horizontal
            : go.GraphObject.Vertical,
          portId: name, // 声明此对象为“端口”
          fromSpot: spot, // 声明连接可能在此端口连接的位置
          fromLinkable: output, // 声明用户是否可以从这里绘制链接
          toSpot: spot, // 声明连接可能在此端口连接的位置
          toLinkable: input, // 声明用户是否可以在此处绘制链接
          cursor: "pointer", // 显示一个不同的光标来指示潜在的链接点
          mouseEnter: (e, port) => {
            // 连接端口参数的形状
            if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
          },
          mouseLeave: (e, port) => {
            port.fill = "transparent";
          }
        });
      };
      // 文本样式
      let textStyle = () => {
        return {
          font: "bold 11pt Helvetica, Arial, sans-serif",
          stroke: "whitesmoke"
        };
      };
      // 为常规节点定义节点模板
      myDiagram.nodeTemplateMap.add(
        "Step",
        $(
          go.Node,
          "Table",
          nodeStyle(),
          // 主要对象是一个面板，它围绕着一个矩形形状的文本块
          $(
            go.Panel,
            "Auto",
            $(
              go.Shape,
              "Rectangle",
              {
                fill: "#00A9C9",
                strokeWidth: 1,
                desiredSize : new go.Size(80, 50),
                margin: -10
              },
              new go.Binding("figure", "figure")
            ),
            $(
              go.TextBlock,
              textStyle(),
              {
                margin: 8,
                maxSize: new go.Size(120, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: false
              },
              new go.Binding("text").makeTwoWay()
            )
          ),
          // 四个命名端口，每边一个:
          makePort("T", go.Spot.Top, go.Spot.TopSide, false, true),
          makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
          makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
          makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)
        )
      );
      myDiagram.nodeTemplateMap.add(
        "Condition",
        $(
          go.Node,
          "Table",
          nodeStyle(),
          // 主要对象是一个面板，它围绕着一个矩形形状的文本块
          $(
            go.Panel,
            "Auto",
            $(
              go.Shape,
              "Circle",
              {
                fill: "green",
                desiredSize : new go.Size(70, 70),
                strokeWidth: 0
              },
              new go.Binding("figure", "figure")
            ),
            $(
              go.TextBlock,
              textStyle(),
              {
                margin: 5,
                maxSize: new go.Size(40, NaN),
                wrap: go.TextBlock.WrapFit,
                editable: false
              },
              new go.Binding("text").makeTwoWay()
            )
          ),
          // 四个命名端口，每边一个:
          makePort("T", go.Spot.Top, go.Spot.Top, false, true),
          makePort("L", go.Spot.Left, go.Spot.Left, true, true),
          makePort("R", go.Spot.Right, go.Spot.Right, true, true),
          makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        )
      );
      myDiagram.nodeTemplateMap.add(
        "Start",
        $(
          go.Node,
          "Table",
          { deletable: false },
          nodeStyle(),
          $(
            go.Panel,
            "Auto",
            $(go.Shape, "Circle", {
              minSize: new go.Size(60, 60),
              fill: "#79C900",
              strokeWidth: 1
            }),
            $(
              go.TextBlock,
              "Start",
              textStyle(),
              { editable: false },
              new go.Binding("text")
            )
          ),
          // 三个命名端口，每边一个，除了底部，全部只输入:
          makePort("L", go.Spot.Left, go.Spot.Left, true, false),
          makePort("R", go.Spot.Right, go.Spot.Right, true, false),
          makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        )
      );
      myDiagram.nodeTemplateMap.add(
        "End",
        $(
          go.Node,
          "Table",
          nodeStyle(),
          $(
            go.Panel,
            "Auto",
            $(go.Shape, "Circle", {
              minSize: new go.Size(60, 60),
              fill: "#DC3C00",
              strokeWidth: 1
            }),
            $(
              go.TextBlock,
              "End",
              textStyle(),
              { editable: false },
              new go.Binding("text")
            )
          ),
          // 三个命名端口，每边一个，除了底部，全部只输入:
          makePort("T", go.Spot.Top, go.Spot.Top, false, true),
          makePort("L", go.Spot.Left, go.Spot.Left, false, true),
          makePort("R", go.Spot.Right, go.Spot.Right, false, true)
        )
      );
      // myDiagram.nodeTemplateMap.add(
      //   "Comment",
      //   $(
      //     go.Node,
      //     "Auto",
      //     nodeStyle(),
      //     $(go.Shape, "File", {
      //       fill: "#42b983",
      //       strokeWidth: 1
      //     }),
      //     $(
      //       go.TextBlock,
      //       textStyle(),
      //       {
      //         margin: 5,
      //         maxSize: new go.Size(200, NaN),
      //         wrap: go.TextBlock.WrapFit,
      //         textAlign: "center",
      //         editable: false,
      //         font: "bold 12pt Helvetica, Arial, sans-serif"
      //       },
      //       new go.Binding("text").makeTwoWay()
      //     )
      //     // 没有端口，因为不允许连接到注释
      //   )
      // );
      // 替换linkTemplateMap中的默认链接模板
      myDiagram.linkTemplate = $(
        go.Link, // 整个链接面板
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5,
          toShortLength: 4,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: true,
          resegmentable: true,
          // 鼠标巧妙地移动:突出链接:
          mouseEnter: (e, link) => {
            link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)";
          },
          mouseLeave: (e, link) => {
            link.findObject("HIGHLIGHT").stroke = "transparent";
          }
        },
        new go.Binding("points").makeTwoWay(),
        $(
          go.Shape, // 高光形状，通常是透明的
          {
            isPanelMain: true,
            strokeWidth: 8,
            stroke: "transparent",
            name: "HIGHLIGHT"
          }
        ),
        $(
          go.Shape, // 链接路径形状
          {
            isPanelMain: true,
            stroke: "gray",
            strokeWidth: 2
          }
        ),
        $(
          go.Shape, // 箭头
          {
            toArrow: "standard",
            strokeWidth: 0,
            fill: "gray"
          }
        ),
        $(
          go.Panel,
          "Auto", // 链接标签，通常不可见
          {
            visible: false,
            name: "LABEL",
            segmentIndex: 2,
            segmentFraction: 0.5
          },
          new go.Binding("visible", "visible").makeTwoWay(),
          $(
            go.Shape,
            "RoundedRectangle", // 标签的形状
            {
              fill: "#F8F8F8",
              strokeWidth: 0
            }
          ),
          $(
            go.TextBlock,
            "Yes", // 标签
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "#333333",
              editable: false
            },
            new go.Binding("text").makeTwoWay()
          )
        )
      );
      //线生成事件
      myDiagram.addDiagramListener("LinkDrawn", e => {
        showLinkLabel(e);
      });
      // 线连接事件
      myDiagram.addDiagramListener("LinkRelinked", e => {
        showLinkLabel(e);
      });
      myDiagram.addDiagramListener("ObjectDoubleClicked", e => {
        console.log(e);
        console.log(e.subject.part.data);
        this.form.name = e.subject.part.data.text;
        this.DiagramData.key = e.subject.part.data.key;
        this.dialogFormVisible = true;
      });
      // 如果来自“条件”节点，则使链接标签可见。
      // 这个侦听器由“LinkDrawn”和“LinkRelinked”DiagramEvents调用。
      let showLinkLabel = e => {
        let label = e.subject.findObject("LABEL");
        if (label !== null)
          label.visible = e.subject.fromNode.data.figure === "Diamond";
      };
      // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
      // 链接工具和链接工具使用的临时链接也是正交的
      myDiagram.toolManager.linkingTool.temporaryLink.routing =
        go.Link.Orthogonal;
      myDiagram.toolManager.relinkingTool.temporaryLink.routing =
        go.Link.Orthogonal;
      // 初始化页面左侧的调色板
      let myPalette = $(go.Palette, "myPaletteDiv", {
        scrollsPageOnFocus: false,
        // "grid.visible" :true,
        nodeTemplateMap: myDiagram.nodeTemplateMap, // 共享myDiagram使用的模板
        model: new go.GraphLinksModel([
          // 指定调色板的内容
          {
            category: "Condition",
            text: "MySQL"
          },
          {
            category: "Condition",
            text: "Oracle"
          },
          {
            category: "Condition",
            text: "ES"
          },
          {
            category: "Condition",
            text: "HBase"
          },
          {
            category: "Condition",
            text: "Kafka"
          },
          {
            category: "Condition",
            text: "Hive"
          },
          // {
          //   category: "Condition",
          //   text: "MongoDB"
          // },
          // {
          //   category: "Condition",
          //   text: "Redis"
          // },
          // {
          //   category: "Condition",
          //   text: "FTP"
          // },



          {
            category: "Step",
            text: "清洗"
          },
          {
            category: "Step",
            text: "关联"
          },
          // {
          //   category: "Step",
          //   text: "抽取"
          // },
          // {
          //   category: "Step",
          //   text: "复制"
          // },
          {
            category: "Step",
            text: "分组"
          },
          {
            category: "Step",
            text: "联合"
          },
          // {
          //   category: "Step",
          //   text: "排序"
          // },
          // {
          //   category: "Step",
          //   text: "去重"
          // },



        ])
      });
    },
    // 网格背景
    DiagramGrid() {
      this.myDiagram.grid.visible = true;
      this.myDiagram.toolManager.draggingTool.isGridSnapEnabled = true;
      this.myDiagram.toolManager.resizingTool.isGridSnapEnabled = true;
      this.myDiagram.toolManager.draggingTool.gridSnapCellSize = new go.Size(
        10,
        10
      );
      // 修改颜色及网格大小
      this.myDiagram.grid = this.$(
        go.Panel,
        go.Panel.Grid,
        { gridCellSize: new go.Size(60, 60) },
        this.$(go.Shape, "LineH", { stroke: "#ddd" }),
        this.$(go.Shape, "LineV", { stroke: "#ddd" })
      );
    },
    //修改节点数据
      // let data = this.myDiagram.model.findNodeDataForKey(this.DiagramData.key);
      // this.myDiagram.model.setDataProperty(data, "text", this.form.name);
      // this.dialogFormVisible = false;

      


    
    // 初始化数据
    load() {
      this.myDiagram.model = go.Model.fromJson({
        class: "go.GraphLinksModel",
        linkFromPortIdProperty: "fromPort",
        linkToPortIdProperty: "toPort",
        nodeDataArray: [],
        linkDataArray: []
      });
    },
    // 保存数据
    SaveToJson() {
      this.saveData = this.myDiagram.model.toJson();
      this.$message({
        message: "保存成功",
        type: "success",
        center: true
      });
      console.log(JSON.parse(this.saveData));
    },
    // 取消操作
    Cancel() {
      this.$confirm("取消之后数据将不会保存", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },



			handleClick(tab, event) {
        console.log(tab, event);
      },

      handleNodeClick7(data){
				console.log(data)
				let _this = this;
				_this.form8.sources = data.label;
			},


			saveInfo(){
				let _this = this;
				_this.dialogFormVisible2 =  true;
			},

			saveForm(){
				let _this = this;
				_this.dialogFormVisible2 =  false;
				_this.SaveToJson();
				 this.$message({
          message: '保存成功',
          type: 'success'
        });
			},


			addDomain() {
        this.dynamicValidateForm.domains.push({
          valuea: '',
          valueb: '',
          valuec: ''
        });
      },

      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },

      submitForm(formName) {
	  	  this.dialogFormVisible = true;
	      console.log(this.dynamicValidateForm);
      },



      addDomainB() {
        this.dynamicValidateFormB.domains.push({
          valuea: '',
          valueb: '',
        });
      },


      removeDomainB(item) {
        var index = this.dynamicValidateFormB.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateFormB.domains.splice(index, 1)
        }
      },


      submitFormB(formName) {
	  	  this.dialogFormVisible3 = true;
	      console.log(this.dynamicValidateFormB);
      },


		}
	}

</script>

<style scoped lang="scss">
	.container,.table{
		background-color: #fff;
		height: 100%;
	}
	.container{
		/*padding:20px;*/
	}
	.topWrap{
		text-align: right;
		a{
			width:50px;
			display: inline-block;
			vertical-align: middle;
			text-align: center;
			font-size: 14px;
			color: #a9a9a9;
		}
		a:hover{
			color: #ff2b6c;
		}
		.fa{
			/*font-size:26px;*/
			display: block;
		}
	}

	.teProcess{
		/*background:  url(../../assets/pic02.png) no-repeat center center;*/
		/*background-size: contain;*/
		height: 600px;
	}

	.nodelist{
		width:240px;
		border:1px solid #ccc;
		background-color: #fff;
		border-radius: 4px;
		margin:20px 0 0 20px;
		display: none;
		.title{
			line-height: 36px;
			text-align: center;
			background-color: #ebebeb;
			border-bottom: 1px solid #ccc;
			font-size: 14px;
		}
		.delist{
			ul{
				overflow:hidden;
				padding:20px 0;
				li{
					width:33%;
					list-style: none;
					float: left;
					text-align: center;
					margin:0 0 20px 0;
					cursor: pointer;
					span{
						display: block;
						width:60px;
						height: 60px;
						border:1px solid #ebebeb;
						border-radius: 100%;
						text-align: center;
						margin:0 auto;
					}
					.fa{
						color: #ccc;
						font-size:26px;
						margin-top: 18px;
					}
					em{
						font-style: normal;
						font-style: 12px;
						color: #ccc;
						display: block;
						line-height: 30px;
					}
					&:hover{
						span{
							background-color: #ebebeb;
						}
					}
				}
			}
		}
	}



	.xFlow {
  position: relative;
  width: 1200px;
  height: 1060px;
  /* save */
  .save {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 99;
  }
  /* flow */
  .flow_group {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #333;
    /* 左侧 */
    .myPaletteDiv {
      box-sizing: border-box;
      width: 300px;
      border-right: 1px solid #ccc;
      background-color: #eee;
    }
    /* 右侧 */
    .myDiagramDiv {
      flex-grow: 1;
      box-sizing: border-box;
      background-color: #fff;
    }
  }
}


.tableNamelist{
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;
	padding:10px 0;
	span{
		width:30%;
	}
}


.tableNamelistB{
	/*display: flex;
	justify-content: space-around;*/
	box-sizing: border-box;
	padding:10px 10px;
	span{
		width:48%;
		display: inline-block;
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




canvas {
  outline: 0;
}

</style>

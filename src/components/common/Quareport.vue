<template>
  <div class="info">
    <div class="ml_itemv">
        <div class="ml_itema">
          <div>报告时间: <span>{{report.createTime}}</span></div>
          <div>
            <div>数据质量综合评分: </div>
            <div style="margin:20px 0 0 20px">
              <el-progress type="circle" :percentage="report.reportScore" status="text"><span>{{report.reportScore}}</span> 分</el-progress>
            </div>
          </div>
        </div>

        
        <div class="ml_itema" >
          <div>
            <div class="aatitle">数据源</div>
            <p><span>数据源名称:</span> <b>{{report.dataSource.name}}</b></p>
            <p><span>数据源类型:</span> <b>{{report.dataSource.type}}</b></p>
            <p><span>数据源地址:</span> <b>{{report.dataSource.ip}}</b></p>
            <p><span>数据库名称:</span> <b>{{report.dataSource.warename}}</b></p>
            <p><span>质量稽核表:</span> <b>{{report.dataSource.tablename}}</b></p>
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

          <el-tab-pane v-for="(item, index) in report.tabs" :label="item.name">
            <div style="margin:20px 0 0 0">
              <div class="aatitle">表评分详情</div>
              <div class="textInfo">
                <div>
                  <div class="score">综合评分: <em>89</em></div>
                  <div :id="item.id" :style="{width: '280px', height: '280px', marginLeft: '80px'}"></div>
                </div>
                <div style="padding-top:100px">
                  <p><span>行业标准:</span> <em>网络</em></p>
                  <p><span>实体模型:</span> <em>网络客户身份模型</em></p>
                  <p><span>总数据行:</span> <em>2828</em></p>
                  <p><span>合规数据:</span> <em>1902</em></p>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  data() {
    return {
      report: {
        createTime: '2019.05.15 20:04:05',
        reportScore: 50,
        dataSource: {
          name: '移动数据资源库',
          type: 'MySQL',
          ip: '192.168.10.126:3306',
          warename: 'ydsjzyk',
          tablename: 't_profile、t_dx、t_weblog',
        },
        overrall: [100,100,100,40,100,40],
        overrallCate: [
          ['product', '综合评分', '合理性', '一致性', '唯一性', '及时性', '准确性', '完整性'],
          ['customer', 43.3, 85.8, 93.7, 60, 70.4, 50.2, 80],
          ['stock', 70, 80.2, 65.4, 90, 72, 66, 77],
        ],
        tabs: [
         {
          name: 'tab_a',
          id: 'myChart3',
          standard: '网络',
          model: '网络客户身份模型',
          total: '2828',
          complianceTotal: '1902',
          overrall: [100,100,100,40,100,40]
         },
         {
          name: 'tab_b',
          id: 'myChart4',
          standard: '网络',
          model: '短信数据模型',
          total: '2828',
          complianceTotal: '1902',
          overrall: [100,100,100,40,100,50]
         },
         {
          name: 'tab_c',
          id: 'myChart5',
          standard: '网络',
          model: '上网日志数据模型',
          total: '2828',
          complianceTotal: '1902',
          overrall: [100,100,100,40,100,60]
         }
        ]
      }
    }
  },
  mounted: function () {
    // this.drawLine();
    this.$nextTick(function () {
      this.drawLine1();
      this.drawLine2();
      this.drawLine3();
    });
  },
  methods:{
    drawLine1(){
      let myChart = this.$refs.myChart;
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
                value: this.report.overrall
              }]
            }
          ]
      };

      let aaChart = echarts.init(myChart);
      aaChart.setOption(option);
    },

    drawLine2(){
      let myChart2 = this.$refs.myChart2;
      let option = {
          legend: {},
          tooltip: {},
          dataset: {
            source: this.report.overrallCate
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
      let _this = this;
      let i = 0;
      let itemsA = [];
      let itemsB = [];
      for( let m = _this.report.tabs.length;i<m;i++){
        itemsA.push(document.querySelector("#" + _this.report.tabs[i].id));

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
                  value: _this.report.tabs[i].overrall
                }]
              }
            ]
        };
        itemsB.push(option);
      };

      console.log(itemsA, itemsB);


      let ccChart = echarts.init(itemsA[i]);
      ccChart.setOption(itemsB[i]);
    },

    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleCurrentChange(val) {

    },
    handleChangea(val) {
      console.log(val);
    },
  }
}
</script>

<style scoped lang="scss">
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

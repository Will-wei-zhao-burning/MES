<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-03 16:07:48
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 21:30:56
-->
<template>
  <div>
    <div id="summary">
      <el-row class="header">
        <el-col>江苏新萌芽智能纺织有限公司 计划表 </el-col>
      </el-row>
      <el-row class="serach_box">
        <el-col :span="4"
          >订单号
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4"
          >制单日期
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4"
          >生产小组
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="3"
          >业务员
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="3"
          >客户
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="3"
          >审核
          <el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button @click="addColumn">加列</el-button>
          <el-button @click="addRow">加行</el-button>
        </el-col>
      </el-row>
      <!-- 表单区 -->
      <div id="middle">
        <el-table show-summary :summary-method="getSummaries" :data="tableData">
          <el-table-column
            label="序号"
            type="index"
            width="80"
          ></el-table-column>
          <el-table-column label="货号" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="客户款号" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="品名" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="条形码" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="花型描述" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="花型配比" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="颜色描述" width="220">
            <template slot-scope="scope">
              <el-input placeholder="输入格式：红、黄、蓝" v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column  label="颜色配比" width="220">
            <template slot-scope="scope">
              <el-input placeholder="输入格式：2、5、3" v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="照片" width="120"></el-table-column>
          <el-table-column label="机种" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="针数(N)" width="120">
            <template slot-scope="scope">
              <div>
                <el-input v-model="scope.row.number" clearable></el-input>
              </div>
              <div>
                <el-input v-model="scope.row.number" clearable></el-input>
              </div>
              <div>
                <el-input v-model="scope.row.number" clearable></el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="用料" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="缝头方式" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="功能性" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="后道处理" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="备注1" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="双/组（pack）" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          
          <el-table-column v-for="item in items" :key="item.index">
            <template slot="header" slot-scope="scope">
              PO号{{ item }}:<el-input
                class="input-box"
                v-model="search"
                size="mini"
                placeholder="输入"
              />
            </template>
            <el-table-column label="交期">
              <template slot="header" slot-scope="scope">
                交期{{ item }}:<el-input
                  class="input-box"
                  v-model="search"
                  size="mini"
                  placeholder="输入"
                />
              </template>
              <el-table-column label="pack数" width="80">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.number" clearable></el-input>
                </template>
              </el-table-column>
              <el-table-column label="双数" width="80">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.number" clearable></el-input>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table-column>
          <el-table-column label="额外样品数量">
            <el-table-column label="尺寸样">
              <template slot-scope="scope">
                <el-input v-model="scope.row.number" clearable></el-input>
              </template>
            </el-table-column>
            <el-table-column label="大货样">
              <template slot-scope="scope">
                <el-input v-model="scope.row.number" clearable></el-input>
              </template>
            </el-table-column>
            <el-table-column label="检测样">
              <template slot-scope="scope">
                <el-input v-model="scope.row.number" clearable></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <el-row class="input-index">
          <div>备注三</div>
          <el-input clearable v-model="search" class="input-box"></el-input>
        </el-row>
        <el-row class="table-footer">
          <el-col :span="2">/</el-col>
          <el-col :span="2">样品确认</el-col>
          <el-col :span="2">大货算料</el-col>
          <el-col :span="2">大货备料</el-col>
          <el-col :span="2">产前样</el-col>
          <el-col :span="2">生产</el-col>
          <el-col :span="2">缝头、定型</el-col>
          <el-col :span="2">检品包装</el-col>
          <el-col :span="8">备注四</el-col>
        </el-row>
        <el-row class="table-footer">
          <el-col :span="2">计划日期</el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="8"><el-input v-model="search"></el-input></el-col>
        </el-row>
      </div>
      <!-- 提交区 -->
      <div class="footer">
        <el-checkbox v-model="checked">不对外发布</el-checkbox>
        <el-button @click="removeDisplay = true" type="info">取消</el-button>
        <el-button @click="submitDialogDisplay = true" type="primary"
          >提交</el-button
        >
      </div>
      <!-- 提交弹框 -->
    <el-dialog width="30%" title="提交申请" :visible.sync="submitDialogDisplay">
      <span>将提交对当前页面的更改</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="submitDialogDisplay = false"
          >取 消</el-button
        >
        <el-button type="primary" >确 定</el-button>
      </span>
    </el-dialog>
          <!-- 取消对话框 -->
    <el-dialog width="30%" title="取消修改" :visible.sync="removeDisplay">
      <span>将取消当前页面的更改，所有未提交的信息将会丢失</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="removeDisplay = false">取 消</el-button>
        <el-button type="primary" >确 定</el-button>
      </span>
    </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "1",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "2",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: false,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "2",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "1",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "1",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
      items: [1, 2],
      search: "11",
      removeDisplay:false,
      submitDialogDisplay:false
    };
  },
  methods: {
    addColumn() {
       var frame = document.getElementById("summary");
       console.log(frame)
        frame.contentWindow.print()
      var i = this.items.length;
      this.items.push(i + 1);
    },
    getSummaries(param) {
      const sums = [];
      var sum1 = 0;
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].number == "") continue;
        sum1 = sum1 + parseInt(this.tableData[i].number);
      }
      sums[0] = "总价";
      sums[1] = sum1;
      return sums;
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
.input-box {
  width: 65% !important;
}
.input-index {
  text-align: left;
  font-size: 14px;
  border: 1px solid #313131;
  border-style: none solid solid solid;
}
.input-index > div:first-child {
  display: inline-block;
  width: 79px;
  line-height: 32px;
  border-right: 1px solid;
  text-align: center;
}
.input-index .el-input {
  width: 80% !important;
  border-left: 1px solid !important;
}
.table-footer {
  text-align: left;
  font-size: 14px;
}
.table-footer > div {
  display: inline-block;
  line-height: 32px;
  border: 1px solid #313131;
  border-style: none solid solid none;
  text-align: center;
}
.table-footer > div:first-child {
  border-left: 1px solid;
}
.footer {
  margin-top: 10px;
  text-align: right;
}
.footer .el-checkbox {
  margin: 0 30px;
}
</style>
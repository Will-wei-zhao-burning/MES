<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-03 16:07:38
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:25:34
-->
<template>
  <div id="newAverage">
    <div id="summary">
      <el-row class="header">
        <el-col>江苏新萌芽智能纺织有限公司 计划表 </el-col>
      </el-row>
      <!-- 输入信息 -->
      <el-row class="serach_box">
        <el-col :span="4">
          订单号：<el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4">
          制单日期：<el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4">
          生产小组：<el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4">
          业务员:<el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4">
          客户：<el-input v-model="search"></el-input>
        </el-col>
        <el-col :span="4">
          <!-- 审核：<el-input v-model="search"></el-input> -->
          <el-button @click="addnumber">合并</el-button>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-row>
        <el-table
          @row-click="rowClick"
          @select="selectMergeRow"
          border
          :data="tableData"
          id="newAverage"
        >
        <el-table-column
      type="selection"
      width="55">
    </el-table-column>
          <el-table-column
            label="序号"
            width="50"
          >
          <template slot-scope="scope">
            {{scope.$index+1}}
          </template>
          </el-table-column>
          <el-table-column
            :label="item.label"
            :width="item.width"
            v-for="item in items"
            :key="item.index"
          >
            <template  slot-scope="scope">
              <div v-if="item.isTableCell"><el-row :class="{'table-cell':item.isTableCell}" v-for="(inputitem,index) in scope.row[item.prop]" :key="inputitem.index"><el-input  v-model="scope.row[item.prop][index]" clearable></el-input></el-row></div>
              <div v-else><el-row><el-input v-model="scope.row[item.prop]"></el-input></el-row></div>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <!-- 表底 -->
       <el-row class="table-footer">
          <el-col :span="2"></el-col>
          <el-col :span="2">样品确认</el-col>
          <el-col :span="2">算料周期</el-col>
          <el-col :span="2">大货备料</el-col>
          <el-col :span="2">产前样</el-col>
          <el-col :span="2">生产</el-col>
          <el-col :span="2">缝头、定型</el-col>
          <el-col :span="2">检品包装</el-col>
          <el-col :span="8">备注</el-col>
        </el-row>
        <el-row class="table-footer">
          <el-col :span="2">预排周期</el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="8"><el-input v-model="search"></el-input></el-col>
        </el-row>
        <el-row class="table-footer">
          <el-col :span="2">实际周期</el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="2"><el-input v-model="search"></el-input></el-col>
          <el-col :span="8"><el-input v-model="search"></el-input></el-col>
        </el-row>
      <!-- 提交区 -->
      <div class="footer">
        <el-button  @click="addrow">添加</el-button>
        <el-checkbox v-model="checked">不对外发布</el-checkbox>
        <el-button @click="removeDisplay = true" type="info">取消</el-button>
        <el-button  @click="Insert" type="primary"
          >提交</el-button
        >
      </div>
      <!-- 提交弹框 -->
      <el-dialog
        width="30%"
        title="提交申请"
        :visible.sync="submitDialogDisplay"
      >
        <span>将提交对当前页面的更改</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="submitDialogDisplay = false"
            >取 消</el-button
          >
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 取消对话框 -->
      <el-dialog width="30%" title="取消修改" :visible.sync="removeDisplay">
        <span>将取消当前页面的更改，所有未提交的信息将会丢失</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="removeDisplay = false"
            >取 消</el-button
          >
          <el-button type="primary">确 定</el-button>
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
          number: ['2','1'],
          tone:['蓝色','绿色','红色'],
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
          index:1,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "1",
          tone:['蓝色','绿色','红色'],
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
          index:2,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "2",
          tone:['蓝色','绿色','红色'],
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
          index:3,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "1",
          tone:['蓝色','绿色','红色'],
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
          index:4,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "1",
          samplenumber: ["DC20-Q3"],
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
          index:5,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
      search: "",
      rowSelect:0,
      row:{},
      items: [
        { label: "样品号", width: "120", prop: "number",isTableCell:true},
        { label: "货号", width: "120", prop: "goodnumber", isTableCell:false},
        { label: "品名", width: "80", prop: "typename" ,isTableCell:false},
        { label: "花型描述", width: "100", prop: "flowerdescription" ,isTableCell:false},
        { label: "色调", width: "100", prop: "tone" ,isTableCell:false},
        { label: "色号", width: "100", prop: "colornumber",isTableCell:false },
        { label: "图片", width: "140", prop: "pic",isTableCell:false },
        { label: "针型", width: "120", prop: "needle" ,isTableCell:false},
        { label: "用料", width: "120", prop: "material" ,isTableCell:false},
        { label: "规格", width: "100", prop: "number" ,isTableCell:false},
        { label: "缝头方式", width: "100", prop: "number" ,isTableCell:false },
        { label: "总数(双)", width: "110", prop: "number" ,isTableCell:false},
        { label: "单色总数(双)", width: "110", prop: "number" ,isTableCell:false},
        { label: "66", width: "120", prop: "number" ,isTableCell:true},
        { label: "80", width: "120", prop: "number" ,isTableCell:true},
        { label: "100", width: "120", prop: "number" ,isTableCell:true},
        { label: "120", width: "120", prop: "number" ,isTableCell:true},
        { label: "140", width: "120", prop: "number" ,isTableCell:true},
        { label: "160", width: "120", prop: "number" ,isTableCell:true},
        { label: "170", width: "120", prop: "number",isTableCell:true },
        { label: "交期", width: "120", prop: "data" ,isTableCell:false},
        { label: "备注", width: "", prop: "number" ,isTableCell:false},
      ],
        removeDisplay:false,
      submitDialogDisplay:false,
      checked:false
    };
  },
  methods: {
/*     objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1) {
        if (rowIndex  === 0) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        }
        if (rowIndex  === 1||rowIndex  === 2) {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    }, */
/*     cellClick(row, column, cell, event) {
      console.log(row, column, cell, event)
    }, */
    rowClick(row, column, event){
      this.rowSelect = row.index
      console.log(row.index)
      console.log(column)
    },
    Insert(){
/*       var table = document.getElementsByTagName('table')[1]
      console.log(table.rows)
      table.insertRow(1)
      console.log(table.rows) */
      this.tableData.splice(this.rowSelect,0,{})
      },
    addnumber(){
      var table = this.tableData
      table[this.rowSelect-1].number.push('')
      this.tableData = table
    },
    addsamplenumber(){
    },
    combine(){

    },
    selectMergeRow(selection, row){
      console.log(selection);
      console.log(row);
    },
    addrow(){}
  },

};
</script>

<style scoped>
.header {
  margin-bottom: 10px;
}
.footer {
  margin-top: 10px;
  text-align: right;
}
.footer .el-checkbox {
  margin: 0 30px;
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
    height:40px;
}
.table-footer > div:first-child {
  border-left: 1px solid;
}
.table-cell{
  padding: 12px 0;
  border-bottom: 1px solid;
}
</style>
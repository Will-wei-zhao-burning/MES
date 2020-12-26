<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-16 10:54:04
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 16:08:53
-->
<template>
    <div id="summary">
      <!--  -->
      <el-col style="line-height:40px;border:1px;border-style:solid solid none solid">订舱单</el-col>
      <!-- 列表区 -->
      <el-col style="border:1px;border-style:solid none none solid;line-height:40px;" v-for="item in headerItems" :key="item.index">
        <el-col :span="8" v-for="subitem in item" :key="subitem.index">
          <el-col :span="10">{{ subitem.label }}</el-col
          ><el-col :span="14" style="border:1px;border-style:none solid none solid"
            ><el-input v-model="subitem.value"></el-input
          ></el-col>
        </el-col>
      </el-col>
      <!-- 表格区 -->
        <el-table
          border
          id="middle"
          @select="getSelectRow"
          :span-method="objectSpanMethod"
          show-summary
          :data="tableData"
        >
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column
            prop="index"
            label="序号"
            width="50"
          ></el-table-column>
          <el-table-column
            v-for="item in tableList"
            :label="item.label"
            :width="item.width"
            :key="item.index"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </template>
          </el-table-column>
        </el-table>
        <el-col class="text-left"
          ><div>备注</div>
          <div style="display: inline-block; min-width: 90%">
            <el-input type="textarea" v-model="mark"></el-input></div
        ></el-col>
      <el-row
        ><el-button @click="combine">合并</el-button>
        <el-button @click="insert">添加一行</el-button></el-row
      >
    </div>
</template>

<script>
export default {
  data() {
    return {
      spanArr: [[], [], [], []],
      headerItems: [
        [
          { label: "客户", value: this.client },
          { label: "港口", value: this.sport },
          { label: "制单时间", value: this.getDate() },
        ],
        [
          { label: "客户公司地址", value: this.client },
          { label: "进仓日期", value: this.sport },
          { label: "业务员", value: new Date() },
        ],
        [
          { label: "客户联系电话", value: this.client },
          { label: "贸易方式", value: this.sport },
          { label: "审核表", value: this.getDate() },
        ],
      ],
      tableData: [
        { sample: "sasasa", index: 1, PO: "12121", client: "路人甲" },
        { sample: "asadff", index: 2, PO: "22222", client: "路人乙" },
        { sample: "asadff", index: 3, PO: "22222", client: "路人丙" },
        { sample: "asadff", index: 4, PO: "11111", client: "路人丁" },
      ],
      tableList: [
        { label: "合同号", prop: "sample", width: "150" },
        { label: "订单号", prop: "PO", width: "150" },
        { label: "PO号", prop: "client", width: "150" },
        { label: "货号", prop: "client", width: "150" },
        { label: "客人款号", prop: "client", width: "150" },
        { label: "箱子品", prop: "client", width: "150" },
        { label: "品名", prop: "client", width: "150" },
        { label: "CPID", prop: "client", width: "150" },
        { label: "尺寸", prop: "client", width: "150" },
        { label: "配比", prop: "client", width: "150" },
        { label: "条形码", prop: "client", width: "150" },
        { label: "单价", prop: "client", width: "150" },
        { label: "商品品质表示", prop: "client", width: "150" },
        { label: "双/组", prop: "client", width: "150" },
        { label: "组/箱", prop: "client", width: "150" },
        { label: "出货PK数", prop: "client", width: "150" },
        { label: "出货数(双)", prop: "client", width: "150" },
        { label: "箱数", prop: "client", width: "150" },
        { label: "长(M)", prop: "client", width: "150" },
        { label: "宽(M)", prop: "client", width: "150" },
        { label: "高(M)", prop: "client", width: "150" },
        { label: "N.W/箱（kg）", prop: "sample", width: "150" },
        { label: "G.W/箱（kg）", prop: "sample", width: "150" },
        { label: "总体积（M3)", prop: "sample", width: "150" },
        { label: "总金额", prop: "sample", width: "150" },
        { label: "总净重（kg）", prop: "sample", width: "150" },
        { label: "总毛重（kg）", prop: "sample", width: "150" },
        { label: "备注", prop: "sample", width: "150" },
      ],
      items:['sample','index','PO','client'],
      emptyTableItem: [],
      selectRow: -1,
      selectData: "",
    };
  },
  mounted() {
    this.getSpanArr(this.tableData);
  },
  methods: {
    getDate() {
      Date.prototype.format = function () {
        var o = {
          y: this.getFullYear(),
          mo: this.getMonth(),
          d: this.getDate(),
          h: this.getHours(),
          mi: this.getMinutes(),
        };
        return "" + o.y + "/" + o.mo + "/" + o.d + "/" + o.h + ":" + o.mi;
      };
      var date = new Date();
      return date.format();
    },
    setdate() {
      var i = this.getDate();
    },
    /* 筛选得到数据 */
    filter(row) {
      var obj = new Object
      for(var i=0;i<this.items.length;i++){
        if(i<3){
          obj[this.items[i]] = row[this.items[i]];
        }
        else{
          obj[this.items[i]] = ''
        }
      }
      console.log(obj)
      return obj;
    },
    /* 获得选中行数据 */
    getSelectRow(selection, row) {
      if (selection.length == 1) {
        this.selectRow = row.index;
        this.selectData = this.filter(row);
        console.log(this.selectRow);
      } else {
        this.selectRow = -1;
      }
    },
    /* 插入一行 */
    insert() {
      if (this.selectRow != -1) {
        var arr = new Object
        for(var i in this.selectData){
          arr[i] = this.selectData[i]
        }
        /*        this.tableData.splice(this.selectRow,0,this.emptyTableItem) */
        this.tableData.splice(this.selectRow, 0, arr);
        this.combine()
      } else {
        this.$message.error("请选择一行，不要多选");
      }
    },
    /* 合并数组 */
    combine() {
      this.getSpanArr(this.tableData);
    },
    getSpanArr(data) {
      // data就是我们从后台拿到的数据
      var arr = [[], [], [], []];
      var prop = ["index", "sample", "PO", "client"];
      arr.map((item, index, array) => {
        for (var i = 0; i < this.tableData.length; i++) {
          if (i === 0) {
            item.push(1);
            this.pos = 0;
          } else {
            // 判断当前元素与上一个元素是否相同
            if (data[i][prop[index]] === data[i - 1][prop[index]]) {
              item[this.pos] += 1;
              item.push(0);
            } else {
              item.push(1);
              this.pos = i;
            }
          }
        }
      });
      this.spanArr = arr;
      /*     for(var j=0; j<3;j++){
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          console.log(this.spanArr[j])
          this.spanArr[j].push(1);
          this.pos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i][prop[j]] === data[i - 1][prop[j]]) {
            this.spanArr[this.pos] += 1;
            this.spanArr.push(0);
          } else {
            this.spanArr.push(1);
            this.pos = i;
          }
        }
      }
    } */
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      switch (columnIndex) {
        case 1: {
          const _row = this.spanArr[0][rowIndex];
          const _col = _row > 0 ? 1 : 0;
          /* console.log(`rowspan:${_row} colspan:${_col}`); */
          return {
            // [0,0] 表示这一行不显示， [2,1]表示行的合并数
            rowspan: _row,
            colspan: _col,
          };
        }
        case 2: {
          const _row = this.spanArr[1][rowIndex];
          const _col = _row > 0 ? 1 : 0;
          /* console.log(`rowspan:${_row} colspan:${_col}`); */
          return {
            // [0,0] 表示这一行不显示， [2,1]表示行的合并数
            rowspan: _row,
            colspan: _col,
          };
        }
        case 3: {
          const _row = this.spanArr[2][rowIndex];
          const _col = _row > 0 ? 1 : 0;
          /* console.log(`rowspan:${_row} colspan:${_col}`); */
          return {
            // [0,0] 表示这一行不显示， [2,1]表示行的合并数
            rowspan: _row,
            colspan: _col,
          };
        }
        case 88: {
          const _row = this.spanArr[3][rowIndex];
          const _col = _row > 0 ? 1 : 0;
          /* console.log(`rowspan:${_row} colspan:${_col}`); */
          return {
            // [0,0] 表示这一行不显示， [2,1]表示行的合并数
            rowspan: _row,
            colspan: _col,
          };
        }
      }
    },
  },
};
</script>

<style scoped>
.el-input {
  width: 65% !important;
}
.el-row {
  margin-bottom: 10px;
  line-height: 40px;
}
.text-left {
  border: solid;
  border-width: 0 1px 1px 1px;
  height: 56px;
}
.text-left > div:first-child {
  display: inline-block;
  width: 51px;
  height: 100%;
  border-right: 1px solid;
  line-height: 56px;
}
</style>
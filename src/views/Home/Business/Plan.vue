<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-18 11:24:55
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-23 16:28:47
-->
<template>
  <div>
    <iframe src="./Scan.pdf" style="width:1000px;height:500px;position:absolute;left:0;top:0;" ></iframe>
    <el-button @click="preview">点击</el-button>
    <el-card id="print" v-show="isPrintDisplay">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="amount1" label="数值 1（元）"> </el-table-column>
        <el-table-column prop="amount2" label="数值 2（元）"> </el-table-column>
        <el-table-column prop="amount3" label="数值 3（元）"> </el-table-column>
      </el-table>
    </el-card>
    <!-- <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPrintDisplay: false,
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17,
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    preview() {
      var height = window.innerHeight;
      var width = window.innerWidth;
      var print = document.getElementById("print");
      console.log(print);
      print.style.height = height + "px";
      print.style.width = width + "px";
      this.isPrintDisplay = true;
      setTimeout((_) => {
        window.print();
      }, 2000);
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 1];
        } else if (columnIndex === 1) {
          return [1, 1];
        }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 2,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
  },
};
</script>

<style scoped>
#print {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-14 15:08:26
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 16:14:53
-->
<template>
  <div id="summary">
    <!-- 表格区 -->
    <el-row>
      <el-table  border :data="tableData">
        <el-table-column label="商标采购计划汇总表">
          <el-table-column label="序号" type="index" width="50"></el-table-column>
          <el-table-column
            :label="item.label"
            :width="item.width"
            v-for="item in tableHeaderItems"
            :key="item.index"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="辅料仓库人员填写">
          <el-table-column width="120" label="是否到库">
            <template slot-scope="scope">
              <el-input v-model="scope.row.isReady"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="倒库日期" prop="readyDate">
            <template slot-scope="scope">
              <el-input v-model="scope.row.readyDate"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <!-- 按钮区 -->
      <el-col class="text-right" >
          <el-button type="primary">提交</el-button>
          <el-button type="warning">取消</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          purchaseDate: "22",
          orderNum: "11",
          goodnumber: "222",
          colorSize: "we",
          name: "f d f",
          number: "ad",
          client: "as ",
          supplier: "zz",
          date: "das",
          actualWeight: "asd",
          grossWeight: "zfd ",
          PO: "dfdf",
          CPID: "sdf",
          mark: "fzd",
          singlePrice: "dd",
          totalPrice: "DF",
          isReady: null,
          readyDate: "Dd",
        },
        {},
        {},
      ],
      tableHeaderItems: [
        {
          label: "业务员",
          width: "150",
          prop: "purchaseDate",
        },
        {
          label: "客户",
          width: "150",
          prop: "orderNum",
        },
        {
          label: "下单日期",
          width: "150",
          prop: "goodnumber",
        },
        {
          label: "订单号",
          width: "150",
          prop: "colorSize",
        },
        {
          label: "货号",
          width: "150",
          prop: "number",
        },
        {
          label: "种类",
          width: "150",
          prop: "client",
        },
        {
          label: "数量",
          width: "150",
          prop: "supplier",
        },
        {
          label: "交货日期",
          width: "150",
          prop: "date",
        },
        {
          label: "采购方",
          width: "150",
          prop: "PO",
        },
        {
          label: "供应商",
          width: "150",
          prop: "singlePrice",
        },
        {
          label: "单价",
          width: "150",
          prop: "totalPrice",
        },
        {
          label: "金额",
          width: "150",
          prop: "totalPrice",
        }
      ],
      dialogImageUrl:'',
      dialogVisible:false
    };
  },
  created(){
      
  },
  methods:{
      handlePictureCardPreview(file){
          this.dialogImageUrl = file.url;
          this.dialogVisible = true
      }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
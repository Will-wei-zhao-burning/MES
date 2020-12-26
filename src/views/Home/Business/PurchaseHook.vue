<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-14 15:07:10
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 15:50:35
-->
<template>
  <div id="summary">
    <!-- 表格区 -->
    <el-row id="plan">
      <el-table show-summary border :data="tableData">
        <el-table-column label="钩子采购计划单">
          <el-table-column label="序号" type="index" width="50"></el-table-column>
          <el-table-column
            :label="item.label"
            :width="item.width"
            v-for="item in tableHeaderItems1"
            :key="item.index"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </template>
          </el-table-column>
           <el-table-column  label="钩子照片" width="200">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-table-column>
          <el-table-column
            :label="item.label"
            :width="item.width"
            v-for="item in tableHeaderItems2"
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
      tableHeaderItems1: [
        {
          label: "下单日期",
          width: "150",
          prop: "purchaseDate",
        },
        {
          label: "订单号",
          width: "150",
          prop: "orderNum",
        },
        {
          label: "货号",
          width: "150",
          prop: "goodnumber",
        },
        {
          label: "钩子名称",
          width: "150",
          prop: "colorSize",
        }],
        tableHeaderItems2:[
        {
          label: "数量",
          width: "150",
          prop: "number",
        },
        {
          label: "交期",
          width: "150",
          prop: "client",
        },
        {
          label: "采购方",
          width: "150",
          prop: "supplier",
        },
        {
          label: "供应商",
          width: "150",
          prop: "date",
        },
        {
          label: "备注1",
          width: "150",
          prop: "PO",
        },
        {
          label: "单价(元/个)",
          width: "150",
          prop: "singlePrice",
        },
        {
          label: "总金额",
          width: "150",
          prop: "totalPrice",
        },
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
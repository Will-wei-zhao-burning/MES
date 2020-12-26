<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-22 15:59:12
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-24 11:16:18
-->
<template>
  <!-- 按钮区 -->
  <div>
    <el-row type="flex" justify="end">
      <el-button type="warning">删除</el-button>
    </el-row>
    <!-- 表单区 -->
    <el-row class="table-items">
      <el-table border id="middle" :data="tableData">
        <!-- 交期管理明细表-->
        <el-table-column label="业务部(价格及交期管理明细表)">
          <el-table-column type="selection"></el-table-column>
          <el-table-column
            v-for="item in newShippingTableList"
            :label="item.label"
            :width="item.width"
            :key="item.index"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <!-- 分批出货表 -->
        <el-table-column label="分批出货预计划日期、数量">
          <el-table-column
            :label="'第' + item + '批'"
            :key="item.index"
            v-for="item in batchTableData.length"
          >
            <el-table-column
              v-for="item in newShippingBatchTableList"
              :label="item.label"
              :width="item.width"
              :key="item.index"
            >
              <template slot-scope="scope">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table-column>
        <!-- 实际出货表 -->
        <el-table-column label="实际出货日期、数量、合计">
          <el-table-column
            :label="'第' + item + '批'"
            :key="item.index"
            v-for="item in batchTableData.length"
          >
            <el-table-column
              v-for="item in newActualShippingTableList"
              :label="item.label"
              :width="item.width"
              :key="item.index"
            >
              <template slot-scope="scope">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="实际出货合计">
            <el-table-column label="实际出货合计" prop="type"></el-table-column>
            <el-table-column label="实际出货合计金额(客户)" prop="type"></el-table-column>
            <el-table-column label="实际出货合计金额(工厂)" prop="type"></el-table-column>
          </el-table-column>
        </el-table-column>
        <!-- 实际入库表 -->
        <el-table-column label="实际入库日期、数量、合计">
          <el-table-column
            :label="'第' + item + '批'"
            :key="item.index"
            v-for="item in batchTableData.length"
          >
            <el-table-column
              v-for="item in newActualShippingTableList"
              :label="item.label"
              :width="item.width"
              :key="item.index"
            >
              <template slot-scope="scope">
                <el-input v-model="scope.row[item.prop]"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="实际出货合计">
            <el-table-column label="实际入库合计" width="100" prop="type"></el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 提交区 -->
    <el-row type="flex" justify="end">
        <el-col :span="4"><el-checkbox style="line-height:40px" v-model="checked">不对外发布</el-checkbox></el-col>
        <el-button @click="removeDisplay = true" type="info">取消</el-button>
        <el-button @click="submitDialogDisplay = true" type="primary"
          >提交</el-button
        >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newShippingTableList: [
        { label: "客户", prop: "type", width: "100" },
        { label: "下单日期", prop: "type", width: "100" },
        { label: "订单号", prop: "type", width: "100" },
        { label: "货号", prop: "type", width: "100" },
        { label: "客人款号", prop: "type", width: "100" },
        { label: "品名", prop: "type", width: "100" },
        { label: "机种", prop: "type", width: "100" },
        { label: "针数", prop: "type", width: "100" },
        { label: "双/组(pacK)", prop: "type", width: "100" },
        { label: "客户价：USD/pack(组)", prop: "type", width: "100" },
        { label: "客户总金额", prop: "type", width: "100" },
        { label: "生产小组", prop: "type", width: "100" },
        { label: "工厂价：元/pack(组)", prop: "type", width: "100" },
        { label: "工厂总金额(元)", prop: "type", width: "100" },
        { label: "总数量", prop: "type", width: "100" },
      ],
      newShippingBatchTableList: [
        { label: "PO", prop: "type", width: "100" },
        { label: "出货日期", prop: "type", width: "100" },
        { label: "数量(双)", prop: "type", width: "100" },
        { label: "出货日期、金额(客户)", prop: "type", width: "100" },
        { label: "出货日期、金额(工厂)", prop: "type", width: "100" },
      ],
      newActualShippingTableList:[
        { label: "PO", prop: "type", width: "100" },
        { label: "实际出货日期", prop: "type", width: "100" },
        { label: "实际出货数量(双)", prop: "type", width: "100" },
        { label: "实际出货金额(客户)", prop: "type", width: "100" },
        { label: "实际出货金额(工厂)", prop: "type", width: "100" },
      ],
      newActualShippingTableList:[
        {label: "PO", prop: "type", width: "100" },
        {label: "实际仓库入库日期", prop: "type", width: "100" },
        {label: "实际仓库入库数量（双）", prop: "type", width: "100" }
      ],
      batchTableData: [{ type: "2000" }, { type: "2000" }],
      tableData: [
        { type: "burning" },
        { type: "burning" },
        { type: "burning" },
      ],
      checked:false
    };
  },
};
</script>

<style scoped>
.el-row{
    margin-bottom: 20px;
}
</style>
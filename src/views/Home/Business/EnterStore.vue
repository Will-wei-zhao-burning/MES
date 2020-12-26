<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-15 16:47:42
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:14:52
-->
<template>
  <div class="text-left">
      <!-- 筛选区 -->
      <el-row>
        <el-col :span="5"
          >客户：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="5"
          >港口：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="5"
          >订单号：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="5"
          >货号：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="4">
          <el-select>
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <!-- 操作区 -->
      <el-row>
        <!-- 日期选择器 -->
        <el-col :span="5"
          >进仓日期：
          <el-date-picker
            v-model="dataValue"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="5">
          <el-select>
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><el-button>更新状态</el-button></el-col>
        <el-col :span="3"
          ><el-button @click="newEnterStore">新增订舱单</el-button></el-col
        >
        <el-col :span="2"><el-button type="">删除</el-button></el-col>
        <el-col :span="3"><el-button type="">导出Excel</el-button></el-col>
      </el-row>
      <!-- 表格区 -->
      <el-row>
        <el-table border :data="tableData">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column
            type="index"
            width="50"
            label="序号"
            fixed
          ></el-table-column>
          <el-table-column
            :fixed="item.isFix || false"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            v-for="item in tableList"
            :key="item.index"
          >
          </el-table-column>
          <el-table-column width="140" label="操作"
            ><el-button size="mini">编辑</el-button
            ><el-button size="mini">预览</el-button></el-table-column
          >
        </el-table>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataValue: null,
      statusTypeList: [
        {
          value: "已完成",
        },
        {
          value: "未完成",
        },
        {
          value: "修改中",
        },
        {
          value: "取消",
        },
      ],
      statusType: null,
      tableList: [
        { label: "客户", prop: "sample", width: "100", isFix: "left" },
        { label: "港口", prop: "sample", width: "100", isFix: "left" },
        { label: "进仓日期", prop: "sample", isFix: "left" },
        { label: "订单号", prop: "sample", isFix: "left" },
        { label: "货号", prop: "sample", isFix: "left" },
        { label: "出货数", prop: "sample", width: "100", isFix: "left" },
        { label: "箱数", prop: "sample", width: "100", isFix: "left" },
        { label: "状态", prop: "sample", width: "100", isFix: "left" },
      ],
      tableData: [
        { number: 2, sample: "wqwqwqw" },
        { number: 2, sample: "wqwqwqw" },
        { number: 2, sample: "wqwqwqw" },
        { number: 2, sample: "wqwqwqw" },
      ],
    };
  },
  methods: {
    newEnterStore() {
      this.$router.push("/newEnterStore");
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
}
</style>
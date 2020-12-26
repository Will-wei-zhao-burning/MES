<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-22 15:34:24
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-24 10:57:18
-->
<template>
  <div id="plan">
    <div class="text-left">
      <!-- 预览弹框区 -->
      <el-row
        ><el-table border :data="selectionData">
          <el-table-column
            v-for="item in previewTableList"
            :label="item.label"
            :prop="item.prop"
            :width="item.width"
            :key="item.index"
          >
          </el-table-column>
          <el-table-column
            :label="'2020年' + item + '月下单'"
            v-for="item in selectionData.length"
            :key="item.index"
          >
            <el-table-column
              label="出货数量(双)"
              prop="number"
            ></el-table-column>
            <el-table-column
              label="出货金额(客户)"
              prop="number"
            ></el-table-column>
          </el-table-column> </el-table
      ></el-row>
    </div>
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
        { label: "客户", prop: "type", width: "100", isFix: "left" },
        { label: "业务员", prop: "type", width: "100", isFix: "left" },
        { label: "下单日期", prop: "type", isFix: "left" },
        { label: "订单号", prop: "type", isFix: "left" },
        { label: "货号", prop: "type", isFix: "left" },
        { label: "状态", prop: "type", width: "100", isFix: "left" },
      ],
      tableData: [
        {
          type: "ee",
          ss: [
            { number: 2, sample: "wqwqwqw" },
            { number: 2, sample: "wqwqwqw" },
            { number: 2, sample: "wqwqwqw" },
          ],
        },
        {
          type: "ee",
          ss: [
            { number: 2, sample: "wqwqwqw" },
            { number: 2, sample: "wqwqwqw" },
            { number: 2, sample: "wqwqwqw" },
          ],
        },
      ],
      previewTableList: [
        { label: "客户", prop: "sample", width: "150" },
        { label: "业务员", prop: "sample", width: "150" },
        { label: "总数量(双)", prop: "sample", width: "150" },
        { label: "总金额", prop: "sample", width: "150" },
      ],
      selectionData: [
        { number: 2, sample: "wqwqwqw" },
        { number: 2, sample: "wqwqwqw" },
        { number: 2, sample: "wqwqwqw" },
      ],
      isPreviewDialogDisplay: false,
    };
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
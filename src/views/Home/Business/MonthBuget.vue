<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-16 14:42:32
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:18:43
-->
<template>
  <div id="summary" :class="{'display':isSameMonth}">
    <!-- 头部操作区 -->
    <el-row type="flex" justify="end" class="header">
      <el-col :span="5"
        >日期：<el-date-picker
          v-model="selectMonth"
          type="month"
          placeholder="选择日期"
          @change="changeDate"
        >
        </el-date-picker
      ></el-col>
      <el-col :span="3"><el-button>预览</el-button></el-col>
      <el-col :span="3"><el-button>导出Excel</el-button></el-col>
    </el-row>
    <!-- 表单区 -->
    <el-col class="table-header">
      <el-col style="line-height:40px;border-right:1px solid">费用月度预算表</el-col>
      <el-col class="text-left" style="border-top:1px solid;
      border-right:1px solid" :span="8" v-for="item in itemlist" :key="item.index">
        <el-col :span="10">{{ item.label }}</el-col>
        <el-col :span="14"><el-input :disabled="!isSameMonth" v-model="item.value"></el-input></el-col>
      </el-col>
    </el-col>
      <el-table  border id="middle" show-summary :data="monthBugetTable">
        <el-table-column
          type="index"
          label="序号"
          fixed
          width="55px"
        ></el-table-column>
        <el-table-column
          v-for="item in monthBugetTableList"
          :label="item.label"
          :width="item.width"
          :key="item.index"
        >
        <template slot-scope="scope">
              <el-input :disabled="!isSameMonth" v-model="scope.row[item.prop]"></el-input>
            </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemlist: [
        { label: "部门", value: "" },
        { label: "审核人", value: "" },
        { label: "填补日期", value: "" },
      ],
      monthBugetTableList:[
        {label:'类目',prop:'type',width:''},
        {label:'程序名称',prop:'name',width:''},
        {label:'项目明细',prop:'detail',width:''},
        {label:'金额',prop:'amount',width:''},
        {label:'预付款日期',prop:'date',width:''},
        {label:'经办人',prop:'manger',width:''},
        {label:'备注',prop:'mark',width:''},
      ],
      monthBugetTable:[
          {type:'1',name:'23'},
          {}
      ],
      currentMonth:null,
      selectMonth:null,
      isSameMonth:false,
    };
  },
  created(){
      var date = new Date()
      this.currentMonth = date.getMonth()
  },
  methods:{
      /* 日期选择 */
      changeDate(){
        this.isSameMonth=(this.selectMonth.getMonth()===this.currentMonth)
        if(this.isSameMonth){
            return
        }
        else{
            
        }
      }
  }
};
</script>

<style scoped>
.header .el-button {
  width: 100px;
}
.el-row {
  margin-bottom: 10px;
  line-height: 40px;
}
#summary .text-left .el-input{
  width:65%;
}
#middle .el-table-column{
    text-align: center;
}
.table-header{
  border:1px solid;
  border-style:solid none none solid
}
</style>
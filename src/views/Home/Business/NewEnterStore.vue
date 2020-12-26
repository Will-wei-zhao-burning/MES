<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-16 16:21:42
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-17 10:25:09
-->
<template>
  <div id="summary">
      <!-- 标题 -->
      <el-row>进仓通知单</el-row>
      <!-- 表格区 -->
      <el-table  border id="middle" :data="newEnterStoreTable">
        <el-table-column
          type="index"
          label="序号"
          fixed
          width="60px"
        ></el-table-column>
        <el-table-column
          v-for="item in newEnterStoreTableList"
          :label="item.label"
          :width="item.width"
          :key="item.index"
        >
        <template slot-scope="scope">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </template>
        </el-table-column>
      </el-table>
      <el-row>
      <el-col class="text-left"
          ><div
            
          >
            到货日期
          </div>
          <div style="display: inline-block;min-width:90%">
            <el-input  v-model="mark"></el-input></div
        ></el-col> 
      <div class="multi-input"><el-col :span="6" v-for="item in footeritems" :key="item.index">
          <el-col style="border-left: 1px solid;border-right: 1px solid;border-bottom:1px solid;height:100%" :span="8">{{item.label}}</el-col>
          <el-col style="border-bottom:1px solid" :span="16"><el-input v-model="item.value"></el-input></el-col>
      </el-col></div>
      <el-col style="height:120px" class="text-left"
          ><div
            style="line-height:120px;max-width:10%"
          >
            注意事项
          </div>
          <div style="display: inline-block;min-width:90%;">
            <el-input type="textarea"  v-model="mark"></el-input></div
        ></el-col>
        </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newEnterStoreTable:[{
                type:'1232313'
            },{type:'1232313'}],
            mark:'',
            newEnterStoreTableList:[
                {label:'订单号',prop:'type',width:''},
                {label:'货号',prop:'type',width:''},
                {label:'数量(双)',prop:'type',width:''},
                {label:'箱数',prop:'type',width:''},
                {label:'体积',prop:'type',width:''},
                {label:'进仓编号',prop:'type',width:''}
            ],
            footeritems:[{label:"箱数",value:""},{label:"毛重",value:""},{label:"净重",value:""},{label:"体积",value:""}]
        }
    }
}
</script>

<style scoped>
.text-left {
  border: solid;
  border-width: 0 1px 1px 1px;
  height: 56px;
}
.text-left>div:first-child {
  display: inline-block;
  width: 60px;
  height: 100%;
  border-right: 1px solid;
  line-height: 56px;
}
.el-row {
  margin-bottom: 10px;
  line-height: 40px;
}
.multi-input>.el-col:last-child{
  border-right: 1px solid;
}
</style>
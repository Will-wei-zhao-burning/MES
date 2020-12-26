<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-15 21:28:05
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 15:48:01
-->
<template>
  <div>
    <div class="text-left">
      <!-- 输入筛选区 -->
      <el-row>
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
        <el-col :span="5"
          >业务员：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="5"
          >客户：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
      </el-row>
            <!-- 状态区 -->
      <el-row>

        <el-col :span="4">
          <el-select v-model="tableType">
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3"><el-button type="primary">更新状态</el-button></el-col>
        <el-col :span="3"><el-button @click="toAddHook" type="info">新建</el-button></el-col>
        <el-col :span="3"><el-button>删除采购表</el-button></el-col>
        <el-col :span="3"><el-button>导出采购表</el-button></el-col>
      </el-row>
      <!-- 下拉筛选区 -->
      <el-row>
        <el-col  :span="8" style="line-height:40px"> <span>已完成:50</span>
          <span>未完成:70</span>
          <span>修改中:90</span>
          <span>取消:100</span></el-col>
       <!--  <el-col :span="5">
          <el-select v-model="tableType">
            <el-option
              v-for="item in tableTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col> -->
        <el-col :span="5">
          <el-select v-model="statusType">
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="5">
          <el-date-picker
            v-model="dataValue"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>

<!--       按钮操作区
      <el-row>
          <el-col :span="4">
          <el-select v-model="tableType">
            <el-option
              v-for="item in tableTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
          <el-col :span="3"><el-button @click="newTable">新建采购表</el-button></el-col>
          
      </el-row> -->
      <!-- 表格区 -->
      <el-row>
          <el-table border :data="tableData">
              <el-table-column type="selection" width="50"></el-table-column>
              <el-table-column type="index" label="序号" fixed
      width="50"></el-table-column>
             <el-table-column :fixed="item.isFix||false" :label="item.label" :prop="item.prop" :width="item.width" v-for="item in tableList" :key="item.index">
             </el-table-column>
          </el-table>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableType: null,
      statusType: null,
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
      tableList:[{label:'业务员',prop:'number',width:'100',isFix:"left"},
      {label:'客户',prop:'sample',width:'100',isFix:"left"},
      {label:'下单日期',prop:'number',width:'150'},
      {label:'订单号',prop:'sample',width:'150'},
      {label:'货号',prop:'number',width:'150'},
      {label:'名称及规格',prop:'number',wdith:'100'},
      {label:'采购方',prop:'number',width:'120'},
      {label:'供应商',prop:'number',width:'120'},
      {label:'数量',prop:'number',width:'80'},
      {label:'创建日期',prop:'sample',width:'120',isFix:"right"},
      {label:'状态',prop:'sample',width:'150',isFix:"right"},
      {label:'操作',prop:'number',width:'120',isFix:"right"},
      ],
      tableData:[{number:2,sample:'wqwqwqw'},{number:2,sample:'wqwqwqw'},{number:2,sample:'wqwqwqw'},{number:2,sample:'wqwqwqw'}]
    };
  },
  methods:{
    toAddHook(){
      this.$router.push("/purchaseHook")
/*       switch(this.tableType){
        case '钩子采购表' : 
          this.$router.push("/");
          break;
        case '纸箱采购表' :
          this.$router.push("/purchaseBox");
          break;
        case '袋子采购表' :
          this.$router.push("/purchaseTag");
          break;
        case '商标采购表' :
          this.$router.push("/purchaseMark");
          break;
        case '汇总表' :
        default:
          console.log("停留当前页")
          
      } */
    }
  }
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
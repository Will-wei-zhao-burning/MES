<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-01 15:30:58
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:24:52
-->
<template>
  <div id="summary">
      <!-- 筛选区 -->
      <el-row type="flex" >
        <el-col :span="5">
          样品号：<el-input v-model="input1" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="5">
          表单名称：<el-input
            v-model="input2"
            clearable
            placeholder="请输入内容"
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="5">
          业务员：<el-input v-model="input3" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="5">
          客户：<el-input v-model="input4" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- 表格区 -->
      <el-table  border :data="tableData">
        <el-table-column
          width="60"
          label="序号"
        ></el-table-column>
        <el-table-column
          
          width="120"
          prop="samplenumber"
          label="样品号"
        ></el-table-column>
        <el-table-column
          
          width="100"
          prop="salesman"
          label="业务员"
        ></el-table-column>
        <el-table-column
          
          width="100"
          prop="client"
          label="客户"
        ></el-table-column>
        <el-table-column prop="typename" label="品名"></el-table-column>
        <el-table-column prop="picture" label="照片"></el-table-column>
        <el-table-column prop="typemachine" label="要求机种"></el-table-column>
        <el-table-column prop="needle" label="要求针数"></el-table-column>
        <el-table-column
          width="150"
          prop="material"
          label="要求用料"
        ></el-table-column>
        <el-table-column prop="zip" label="要求尺寸"></el-table-column>
        <el-table-column label="样品数量"></el-table-column>
        <el-table-column label="颜色（主色）"></el-table-column>
        <el-table-column label="功能性"></el-table-column>
        <el-table-column label="企划克重"></el-table-column>
        <el-table-column label="注意点"></el-table-column>
        <el-table-column
          prop="data"
          label="希望交期"
        ></el-table-column>
        <el-table-column label="实际交期"></el-table-column>
        <el-table-column label="实际针形"></el-table-column>
        <el-table-column label="实际用料"></el-table-column>
        <el-table-column label="实际尺寸"></el-table-column>
        <el-table-column label="实际克重"></el-table-column>
        <el-table-column label="样品风险点"></el-table-column>
      </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "1",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          zip: "100cm",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
        },
        {
          number: "1",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          zip: "100cm",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
        },
      ],
      options: [{
          value: '选项1',
          label: '样品汇总单一'
        }, {
          value: '选项2',
          label: '样品汇总单二'
        }, {
          value: '选项3',
          label: '样品汇总单三'
        }, {
          value: '选项4',
          label: '样品汇总单四'
        }, {
          value: '选项5',
          label: '样品汇总单五'
        }],
        value:'',
        input1:'',
        input2:'',
        input3:'',
        input4:''
    };
  },
};
</script>

<style scoped>
.el-row{
  margin-bottom: 10px;
}
.el-input-group {
  width: 65% !important;
}
</style>
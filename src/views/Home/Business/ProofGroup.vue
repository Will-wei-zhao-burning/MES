<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-01 14:16:48
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:35:49
-->
<template>
  <div>
    <div v-show="display" class="container-card">
      <!-- 搜索栏 -->
      <el-row class="serach_box">
        <el-col :span="4">
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
        <el-col :span="4">
          业务员：<el-input v-model="input2" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          客户：<el-input v-model="input3" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          针形：<el-input v-model="input4" clearable placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- 日期选择器 -->
        <el-col :span="3">
          状态：
          <el-select
            class="status-select"
            v-model="value"
            placeholder="请选择模板"
          >
            <el-option
              v-for="item in options"
              :key="item.index"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <!-- 按钮区 -->
      <el-row class="btn-area">
        <el-col class="status-area" :span="6">
          <span>已完成:50</span>
          <span>未完成:70</span>
          <span>修改中:90</span>
          <span>取消:100</span>
        </el-col>
        <el-col :span="3">
          <el-select v-model="value" placeholder="请选择模板">
            <el-option
              v-for="item in options"
              :key="item.index"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-button>更新状态</el-button>
        </el-col>
        <el-col :span="3" type="primary">
          <el-button @click="toNew">新增</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" @click="deleteDialogDisplay = true"
            >删除</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-date-picker
            v-model="datavalue"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <!-- 表单区 -->
      <el-table @select="rowclick" :data="tableData" border style="width: 100%">
        <el-table-column type="selection" fixed width="55"> </el-table-column>
        <el-table-column prop="number" fixed label="序号" width="110">
        </el-table-column>
        <el-table-column prop="number" fixed label="表单名称">
        </el-table-column>
        <el-table-column fixed label="样品号">
          <template slot-scope="scope">
            <el-tooltip content="www" placement="top" effect="dark">
              <div slot="content">
                {{ scope.row.samplenumber }}+{{ scope.row.samplenumber }}+{{
                  scope.row.samplenumber
                }}+{{ scope.row.samplenumber }}
              </div>
              <div>{{ scope.row.samplenumber }}</div>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="salesman" label="业务员" width="150">
        </el-table-column>
        <el-table-column prop="client" label="客户" width="150">
        </el-table-column>
        <el-table-column prop="typename" label="品名"> </el-table-column>
        <el-table-column prop="date" label="创建日期" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
        </el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="edit(scope)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <new-proof-group v-show="!display" :object2="object2"></new-proof-group>
  </div>
</template>

<script>
import NewProofGroup from "views/Home/Business/NewProofGroup.vue";

export default {
  data() {
    return {
      tableData: [
        {
          number: 1024,
          samplenumber: "DSQ2458934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "已完成",
        },
        {
          number: 1023,
          samplenumber: "DSQ2678934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "未完成",
        },
        {
          number: 2016,
          samplenumber: "DSQ2678934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "未完成",
        },
        {
          number: 1024,
          samplenumber: "DSQ2678934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "未完成",
        },
        {
          number: 2016,
          samplenumber: "DSQ2678934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "未完成",
        },
        {
          number: 2016,
          samplenumber: "DSQ2678934",
          salesman: "业务员甲",
          client: "客户一",
          typename: "花",
          date: "2020.11.31",
          status: "未完成",
        },
      ],
      display: true,
      object2: [],
      emptyarr: [
        {
          number: "",
          samplenumber: "",
          salesman: "",
          client: "",
          typename: "",
          picture: "",
          typemachine: "",
          needle: "",
          material: "",
          data: "",
          status: "",
          operation: true,
          size: "",
          weight: "",
        },
      ],
    };
  },
  components: {
    NewProofGroup,
  },
  methods: {
    toNew() {
      this.object2 = this.emptyarr;
      this.display = false;
    },
    edit(scope) {
      this.object2 = this.tableData;
      this.display = false;
    },
  },
};
</script>

<style scoped>
.el-input-group,
.status-select {
  width: 65% !important;
}
.serach_box {
  text-align: left;
  margin-bottom: 10px;
}
.status-area {
  text-align: left;
}
.btn-area button {
  width: 120px;
}
.btn-area span {
  line-height: 40px;
  margin-right: 10px;
}
</style>
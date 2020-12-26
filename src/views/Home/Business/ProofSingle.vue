<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-18 09:33:42
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-23 13:45:53
-->
<template>
  <div >
    <div v-show="display" class="container-card">
      <!-- 搜索筛选区 -->
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
          <el-button @click="toSample">更新状态</el-button>
        </el-col>
        <el-col :span="3" type="primary">
          <el-button @click="toProposal">新增</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" @click="deleteDialogDisplay = true"
            >删除</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button @click="specificationDialogDisplay = true"
            >导出规格书</el-button
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
      <el-table  @select="rowclick" :data="tableData" border style="width: 100%">
        <el-table-column type="selection" fixed width="55"> </el-table-column>
        <el-table-column prop="number" fixed label="序号" width="55">
        </el-table-column>
        <el-table-column prop="number" fixed label="表单名称" width="80">
        </el-table-column>
        <el-table-column prop="samplenumber" fixed label="样品号" width="120">
        </el-table-column>
        <el-table-column prop="salesman" label="业务员" width="90">
        </el-table-column>
        <el-table-column prop="client" label="客户" width="90">
        </el-table-column>
        <el-table-column prop="typename" label="品名" width="170">
        </el-table-column>
        <el-table-column label="照片" width="200">
          <template slot-scope="scope">
            <el-image
              style="width: 60px; height: 60px; line-height: 60px"
              :src="scope.row.url"
              :preview-src-list="srcList"
            >
            </el-image>
            <!-- <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="" />
            </el-dialog> -->
          </template>
        </el-table-column>
        <el-table-column prop="typemachine" label="要求机种" width="110">
        </el-table-column>
        <el-table-column prop="needle" label="要求针数" width="90">
        </el-table-column>
        <el-table-column prop="material" label="要求用料" width="170">
        </el-table-column>
        <el-table-column prop="zip" label="要求尺寸" width="140">
        </el-table-column>
        <el-table-column fixed="right" prop="data" label="创建日期" width="130">
        </el-table-column>
        <el-table-column fixed="right" prop="status" label="状态" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              @click="edit(scope)"
              type="text"
              size="small"
              >编辑</el-button
            >
            <el-button
              :disabled="!scope.row.operation"
              @click="handleClick(scope.$index)"
              type="text"
              size="small"
              >预览</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 删除对话框 -->
      <el-dialog
        class="summary"
        width="35%"
        title="删除确认"
        :visible.sync="deleteDialogDisplay"
      >
        <el-row>将从系统中删除以下样品信息：</el-row>
        <div class="infor">
          <div v-for="item in selectionData" :key="item.index">
            {{ item.samplenumber }}
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="deleteDialogDisplay = false"
            >取 消</el-button
          >
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 汇总单 -->
      <el-dialog
        class="summary"
        width="35%"
        title="汇总单"
        :visible.sync="summaryDialogDisplay"
      >
        <el-row>将根据以下样品信息生成汇总单：</el-row>
        <div class="infor"></div>
        <el-row
          ><el-checkbox v-model="summaryInit"
            >记录并追踪此次汇总结果</el-checkbox
          ></el-row
        >
        <el-row>
          <el-col :span="10">汇总单别名:</el-col>
          <el-col :span="14"
            ><el-input v-model="input5" :disabled="!summaryInit"></el-input
          ></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="summaryDialogDisplay = false"
            >取 消</el-button
          >
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 规格书 -->
      <el-dialog
        width="35%"
        title="规格书"
        :visible.sync="specificationDialogDisplay"
        class="summary"
      >
        <el-row
          >将根据以下样品信息生成样品规格书（建议一次不要勾选超过20份样品规格书）：</el-row
        >
        <div class="infor"></div>
        <el-row>
          <el-col :span="10">样品规格书别名:</el-col>
          <el-col :span="14"><el-input v-model="input6"></el-input></el-col>
        </el-row>
        <span slot="footer" class="dialog-footer">
          <el-button type="info" @click="specificationDialogDisplay = false"
            >取 消</el-button
          >
          <el-button type="primary">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 更新状态页 -->
    </div>
    <!-- 添加 -->
    <Proposal v-show="!display" :object1="object1"></Proposal>
  </div>
    
</template>

<script>
//导入组件
import Proposal from 'views/Home/Business/Proposal.vue'

export default {
  data() {
    return {
      pagesize: 6,
      currentPage4: 1,
      datavalue: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      display:true,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        /*  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' */
      ],
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
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "2",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: false,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          number: "2",
          samplenumber: "DC20-Q3",
          salesman: "路人甲",
          client: "路人乙",
          typename: "花",
          picture: "123.kb",
          typemachine: "K140",
          needle: "140",
          material: "20*15(平铺) 20*15(平铺)",
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
          data: "2020.11.18",
          status: "已完成",
          operation: true,
          url:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
      summaryDialogDisplay: false,
      summaryInit: true,
      specificationDialogDisplay: false,
      deleteDialogDisplay: false,
      selectionData: [],
      dialogVisible: false,
      dialogImageUrl: "",
      value: "",
      options: [
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
      object1:{},

    };
  },
  components:{
    Proposal
  },
  methods: {
    handleClick(scope) {
      console.log(scope.row.client);
      
    },
    edit(scope){
      this.object1 = {value:scope.row.client};
      this.display = false
    },
    filterinput1(value, row, column) {
      console.log(value);
      console.log(row);
      console.log(column);
    },
    toSample() {
      this.$router.push("/sample");
    },
    toProposal() {
      this.value = {}
      this.display = false
    },
    rowclick(selection, row) {
      console.log(selection);
      this.selectionData = selection;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    load(){
      this.tableData = this.tableData.concat([{}]);
    }
  },
};
</script>

<style scoped>
.serach_box {
  text-align: left;
  margin-bottom: 10px;
}
.el-input-group {
  width: 65% !important;
}
.summary .el-row {
  text-align: left;
  line-height: 40px;
  margin: 20px 0;
}
.infor {
  height: 40px;
  margin: 10px 0;
}
.status-select {
  width: 65% !important;
}
.btn-area span {
  line-height: 40px;
  margin-right: 10px;
}
</style>
<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-12-03 14:30:11
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 15:51:49
-->
<template>
  <div>
    <div>
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
          货号：<el-input v-model="input4" clearable placeholder="请输入内容">
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
          <el-button @click="toAdd">新增</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="danger" @click="deleteDialogDisplay = true"
            >删除</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button @click="specificationDialogDisplay = true"
            >导出Excel</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-date-picker
            v-model="datavalue"
            type="date"
            placeholder="制单日期"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <!-- 表单区 -->
      <el-table @select="rowclick" :data="tableData" border style="width: 100%">
        <el-table-column type="selection" fixed width="55"> </el-table-column>
        <el-table-column prop="number" fixed label="序号" width="55">
        </el-table-column>
        <el-table-column prop="samplenumber" fixed label="订单号" width="120">
        </el-table-column>
        <el-table-column prop="salesman" label="业务员" width="90">
        </el-table-column>
        <el-table-column prop="client" label="客户" width="90">
        </el-table-column>
        <el-table-column prop="client" label="样品号" width="90">
        </el-table-column>
        <el-table-column prop="zip" label="货号" width="90"> </el-table-column>
        <el-table-column prop="typename" label="品名" width="170">
        </el-table-column>
        <el-table-column prop="typemachine" label="花型描述" width="110">
        </el-table-column>
        <el-table-column prop="needle" label="色调" width="90">
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
        <el-table-column prop="needle" label="总数" width="90">
        </el-table-column>
        <el-table-column fixed="right" prop="data" label="制单日期" width="130">
        </el-table-column>
        <el-table-column fixed="right" prop="status" label="状态" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="edit(scope)" type="text" size="small"
              >编辑</el-button
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
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
      selectionData: [],
      deleteDialogDisplay: false,
    };
  },
  methods: {
    rowclick(selection, row) {
      console.log(selection);
      this.selectionData = selection;
    },
    toAdd() {
      this.$router.push("/newMulti");
    },
  },
};
</script>

<style scoped>
.btn-area span {
  line-height: 40px;
  margin-right: 10px;
}
</style>
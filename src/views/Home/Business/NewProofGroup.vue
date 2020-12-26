<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-18 11:23:55
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:21:10
-->
<template>
  <div id="plan">
    <div class="container-card">
      <div class="header">客人设计稿:<el-input></el-input></div>
      <!-- 上半部分 -->
      <el-row>
        <!-- 左半边 -->
        <el-col :span="14">
          <el-col :span="9">
            <el-table
              @select="rowclick"
              height="150"
              :data="tableData1"
              border
              style="width: 245px"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <el-table-column prop="index" label="序号" width="70">
              </el-table-column>
              <el-table-column prop="name" label="设计稿名称" width="119">
              </el-table-column>
            </el-table>
          </el-col>
          <el-col class="header_left" :span="4">
            <el-row
              ><el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
                :on-change="uploadfile"
                :show-file-list="false"
                :auto-upload="false"
                ><el-button type="primary" style="width: 60"
                  >上传设计稿</el-button
                ></el-upload
              ></el-row
            >
            <el-row
              ><el-button style="width: 60" type="danger" @click="deletefile"
                >删除设计稿</el-button
              ></el-row
            >
          </el-col>
        </el-col>
        <!-- 右半边 -->
        <el-col class="header_right" :span="9">
          <el-button @click="insert">添加</el-button>
          <el-button type="danger" @click="deleteform">删除</el-button>
          <el-button type="primary" @click="copy">复制</el-button>
        </el-col>
      </el-row>
      <!-- 中间部分 -->
      <div class="middle">
        <el-table
          @select="rowclickmiddle"
          border
          :data="object2"
          style="width: 100%"
          height="350"
          :header-cell-class-name="starAdd"
          >
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="序号" prop="index" type="index" width="55">
          </el-table-column>
          <el-table-column
            :filters="input1"
            :filter-method="filterinput1"
            label="表单名称"
            width="150"
          >
            <template slot-scope="scope">
              <el-input v-model="scope.row.number" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="样品号" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.samplenumber" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="业务员" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.salesman" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="客户" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.value" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="品名" width="300">
            <template slot-scope="scope">
              <el-input v-model="scope.row.typename" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="照片" width="200">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-table-column>
          <el-table-column label="要求机种" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.typemachine" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="要求针数" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.needle" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="要求用料" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.material" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="要求尺寸" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.zip" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="实际尺寸" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.size" clearable></el-input>
            </template>
          </el-table-column>
          <el-table-column label="实际克重" width="120">
            <template slot-scope="scope">
              <el-input v-model="scope.row.weight" clearable></el-input>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <el-checkbox v-model="checked">不对外发布</el-checkbox>
        <el-button @click="removeDisplay = true" type="info">取消</el-button>
        <el-button @click="submitDialogDisplay = true" type="primary"
          >提交</el-button
        >
      </div>
    </div>
    <!-- 提交对话框 -->
    <el-dialog width="30%" title="提交申请" :visible.sync="submitDialogDisplay">
      <span>将提交对当前页面的更改</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="submitDialogDisplay = false"
          >取 消</el-button
        >
        <el-button type="primary" >确 定</el-button>
      </span>
    </el-dialog>
    <!-- 照片放大对话框 -->
    <el-dialog id="zoom" :visible.sync="visible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <!-- 取消对话框 -->
    <el-dialog width="30%" title="取消修改" :visible.sync="removeDisplay">
      <span>将取消当前页面的更改，所有未提交的信息将会丢失</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="removeDisplay = false">取 消</el-button>
        <el-button type="primary" @click="toGroup">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitDialogDisplay: false,
      checked: false,
      removeDisplay: false,
      tableData: [
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
          index: "1",
        },
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
          index: "",
        },
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
          index: "",
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
          size: "",
          weight: "",
          index: "",
        },
      ],
      /* 界面显示数据 */
      tableData1: [],
      /* 操作的备份数据 */
      tableData2: [],
      middleDeleteData: [],
      dialogImageUrl: "",
      visible: false,
      emptyobj: {
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
    };
  },
    props:{
    object2:{
      type:Array,
      default:[]
    }
  },
  methods: {
    uploadfile(file, fileList) {
      this.tableData1 = fileList;
      for (var i = 0; i < this.tableData1.length; i++) {
        this.tableData1[i].index = i;
      }
    },
    rowclick(selection, row) {
      this.tableData2 = selection.reverse();
      console.log(this.tableData2);
    },
    rowclickmiddle(selection, row) {
      console.log(selection);
      for (var i = 0; i < this.tableData.length; i++) {
        this.tableData[i].index = i;
      }
      this.middleDeleteData = selection.reverse();
    },
    deletefile() {
      for (var i = 0; i < this.tableData2.length; i++) {
        this.tableData1.splice(this.tableData2[i].index, 1);
      }
      for (var i = 0; i < this.tableData1.length; i++) {
        this.tableData1[i].index = i;
      }
    },
    deleteform() {
      for (var i = 0; i < this.middleDeleteData.length; i++) {
        this.tableData.splice(this.middleDeleteData[i].index, 1);
      }
      for (var i = 0; i < this.tableData.length; i++) {
        this.tableData[i].index = i;
      }
    },
    insert() {
      console.log(this.tableData);
      this.object2.push(this.emptyobj);
      console.log(this.tableData);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.visible = true;
      console.log(this.visible);
      /*       var x= document.getElementById("zoom");
      x.style.display = "block";
      console.log(x.style); */
    },
    toGroup(){
      window.location.reload()
    },
    starAdd(obj) {
      if (
        obj.columnIndex === 2 ||
        obj.columnIndex === 3 ||
        obj.columnIndex === 4 ||
        obj.columnIndex === 5 ||
        obj.columnIndex === 6
      ) {
        return "star";
      }
    },
  },
};
</script>

<style scoped>
.header {
  text-align: left;
  margin-bottom: 8px;
}
.header .el-input {
  width: 150px !important;
}
.header_right {
  text-align: right;
}
.header_right {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.header_left .el-row {
  margin-bottom: 10px;
}
.middle {
  margin: 8px 0;
}
.el-upload {
  width: 100%;
}
.footer {
  margin-top: 10px;
  text-align: right;
}
.footer .el-checkbox {
  margin: 0 30px;
}
.el-table th.gutter{
display: table-cell!important;
}
</style>
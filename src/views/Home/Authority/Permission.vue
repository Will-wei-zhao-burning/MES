<template>
  <div>
    <el-card>
      <!-- 按钮操作区 -->
      <el-row type="flex" justify="end">
        <el-col :span="2">
          <el-button
            size="medium"
            @click="isNewDialogDisplay = true"
            type="primary"
            >新建职位</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button
            size="medium"
            @click="removePreview"
            type="danger"
            >删除</el-button
          >
        </el-col>
      </el-row>
      <!-- 表单区 （修改tableData）-->
      <el-table
        @select="rowclick"
        @select-all="rowclick"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column type="selection" fixed width="55"> </el-table-column>
        <el-table-column type="index" width="55"></el-table-column>
        <el-table-column
          prop="positionName"
          width="150"
          label="职位名称"
        ></el-table-column>
        <el-table-column
          prop="dept"
          label="职能权限涉及部门"
          show-overflow-tooltip
        ></el-table-column>
        <el-table-column
          show-overflow-tooltip
          prop="authority"
          label="权限"
        ></el-table-column>
      </el-table>
      <!-- 页码条 -->
      <el-pagination
        :current-page="currentPage4"
        layout="total, prev, pager, next, jumper"
        :total="this.tableData.length"
        :page-size="6"
      >
      </el-pagination>
      <!-- 新建弹框区 -->
      <el-dialog title="新建职位" :visible.sync="isNewDialogDisplay">
        <div>
          <el-row class="new_row">
            <el-col :span="10"><p>职位名称</p></el-col>
            <el-col :span="10">
              <el-input
                v-model="positionName"
                clearable
                placeholder="请输入内容"
              ></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-tree
              ref="tree"
              :data="data"
              highlight-current
              show-checkbox
            ></el-tree>
          </el-row>
          <el-row type="flex" justify="end">
            <el-col :span="4">
              <el-button
                size="medium"
                @click="isNewDialogDisplay = false"
                type="info"
                >取消</el-button
              >
            </el-col>
            <el-col :span="4">
              <el-button size="medium" @click="confirm" type="primary"
                >确定</el-button
              >
            </el-col>
          </el-row>
        </div>
      </el-dialog>
      <!-- 删除弹框区 -->
      <el-dialog title="删除职位" :visible.sync="isDeleteDialogDisplay">
        <div class="delete">
          <div>
            <div>职位：</div>
            <div>
              <div v-for="(item, index) in selectData" :key="index">
                {{ item.positionName }}
              </div>
            </div>
          </div>
          <div>
            <div>人员：</div>
            <div>
              <div v-for="(item, index) in selectData" :key="index">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <el-row type="flex" justify="end">
          <el-col :span="4">
            <el-button
              size="medium"
              @click="isDeleteDialogDisplay = false"
              type="info"
              >取消</el-button
            >
          </el-col>
          <el-col :span="4">
            <el-button size="medium" @click="remove(selectData)" type="primary"
              >确定</el-button
            >
          </el-col>
        </el-row>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getAllDeptForms,InsertOrUpdatePosition,getAllAuthPosition,DeletePosition} from "network/authority.js";
import {formname,getAllAuthPositionProcess,getAllDeptFormsFilter} from "service/Authority/authority.js";

export default {
  data() {
    return {
      currentPage4: 1,
      formname,
      data:[],
      tableData: [],
      isNewDialogDisplay: false,
      isDeleteDialogDisplay: false,
      selectData: [],
      positionName: "",
      form: [{}, {}, {}, {}, {}],
      frompost: null,
      treedata: null,
      id: 0,
    };
  },
  created() {
    var data = getAllAuthPositionProcess(1,10);
    getAllAuthPosition(data).then(res =>{
      if(res.success){
        this.tableData = res.result.items;
        this.$message.success('获取列表成功');
        console.log(this.tableData);
      }
      else{
        this.$$message.error('获取列表失败');
      }
    });
    getAllDeptForms().then((res) => {
      if (res.success) {
        this.data = getAllDeptFormsFilter(res.result.items);
      } else {
        this.$message.error("请重新刷新页面");
      }
    });
  },
  methods: {
    rowclick(selection, row) {
      this.selectData = selection;
      console.log(this.selectData);
    },
    confirm() {
      var selectData = this.$refs.tree.getCheckedNodes(true);
      console.log(selectData);
      var arr = this.formname;
      var obj = new Object;
      console.log(arr);
      selectData.forEach((item) => {
        let i = parseInt(item.key / 2);
        let j = item.key % 2;
        if (j === 1) {
          arr[i].allowQuery = true;
        } else {
          arr[i].allowModify = true;
        }
      });
      obj.id=0;
      obj.positionName = this.positionName;
      obj.formManagers = this.formname;
      InsertOrUpdatePosition(obj).then(res =>{
        if(res.success ){
          this.$message.success("添加成功");
          window.location.reload();
        }
        else{
          this.$message.error("添加失败");
        }
      })
      /*       console.log(this.formname); */
    },
    //删除事件
    removePreview(){
      if(this.selectData.length==0){
         this.$message.error('请选择职位');
      }
      else{
        this.isDeleteDialogDisplay = true;
      }
    },
    //确认删除
    remove(selection){
        var arr = new Array(selection.length);
        selection.forEach((item,index)=>{
          arr[index] = item.positionId;
        })
        DeletePosition(arr);
        this.isDeleteDialogDisplay = false;
         var data = getAllAuthPositionProcess(1,10);
    getAllAuthPosition(data).then(res =>{
      if(res.success){
        this.tableData = res.result.items;
        this.$message.success('获取列表成功');
        console.log(this.tableData);
      }
      else{
        this.$$message.error('获取列表失败');
      }
    });

    }
  },
};
</script>

<style scoped>
.el-button {
  width: 100px !important;
}
.new_row {
  height: 40px;
}
.el-tree {
  margin-top: 20px;
  margin-left: 15%;
  margin-bottom: 20px;
  min-height: 250px;
}
.delete > div {
  margin: 20px auto;
  min-height: 100px;
}
.delete > div > div:nth-child(1) {
  text-align: center;
}
.delete > div > div {
  display: inline-block;
  width: 50%;
  text-align: left;
  vertical-align: top;
  font-size: 18px !important;
}
.delete > div > div:nth-child(2) {
  max-height: 180px;
  overflow: auto;
}
</style>
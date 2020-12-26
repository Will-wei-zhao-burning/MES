<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-19 15:37:52
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-26 21:18:19
-->
<template>
  <div>
    <!-- 筛选操作区 -->
    <el-row>
      <el-col :span="4"
        >工号：<el-input v-model="search"
          ><el-button slot="append" icon="el-icon-search"></el-button></el-input
      ></el-col>
      <el-col :span="4"
        >姓名：<el-input v-model="search"
          ><el-button slot="append" icon="el-icon-search"></el-button></el-input
      ></el-col>
      <el-col :span="4">
        部门：<el-select v-model="filterDept">
          <el-option
            v-for="item in deptList"
            :key="item.index"
            :value="item.label"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        职位：<el-select v-model="filterPosition">
          <el-option
            v-for="item in positionList"
            :key="item.index"
            :value="item.positionName"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :offset="4" :span="2">
        <el-button type="primary" @click="isNewDialogDisplay = true"
          >新建用户</el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button type="danger">删除用户</el-button>
      </el-col>
    </el-row>
    <!-- 表单区 -->
    <el-row>
      <el-table border :data="tableData">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column
          v-for="item in tableList"
          :prop="item.prop"
          :width="item.width"
          :label="item.label"
          :key="item.index"
        ></el-table-column>
        <el-table-column label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="edit(scope)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 翻页 -->
    <!-- 新建弹框区-->
    <el-dialog title="新建用户" id="dialog" :visible.sync="isNewDialogDisplay">
      <el-row type="flex" justify="center">
        <el-col :span="6">工号：</el-col>
        <el-col :Span="15">
          <el-input v-model="userInfor.jobNubmer"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">姓名：</el-col>
        <el-col :Span="12">
          <el-input v-model="userInfor.userName"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">部门：</el-col>
        <el-col :Span="15">
          <el-select v-model="userInfor.dept.deptName">
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">职务：</el-col>
        <el-col :Span="15">
          <el-select v-model="userInfor.position.positionName">
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">部门：</el-col>
        <el-col :Span="15"> 权限 </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">手机号：</el-col>
        <el-col :Span="12">
          <el-input v-model="userInfor.phoneNumber"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">密码：</el-col>
        <el-col :Span="12">
          <el-input v-model="userInfor.passWord"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="6">再次确认密码：</el-col>
        <el-col :Span="12">
          <el-input v-model="userInfor.passWordConform"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="end">
        <el-col :span="3">
          <el-button
            size="medium"
            @click="isNewDialogDisplay = false"
            type="info"
            >取消</el-button
          >
        </el-col>
        <el-col :span="3">
          <el-button size="medium" @click="confirm" type="primary"
            >确定</el-button
          >
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 删除弹框区 -->
    <el-dialog
      id="dialog"
      title="删除用户"
      :visible.sync="isDeleteDialogDisplay"
    >
    </el-dialog>
  </div>
</template>

<script>
import {getAllDeptForms,getAllAuthPosition} from "network/authority.js";
import {getAllAuthPositionProcess,getAllDeptFormsFilter} from "service/Authority/authority.js";
export default {
  data() {
    return {
      tableList: [
        { label: "工号", prop: "sample", width: "100" },
        { label: "姓名", prop: "sample", width: "100" },
        { label: "职位", prop: "sample", width: "150", isFix: "left" },
        { label: "部门", prop: "sample", width: "150", isFix: "left" },
        { label: "权限", prop: "sample", isFix: "left" },
        { label: "手机号", prop: "sample", width: "300" },
      ],
      userInfor:{},
      tableData: [{ sample: "ww" }],
      positionList:null,
      deptList:null,
      data:null,
      isNewDialogDisplay: false,
      isDeleteDialogDisplay: false,
      search: "",
      value: "",
      statusTypeList: [],
      filterDept:null,
      filterPosition:null,
    };
  },
  created(){
        var data = getAllAuthPositionProcess(1,10);
    getAllAuthPosition(data).then(res =>{
      if(res.success){
        this.positionList = res.result.items;
        this.$message.success('获取列表成功');
        console.log(this.positionList);
      }
      else{
        this.$$message.error('获取列表失败');
      }
    });
    getAllDeptForms().then((res) => {
      if (res.success) {
        this.deptList = getAllDeptFormsFilter(res.result.items);
        console.log(this.deptList);
      } else {
        this.$message.error("请重新刷新页面");
      }
    });
  },
  methods:{
    confirm(){
      
    }
  }
};
</script>

<style scoped>
.el-input {
  width: 65% !important;
}
.el-select {
  width: 65% !important;
}
.el-row {
  margin-bottom: 10px;
}
#dialog {
  line-height: 40px;
}
</style>
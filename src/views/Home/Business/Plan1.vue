<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-18 11:24:55
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-21 14:44:02
-->
<template>
  <div>
    <div class="container-card">
      <el-row>
        <el-col :span="5"
          >客户：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
        <el-col :span="5"
          >港口：<el-input v-model="search"
            ><el-button
              slot="append"
              icon="el-icon-search"
            ></el-button></el-input
        ></el-col>
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
        <el-col :span="4">
          <el-select>
            <el-option
              v-for="item in statusTypeList"
              :key="item.index"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datavalue: "",
      options: [{
          value: '选项1',
          label: '已完成'
        }, {
          value: '选项2',
          label: '未完成'
        }, {
          value: '选项3',
          label: '修改中'
        }, {
          value: '选项4',
          label: '取消'
        }],
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
        input1:'',
        input2:'',
        input3:'',
        input4:'',
        value:'',
        dialogVisible:false,
        dialogImageUrl:'',
        btnShow:true,
         url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
    };
  },
  created(){
    var supportcss = document.getElementsByTagName('link')[0]

    console.log(supportcss)
  },  
  methods:{
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  }
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

</style>
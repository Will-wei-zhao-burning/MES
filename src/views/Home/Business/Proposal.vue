<!--
 * @Descripttion: 
 * @version: 
 * @Author: BurNing
 * @Date: 2020-11-25 09:30:31
 * @LastEditors: BurNing
 * @LastEditTime: 2020-12-18 17:15:20
-->
<template>
  <div id="proposal" v-show="display">
    <div>
      <!-- 上半部分 -->
      <el-row id="header">
        <!-- 左上部分选择框区域 -->
        <el-col :span="7">
          <div>
            表单名称：
            <el-input></el-input>
          </div>
          <div>
            表单类型：
            <el-select
              class="type-select"
              v-model="value"
              placeholder="请选择类型"
            >
              <el-option
                v-for="item in options"
                :key="item.index"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="5">
          <el-table
            @select="rowclick"
            height="150"
            :data="proposalHeaderData"
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
        <el-col :span="4">
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
            ><el-button
              class="type-select"
              style="width: 60"
              type="danger"
              @click="deletefile"
              >删除设计稿</el-button
            ></el-row
          >
        </el-col>
        <el-col :span="2">
          <el-button @click="isTableDisplay = !isTableDisplay">换页</el-button>
        </el-col>
      </el-row>
      <!-- 中间部分 -->
      <el-row v-show="isTableDisplay" id="middle">
        <!-- 左边表格部分 -->
        <el-col :span="9">
          <el-row><el-col>样品企划书</el-col></el-row>
          <el-row>
            <el-col :span="6">公司</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">制单日期</el-col>
            <el-col :span="6"
              ><el-input v-model="proposalMiddleData.data"></el-input
            ></el-col>
          </el-row>
          <!--           <el-row>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"></el-col>
            <el-col :span="6"> <el-input v-model="proposalMiddleData.data"></el-input></el-col>
          </el-row> -->
          <el-row>
            <el-col :span="6">业务员</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">审核</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">客户</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">打样小组</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">样品号</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">品名</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">修改次数</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">组数</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">材质</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">里沙</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">表纱温度</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">商标品质标识</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">机种</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">针数</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">功能性</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">箭头方式</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">刺绣</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">样品数量</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">企划克重</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">样品克重</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">希望日期</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
            <el-col :span="6">实际完成日期</el-col>
            <el-col :span="6"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="6">检测要求</el-col>
            <el-col :span="18"
              ><el-input v-model="object1.value"></el-input
            ></el-col>
          </el-row>
          <el-row >
            <el-col class="sample-pic" :span="6">采样照片(不超过三张)</el-col>
            <el-col :span="18" style="height:400px"
              ><el-upload  list-type="picture-card" :limit="3"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove" class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"><i class="el-icon-plus"></i></el-upload>
              </el-col>
          </el-row>
          <el-row class="focus-point">
            <el-col :span="6">注意点</el-col>
            <el-col :span="18"
              ><el-input type="textarea" autosize v-model="object1.value"></el-input
            ></el-col>
          </el-row>
        </el-col>
        <!-- 中间表格部分 -->
        <el-col :span="15">
          <div class="flower-row">
            <el-row>
              <el-col class="left-column" :span="3">花型配色</el-col>
              <el-col :span="16">配色描述</el-col>
              <el-col :span="5">备注</el-col>
            </el-row>
            <el-row>
              <el-col :span="3">花型</el-col>
              <el-col :span="4">主色</el-col>
              <el-col :span="12">配色</el-col>
              <el-col :span="5"></el-col>
            </el-row>
            <el-row v-for="item in flowerdata" :key="item.index">
              <el-col :span="3"><el-input v-model="value"></el-input></el-col>
              <el-col :span="4"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="5"><el-input v-model="value"></el-input></el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span="19"
              >规格：
              <el-radio-group v-model="checked">
                <el-radio :label="3">一般量法</el-radio>
                <el-radio :label="6">中心点量法</el-radio>
                <el-radio :label="9">交叉量法</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="5">量法显示</el-col>
          </el-row>
          <el-row class="size-row">
            <el-row>
              <el-col v-for="item in items" :key="item.index">
                <el-row>{{ item }}</el-row>
              </el-col>
            </el-row>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
               <el-col v-for="item in items1" :key="item.index">
                {{item}}
              </el-col>
            </div>
            <div>
              <el-image :src="pictureLink"></el-image>
            </div>
          </el-row>
           <div class="size-row">
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-row>{{ item }}</el-row>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items1" :key="item.index">
                {{item}}
              </el-col>
            </div>
            <div><el-image :src="pictureLink"></el-image></div>
          </div>
        </el-col>
      </el-row>
      <el-row v-show="!isTableDisplay" id="middle">
        <el-col>
          <div class="flower-row">
            <el-row>
              <el-col class="left-column" :span="2">花型配色</el-col>
              <el-col :span="19">配色描述</el-col>
              <el-col :span="3">备注</el-col>
            </el-row>
            <el-row>
              <el-col :span="2">花型</el-col>
              <el-col :span="3">主色</el-col>
              <el-col :span="16">配色</el-col>
              <el-col :span="3"></el-col>
            </el-row>
            <el-row v-for="item in flowerdata" :key="item.index">
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="3"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="2"><el-input v-model="value"></el-input></el-col>
              <el-col :span="3"><el-input v-model="value"></el-input></el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span="19"
              >规格：
              <el-radio-group v-model="checked">
                <el-radio :label="3">一般量法</el-radio>
                <el-radio :label="6">中心点量法</el-radio>
                <el-radio :label="9">交叉量法</el-radio>
              </el-radio-group>
            </el-col>
            <el-col :span="5">量法显示</el-col>
          </el-row>
          <el-row class="size-row">
            <el-row>
              <el-col v-for="item in items" :key="item.index">
                <el-row>{{ item }}</el-row>
              </el-col>
            </el-row>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
               <el-col v-for="item in items1" :key="item.index">
                {{item}}
              </el-col>
            </div>
            <div>
              <el-image :src="pictureLink"></el-image>
            </div>
          </el-row>
           <div class="size-row">
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-row>{{ item }}</el-row>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items" :key="item.index">
                <el-input v-model="value"></el-input>
              </el-col>
            </div>
            <div>
              <el-col v-for="item in items1" :key="item.index">
                {{item}}
              </el-col>
            </div>
            <div><el-image :src="pictureLink"></el-image></div>
          </div>
        </el-col>
      </el-row>
      <!-- 按钮区 -->
      <el-row type="flex" justify="end">
        <el-checkbox style="line-height:40px" v-model="isTableDisplay">不对外发布</el-checkbox>
        <el-button>提交</el-button>
        <el-button>取消</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "ZS00232",
        },
        {
          value: "EW00232",
        },
        {
          value: "BU00232",
        },
      ],
      items: [
        "平铺尺寸、尺码",
        "A 脚底长",
        "B 上统长",
        "C 罗口长",
        "D 罗口宽",
        "E 上统宽",
        "F 刺绣中心距罗口",
        "G 脚底宽",
      ],
      items1:['公差','±0.5','±0.5','','±0.5','±0.5','',''],
      value: "",
      checked:3,
      isTableDisplay:true,
      proposalHeaderData: [],
      tableData2: [],
      proposalMiddleData: {
        data: "2018.12.3",
      },
      flowerdata: [
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
        { type: "", main: "", secondary: "" },
      ],
    };
  },
  computed:{
    pictureLink(){
      switch (this.checked){
        case 3 : return 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
         break;
        case 6 : return require('@/assets/logo.png')
      }
    }
  },
  props: {
    object1: {
      type: Object,
      default: {},
    },
  },
  methods: {
    uploadfile(file, fileList) {
      this.proposalHeaderData = fileList;
      for (var i = 0; i < this.proposalHeaderData.length; i++) {
        this.proposalHeaderData[i].index = i;
      }
    },
    rowclick(selection, row) {
      this.tableData2 = selection.reverse();
      console.log(this.tableData2);
    },
    deletefile() {
      for (var i = 0; i < this.tableData2.length; i++) {
        this.proposalHeaderData.splice(this.tableData2[i].index, 1);
      }
      for (var i = 0; i < this.proposalHeaderData.length; i++) {
        this.proposalHeaderData[i].index = i;
      }
    },
  },
};
</script>

<style scoped>
#header {
  height: 150px;
  margin-bottom: 10px;
  font-size: 12px;
}
.type-select {
  margin-top: 70px;
}
#middle .el-col {
  border: 1px solid;
  line-height: 40px;
  font-size: 12px;
}
#middle .left-column {
  border-left: 0px;
}
#header .el-input {
  width: 220px;
}
.size-row {
  width: 100%;
  height: 320px;
  text-align: left;
}
.size-row > div {
  width: 8.35%;
  display: inline-block;
  text-align: center;
}
.size-row > div:first-child {
  width: 12.5% !important;
}
.size-row>div:last-child{
  width:20.7%!important;
  height: 100%;
  line-height: 320px;
}
.size-row .el-col {
  height: 40px;
}
.sample-pic{
  height: 400px!important;
  padding:150px 0
}
.focus-point .el-col{
  height: 200px!important;
  line-height: 200px!important;
}
.el-upload{
  line-height: 40px!important;
}
</style>
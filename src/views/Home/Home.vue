<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <div>
        <img src="~assets/logo.png" />
        <div>张氏管理系统</div>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!-- 主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div
          class="toggle-button"
          :collapse="isCollapse"
          :collapse-transition="false"
          @click="togleCollapse"
        >
          <i v-show="isCollapse" class="el-icon-caret-right"></i>
          <i v-show="!isCollapse" class="el-icon-caret-left"></i>
        </div>
        <!-- 左侧菜单 -->
        <el-menu
          background-color="#F6F7F9"
          text-color="#111111"
          active-text-color="#6890C3"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :collapse-transition="false"
          unique-opened
          router
        >
          <!-- 一级菜单 -->
          <el-submenu index="/">
            <!-- 一级菜单模板区域 -->
            <template slot="title">
              <i class="el-icon-suitcase"></i>
              <span>业务部</span>
            </template>

            <!--             <el-menu-item index="/business">
              二级菜单模板区域
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>预览页</span>
              </template>
            </el-menu-item> -->
            <el-submenu index="1-1">
              <!-- 二级菜单模板区域  -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>打样单</span>
              </template>
              <el-menu-item class="submenu" index="/proofSingle">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>打样单单个</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/proofGroup">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>打样单批量</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/summary">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>汇总单</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!--  <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->

            <!-- 二级菜单 -->
            <el-submenu index="1-2">
              <!-- 二级菜单模板区域  -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>计划表</span>
              </template>
              <el-menu-item class="submenu" index="/average">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>计划表均码</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/multiSize">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>计划表多尺码</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <!-- 二级菜单 -->
            <el-submenu index="1-3">
              <!-- 二级菜单模板区域  -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>采购表</span>
              </template>
              <el-menu-item class="submenu" index="/tag">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>袋子采购表</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/box">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>箱子采购表</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/hook">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>钩子采购表</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/mark">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>商标采购表</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>进仓单</span>
              </template>
              <el-menu-item class="submenu" index="/enterStore">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>进仓汇总单</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>订舱单</span>
              </template>
              <el-menu-item class="submenu" index="/orderStore">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>订舱汇总单</span>
                </template>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="/monthBuget"
              ><i class="el-icon-document"></i>
              <span slot="title">月度计划表</span>
            </el-menu-item>
            <el-menu-item index="/shippingPlan"
              ><i class="el-icon-document"></i>
              <span slot="title">分批出货计划表</span>
            </el-menu-item>
             <el-submenu index="1-6">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>出货计划单</span>
              </template>
              <el-menu-item class="submenu" index="/manager">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>每月下单计划汇总(业务经理、财务)</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/employee">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>每月下单计划汇总(业务员)</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/batch">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>每月出货预计划(分批)</span>
                </template>
              </el-menu-item>
              <el-menu-item class="submenu" index="/total">
                <!-- 二级菜单模板区域 -->
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>每月出货预计划(合计)</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- 一级菜单 -->
          <el-submenu index="2">
            <!--一级菜单模板区-->
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>技术部</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/purchase">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>样品单</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/enterStore">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>进仓单</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/orderStore">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>订舱单</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 一级菜单 -->
          <el-submenu index="3">
            <!--一级菜单模板区-->
            <template slot="title">
              <i class="el-icon-data-line"></i>
              <span>数据部</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="3-1">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>样品单</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-2">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>计划单</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3-3">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>汇总单</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <!-- 一级菜单 -->
          <el-menu-item index="4">
            <!--一级菜单模板区-->
            <i class="el-icon-truck"></i>
            <span>大货部</span>
          </el-menu-item>
          <!-- 一级菜单 -->
          <el-submenu index="5">
            <!--一级菜单模板区-->
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>信息管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/permission">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>权限管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/customer">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>用户管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/user">
              <!-- 二级菜单模板区域 -->
              <template slot="title">
                <i class="el-icon-document"></i>
                <span>供用商管理</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容体 -->
      <el-main>
        <!-- 主体路由 -->
        <el-card id="card">
        <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {getAllDeptForms} from 'network/authority.js'

export default {
  data() {
    return {
      // 默认不折叠
      isCollapse: false,
    };
  },
  created(){
      getAllDeptForms().then(res =>{
        console.log(res);
      })
  },
  mounted(){
    var elCard = document.getElementById('card');
    var height = window.innerHeight;
    console.log(height);
    elCard.style.minHeight =(height-60)+'px';
  },
  methods: {
    // 菜单的折叠与展开
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    //退出
    logout() {
      // 清空token
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #4e7cb4;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-aside {
  background-color: #f6f7f9;
}
.el-heade > div {
  display: flex;
  vertical-align: middle;
}
.el-header img {
  position: absolute;
  top: 10px;
  height: 40px;
  margin-left: 10px;
}
.el-header > div > div {
  margin-left: 60px;
  display: inline-block;
}
.el-menu {
  text-align: left;
  border-right: none;
}
.toggle-button {
  background-color: #f6f7f9;
  font-size: 10px;
  line-height: 24px;
  color: #4a5064;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  border-bottom: 1px solid #4a5064;
}
.el-main {
  background-color: #d0d2d6;
}
.submenu {
  padding-left: 60px !important;
}
</style>
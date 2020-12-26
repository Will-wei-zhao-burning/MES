<template>
  <div class="login_container">
       <div class="login_box">
         <!-- Logo区 --> 
           <div class="avatar_box">
             <img src="~assets/logo.png"/>
           </div>  
         <!-- 登录区域 -->
           <div >
             <el-form :model="loginForm" :rules="loginFormRules" class="login_form" label-width="60px">
               <el-form-item label="工号" prop="jobNumber">
                 <el-input v-model="loginForm.jobNumber" placeholder="请输入您的工号" prefix-icon="el-icon-user"></el-input>
               </el-form-item>
               <el-form-item label="密码" prop="passWord">
                 <el-input type="password" v-model="loginForm.password"  placeholder="请输入您的密码" prefix-icon="el-icon-lock"></el-input>
               </el-form-item>
               <el-form-item class="btns">
                 <el-button type="primary" @click="login">登录</el-button>
                 <el-button type="info" @click="restore">重置</el-button>
               </el-form-item>
             </el-form>
           </div>
      </div>
  </div>
</template>

<script>
//导入网络接口文件
import {login} from 'network/authority.js'

export default {
  data(){
    return{
      loginForm:{
        jobNumber:'',
        passWord:''
      },
      loginFormRules:{
        jobNumber:[
          {  message: '请输入工号', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
        ],
        passWord:[
          {message: '请输入用户密码', trigger: 'blur'},
          { min: 4, max: 18, message: '长度在 4 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    //登录
   async login(){
      const res = await login(this.loginForm);
      if(res.result){
        this.$router.push('/home')
        this.$message.success('登录成功')
      }
      else{
        this.$message.error('登陆失败，请检查账户或密码是否正确')
      }
    },
    restore(){
      this.loginForm.jobNumber=''
      this.loginForm.passWord=''
    }
  }
}
</script>

<style scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
  width:100%;
}
.login_box{
  background-color: aliceblue;
  width:450px;
  height:360px;
  border-radius:8px;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
.avatar_box{
  width:130px;
  height: 130px;
  background-color: #FFF;
  position:absolute;
  left:50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.avatar_box img{
  width:60%;
  height:60%;
  margin-top: 20%;
}
.login_form{
  position: absolute;
  bottom: 60px;
  width: 100%;
  padding: 0 20px 0 0;
  box-sizing: border-box;
}
.btns{
    display: flex;
    float:right;
}
</style>
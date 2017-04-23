<template>
  <header class="head-nav">
    <el-row>
      <el-col :span="4" class='logo-container'>
        <img src="../../../static/images/tangaoyu.png" class='logo' alt="">
      </el-col>
      <el-col :span="4" :push="16">
                <span class='username'>
                    <el-dropdown
                      trigger="click">
                        <span class="el-dropdown-link">
                          {{username}}  <i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command='info'>修改信息</el-dropdown-item>
                            <el-dropdown-item
                              command='pass'
                             >修改密码</el-dropdown-item>
                            <el-dropdown-item
                              command='set'
                              >系统设置</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <i class="fa fa-sign-out logout" @click='logout'>退出登录</i>
      </el-col>
    </el-row>
  </header>
</template>
<script>
    export default {
        computed:{
            username(){
                let username = this.$store.state.user.userinfo.token;
                return username ? username : this.name;
            }
        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            logout(){
                this.$store.commit("setUserInfo",{})
            }
        }
    }
</script>
<style scoped>
    .logo-container{
      height: 60px;
    }
    .logo{
      height: 50px;
      width: auto;
      margin-left: 10px;
      margin-top: 5px;
    }
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .head-nav{
      width:100%;
      height: 60px;
      background: #324057;
      position: fixed;
      top:0px;
      left:0px;
      z-index: 999;
      color:#FFF;
      border-bottom: 1px solid #1F2D3D;
    }
</style>

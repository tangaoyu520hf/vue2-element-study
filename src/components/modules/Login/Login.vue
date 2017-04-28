<template>
  <div class="login" :style="winSize">
    <el-row>
      <el-col :span='24'>
        <div class="content">
          <el-form v-authority:add label-position="left" label-width="0px" class="demo-ruleForm card-box loginform"
                   v-loading="login_actions.disabled"
                   element-loading-text="正在登录..."
                   :style="formOffset"
                   :model='data'
                   :rules="rule_data"
                   ref='data'>
            <h3 class="title">系统登录</h3>
            <el-form-item
              prop='username'>
              <el-input type="text" auto-complete="off" placeholder="账号"
                        v-model='data.username'
                        @keyup.native.enter="login('data')"></el-input>
            </el-form-item>
            <el-form-item
              prop='password'>
              <el-input type="password" auto-complete="off" placeholder="密码"
                        v-model='data.password'
                        @keyup.native.enter="login('data')"></el-input>
            </el-form-item>
            <!--            <el-checkbox style="margin:0px 0px 35px 0px;"
                                     :checked='remumber.remumber_flag'
                                     v-model='remumber.remumber_flag'>记住密码
                        </el-checkbox>-->
            <el-form-item style="width:100%;">
              <el-button type="primary" @click='login("data")'>登录</el-button>
              <el-button @click='resetForm("data")'>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: 'login',
    data() {
      return {
        winSize: {
          width: '',
          height: ''
        },

        formOffset: {
          position: 'absolute',
          left: '',
          top: ''
        },

        remumber: this.$store.state.user.remumber,

        login_actions: {
          disabled: false
        },

        data: {
          username: '',
          password: ''
        },

        rule_data: {
          username: [{
            required: true,
            message: '用户名不能为空！',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '密码不能为空！',
            trigger: 'blur'
          }],
        }
      }
    },
    methods: {
      ...mapMutations([
        'setToken',
        'setUserInfo'
      ]),
      setSize() {
        this.winSize.width = $(window).width() + "px";
        this.winSize.height = $(window).height() + "px";

        this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
        this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
      },

      login(ref) {
        this.$refs[ref].validate((valid) => {
          if (valid) {
            //失败后回调方法
            const responseFun = response => {
              this.login_actions.disabled = false;
            };
            this.login_actions.disabled = true;
            this.$http.post('security/user/login', this[ref]).then(response => {
              // get body data
              let token = response.data.data;
              this.setToken(token)
              this.$http.get("security/user/info").then(response => {
                let userInfo = response.data.data.user || {};
                userInfo.menuList = response.data.data.menuList || [];
                userInfo.roleFunctions = response.data.data.roleFunctionDTOS || {};
                this.setUserInfo(userInfo);
                this.login_actions.disabled = false;
                //动态添加路由
                this.$router.addRoutes(this.$store.getters.getRoutes);
                var redirect = this.$route.params.redirect;
                if (redirect) {
                  this.$router.push(redirect);
                } else {
                  this.$router.push("/");
                }

              }).catch(responseFun);
            }).catch(responseFun);
          }
        });
      },

      resetForm(ref) {
        this.$refs[ref].resetFields();
      }
    },
    created() {
      this.setSize();
      $(window).resize(() => {
        this.setSize();
      });
    },
    mounted() {
      //如果上次登录选择的是记住密码并登录成功，则会保存状态，用户名以及token
      if (this.remumber.remumber_flag === true) {
        this.data.username = this.remumber.remumber_login_info.username;
        this.data.password = this.remumber.remumber_login_info.token.substring(0, 16);
      }
    }
  }
</script>

<style scoped>

</style>

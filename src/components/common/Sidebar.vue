<template>
  <div  class="sidebar" :style="{'width':'250px'}" id='admin-left'>
    <el-row v-for="(item, index) in menus" class='tac'>
      {{item.name}}
      <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>

      </el-menu>
    </el-row>
  </div>
</template>

<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        data () {
          return {
            menus:this.$store.state.menu.routes,
          }
        },
        methods:{
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #324057;
  }
  .sidebar > ul {
    height:100%;
  }

</style>

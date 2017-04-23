<template>
  <div  class="sidebar" :style="{'width':'250px'}" id='admin-left'>
    <el-row v-for="(item, index) in menus" class='tac' :key="index">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <el-submenu :index="index+''">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(subitem, subindex) in item.children" :route="{path:subitem.url}" :index="subitem.url" :style="{'padding-left':'50px'}" :key="index+'-'+subindex">{{subitem.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters({
              menus:"getMenus"
            })
        },
        data () {
          return {
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

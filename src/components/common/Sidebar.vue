<template>
  <div  class="sidebar" :style="{'width':'250px'}" id='admin-left'>
    {{$route.matched[0].path}}
    <el-row v-for="(item, index) in menus" class='tac' :key="index">
      <el-menu @open="handleOpen" :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <el-submenu v-if="item.children&&item.children.length>0" :index="index+''">
          <template slot="title">{{item.menuName}}</template>
          <el-menu-item v-for="(subitem, subindex) in item.children" :index="'/'+item.applicationCode+'/'+item.menuCode+'/'+subitem.menuCode" :style="{'padding-left':'50px'}" :key="index+'-'+subindex">
            {{subitem.menuName}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.menuUrl">{{item.menuName}}</el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
    import { mapGetters,mapMutations } from 'vuex'
    export default {
        created(){
          this.initMenuList('/'+this.$route.meta.applicationCode);
        },
        computed:{
          ...mapGetters({
            menus:"getSubMenus"
          }),
        },
        methods:{
          ...mapMutations([
            'initMenuList',
          ]),
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        },
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

<template>
  <div class="sidebar" :style="{'width':'250px'}" id='admin-left'>
    <el-row v-for="(item, index) in $store.getters.getSubMenus" v-if="$route.meta.applicationCode==item.applicationCode" class='tac' :key="index">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened
               router>
        <el-submenu v-if="item.children&&item.children.length>0" :index="'/'+item.applicationCode+'/'+item.menuCode">
          <template slot="title">{{item.menuName}}</template>
          <el-menu-item v-for="(subitem, subindex) in item.children"
                        :index="'/'+item.applicationCode+'/'+item.menuCode+'/'+subitem.menuCode"
                        :style="{'padding-left':'50px'}" :key="index+'-'+subindex">
            {{subitem.menuName}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.menuCode">{{item.menuName}}</el-menu-item>
      </el-menu>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    created(){

    },
    methods: {
      ...mapMutations([
        'initMenuList',
      ]),
      updateCurMenu(route){
          var subMenus = this.$store.getters.getSubMenus;
        var route = route || this.$route;
        if (route.matched.length) {
          var rootPath = route.matched[0].path,
            fullPath = route.path;
          var routes = this.$router.options.routes;
          for (var i = 0; i < routes.length; i++) {
            if (routes[i].path === rootPath && !routes[i].hidden) {
              this.menu_list = routes[i].children;
              break;
            }
          }
        } else {
          this.$router.push('/404');
        }
      }
    },
    watch: {
      $route(to, from){
        this.updateCurMenu(to);
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #324057;
  }

  .sidebar > ul {
    height: 100%;
  }

</style>

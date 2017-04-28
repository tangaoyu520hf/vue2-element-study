<template>
  <div class="sidebar" :style="{'width':'250px'}" id='admin-left'>
    <el-row v-for="(item, index) in $store.getters.getSubMenus" v-if="$route.meta.applicationCode==item.applicationCode" class='tac' :key="index">
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" theme="dark" unique-opened
              router>
        <el-submenu v-if="item.children&&item.children.length>0" :index="'/'+item.applicationCode+item.fullPath">
          <template slot="title">{{item.menuName}}</template>
          <el-menu-item  v-for="(subitem, subindex) in item.children"
                        :index="'/'+item.applicationCode+subitem.fullPath"
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
  import {
    sessionStorage
  } from '@/core/store'
  export default {
    name: 'sidebar',
    methods:{

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

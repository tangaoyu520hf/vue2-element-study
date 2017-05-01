<template>
    <div class="wrapper">
       <v-head></v-head>
      <div class="left-fixed-right-auto">
        <v-sidebar></v-sidebar>
        <div class="content">
          <v-bread></v-bread>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vBread from './Bread.vue';
    export default {
        name:'home',
        components:{
            vHead, vSidebar,vBread
        }
    }
</script>
<style scoped>
  .left-fixed-right-auto{
    padding-top: 60px;
  }

</style>

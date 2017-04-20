<template>
    <div class="wrapper">
       <v-head></v-head>
      <div class="left-fixed-right-auto">
        <v-sidebar></v-sidebar>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        name:'home',
        components:{
            vHead, vSidebar
        }
    }
</script>

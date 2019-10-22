<template>
  <div class="home">
    <HeaderBar/>
    <div class="contents-wrapper">
      <MainContents/>
    </div>
  </div>
</template>

<style lang="scss">
  .contents-wrapper{
    margin:0;
    padding:0;
    position:absolute;
    top:64px;
    width:100vw;
    height:100vh;
    background:white;
  }
</style>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue'
// import SideBar from '@/components/SideBar.vue'
import MainContents from '@/components/MainContents.vue'

export default {
  name: 'home',
  components: {
    HeaderBar,
    // SideBar,
    MainContents
  }
}
</script>

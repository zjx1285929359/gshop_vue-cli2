<template>
  <div>
      <router-view/>
      <FooterGuide/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    data () {
      return {
        msg: 'App conponent'
      }
    },
    //注册组件
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 
</style>

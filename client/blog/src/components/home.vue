<template>
  <div id="blog">
    <blog-header></blog-header>
    <blog-main></blog-main>
  </div>
</template>

<script>
  import BlogHeader from './../base/header/header.vue'
  import BlogMain from '../views/main/main.vue'
  export default {
    data () {
      return {}
    },
    components: {
      BlogHeader,
      BlogMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #blog {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>

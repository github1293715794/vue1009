<template>
  <footer class="copy">
    Copy &copy; 
		<div>我是从header传过来的值num：{{num}}</div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        num:"",
      }
    },
    mounted(){
      this.bus.$on("to-footer",num => {
        this.num = num;
      })
    },
  }
</script>

<style scoped>

</style>

<template>
  <footer class="copy">
    Copy &copy; 
		<div>我是从header传过来的值num：{{num}}</div>
    <input type="button" value="状态管理++" @click="increment">count：{{count}}
    <input type="button" value="状态管理--" @click="decrement">
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        num:"",
      }
    },
    computed: {
      count(){
        return this.$store.state.count;
      }
    },
    created(){
      console.log(this.$store.state.count);
    },
    mounted(){
      this.bus.$on("to-footer", num => {
        this.num = num;
      })
    },
    methods: {
      increment(){
        this.$store.commit('increment');
      },
      decrement(){
        this.$store.commit('decrement');
      }
    }
  }
</script>

<style scoped>

</style>

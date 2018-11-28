<template>
  <header class="header">
    <h3>vue header - {{toSonTitle}}</h3>
    <input type="button" value="向父组件传递值" @click="toFatherParam">
  </header>
</template>

<script>
  export default {
    data(){
      return {
        name:"我是子组件传过来的"
      }
    },
    props:["toSonTitle"],
    methods:{
      toFatherParam(){
        this.$emit("to-father",this.name);
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <header class="header">
    <h3>vue header - {{toSonTitle}}</h3>
    <input type="button" value="向父组件传递值" @click="toFatherParam">
    <button @click="toFooterParam">非父子组件的传参,向footer页面传值</button>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        name:"我是子组件传过来的",
				contentNum:"非父子传参"
      }
    },
    props:["toSonTitle"],
    methods:{
      toFatherParam(){
        // 向父组件传递数据的方法
        this.$emit("to-father",this.name);
      },
			toFooterParam(){
				this.bus.$emit("to-footer",this.contentNum);
			}
    }
  }
</script>

<style scoped>

</style>

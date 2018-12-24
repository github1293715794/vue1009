<template>
	<div>
		<Header></Header>
		<div>
			用户：{{loginName}}
			<br>
			用户id：{{contentObj.id}}
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 项目的内容页面
	export default {
		data(){
			return {
				loginName: this.$route.params.id,
				contentObj: {},
			}
		},
		created(){
			this.getData();
		},
		methods: {
			getData(){
				this.$http.get('https://api.github.com/users/' + this.loginName).then(resp => {
					this.contentObj = resp.data;
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>
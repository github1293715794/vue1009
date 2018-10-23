<template>
	<div>
		<Header></Header>
		<div>
			<ul>
				<li v-for="item in list" :key="item.login">
					<span>{{item.id}}</span>
					<router-link :to="'/content/'+item.login">{{item.login}}</router-link>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 项目的列表页面
	import Header from '../components/header.vue'
	import Footer from '../components/footer.vue'
	export default {
		components: {Header,Footer},
		data(){
			return {
				list:[],
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				this.$http.get('https://api.github.com/users').then(resp => {
					this.list = resp.data;
					console.log(resp);
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>
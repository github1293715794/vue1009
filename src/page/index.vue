<template>
	<div>
		<Header></Header>
		<img src="static/image/vue.png" style="width:30px;" alt="">
		<div>
			<h3>关于scss的应用</h3>
			<div class="style-color">App.vue中引入了style.scss文件</div>
			<div class="index-color">引入_index.scss文件</div>
			<!-- 选择器嵌套 -->
			<div class="include">
				<p>
					<a href="#">.include类下的p标签中的a标签</a>
				</p>
			</div>
			<div class="include">
				<p>
					<a href="#">.include类下的p标签中的a标签</a>
				</p>
			</div>
			<div class="include">
				<p>
					<a href="#">.include类下的p标签中的a标签</a>
				</p>
			</div>
			<div class="include">
				<p>
					<a href="#">.include类下的p标签中的a标签</a>
				</p>
			</div>
			<div class="include">
				<p>
					<a href="#">.include类下的p标签中的a标签</a>
				</p>
			</div>
			<p>
				<a href="#">p标签中的a标签，不包含在.include类中</a>
			</p>
			<!-- 属性嵌套，有相同的属性前缀 -->
			<div class="box">字体属性有相同前缀的font</div>
			<input class="btn-primary" type="button" value="继承，.btn-primary 中引用 .btn ">
			<!-- $border 数值使用 -->
			<div class="border">$border</div>
		</div>
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
	// import axiosUrl from '../api'  局部引入可以直接使用 axiosUrl.users，放到全局中见main.js中
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
				this.$http.get(this.axiosUrl.users).then(resp => {
					this.list = resp.data;
					console.log(resp);
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../style/scss/_index";
</style>

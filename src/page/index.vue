<template>
	<div>
		<Header :toSonTitle="title" v-on:to-father="getSonParam"></Header>
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
			<p>
				<a href="#">p标签中的a标签，不包含在.include类中</a>
			</p>
			<!-- 属性嵌套，有相同的属性前缀 -->
			<div class="box">字体属性有相同前缀的font</div>
			<input class="btn-primary" type="button" value="继承，.btn-primary 中引用 .btn ">
			<!-- $border 数值使用 -->
			<div class="border">$border</div>
			<div>接收子组件传过来的数据name：{{name}}</div>
			<!-- 点击获取红色颜色的水果 -->
			<div>点击红色颜色的水果有提示：</div>
			<div>
				<input type="button" value="apple" @click="getRedFruit">
				<input type="button" value="strawberry" @click="getRedFruit">
				<input type="button" value="banana" @click="getRedFruit">
			</div>
		</div>
		<div>
			<ul>
				<li v-for="item in list" :key="item.login">
					<span>{{item.id | addZero}}</span>
					<router-link :to="'/content/'+item.login">{{item.login}}</router-link>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
	// 项目的列表页面
	import Header from '../components/header.vue';
	import Footer from '../components/footer.vue';

	// import axiosUrl from '../api'  局部引入可以直接使用 axiosUrl.users，放到全局中见main.js中
	export default {
		components: {Header,Footer},
		data(){
			return {
				list: [],
				title: "列表页",
				name: "",
			}
		},
		created(){
			this.getData();
		},
		filters: {
			addZero(id){
				id = id < 10 ? ("0"+id) : id;
				return id;
			}
		},
		methods: {
			getData(){
				this.$http.get(this.axiosUrl.users).then(resp => {
					this.list = resp.data;
					console.log(resp);
				}).catch(err => {
					console.log(err);
				})
			},
			getSonParam(name){
				// 接收从子组件传递数据的方法
				this.name = name;
				alert(this.name);
			},
			// 简写js方法
			// 多重判断时使用Array.includes
			getRedFruit(e){
				const redFruit = ["apple", "strawberry"];
				if(redFruit.includes(e.target.value)){
					alert("red");
				}else{
					alert("not red")
				}
			},
			// 去重方法
		}
	}

	// 原型
	var ary = [1,3,3,2,3,2,3,2,32,3,23,23,2,3];
	Array.prototype.myUnique = function(){
		var obj = {};
		for(var i = 0; i < this.length; i++){
			var cur = this[i];
			if(typeof obj[cur] !== 'undefined'){
				this[i] = this[this.length - 1];
				this.length--;
				i--;
				continue;
			}
			obj[cur] = cur;
		}
		obj = null;
		return this;
	}
	ary.myUnique().sort(function(a, b){
		return a - b;
	});
	// async await用法
	let timer = async function(){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("2000");
			},2000)
		})
	}
	timer().then(result => {
		console.log(result);
	}).catch(err => {
		console.log(err);
	})

	{
		async function timer(){
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("2000");
				},2000)
			})
		}
		(async function(){
			console.log("123");
			await timer();
			console.log("456")
		})()
	}

</script>

<style lang="scss">
	@import "../style/scss/_index";
</style>

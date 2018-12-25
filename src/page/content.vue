<template>
	<div>
		<Header></Header>
		<div>
			用户：{{loginName}}
			<br>
			用户id：{{contentObj.id}}
		</div>
		<div v-for="(item, index) in list1" :key="index">
			{{index+1}}：{{item.title}}
		</div>
		<infinite-loading @infinite="infiniteHandler"></infinite-loading>
		<Footer></Footer>
	</div>
</template>

<script>
	
	// 上拉加载  下拉刷新
	import InfiniteLoading from 'vue-infinite-loading';
	// 项目的内容页面
	export default {
		components: {InfiniteLoading},
		data(){
			return {
				loginName: this.$route.params.id,
				contentObj: {},
				list1: [],
				page: 1
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
			},
			
			// 上拉加载
			infiniteHandler($state){
				this.$http.get('http://hn.algolia.com/api/v1/search_by_date?tags=story', {
					params: {
						page: this.page,
					}
				}).then(({data}) => {
					if(data.hits.length){
						this.page += 1;
						this.list1.push(...data.hits);
						$state.loaded();
					}else{
						$state.complete();
					}
				})
			}
		}
	}
</script>

<style>
</style>
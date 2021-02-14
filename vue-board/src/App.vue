<template>
	<div id="app">
		<Header></Header>
		
		<Content msg="Welcome to Your Vue.js App"></Content>
		
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "./components/common/boardHeader.vue"
	import Content from "./components/boardContent.vue"
	import Footer from "./components/common/boardFooter.vue"
	
	
	export default {
		name:"App",
		components:{
			Header,
			Content,
			Footer
		}
	}
</script>

<style>
	html,body{
		padding:0; 
		margin:0;
	}
	#app{
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin:0; padding:0;
	}
</style>
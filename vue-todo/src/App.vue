<template>
	<div id="app"></div>
</template>

<script>
	import TodoHeader from './components/TodoHeader.vue';
	import TodoInput from './components/TodoInput.vue';
	import TodoList from './components/TodoList.vue';
	import TodoFooter from './components/TodoFooter.vue';
	
	var TodoHeader={
		template:"<div>header</div>"
	};
	export default {
		components:{
			"TodoHeader" : TodoHeader
		}
	}
</script>

<style>
</style>

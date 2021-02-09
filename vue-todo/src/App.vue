<template>
	<div id="app">
		<TodoHeader></TodoHeader>
		<TodoInput></TodoInput>
		<TodoList></TodoList>
		<TodoFooter></TodoFooter>
	</div>
</template>

<script>
	import TodoHeader from './conponents/TodoHeader.vue'
	import TodoInput from './conponents/TodoInput.vue'
	import TodoList from './conponents/TodoList.vue'
	import TodoFooter from './conponents/TodoFooter.vue'
	
	export default {
		components: {
			'TodoHeader': TodoHeader,
			'TodoInput': TodoInput,
			'TodoList': TodoList,
			'TodoFooter': TodoFooter
		}
	}
</script>

<style>
	
</style>
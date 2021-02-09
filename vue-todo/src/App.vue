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
	body{
		text-align:center;
		background-color:#F6F6F8;
	}
	input{
		border-style:groove;
		width:200px;
	}
	button{
		border-style:groove;
	}
	.shawdow{
		box-shadow:5px 10px 10px rgba(0,0,0,0.03)
	}
</style>
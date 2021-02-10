<template>
	<div class="inputBox shadow">
		<input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
		<span class="addContainer" v-on:click="addTodo">
			<i class="addBtn fas fa-plus" aria-hidden="true"></i>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				newTodoItem:''
			}
		},
		methods:{
			addTodo(){
				if(this.newTodoItem !== ""){//예외 처리 코드
					var value = this.newTodoItem&&this.newTodoItem.trim();//텍스트의 앞뒤 공백 문자열 제거
					this.$emit("addTodo", value);//app.vue로 이벤트 발생
					this.clearInput();
				}
			},
			clearInput(){
				this.newTodoItem="";//인풋 박스의 입력 값 초기화
			}
		}
	}
</script>
<style scoped>
	input:focus{
		outline:none;
	}
	.inputBox{
		background:white;
		height:50px;
		line-height:50px;
		border-radius:5px;
	}
	.inputBox input{
		border-style:none;
		font-size:0.9rem;
	}
	.addContainer{
		float:right;
		background:linear-gradient(to right, #6478FB, #8763FB);
		display:block;
		width:3rem;
		border-radius:0 5px 5px 0;
	}
	.addBtn{
		color:white;
		vertical-align:middle;
	}
</style>
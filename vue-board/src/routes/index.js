import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'; //메인 컴포넌트 호출
import List from '../components/board/boardList.vue'; //게시판 리스트 컴포넌트 호출

Vue.use(Router);//vue 라우터 사용

export default new Router({ //라우터 연결
	mode:"history",
	routes:[
		{
			path:'/',
			component:HelloWorld
		}
		,{
			path:'/board/list',
			component:List
		}
	]
})
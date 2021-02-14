import Vue from 'vue';
import Router from 'vue-router';
import boardContent from '../components/boardContent'; //메인 컴포넌트 호출
import boardList from '../components/board/boardList'; //게시판 리스트 컴포넌트 호출

Vue.use(Router); //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:boardContent
			,component:boardContent
		}
		,{
			path:'/board/boardList'
			,name:boardList
			,component:boardList
		}
		
	]
})
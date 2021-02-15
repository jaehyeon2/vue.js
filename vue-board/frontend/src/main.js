import Vue from 'vue'
import App from './App.vue'
import router from './routes' //설정 라우터 호출
import axios from 'axios'

Vue.config.productionTip = true;

Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
//axios - JS http 통신 라이브러리

new Vue({
	router,          
	render: h => h(App)  //뷰에 설정
}).$mount('#app');
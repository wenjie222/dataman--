import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import {formatDate} from './components/common/date.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
// import '../static/css/icon.css';
import "babel-polyfill";


import vueTreeEdit from 'vue-tree-edit';

import 'font-awesome/scss/font-awesome.scss'



import htmlToPdf from '@/components/utils/htmlToPdf'

Vue.use(htmlToPdf);

Vue.use(ElementUI, { size: 'small' });

Vue.use(vueTreeEdit);



import crypto from "crypto"
Vue.prototype.$md5 = crypto.createHash("md5")


// import moment from 'moment';
import moment from 'moment/moment';
Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    // return moment(value).format(formatString); // value可以是普通日期 20170723
    return moment.unix(value).format(formatString); // 这是时间戳转时间
});

// 使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = sessionStorage.getItem('username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role !== '' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})


import Api from './api/index.js';
Vue.prototype.$api = Api;

// console.log(process.env.NODE_ENV);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
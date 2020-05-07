// import Vue from './vue.js'
// import App from './App.js'

// import './main.css'
// // import {num1,num2, add} from './App.js'


// // console.log(num2)
// // console.log(num1)
// // add(3,5)
// new Vue({
//     el:'#app',
//     components: {
//         App
//     },
//     template:`<app></app>`
// })
// /////这个是讲插件plugin的时候
// import './main.less'
// console.log('222')

// let a = '12'

// var ff = ()=>{}
import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    render:c=>c(App)
})
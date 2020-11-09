import $ from "jquery";
import "./css/1.css";
import "../images/1.jpg";
$(function () {
  $("li:odd").css("backgroundColor", "cyan");
  $("li:even").css("backgroundColor", "pink");
})
// -------------------------------
import Vue from 'vue';
// 定义单文件组件
import App from "./components/App.vue"
const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
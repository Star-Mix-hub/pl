/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
//theme darak
var btnToggle = document.querySelector(".toggle-night-dark__toggle");
function darkMode() {
  var body = document.body;
  var wasDark = localStorage.getItem("dark") === "true";
  localStorage.setItem("dark", !wasDark);
  body.classList.toggle("dark");
  btnToggle.classList.toggle("darkTheme");
}
document.querySelector(".toggle-night-dark__toggle").addEventListener("click", darkMode);

//header menu btn
document.querySelector(".burger-menu").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".header__bottom-wrapp").classList.toggle("active");
});

//info menu btn 
document.querySelector(".banner-info-btn").addEventListener("click", function () {
  document.querySelector(".banner__bottom-info").classList.toggle("open");
});

//pagination
var btnToggleDarkMode = document.querySelector(".toggle-night-dark__toggle");
var paginationWrapp = document.querySelector(".pagination");
function drawPagination(allPages, page) {
  var li = "";
  var firstPage = page;
  for (var pageLength = page; pageLength <= allPages; pageLength++) {
    li += "<li class=\"pagination__btn\"><a href=\"#\" onclick=\"h(e)\" class=\"pagination__num\">".concat(pageLength, "</a></li>");
  }
  paginationWrapp.innerHTML += li;
  repaint();
}
function repaint() {}
drawPagination(10, 1);
/******/ })()
;
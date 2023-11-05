"use strict";

// SOTRING ELEMENTS IN A VARIABLE
const btnOpenNav = document.querySelector(".btn-open");
const btnCloseNav = document.querySelector(".btn-close");
// console.log(btnOpenNav);
const navigationBar = document.querySelector(".navigation-bar");

const navSub = document.querySelectorAll(".sub");
// destructuring the sub nav elements
const [productSub, companySub, connectSub] = navSub;

const navMain = document.querySelectorAll(".main");
// destructuring the main nav elements
const [productMain, companyMain, connectMain] = navMain;

btnOpenNav.addEventListener("click", function () {
  btnCloseNav.classList.remove("hidden");
  //   btnOpenNav.classList.add("hidden");
  navigationBar.classList.remove("hidden");
  btnOpenNav.style.visibility = "hidden";
});
btnCloseNav.addEventListener("click", function () {
  btnCloseNav.classList.add("hidden");
  btnOpenNav.style.visibility = "visible";
  navigationBar.classList.add("hidden");
});

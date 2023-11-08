"use strict";

// SOTRING ELEMENTS IN A VARIABLE
const btnOpenNav = document.querySelector(".btn-open");
const btnCloseNav = document.querySelector(".btn-close");
// console.log(btnOpenNav);
const navigationBar = document.querySelector(".navigation-bar");

const navSub = document.querySelectorAll(".sub");
const arrowsDown = document.querySelectorAll(".arrow-down");
const arrowsUp = document.querySelectorAll(".arrow-up");
console.log(arrowsDown, arrowsUp);

// destructuring the sub nav elements
const [productSub, companySub, connectSub] = navSub;
const [productArrowDown, companyArrowDown, connectArrowDown] = arrowsDown;
const [productArrowUp, companyArrowUp, connectArrowUp] = arrowsUp;

const navMain = document.querySelectorAll(".main");
// destructuring the main nav elements
const [productMain, companyMain, connectMain] = navMain;

// FUNCTIONALITY FOR OPENING AND CLOSING THE MOBILE NAV
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

// FUNCTIONALITY FOR TOGGLING THE MOBILE PRODUCT FIELD
productMain.addEventListener("click", function () {
  productSub.classList.toggle("sub-dd");
  productArrowDown.classList.toggle("visibility-hidden");
  productArrowUp.classList.toggle("visibility-hidden");
});

// FUNCTIONALITY FOR TOGGLING THE MOBILE COMPANY FIELD
companyMain.addEventListener("click", function () {
  companySub.classList.toggle("sub-dd");
  companyArrowDown.classList.toggle("visibility-hidden");
  companyArrowUp.classList.toggle("visibility-hidden");
});

// FUNCTIONALITY FOR TOGGLING THE MOBILE CONNECT FIELD
connectMain.addEventListener("click", function () {
  connectSub.classList.toggle("sub-dd");
  connectArrowDown.classList.toggle("visibility-hidden");
  connectArrowUp.classList.toggle("visibility-hidden");
});

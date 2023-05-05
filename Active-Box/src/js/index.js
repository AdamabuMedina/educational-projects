import "../styles/style.css"

const fixedHeader = require("./functions/fixedScroll")
const smoothScroll = require("./functions/smoothScroll")
const burgerMenu = require("./functions/burgerMenu")
const slider = require("./functions/slider")

const nav = $("#nav")
const sliderId = $("#reviews__slider")

$(function () {
  // Фиксированный скролл
  fixedHeader()
  // Плавный скролл
  smoothScroll(nav)
  // Бургер меню
  burgerMenu(nav)
  // Slider
  slider(sliderId)
})
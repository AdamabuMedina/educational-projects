
const burgerMenu = (navElem) => {
  const navToggle = $("#nav__toggle")

  navToggle.on("click", function (event) {
    event.preventDefault()

    $(this).toggleClass("show")
    navElem.toggleClass("show")
  })
}

module.exports = burgerMenu;
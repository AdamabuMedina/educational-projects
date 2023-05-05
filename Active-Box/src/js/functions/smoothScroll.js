const smoothScroll = (elem) => {
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault()

    const $this = $(this)
    const blockID = $this.data("scroll")
    const blockOffset = $(blockID).offset().top


    $("#nav a").removeClass("active")
    $this.addClass("active")

    elem.removeClass("show")

    $("html, body").animate({
      scrollTop: blockOffset - 55
    }, 600)

  })
}

module.exports = smoothScroll;
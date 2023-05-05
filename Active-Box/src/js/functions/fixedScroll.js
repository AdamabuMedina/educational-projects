const checkScroll = (pos, height, id) => {
  if (pos > height) {
    id.addClass("fixed")
  } else {
    id.removeClass("fixed")
  }
}

const fixedHeader = () => {
  const header = $("#header")
  const intro = $("#intro")

  let introHeight = intro.innerHeight()
  let scrollPos = $(window).scrollTop()
  $(window).on("scroll load resize", function () {
    introHeight = intro.innerHeight()
    scrollPos = $(this).scrollTop()

    checkScroll(scrollPos, introHeight, header)

  })
}

module.exports = fixedHeader;
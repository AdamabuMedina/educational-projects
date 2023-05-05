const slick = require("slick-carousel")

const slider = (slide) => {
  slide.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  })
}

module.exports = slider
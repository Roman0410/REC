$(".reviews-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

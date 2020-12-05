$(document).ready(function(){
  $('.slider').slick({
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  nextArrow: '<button type="button" class="arrow arrow-next"><svg class="arrow-icon"><use href="./img/symbol-defs.svg#arrow-forward"></use></svg></button>',
  prevArrow: '<button type="button" class="arrow arrow-back"><svg  class="arrow-icon"><use href="./img/symbol-defs.svg#arrow-back"></use></svg></button>'
  });
});
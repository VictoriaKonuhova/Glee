$(function () {

  $('.star').rateYo({
    readOnly: true,
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "5px",
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="12px" height="11px" viewBox="0 0 12 11" version="1.1"><g><path d="M 7.941406 3.226562 L 10.933594 3.683594 C 11.183594 3.722656 11.390625 3.902344 11.472656 4.148438 C 11.550781 4.398438 11.484375 4.667969 11.308594 4.851562 L 9.136719 7.050781 L 9.648438 10.199219 C 9.691406 10.457031 9.589844 10.71875 9.378906 10.871094 C 9.171875 11.023438 8.902344 11.042969 8.675781 10.917969 L 6.003906 9.449219 L 3.328125 10.917969 C 3.105469 11.042969 2.832031 11.023438 2.625 10.871094 C 2.417969 10.71875 2.316406 10.457031 2.359375 10.199219 L 2.871094 7.050781 L 0.699219 4.851562 C 0.519531 4.667969 0.457031 4.398438 0.535156 4.148438 C 0.613281 3.902344 0.820312 3.722656 1.070312 3.683594 L 4.0625 3.226562 L 5.402344 0.386719 C 5.515625 0.152344 5.746094 0 6.003906 0 C 6.257812 0 6.492188 0.152344 6.601562 0.386719 Z M 7.941406 3.226562 " /></g></svg>'
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  


document.querySelectorAll('.products-menu__list-link').forEach(el => {
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#','');
    document.querySelectorAll('.products-menu__list-link').forEach(child => {
      child.classList.remove('products-menu__list-link--active')
    });
    document.querySelectorAll('.products-week__content').forEach(child => {
      child.classList.remove('products-week__content--active')
    });
    el.classList.add('products-menu__list-link--active')
    document.getElementById(id).classList.add('products-week__content--active')
  })
});
document.querySelector('.products-menu__list-link').click()
});
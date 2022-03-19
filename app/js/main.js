$(function () {

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
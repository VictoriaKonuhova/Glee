$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })
  
});
// var tab;
// var tabContent;
// const tabs = document.querySelector('#tabs');
// window.onload = function () {
//   tabContent = document.querySelectorAll('.products-week__content');
//   tab = document.querySelectorAll('.products-menu__list-link');
//   tab.forEach(i => {
//     i.addEventListener('click', (e) => {
//       e.preventDefault()
//     })
//   });
//   hideTabsContent(1)
// }
// function hideTabsContent(a) {
//   for (let i = a; i<tabContent.length;i++){
//     tabContent[i].classList.remove('show')
//     tabContent[i].classList.add('hide')
//   }
// }
// tabs.onclick = function (event) {
//   let target = event.target
//   if (target.contains = 'products-menu__list-link'){
//     for(let i = 0;i<tab.length;i++){
//       if(target == tab[i]){
//         showTabsContent(i)
//         break;
//       }
//     }
//   }
// }
// function showTabsContent(b) {
//   if(tabContent[b].classList.contains('hide')){
//     hideTabsContent(0)
//     tabContent[b].classList.remove('hide')
//     tabContent[b].classList.add('show')
//   }
// }

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
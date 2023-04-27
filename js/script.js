// loader
window.addEventListener("load", () => {
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none"
      }, 2500)
      
});
function skillClick(x){
    document.querySelector(x).classList.toggle("show-ul")
};
// swiper
new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
      },  
})
new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },    
})
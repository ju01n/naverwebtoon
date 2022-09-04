$(function(){

//sc-new 배너
var swiper = new Swiper(".new-area", {
  slidesPerView: "1.1",
  spaceBetween: 30,
});


  $(".sort-list .sort-item").on("click", function(e){
    e.preventDefault();
    const num = $(".sort-list .sort-item").index($(this));
    $(".sort-list .sort-item").removeClass("active");
    $(".info-area .rank-area").removeClass("active");

    $('.sort-list .sort-item:eq(' + num + ')').addClass("active");
    $('.info-area .rank-area:eq(' + num + ')').addClass("active");

  });

// layout03 슬라이드
var swiper = new Swiper(".preview-area", {
  slidesPerView: "1",
  spaceBetween: 0,
  pagination: {
    el: ".pagination",
    type: "fraction",
  }
  });


  
//index - footer 사업자정보
$('.business-title a').click(function(e){
    e.preventDefault();
    $('.business-info .detail').toggleClass('active')
})






})
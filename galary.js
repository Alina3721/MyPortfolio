
const photoGalary = document.querySelector(".brands_foto");
const galary = document.querySelector(".galary");
const cross = document.getElementById("cross");


$(".galary_slide").slick({
    dots: true ,
    infinity: true ,
    speed: 500 ,
    slidesToShow: 1 ,
    slidesToScroll: 1
});


photoGalary.addEventListener("click", function(){
    galary.style.display = "block"
});

cross.addEventListener("click", function(){
    galary.style.display = "none"
});
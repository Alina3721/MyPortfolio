$(".single-item").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

const skill_button1 = document.querySelector('.skill_button1');
const skill_button2 = document.querySelector('.skill_button2');
const skill_button3 = document.querySelector('.skill_button3');

const skill_grid = document.querySelector('.skill_grid');

skill_button1.addEventListener("click", function () {
skill_grid.innerHTML = `<div class="skill_card">

  <div class="skill_fakeimage1" style="background-image: url(./img/5e84852e9488eb0021322008_optimized_1001_c1001x1298-0x0.jfif);">

  </div>
<h3 class="h3-text">
  The Calmness project, Dortmund
</h3>
<p>
  — September 02, 2024
</p>
</div>


  <div class="skill_card">
      
  <div class="skill_fakeimage2" style="background-image: url(./img/5e84878b65bf8e002112f144_optimized_930.jfif);">

  </div>
<h3 class="h3-text">
  Summer Dreams in Tuscany, Italy
</h3>
<p>
  — June 20, 2023
</p>
</div>




  <div class="skill_card">

      <div class="skill_fakeimage3" style="background-image: url(./img/5e84846d5e14800021e108c4_optimized_1202_c1019x1273-0x229.jfif);">

      </div>
<h3 class="h3-text">
  Usonia promo campaign
</h3>
<p>
  — March 18, 2023 
</p>
</div>


<div class="skill_card">

  <div class="skill_fakeimage4" style="background-image: url(./img/5e84909c65bf8e00211315d8_optimized_927_c927x1399-0x0.jfif);">

  </div>
<h3 class="h3-text">
  Long Way Home project, Oceano
</h3>
<p>
  — November 12, 2022
</p>
</div>
`
});

skill_button2.addEventListener("click", function () {
  skill_grid.innerHTML =`<div class="skill_card">

  <div class="skill_fakeimage1" style="background-image: url(./img/5e84aa1c904c4800215053b5_optimized_1176_c972x1335-110x173.jfif);">

  </div>
<h3 class="h3-text">
Benjamin Priston, United Kingdom
</h3>
<p>
— October 20, 2019
</p>
</div>


  <div class="skill_card">
      
  <div class="skill_fakeimage2" style="background-image: url(./img/5e84aaab904c480021505590_optimized_1869_c1395x931-299x17.jfif);">

  </div>
<h3 class="h3-text">
Cara Davis, United States
</h3>
<p>
— April 04, 2019
</p>
</div>




  <div class="skill_card">

      <div class="skill_fakeimage3" style="background-image: url(./img/5e84adfd904c480021505d4a_optimized_1920_c631x946-652x860.jfif">

      </div>
<h3 class="h3-text">
Lucy Erinton, Sahara
</h3>
<p>
— August 13, 2018
</p>
</div>


<div class="skill_card">

  <div class="skill_fakeimage4" style="background-image: url(./img/5e84a9f18eb639002124c3bb_optimized_1920_c901x1351-543x799.jfif);">

  </div>
<h3 class="h3-text">
Mads Meningsen, Frankfurt, Deutschland
</h3>
<p>
— April 03, 2019
</p>
</div>`

});


skill_button3.addEventListener("click", function () {
  skill_grid.innerHTML =`<div class="skill_card">

  <div class="skill_fakeimage1" style="background-image: url(./img/5e847d0c9488eb002131fd44_optimized_1131_c1019x1273-14x140.jfif);">

  </div>
<h3 class="h3-text">
The Star Vista, Singapore
</h3>
<p>
— September 19, 2018 
</p>
</div>


  <div class="skill_card">
      
  <div class="skill_fakeimage2" style="background-image: url(./img/5e847cff9488eb002131fc38_optimized_1019_c1019x1273-0x0.jfif);">

  </div>
<h3 class="h3-text">
ArtScience Museum, Singapore
</h3>
<p>
— December 10, 2019
</p>
</div>




  <div class="skill_card">

      <div class="skill_fakeimage3" style="background-image: url(./img/5e847dbe9488eb002131fe19_optimized_1019_c1019x1273-0x0.jfif);">

      </div>
<h3 class="h3-text">
Rotterdam, Netherlands
</h3>
<p>
— May 04, 2019  
</p>
</div>


<div class="skill_card">

  <div class="skill_fakeimage4" style="background-image: url(./img/5e847d060ebff20021a2f5af_optimized_1019_c1019x1273-0x0.jfif);">

  </div>
<h3 class="h3-text">
The Interlace Condo, Singapore
</h3>
<p>
— March 20, 2020 
</p>
</div>`

});
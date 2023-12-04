// TOP MENU TOGGLE

$(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.menu-section').toggleClass("on");
    $("nav ul").toggleClass('hidden');
  });

// SLIDER

  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      autoplay:true,
      autoplayHoverPause:true,
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    }
    );


      $(".menu-nav li").on("click", function(e){
          e.preventDefault();
          var tg = $(e.target).attr("data-id");
          var t = "#" + tg;
          var ofs = $(t).offset().top;
          $("html, body").animate({scrollTop: ofs - 70},500)
      })

  });
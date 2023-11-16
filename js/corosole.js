// corosole
var multipleItemCarousel = document.querySelector('#carouselExampleControls')
    if (window.matchMedia("(min-width:576px)").matches) {
      var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
      })
      var carouselWidth = $('.carousel-inner')[0].scrollWidth;
      var cardWidth = $('.carousel-item').width();

      var scrollPosition = 0;
      $('.carousel-control-next').on('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
          scrollPosition = scrollPosition + cardWidth;
        }else{
          scrollPosition = scrollPosition - cardWidth * 4;
        }
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        console.log('next')
      }

      
      );
      $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
          scrollPosition = scrollPosition - cardWidth;
        }else{
          scrollPosition = scrollPosition + cardWidth * 4;
        }
        $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
        console.log('prev')
      }


      );
    } else {
      $(multipleItemCarousel).addclass('slide');
    }
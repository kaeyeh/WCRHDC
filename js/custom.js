
/* jQuery Pre loader
 -----------------------------------------------*/
$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function () {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });


  /* Parallax section
     -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#speakers').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function () {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items: 4,
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [979, 1],
      itemsTablet: [768, 1],
      itemsTabletSmall: [985, 2],
      itemsMobile: [479, 1],
    });
  });


  /* Back top
  -----------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });
  // Animate the scroll to top
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
  })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  // Submit the form
  $( "#volunteer" ).submit(function( event ) {
    var data = $( this ).serializeArray()
    var contact = {
      kind: "contact",
      key: shortid.gen(),
      value: {}
    };
    
    data.forEach(function (item){
      contact.value[item.name] = item.value;
    })

    $.ajax({
        method: "PUT",
        url: 'https://us-central1-salsa-177422.cloudfunctions.net/user',

        // headers: {
        // 'Content-Type': 'application/json'
        // },
        dataType: "json",
        crossDomain: true,
        data: JSON.stringify(contact),
        contentType: 'application/json',
        success: function( data, textStatus, jqXHR ){
          $( '#regModalBody' ).html( 'Sucessful!' );
          $('#regModal').modal({});

        },
        error: function ( jqXHR, textStatus, errorThrown ){
          $( '#regModalBody' ).html( 'Failed! Please try again later.' );
          $('#regModal').modal({});
        }
    });

    event.preventDefault();
  });



});


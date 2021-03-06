$(function() {

    $( "#tabs-nohdr" ).tabs();
    $('.go-up').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });

    $('.img-cover').css({
      height: $('#team img').height(),
      width: $('#team img').height()
    })

    function validateEmail(email) {
      var expr = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return expr.test(email);
    }


    $(".send").click(function () {
        if (!validateEmail($("#email").val())) {
            alert("Introduzca un email valido");
            return false;
        }
    });

    $(window).resize(function(){
      $('.img-cover').css({
        height: $('#team img').height(),
        width: $('#team img').height()
      })
    })

    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.go-up').slideDown(300);
      } else {
        $('.go-up').slideUp(300);
      }
    });

    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, {
        queue: false,
        duration: 1000
      });
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 64;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })

      /* Check the location of each desired element */
      $('section').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 250;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'},500);
                
        }
        
    });
      
    })
  

    $( '#contact' ).click(function() {       
      $( "#toggle" ).fadeIn( "slow" );
    })

    $( '#contact form' ).click(function(e) {
      e.stopPropagation();
      $( "#toggle" ).fadeOut( "slow" );
    });
    
   
}); 
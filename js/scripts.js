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

    function validateEmail($email) {
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test( $email );
    }

    function testEmail(){
      console.log("event")
    };

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
      
    })
}); 
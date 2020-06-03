console.log("has query.js");
$(document).ready(function(){
    // hover effect in main nav
    $(".nav-item").mouseover(function(){
        if(!$(this).hasClass("item-active")|| $(this).hasClass("nav-item-animate")){
            $(this).addClass("nav-item--animate");
        }else{
            $(this).removeClass('nav-item--animate');
        }
    });

    //click effect in main-nav
    // $(".nav-item").click(function(){
    //     if(!$(this).hasClass("item-active")){
    //         var othersItem = $(this).siblings();
    //         for(var item of othersItem){
    //             if($(item).hasClass("item-active")){
    //                 setTimeout(function(){
    //                     $(item).removeClass("item-active");
    //                 }
    //                 ,300);

    //                 setTimeout(function(){
    //                     $(item).removeClass("scaleX-down");
    //                 }
    //                 ,400);

    //                 $(item).addClass("scaleX-down");
    //                 break;   
    //             }
    //         }
    //         $(this).addClass("item-active");
    //     }
    // });

    $('#mark-nav').waypoint(
        function(direction){
            if(direction == 'down'){
                $(".main-nav").addClass("main-nav--black");
                $(".main-nav").addClass("main-nav--move");
                $(".main-nav").addClass("main-nav--show");
            }else{
                $(".main-nav").removeClass("main-nav--black");
                $(".main-nav").removeClass("main-nav--move");
                $(".main-nav").removeClass("main-nav--show");
            }
        },{
            offset:'-300px'
        }
    );
        // when move to new section main-nav item will change
        // header-nav
      
     
    // })
    // Remove links that don't actually link to anything
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  });
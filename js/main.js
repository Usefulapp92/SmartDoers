$(document).ready(function(){
    $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;
          var height = $(window).outerHeight(true);
          var winTop = $(window).scrollTop();
            if (pos < winTop + height + 50) {
              $(this).addClass("slideMe");
               }
           });
     })
    $(".nav-item").click(function(){
    $(".collapse").collapse('hide');
      });
})
$(document).ready(function(){
  $(".menu a").click(function (event) {
    event.preventDefault();
    $(".menu a").removeClass("active");
    $(this).addClass("active");
  });
  $(window).resize(function () {
    if($(window).width()<960){

      $(".menu a").css("display","none");
      $(".menu .icon").css("display","block");

    }
  })
  $(".menu .icon").click(function () {
    if($(".overlay").hasClass("cav-active")){
        $(".overlay").removeClass("cav-active");
    }
    else {
        $(".overlay").addClass("cav-active");
    }
  })
  })

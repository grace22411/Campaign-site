

$(document).ready(function () {
  
  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
  });

  $(".fa-bars").click(function () {
    $(".modal-content").show();
  })

  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
    $(".success").fadeOut();
  });

  $(".whyvote").click(function(){
		var $element = $(".mission").offset().top;
	
		$("html,body").animate({
			scrollTop : $element
    }, 900);
    $(".modal-content").fadeOut();
  });
  



});



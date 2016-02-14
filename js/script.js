$('document').ready(function(){

	$('.col-1 button').click(function(){
		$(this).prev().fadeToggle();
		if($(this).text() == "Hide photo"){
			$(this).text("Show photo");
		}else{
			$(this).text("Hide photo");
		}
	});

  $('.section-ingredient-list li').click(function(){
    if($(this).children("span").length){
      $(this).children("span").remove();
    }else{
      $(this).prepend("<span>&#x2713;</span>");
    }
  });

  $('section .btn').click(function(){
      if($(this).parents('section').css('opacity') == 1){
        $(this).parents('section').fadeTo("slow", 0.3);
        $(this).text("Undone");
      }else{
        $(this).parents('section').fadeTo("slow", 1);
        $(this).text("Done");
      }
  });

});
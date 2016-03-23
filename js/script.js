$(document).ready(function() {
  $(document).on("click", "nav ul li a", function(e){
    e.preventDefault();
    if($(this).attr("href")){
      var page = $(this).attr("href");
    }
    else {
      var page = $(this).closest("a").attr("href");
    }
    
    if( $("header").css("display") === "none" ) {
			$("html, body").animate({ scrollTop: parseInt( $(page).position().top )}, 1000);  
		}
		else {
			$("html, body").animate({ scrollTop: parseInt( $(page).position().top ) - 50 }, 1000);  
		}	
  });
});
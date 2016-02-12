$(function(){

   $("#mainsearch").submit(function () {

      //alert( "Handler for .submit() called." );
      $(".row").remove();
      
      
      
      
       $.getJSON("URL: https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31d8dc448768d1b40ccf61cae19d7a50&per_page=12&format=json&nojsoncallback=1&api_sig=378e5a7caf3683af2e1692f4b55acb3c",
        {
			
            text: $("#srch-term").val()
            //format: "json"
            
        }, function( data ) {
      
      
      
      
      
       });
      
      
      
      
	return false;
   }); 


$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        alert("End Of The Page");
   }
});



});




$(function(){

   $("#mainsearch").submit(function () {

      //alert( "Handler for .submit() called." );
      $(".col-md-4").remove();
      //$("<div>").attr("class", "row").appendTo('.container contentdummy');
      
      
      
       $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=31d8dc448768d1b40ccf61cae19d7a50&per_page=12&nojsoncallback=1&api_sig=378e5a7caf3683af2e1692f4b55acb3c",
        {
			
            text: $("#srch-term").val(),
            format: "json"
            
        }, function( data ) {
			
			
      
		$.each(data.photos.photo, function(i,item){
      
      
      
      $("<div/>").attr("class", "col-md-4").append($("<a/>").attr("href", item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_c.jpg").attr("class", "img-responsive"))).appendTo(".row");
      
      
		//$("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg").wrap("<a href=" + item.id + "></a>");
      
      
      
			//alert(item.id);
      
      
      
			});
      
      
      
       });
      
      
      
      
	return false;
   }); 


$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        alert("End Of The Page");
   }
});



});




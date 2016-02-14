$(function(){

	$("#mainsearch").submit(function () {
		$(".img-responsive").remove();
		$(".col-md-12").remove();

		$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae34bd27a7623c8315fbe0cc73cd9ca6&per_page=12&sort=relevance&nojsoncallback=1", {
			text: $("#srch-term").val(),
			format: "json"
		}, function( data ) {
			$.each(data.photos.photo, function(i,item){
				$("<a/>").attr("href", item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_c.jpg").attr("class", "img-responsive")).appendTo(".row");
			});
		});
		
	return false;
	}); 


	var page = 2;
	
	$(window).scroll(function () {
		if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
			$("<div/>").attr("id", "pagerow"+page).attr("class", "row").appendTo("#maincont");
			var currentrow = "#pagerow" + page;
	
			$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae34bd27a7623c8315fbe0cc73cd9ca6&per_page=12&sort=relevance&nojsoncallback=1", {
				text: $("#srch-term").val(),
				format: "json",
				page: page
			}, function( data ) {
				$.each(data.photos.photo, function(i,item){
					$("<a/>").attr("href", item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_c.jpg").attr("class", "img-responsive")).appendTo( currentrow );
				});
			});
	
		//$("<b/>").appendTo(".row");
		page = page + 1;
	
		}
	});

});




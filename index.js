$(function(){

	$("#mainsearch").submit(function () {
		$(".img-responsive").remove();
		$(".col-md-12").remove();

		$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ae34bd27a7623c8315fbe0cc73cd9ca6&per_page=12&sort=relevance&nojsoncallback=1", {
			text: $("#srch-term").val(),
			format: "json"
		}, function( data ) {
			$.each(data.photos.photo, function(i,item){
				$("<a/>").attr("href", "image.html#"+item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg").attr("class", "img-responsive")).appendTo(".row");
			});
		});
		
	return false;
	}); 

	$(".glyphicon-fire").click(function () {
		console.log("Trending click");
		$(".img-responsive").remove();
		$(".col-md-12").remove();

		$.getJSON("https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=8b1d3641d8f148e36f6d113e4075661c&per_page=12&format=json&nojsoncallback=1&api_sig=eb66b06c4f2f5645da16df95d9efc4e2", {
			format: "json"
		}, function( data ) {
			$.each(data.photos.photo, function(i,item){
				$("<a/>").attr("href", "#").append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg").attr("class", "thumbnail img-responsive")).appendTo(".row");
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
					$("<a/>").attr("href", "image.html#"+item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+".jpg").attr("class", "thumbnail img-responsive")).appendTo( currentrow );
				});
			});
	
		page = page + 1;
	
		}
	});
	
	$(".thumbnail").click(function (event) {
		event.preventDefault();
		console.log("Thumbnail click");
		$(".modal-body").empty();
		var title = $(this).parent("a").attr("title");
		$(".modal-title").html(title);
		$($(this).parents("div").html()).appendTo(".modal-body");
		$("#myModal").modal({show:true});
	});
	
/*
	$('a.thumb').click(function(event){
    	event.preventDefault();
    	var content = $('.modal-body');
    	content.empty();
      	var title = $(this).attr("title");
      	$('.modal-title').html(title);      	
      	content.html($(this).html());
      	$(".modal-profile").modal({show:true});
    });
*/
});




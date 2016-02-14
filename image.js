$(function(){



var hash = window.location.hash;
var itersize = 0;
var itersource = "";


$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ae34bd27a7623c8315fbe0cc73cd9ca6&nojsoncallback=1", {
			format: "json",
			photo_id: hash
		}, function( data ) {
			$.each(data.sizes.size, function(i,item){
				
				if (item.width >= itersize){
					
					//$("<img/>").attr("src", item.source).attr("class", "img-responsive").attr("id", "fullimg").appendTo(".container");
					itersize = item.width;
					itersource = item.source;


					
				}

					
		
				
				//$("<a/>").attr("href", item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_c.jpg").attr("class", "img-responsive")).appendTo(".row");
			
			
			
			
			});
			
			$("<img/>").attr("src", itersource).attr("class", "img-responsive").attr("id", "fullimg").appendTo(".container");
			
		});















});

$(function(){



var hash = window.location.hash;



$.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ae34bd27a7623c8315fbe0cc73cd9ca6&nojsoncallback=1", {
			format: "json",
			photo_id: hash
		}, function( data ) {
			$.each(data.sizes.size, function(i,item){
				
				if (item.label == "Large 2048"){
					
					$("<img/>").attr("src", item.source).attr("class", "img-responsive").attr("id", "fullimg").appendTo(".container");
					return false;
					
				}
				else if (item.label == "Original"){
					
					$("<img/>").attr("src", item.source).attr("class", "img-responsive").attr("id", "fullimg").appendTo(".container");
					return false;
					
				}
				
				
				
				
				
				
				
				//$("<a/>").attr("href", item.id).append($("<img/>").attr("src", "https://farm"+item.farm+".staticflickr.com/"+item.server+"/"+item.id+"_"+item.secret+"_c.jpg").attr("class", "img-responsive")).appendTo(".row");
			
			
			
			
			});
		});















});

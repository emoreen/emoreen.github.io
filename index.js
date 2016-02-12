//$(document).ready({

   $("#mainsearch").submit(function () {

      alert( "Handler for .submit() called." );

   }); 

//});


$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        alert("End Of The Page");
   }
});

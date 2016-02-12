$(document).ready({

   $('#mainsearch').submit(function() {

      alert("Sub");

   }); 

});


 $(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        alert("End Of The Page");
    }
 });

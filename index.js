$(document).ready({

   $('#srch-term').submit(function () {

      alert("Sub");

   }); 

});


$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
        alert("End Of The Page");
   }
});

$(':header').addClass('headline');$('li:lt(3)')  .hide()  .delay(1500)  .fadeIn(3500);$('li').on('click', function() {  $(this).delay(1500).fadeOut(1000);});// $('li.hot').addClass('complete');
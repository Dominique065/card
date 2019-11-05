$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var menuHeight = document.getElementById('idMenu').clientHeight
      $('html, body').animate({
        scrollTop: $(hash).offset().top - menuHeight - 10
      }, 800, function () {
        window.location.hash = hash - menuHeight - 10;
      });
    } // End if
  });


});

$(function () {
  $('.menuButton').on('click', function () {
    $('.menu ul').toggleClass('open');
  });
});

$(function() {
	$('.pop').on('click', function() {
		$('.imagepreview').attr('src', $(this).attr('href'));
		$('#imagemodal').modal('show');  
		return false;
	});		
});
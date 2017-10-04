$('.document').ready(function() {
  $('.register').hide();
  console.log('ready');
});

$('.signup').click(function(e) {
  $('.register').slideDown(1000);
});

$('.goBack').click(function(e) {
  $('.register').slideUp(1000);
});

//$('[data-paroller-factor]').paroller();
// $('.paroller').paroller({
//   factor: 0.4,
//   type: 'foreground'
// });

//  $('body').scrollspy({target: '#main-navbar'});

// $('.center').slick({
//   dots: false,
//   centerMode: true,
//   centerPadding: '90px',
//   slidesToShow: 1,
//   slidesToScroll: 1,
// });

$(document).on('change', '#check', function() {
  if(this.checked) {
    $('#background').addClass('show');
  }else{
    $('#background').removeClass('show');
  }
});
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

// $('#cultureTabs a').click(function (e) {
//   e.preventDefault();
//   $(this).tab('show');
// });

// cache the id
var navbox = $('#cultureTabs');
// activate tab on click
navbox.on('click', 'a', function (e) {
  var $this = $(this);
  // prevent the Default behavior
  e.preventDefault();
  // set the hash to the address bar
  window.location.hash = $this.attr('href');
  // activate the clicked tab
  $this.tab('show');
});

function refreshHash(){
    navbox.find('a[href="'+window.location.hash+'"]').tab('show');
}

// You might need a polyfill for this event
$(window).bind('hashchange', refreshHash);
if(window.location.hash){
  // show right tab on load (read hash from address bar)
  refreshHash();
}
$('.dropdown-toggle').dropdown();
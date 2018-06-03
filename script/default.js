
$(document).on('change', '#check', function() {
  if(this.checked) {
    $('#background').addClass('show');
  }else{
    $('#background').removeClass('show');
  }
});

var navbox = $('#cultureTabs');
navbox.on('click', 'a', function (e) {
  var $this = $(this);
  e.preventDefault();
  window.location.hash = $this.attr('href');
  $this.tab('show');
});

function refreshHash(){
    navbox.find('a[href="'+window.location.hash+'"]').tab('show');
}

$(window).bind('hashchange', refreshHash);
if(window.location.hash){
  refreshHash();
}
'use strict';

$(document).ready(function(){
  
  $('.js-iframe').on('click', function(e){
    e.preventDefault();
    var $target = $(this);
    var src = $(this).attr('href');
    var $iframe = $target.find('iframe');
    if ($iframe.length > 0) {
      $iframe.attr('src', src);
    } else {
      $target.append('<iframe src=' + src +'></iframe>');
      $target.addClass('hide-bg');
    }
  });
});

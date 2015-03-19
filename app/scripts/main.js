(function($){

  var $toggleBtn = $('#toggle-viewport');
  var $viewport = $('[data-js-toggle="viewport"]');

  $toggleBtn.on('click', function() {
    $viewport.toggleClass('amp-viewport--mobile');
  });

})(jQuery);
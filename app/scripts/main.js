(function($){ 'use strict';

  // Elements
  var $toggleViewDesktop = $('#toggle-viewport-desktop');
  var $toggleViewTablet = $('#toggle-viewport-tablet');
  var $toggleViewMobile = $('#toggle-viewport-mobile');
  var $toggleAttr = $('#toggle-attributes');
  var $viewport = $('[data-js-toggle="viewport"]');

  var $customerName = $('.js-customer-name');
  var $customerEmail = $('.js-customer-email');

  // Data
  var customerData = [
    {
      name: 'Colin',
      email: 'colin@customer.io'
    },
    {
      name: 'John',
      email: 'john@customer.io'
    },
    {
      name: 'Diana',
      email: 'diana@customer.io'
    },
    {
      name: 'Stephen',
      email: 'stephen@customer.io'
    },
    {
      name: 'Alvin',
      email: 'alvin@customer.io'
    },
    {
      name: 'Henry',
      email: 'henry@customer.io'
    },
    {
      name: 'Rachel',
      email: 'rachel@customer.io'
    },
    {
      name: 'Q',
      email: 'jon@customer.io'
    },
    {
      name: 'Livia',
      email: 'livia@customer.io'
    },
    {
      name: 'Janet',
      email: 'janet@customer.io'
    },
    {
      name: 'Abram',
      email: 'abram@customer.io'
    }
  ];

  // fn
  var getCustomer = function() {
    return customerData[Math.floor(Math.random()*customerData.length)];
  };


  // Actions
  $toggleViewDesktop.on('click', function() {
    $viewport.removeClass('amp-viewport--tablet amp-viewport--mobile');
  });

  $toggleViewTablet.on('click', function() {
    $viewport
      .removeClass('amp-viewport--mobile')
      .addClass('amp-viewport--tablet');
  });

  $toggleViewMobile.on('click', function() {
    $viewport
      .removeClass('amp-viewport--tablet')
      .addClass('amp-viewport--mobile');
  });

  $toggleAttr.on('click', function() {
    var customer = getCustomer();

    $customerName.html(customer.name);
    $customerEmail.html(customer.email);
  });

})(jQuery);
import $ from 'jquery';
import './css/base.scss';

import Customer from './Customer';
import Manager from './Manager';
import Room from './Room';
import Hotel from './Hotel';





$('.js_login-submit').on('click', function() {

  if ($('.user_name').val() === 'manager' && $('.user_pswd').val() === 'overlook2019') {
      window.location = "../manager.html";
  } else if ($('.user_name').val() === 'customer' + `${$('.user_name').val().slice(-2)}` && $('.user_pswd').val() === 'overlook2019') {
      console.log('Hunter was here')
      $('.login_feature-right').addClass('customer_login')
      $('.login_feature-left').addClass('display_none')
      // $('.main_customer-area').addClass('customer_feature')
      // $(".display_customer").removeClass('display_none');
      // $('.login_feature-right').addClass('customer_login')
      // $('.login_feature-right').addClass('customer_login')
    }

})
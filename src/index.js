import $ from 'jquery';
import './css/base.scss';

import dom from './domModifier'; 

import Customer from './Customer';
import Manager from './Manager';
import Room from './Room';
import Hotel from './Hotel';


console.log(dom)

var users;
var rooms;
var bookings;
var userId;


var today = new Date();
var date = today.getFullYear()+'/0'+ (today.getMonth()+1)+'/' + today.getDate();

const getData = (type) => {
	const root = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
	const url = `${root}${type}`;
	const promise = fetch(url)
	                .then(data => data.json());
	return promise;
}

  getData('/users/users').then(function(user) {
  	users = user.users;
	  users.forEach(function(user) {
	})

	getData('/rooms/rooms').then(function(room) {
	  rooms = room.rooms;

	})

	getData('/bookings/bookings').then(function(booked) {
		bookings = booked.bookings;
		const hotel = new Hotel(bookings, rooms, date);
    let vacancyToday = hotel.numberVacantToday();
    let totalMoney = hotel.totalRevenueToday();
    let dailyPercent = hotel.percentOccupied();
		dom.vacantRoomsToday(vacancyToday, date);
		dom.revenueToday(totalMoney)
		dom.percentOccupiedToday(dailyPercent)
	})

});

$('.js_login-submit').on('click', function() {
  let userId = Number($('.user_name').val().slice(-2)) - 1;
  if ($('.user_name').val() === 'manager' && $('.user_pswd').val() === 'overlook2019') {
      window.location = "../manager.html";
    } else if ($('.user_name').val() === 'customer' + `${$('.user_name').val().slice(-2)}` && $('.user_pswd').val() === 'overlook2019') {
    	const customer = new Customer(userId, users)
      $('.login_feature-right').addClass('customer_login')
      $('.login_feature-left').addClass('display_none')
      $('.display_customer').removeClass('display_none')
      $('.customer_booked-room').removeClass('display_none')
      let name = customer.returnUserName()
      let money = customer.totalMoneySpent(bookings, rooms)
      dom.userName(name)
      dom.welcome()
      dom.userTotalRevenueSpent(money)
    }
      populatePastBookings(userId, users, bookings)
      populateAllBooking(bookings, rooms, date)

})

  function populatePastBookings(userId, users, bookings) {
    const customer = new Customer(userId, users)
    $('.main_customer-area').after(customer.returnBookedRooms(bookings));
  }

  function populateAllBooking(bookings, rooms, date) {
  	const hotel = new Hotel(bookings, rooms, date);
  	dom.allRooms(hotel.rooms)
  }

$(".booked_date-button").click(populateRoomsByDate)

  function populateRoomsByDate() {
  	let dateInput = $('.booked_date-input').val()
  	const hotel = new Hotel(bookings, rooms, date);
  	$('.js_all-rooms').remove()
  	$('.booked_date-section').after(hotel.returnRoomsForDate(dateInput))
  }



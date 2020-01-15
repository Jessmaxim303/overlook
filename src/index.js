import $ from 'jquery';
import './css/base.scss';

import dom from './domModifier'; 

import Customer from './Customer';
import Manager from './Manager';
import Room from './Room';
import Hotel from './Hotel';

var users;
var rooms;
var bookings;
var userId;

var today = new Date();
var date = today.getFullYear()+'/0'+ (today.getMonth()+1)+'/' + today.getDate();

$('.booked_date-button').click(populateRoomsByDate)
$('.booked_type-room').click(displayRoomByTypeEvent)
$('.js_all-rooms').click(bookRoomEvent)

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
      let allBookings = customer.returnBookedRooms(bookings)
      dom.bookedRooms(allBookings)
  }

  function populateAllBooking(bookings, rooms, date) {
  	const hotel = new Hotel(bookings, rooms, date);
  	dom.allRooms(hotel.rooms)
  }


  function populateRoomsByDate() {
  	let dateInput = $('.booked_date-input').val()
  	const hotel = new Hotel(bookings, rooms, date);
    let byDate = hotel.returnRoomsForDate(dateInput)
    dom.allRooms(byDate)
  }

  function displayRoomByTypeEvent(e) {
    const hotel = new Hotel(bookings, rooms, date);
    let roomType = e.target.attributes[1].value;
    let typeArray = hotel.returnRoomsByType(roomType)
    dom.allRooms(typeArray)
}

  function bookRoomEvent(e) {
    // console.log(e.target.attributes[1].value)
    let booked = rooms.filter(room => room.number === Number(e.target.attributes[1].value))[0]
    console.log(booked)
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "userID": userId,
          "date": date,
    "roomNumber": booked.number
      })
    })

.then(response => response.json())
    .then(data => console.log(data))
    .then()
    .catch();
  

  }


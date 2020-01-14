import $ from 'jquery';

const dom = {

	userName: function(name) {
    $('.js_customer-name').text(name)
	},

	welcome: function() {
    $('.js_customer-welcome').text('Welcome')
	},

	userTotalRevenueSpent: function(money) {
    $('.js_customer-money').text(`Total money spent $${money}`)
	},

	allRooms: function(rooms) {
		return rooms.map(room => {
		return $('.js_all-rooms').append(`<section class="booking_room-container">
      <section class="booking_room-image"></section>
        <section class="booking_room-text">
          <h3>Room Room Number ${room.number}</h3>
          <h3>Room Type ${room.roomType}</h3>
          <h3>Room ${room.numBeds} ${room.bedSize}size bed</h3>
          <h3>Room Cost: $${room.costPerNight}</h3>
          <button class="customer_book-button">Book</button>
        </section>
      </section>`);
    })
	},

	vacantRoomsToday: function(vacancy, date) {
    $('.room_available-number').text(vacancy);
    $('.room_available-text').text('Rooms available');
    $('.room_available-date').text(date);
	},

	revenueToday: function(money) {
    $('.room_revenue-number').text(`$${money}`)
	},

	percentOccupiedToday: function(percent) {
    $('.percent_number').text(`${percent}%`)
	},

  bookedRooms: function(booked) {
    return booked.map(room => {
    return $('.main_customer-area').append(`
      <section class="main_customer-box">
       <h1>Date Stayed ${room.date}</h1>
       <h1>Room number ${room.roomNumber}</h1>
       </section>`);
    })
  }



}; //end



export default dom;
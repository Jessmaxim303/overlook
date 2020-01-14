class Hotel {
	constructor(bookings, rooms, todaysDate) {
		this.rooms = rooms;
		this.bookings = bookings;
		this.todaysDate = todaysDate;
	}

	numberVacantToday() {
    return this.rooms.length - this.bookings.filter(room => room.date === this.todaysDate).filter(el => el !=undefined).length; 
} 

  totalRevenueToday() {
  	return this.bookings.filter(room => room.date === this.todaysDate).reduce((acc, room) => {
  		acc = acc.concat(room.roomNumber) 
  		return acc
  	}, []).reduce((acc, suiteNumber) => {
  		this.rooms.forEach(room => {
  			if (room.number === suiteNumber) {
  				acc += room.costPerNight
  			}
  		})
  		return acc
  	}, 0)
  }

  percentOccupied() {
    let percent = this.bookings.reduce((acc, room) => {
    	if (room.date === this.todaysDate) {
    		acc.push(this.rooms[room.roomNumber])
    	}
    	return acc
    }, []).filter(el => el !=undefined);
    return Number((percent.length / this.rooms.length).toFixed(2) * 100);
 }

  returnBookedRooms(booking) {
    return booking.filter(room => room.userID === this.userId).map(booking => {
      return `<section class="main_customer-area">
      <h1>Date Stayed ${booking.date}</h1>
      <h1>Room number ${booking.roomNumber}</h1>
      </section>`
    })
  }

  returnRoomsForDate(dateInput) {
    return this.rooms.filter(room => {
      return this.bookings.find(booked => {
      return (dateInput === booked.date && room.number === booked.roomNumber)
    })  
}).map(room => {
      return `<section class="room_date-container">
      <section class="booking_room-image"></section>
        <section class="booking_room-text">
          <h3>Room Room Number ${room.number}</h3>
          <h3>Room Type ${room.roomType}</h3>
          <h3>Room ${room.numBeds} ${room.bedSize}size bed</h3>
          <h3>Room Cost: $${room.costPerNight}</h3>
        </section>
      </section>`
    })
  }

};

export default Hotel;
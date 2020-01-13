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

  returnAllRooms() {
    return this.rooms.map(room => {
      return `<section class="booking_room-container">
      <section class="booking_room-image"></section>
        <section class="booking_room-text">
          <h1>Room type ${room.roomType}</h1>
          <h1>Room number ${room.number}</h1>
        </section>
      </section>`
    })
  }

  returnBookedRooms(booking) {
    return booking.filter(room => room.userID === this.userId).map(booking => {
      return `<section class="main_customer-area">
      <h1>Date Stayed ${booking.date}</h1>
      <h1>Room number ${booking.roomNumber}</h1>
      </section>`
    })
  }

};

export default Hotel;
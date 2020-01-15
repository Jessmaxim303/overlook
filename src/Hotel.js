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
  	}, 0).toFixed(2)
  }

  percentOccupied() {
    let percent = this.bookings.reduce((acc, room) => {
    	if (room.date === this.todaysDate) {
    		acc.push(this.rooms[room.roomNumber])
    	}
    	return acc
    }, []).filter(el => el !=undefined);
    return Number((percent.length / this.rooms.length) * 100).toFixed();
 }

  returnRoomsForDate(dateInput) {
    return this.rooms.filter(room => {
      return this.bookings.find(booked => {
      return (dateInput === booked.date && room.number === booked.roomNumber)
      })  
    })
  }

  returnRoomsByType(type) {
    return this.rooms.filter(room => room.roomType === type);
  }

};

export default Hotel;
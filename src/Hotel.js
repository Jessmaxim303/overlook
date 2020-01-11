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

};

export default Hotel;
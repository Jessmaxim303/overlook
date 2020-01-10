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
  			console.log(room.roomNumber)
  			console.log(suiteNumber)
  			if (room.number === suiteNumber) {
  				// console.log(room.costPerNight)
  				acc += room.costPerNight
  			}
  		})
  		return acc
  	}, 0)
  	// .reduce((acc, book) => {

  }

 //  totalRevenueToday() {
 //  	console.log(this.todaysDate)
 //    let x = this.bookings.reduce(function(acc, room) {
 //    	console.log(room.date)
 //    	if (room.date === this.todaysDate) {
 //    		acc.push(this.rooms[val.roomNumber])
 //    	}
 //    	return acc
 //    }, []).filter(el => el !=undefined).reduce(function(acc, cost) {
 //    	acc += cost.costPerNight
 //    	return acc
 //    }, 0).toFixed(2);
 //    // console.log(x)
 // }

}

export default Hotel;
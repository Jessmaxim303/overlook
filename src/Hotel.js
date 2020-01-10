class Hotel {
	constructor(bookings, rooms, todaysDate) {
		this.rooms = rooms;
		this.bookings = bookings;
		this.todaysDate = todaysDate;
	}

	numberVacantToday() {
    return this.rooms.length - this.bookings.filter(room => room.date === this.todaysDate).filter(el => el !=undefined).length; 
} 

}

export default Hotel;
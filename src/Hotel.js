class Hotel {
	constructor() {

	}

	percentBooked(bookings, rooms, todaysDate) {
    let percent = bookings.filter(room => room.date === todaysDate)
    return percent.length
} 

}

export default Hotel;
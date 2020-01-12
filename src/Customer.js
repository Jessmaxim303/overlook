class Customer {
	constructor(userId, users) {
    this.userId = userId,
    this.userData = users
	}

	returnUserName() {
		return this.userData.find(user => user.id === this.userId)
	}

	returnBookedRooms(booking) {
    return booking.filter(room => room.userID === this.userId).map(booking => {
    	return `<section class="main_customer-area">
    	<h1>${booking.date}</h1>
    	<h1>${booking.roomNumber}</h1>
    	</section>`
    })
	}

	totalMoneySpent(booking, rooms) {
		return booking.filter(room => room.userID === this.userId).reduce((acc, date) => {
			acc += date.roomNumber
			return acc
		}, 0)
	}


}

export default Customer;
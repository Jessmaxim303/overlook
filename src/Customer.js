class Customer {
	constructor(userId, users) {
    this.userId = userId,
    this.userData = users,
    this.userName = ''
	}

	returnUserName() {
		this.userName = this.userData.find(user => user.id === this.userId)
		return this.userName.name
	}

	returnBookedRooms(booking) {
    return booking.filter(room => room.userID === this.userId).map(booking => {
    	return `'<section class="main_customer-area">
    	<h1>${booking.date}</h1>
    	<h1>${booking.roomNumber}</h1>
    	</section>'`
    })
	}

}

export default Customer;
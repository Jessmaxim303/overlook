import dom from './domModifier'; 

console.log(dom)

class Customer {
	constructor(userId, users) {
    this.userId = userId,
    this.name = '',
    this.userData = users
	}

	returnUserName() {
		this.name = this.userData.find(user => user.id === this.userId).name
		dom.userName(this.name)
		return this.name
	}

	returnBookedRooms(booking) {
    return booking.filter(room => room.userID === this.userId)
	}

	totalMoneySpent(booking, rooms) {
		return booking.filter(room => room.userID === this.userId).reduce((acc, date) => {
			acc += date.roomNumber
			return acc
		}, 0)
	}

	saveToLocal() {
    let localData = JSON.stringify(this.userData);
    global.localStorage.setItem('user data', localData);
  }

}

export default Customer;
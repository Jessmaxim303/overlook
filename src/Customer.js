import dom from './domModifier'; 

class Customer {
	constructor(userId, users) {
    this.userId = userId,
    this.name = '',
    this.userData = users,
    this.moneySpent = 0
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
		  let money = 0;
    let x = booking.filter(room => room.userID === this.userId).reduce((acc, date) => {
			acc = acc.concat(date.roomNumber)
			return acc
		}, []).map(roomNum => {
			return rooms.forEach(room => {
				if (room.number === roomNum) {
					money += room.costPerNight
				}
			})
		})
		return money.toFixed(2)
	}

	saveToLocal() {
    let localData = JSON.stringify(this.userData);
    global.localStorage.setItem('user data', localData);
  }

}

export default Customer;
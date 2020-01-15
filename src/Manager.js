import Customer from './Customer';

class Manager extends Customer{
	constructor(userId, users) {
    super(userId, users);
    this.userId = userId;
    this.userData = users;
    this.currentUser = {};
	}

	findUser(name) {
    this.currentUser = this.userData.filter(user => user.name === name)[0]
    return this.currentUser;
	}

	totelRevenue(id, booking, rooms) {
		let money = 0;
    let x = booking.filter(room => room.userID === id.id).reduce((acc, date) => {
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
	

}

export default Manager;
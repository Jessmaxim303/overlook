class Customer {
	constructor(userId, users) {
    this.userId = userId,
    this.userData = users
    this.userName = '';
	}

	returnUserName() {
		this.userName = this.userData.find(user => user.id === this.userId)
		return this.userName.name
	}

}

export default Customer;
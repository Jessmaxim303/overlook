import chai from 'chai';
const expect = chai.expect;

import Customer from '../src/Customer';

import bookingsTestData from './data/bookings-test-data';
import userTestData from './data/user-test-data';
import roomsTestData from './data/room-test-data';

let customer;

  beforeEach(() => {
    customer = new Customer(1, userTestData)
  });

describe('Customer', function() {

  it('should be a function', function() {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of the Customer class', () => {
    expect(customer).to.be.an.instanceOf(Customer);
  });

  it('should know what user is logged in', () => {
    expect(customer.userId).to.equal(1)
  })

  it('should hold on to user data', () => {
    expect(customer.userData[0].name).to.equal("Leatha Ullrich")
  })

  it('should return the user name', () => {
    expect(customer.returnUserName()).to.equal("Leatha Ullrich")
  })

  it('should return the a number for the total money spent for a user', () => {
    expect(customer.totalMoneySpent(bookingsTestData, roomsTestData)).to.equal(77)
  })

});
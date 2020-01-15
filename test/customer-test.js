import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

import Customer from '../src/Customer';
import dom from '../src/domModifier';

import bookingsTestData from './data/bookings-test-data';
import userTestData from './data/user-test-data';
import roomsTestData from './data/room-test-data';

global.localStorage = {
    setItem() {
  }
}

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

  it('should spy on the name on dashboard on the page', function() {
    chai.spy.on(dom, ['userName'], () => {});
    customer.returnUserName('Hunter');
    expect(dom.userName).to.have.been.called(1);
  });

  it('Should save to local storage', () => {
    chai.spy.on(global.localStorage,['setItem', 'getItem'], () => {});
    customer.saveToLocal();
    expect(global.localStorage.setItem).to.have.been.called(1);
  });

  it('should return the a number for the total money spent for a user', () => {
    expect(customer.totalMoneySpent(bookingsTestData, roomsTestData)).to.equal(77)
  })

});
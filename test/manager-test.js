import chai from 'chai';
const expect = chai.expect;

import Manager from '../src/Manager';

import bookingsTestData from './data/bookings-test-data';
import userTestData from './data/user-test-data';
import roomsTestData from './data/room-test-data';

let manager;

  beforeEach(() => {
    manager = new Manager(1, userTestData)
  });

describe('Manager', function() {

  it('should be a function', function() {
    expect(Manager).to.be.a('function');
  });

  it('should be an instance of the manager class', () => {
    expect(manager).to.be.an.instanceOf(Manager);
  });

  it('should be able to hold onto the userid', () => {
    expect(manager.userId).to.equal(1);
  });

  it('should have some users', () => {
    expect(manager.userData[0].name).to.equal("Leatha Ullrich");
  });

  it('should be able to find a user by id', () => {
    expect(manager.findUser("Leatha Ullrich")).to.deep.equal({ id: 1, name: 'Leatha Ullrich' });
  });
  
	it('should be able to return the total revenue', () => {
    expect(manager.totelRevenue(1, bookingsTestData, roomsTestData)).to.equal('0.00');
  });

});
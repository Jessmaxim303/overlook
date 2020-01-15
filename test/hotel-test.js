import chai from 'chai';
const expect = chai.expect;

import Hotel from '../src/Hotel';

import bookingsTestData from './data/bookings-test-data';
import roomsTestData from './data/room-test-data';

let hotel;

  beforeEach(() => {
    hotel = new Hotel(bookingsTestData, roomsTestData, "2020/02/05")
  });

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of the User class', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should be able to hold onto rooms data', () => {
    expect(hotel.rooms[0]).to.deep.equal({ number: 1, roomType: 'residential suite', bidet: true, bedSize: 'queen', numBeds: 1, costPerNight: 358.4 });
  });

  it('should return the number of rooms vacant today', () => {
    expect(hotel.numberVacantToday()).to.equal(2);
  });

  it('should return the totel revenue for today', () => {
    expect(hotel.totalRevenueToday()).to.equal(358.4);
  });

  it('should return the percent of rooms occupied for today', () => {
    expect(hotel.percentOccupied()).to.equal(25);
  });

  it('should filter and return rooms by type', () => {
    expect(hotel.returnRoomsByType("residential suite")).to.deep.equal([{number: 1, roomType: "residential suite", bidet: true, bedSize: "queen", numBeds: 1, costPerNight: 358.4}]);
  });


});

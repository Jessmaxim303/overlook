import chai from 'chai';
const expect = chai.expect;

// import userData from '../data/users-test-data';
import Hotel from '../src/Hotel';

let hotel;

  beforeEach(() => {
    hotel = new Hotel()
  });

describe('Hotel', function() {

  it('should be a function', function() {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of the User class', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });


});

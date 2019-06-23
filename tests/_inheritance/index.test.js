
describe('inheritance', function(){
  before(function(){

  });
  after(function(){

  });
  beforeEach(function(){

  });
  afterEach(function(){

  });

  describe('Cars', function(){
    var car = new Car();
    var subie = new Subaru();

    describe('Car prototype', function(){
      it('should default to a Ford', function(){
        expect(car.make).to.equal('Ford');
      });
    });
    describe('Subaru prototype', function(){
      it('should be a Subaru', function(){
        expect(subie.make).to.equal('Subaru');
      });
    });
    describe('Car counts', function(){
      it('should include all cars', function(){
        expect(Car.count).to.equal(2);
      });
    })
  });

});

describe('index', function(){
  before(function(){

  });
  after(function(){

  });
  beforeEach(function(){

  });
  afterEach(function(){

  });

  describe('array.indexOf()', function(){
    it('should return matching index', function(){
      var r = [1,2,3];
      expect(r.indexOf(1)).to.equal(0, "value not found in array");
    });

    it('should return -1 if no match', function(){
      var r = [1,2,3];
      expect(r.indexOf(5)).to.equal(-1, "value should not be found in array");
    });

  });

  describe('dynamic test example', function(){
    var concatenateStrings = function(){
      return Array.prototype.slice.call(arguments).reduce(function(prev, curr){
          return prev + curr;
        }, '')
    };
    var tests = [
      {args:['b','l','a','h'], expected:'blah'},
      {args:['un','ico','rn'], expected:'unicorn'}
    ];

    tests.forEach(function(test){
      it('should concatenate strings', function(){
        var result = concatenateStrings.apply(null, test.args);
        expect(result).to.equal(test.expected);
      });
    });

  });

  describe('exceptions', function(){
    it('should throw exception', function(){
      var err = new Error('Danger, Will Roger!')
      var errorThrowingFunction = function(){
        throw err;
      }

      expect(errorThrowingFunction).to.throw(Error, err.message);
    })
  });

});
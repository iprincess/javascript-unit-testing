
describe('requestManager', function(){
  var xhr;
  var requests = [];
  var requestManager = new RequestManager();

  before(function(){
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
  
    xhr.onCreate = function(req){
      requests.push(req);
    }
  });
  after(function(){
    xhr.restore();
  });
  beforeEach(function(){
    //requests = [];
  });
  afterEach(function(){

  });

  it('calls the expected api', function(){
    var expectedUrl = 'http://blah.com';
    requestManager.get(expectedUrl, sinon.fake(), sinon.fake());
    expect(requests[0].url).to.equal(expectedUrl);
  });

  it('calls the successHandler on success', function(){
    var expectedUrl = 'http://blah.com';
    var successHandler = sinon.spy();
    var response = [{ "message": "success!"}];

    requestManager.get(expectedUrl, successHandler, sinon.fake());

    requests[0].respond(200, { "Content-Type": "application/json" }, JSON.stringify(response));

    expect(successHandler.called).to.be.true;
    expect(successHandler.calledWith(JSON.stringify(response))).to.be.true;
  });

  it('calls the failHandler on fail', function(){
    var expectedUrl = 'http://blah.com';
    var failHandler = sinon.spy();

    requestManager.get(expectedUrl, sinon.fake(), failHandler);

    requests[0].respond(404, { "Content-Type": "application/json" }, "");

    expect(failHandler.called).to.be.true;
  });

});
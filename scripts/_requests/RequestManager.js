class RequestManager {
  // all requests should come through this class to make swapping out request implementations simpler
  
  get(url, onSuccess, onFail){
    return XHR.get(url, onSuccess, onFail);
  }
}
class XHR {

}

XHR.get = function(url, onSuccess, onFail){
  return XHR._xhr('GET', url, onSuccess, onFail)
}

XHR._xhr = function(method, url, onSuccess, onFail){
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        onSuccess(xhr.response)
      } else {
        console.error(xhr.statusText);
        onFail();
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
    onFail();
  };
  xhr.send(null);
}


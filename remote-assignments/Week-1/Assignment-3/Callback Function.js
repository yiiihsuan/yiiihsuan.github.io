function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(function() {
      var res = n1 + n2;
      callback(res);
    }, delayTime);
  }

  delayedResult(4, 5, 3000, function(res){
    console.log(res);
  });
  // Output: 9 (4+5) will be shown in the console after 3 seconds
  
  delayedResult(-5, 10, 2000, function(res){
    console.log(res);
  });
  // Output: 5 (-5+10) will be shown in the console after 2 seconds

function delayedResultPromise(n1, n2, delayTime) {
  return new Promise(function(resolve, reject)  {
    setTimeout(function() {
      resolve(n1 + n2);
    }, delayTime);
  });
}

delayedResultPromise(4, 5, 3000).then(console.log);
// delayedResultPromise(4, 5, 3000).then(resolve => console.log(resolve));
// Output: 9 (4 + 5) will be shown in the console after 3 seconds


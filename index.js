function receivesAFunction(callback) {
    return callback()
console.log("Callback function called!");
}


function returnsANamedFunction() {
  function namedFunction() {
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
    } ;
}


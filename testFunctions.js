function sum(a, b) {
  return a + b;
}

function isEven(n){
  return n % 2 === 0;
}

function randomInt(a, b){
  if(!b){
    return Math.floor(Math.random() * a)
  }

  return a +  Math.floor(Math.random() * (b-a))
}


module.exports = {
  sum,
  isEven,
  randomInt
};
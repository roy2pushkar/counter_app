const countValue = document.getElementById("counter");

function increment() {
  //get value from UI
  let value = parseInt(countValue.innerText);
  //increment value
  value = value + 1;
  //set the value onto UI
  countValue.innerText = value;
}

function decrement() {
  //get value from UI
  let value = parseInt(countValue.innerText);
  //update the value
  value = value - 1;
  //set value to UI
  countValue.innerText = value;
}

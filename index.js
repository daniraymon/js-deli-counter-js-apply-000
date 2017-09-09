var katzDeli = [];

function takeANumber(katzDeli, customer) {
  var position = katzDeli.length + 1;
  katzDeli.push(customer);
  return "Welcome, " + customer + ". You are number " + position + " in line.";
}

function nowServing() {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
}
var katzDeli = [];

function takeANumber(katzDeli, customer) {
  var position = katzDeli.length + 1;
  katzDeli.push(customer);
  return "Welcome, " + customer + ". You are number " + position + " in line.";
}

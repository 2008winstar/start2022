function whatsTheDealHere(id, defaultID = () => id) {
  id = 5;
  console.log(defaultID());
}

console.log(whatsTheDealHere(3));

function whatsThatDealHere(id, defaultID = () => id) {
  var id = 5;
  console.log(defaultID());
}

console.log(whatsThatDealHere(3));
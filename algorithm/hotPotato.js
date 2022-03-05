const hotPotato = (elementList, num) => {
  const eliminatedList = [];

  const arr = [...elementList];

  while (arr.length > 1) {
    for (let i = 0; i < num; i++) {
      arr.push(arr.shift());
    }
    eliminatedList.push(arr.shift());
  }

  return {
    eliminated: eliminatedList,
    winner: arr.shift()
  }
}

console.log(hotPotato(['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7))
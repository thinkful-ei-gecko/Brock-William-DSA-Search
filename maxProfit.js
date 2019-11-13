function maxProfit(arr) {
  //First find the lowest price
  //Find the highest value
  //But the highest value must come AFTER the lowest value found
  //Return the difference
  let buyingDay;
  let sellingDay;

  for(let i = 0; i < arr.length; i++) {
    buyingDay = arr[i];
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] < buyingDay) {
        buyingDay = arr[j];
      }
    }
  }
  for(let i = 1; i < arr.length; i++) {
    sellingDay = arr[i];
    for(let j = 1; j <arr.length; j++) {
      if(arr[j] > sellingDay) {
        sellingDay = arr[j];
      }
    }
  }
  return `Our net gain is ${Math.abs(buyingDay - sellingDay)}`;
}

//Output: 26...Buy on Monday, Sell on Wednesday

function main() {
  let arr = [128, 97, 121, 123, 98, 97, 105];

  console.log(maxProfit(arr));
}
main();
/*

var groceries = [ 'milk', 'popcorn', 'bread', 'IPA', 'Cherry CokeZero', 'mac&cheese']
var prices = [ '$2.99', '$1.49', '$1.29', '$6.99', '$1.59', '$.89' ]

}

function add(prices){
  console.log(var i=0, prices.length; i++)
}


for (var i=0; i<groceries.length; i++){
  console.log(groceries [i]+ " " + prices[i])
}

*/
var sum = 0
var groceries = [ 'milk', 'popcorn', 'bread', 'IPA', 'Cherry CokeZero', 'mac&cheese'];
var prices = [ 2.99 , 1.49 , 1.29 , 6.99 , 1.59 , 0.89 ];


for (var i=0; i<groceries.length; i++){
  console.log(groceries [i]+ " " + prices[i])
} 
for (var i=0; i<prices.length; i++){
  sum = sum+prices[i];
}
  console.log('Total : '+ sum);
 
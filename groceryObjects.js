//groceries = milk, popcorn, bread, beer, Cola, mac & cheese
//type = skim , theatre style, wheat, IPA, Cherry Coke, gluten free
//price = 2.99 , 1.49 , 1.29 , 6.99 , 1.59 , 0.89

var groceryList = [
	{grocery: 'milk', type: 'skim', price: 2.99},
	{grocery: 'popcorn', type: 'theatre', price: 1.49},
	{grocery: 'bread', type: 'wheat', price: 1.29},
	{grocery: 'beer', type: 'IPA', price: 6.99},
	{grocery: 'cola', type: 'Cherry Coke', price: 1.59},
	{grocery: 'mac & cheese', type: 'gluten free', price: 0.89},
	]


for(var i=0; i<groceryList.length; i++)
  {
    console.log( 'Pick up some ' + groceryList[i].grocery + '. Get the ' + groceryList[i].type + ' style. It should cost about $' + groceryList[i].price );
  }

var total = 0;

for (var i=0; i<groceryList.length; i++)
  {
   total = total + groceryList[i].price;
  }
console.log("Your total will be $" + total);

var groceryList = 
    [
  {grocery: 'milk', type: 'skim', price: 2.99},
  {grocery: 'popcorn', type: 'theatre', price: 1.49},
  {grocery: 'bread', type: 'wheat', price: 1.29},
  {grocery: 'beer', type: 'IPA', price: 6.99},
  {grocery: 'cola', type: 'Cherry Coke', price: 1.59},
  {grocery: 'mac & cheese', type: 'gluten free', price: 0.89},
  ]

  for(var i=0; i<groceryList.length; i++)
    {
      var pickUp = document.createElement('div');
      pickUp.innerHTML = 'Pick up some ' + groceryList[i].grocery + '. Get the ' + groceryList[i].type + ' style. It should cost about $' + groceryList[i].price;
      document.body.appendChild(pickUp);
    }

var total = 0;

for (var i=0; i<groceryList.length; i++)
   {
      total = total + groceryList[i].price;
   }
console.log("Your total will be $" + total);

var kroger = document.createElement('div');
kroger.innerHTML = 'Your total will be $' + total;
document.body.appendChild(kroger);


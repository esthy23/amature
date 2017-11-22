//time restuarant button
document.getElementById('time').onclick = function(){calculate();}

//custom function
function calculate(){

  var foodAmount = document.getElementById('usr').value;
  var priceAmount = document.getElementById('prices').value;
  var deliveryFee = document.getElementById('prices3').value;

  // input validation
  if(foodAmount ==" "  || priceAmount == " " || isNaN(priceAmount) || delivery !== 400 || foodAmount !== " "){
    window.alert("wrong input");
  }

  // main calculation
  var Amounttotal =  priceAmount + deliveryFee;
  document.getElementById('total').innerHTML = Amounttotal;



}

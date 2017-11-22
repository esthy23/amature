// clicking the button calls our custom function.
document.getElementById('calculate').onclick = function(){ calculateTip();}

//custom function
 function calculateTip(){

// store the data of the inputs
var bill = document.getElementById('billAmount').value;
var service = document.getElementById('serviceQuality').value;
var numPeople = document.getElementById('totalPeople').value;

// data input validation
if(bill === "" || isNaN(bill) || isNaN(numPeople)){
  window.alert("please input the proper values")
return;  // this will prevent the function from continuing.
}

// check to see if this input is empty or less than equal to 1.
if(numPeople === "" || numPeople <=1){
  numPeople = 1;
  document.getElementById('each').style.display ="none";
} else{
  document.getElementById('each').style.display ="block"
}

// main calculating.
var total =(bill * service)/numPeople;
total = Math.round(total * 100)/100;
total = total.toFixed(2);

//display the tip.
document.getElementById('totalTip').style.display="block";
document.getElementById('tip').innerHTML=total;

}

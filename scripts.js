let money = 0;
let worker = [];

let clickButton = document.getElementById('clickButton');

let updateMoney = function (){
  document.getElementById('moneyField').innerHTML = "Copper coins: " + money;
}

let moneyClick = function(){
  money += 1;
  updateMoney();
}

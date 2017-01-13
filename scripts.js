let money = 0;
let clickButton = document.getElementById('clickButton');
let moneyField = document.getElementById('moneyField');

let updateMoney = function (){
  moneyField.innerHTML = "Money: " + money;
}

let moneyClick = function(){
  money += 1;
  updateMoney();

}

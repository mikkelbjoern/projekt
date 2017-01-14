let money = 0;
let clickButton = document.getElementById('clickButton');

let updateMoney = function (){
  document.getElementById('moneyField').innerHTML = "Money: " + money;
}

let moneyClick = function(){
  money += 1;
  updateMoney();

}

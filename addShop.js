function addShop(tupple) {
  var name = tupple[0];
  var des = tupple[1];
  var price = tupple[2];

  var ul = document.getElementById("shopList");
  var li = document.createElement("li");

  var button = document.createElement("button");
  var buttonText = document.createTextNode("Buy");
  button.appendChild(buttonText);
  li.appendChild(button);

  var desc = document.createElement("buyDesc");
  var descText = document.createTextNode(" " + des);
  desc.appendChild(descText);
  li.appendChild(desc);

  var ownedTag = document.createElement("owned");
  ownedTag.id = name + "Owned";
  var ownedText = document.createTextNode(", owned: 0");
  ownedTag.appendChild(ownedText);
  li.appendChild(ownedTag);

  var priceTag = document.createElement("price");
  priceTag.id = name + "Price";
  var priceText = document.createTextNode(", price: " + price);
  priceTag.appendChild(priceText);
  li.appendChild(priceTag);

  ul.appendChild(li);
}

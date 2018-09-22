var carros = new Array();
carros[0] = "Stradinha";
carros[1] = "Montana";
carros[2] = "Amarok";
carros[3] = "S10";

localStorage["carros"] = JSON.stringify(carros);

var cars = JSON.parse(localStorage["carros"]);
console.log(cars);

localStorage.setItem('abc', 'helena');

var titulo = document.querySelector("#teste");
titulo.innerHTML = localStorage.getItem('abc');
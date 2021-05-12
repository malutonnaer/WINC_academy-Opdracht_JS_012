const colorArray = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colorArray.length) {
  console.log( colorArray[i]);
  i++;
};

for (let i = 0; i < colorArray.length; i++) {
  console.log(colorArray[i]);
}

const colorArray = ['yellow', 'blue', 'red' , 'orange'];
colorArray.forEach(color => console.log(color));

// 1. While loop: 5 / For loop: 3
// 2. For each loop: 1 
// 3. Voordelen forEach loop:
//  - je raakt niet verstrikt in een infinite loop
//  - je hoeft niet meer bij te houden met een i, ij welke iteratie je bent.
//  - je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
//  - de naam "forEach" zegt ook meteen wat je gaat doen en is sematischer dan een while of for loop.


const myColors ={
olorWall: "blue",
colorFruit: "orange",
colorCar: "red",
colorHair: "white",
colorGras: "green",
};

for (x in myColors) {
console.log(myColors[x]);
}

// Ja, je bent nu aan het itereren. Echter ben je aan het itereren over een OBJECT.
// Array Methods zijn NIET beschikbaar op een object.
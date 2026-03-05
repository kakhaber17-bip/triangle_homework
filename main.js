function triangleArea() {
  let a = Number(window.prompt("Enter first side:"));
  let b = Number(window.prompt("Enter second side:"));
  let c = Number(window.prompt("Enter third side:"));

  let s = (a + b + c) / 2;

  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  alert("Triangle area is: " + area);
}

triangleArea();
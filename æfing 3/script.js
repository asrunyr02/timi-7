function sayHello() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("nameOutput").innerText = `Helloó ${name}!`;
}

function checkAge() {
  const age = Number(document.getElementById("ageInput").value);
  const output = document.getElementById("ageOutput");
  if (age >= 18) {
    return (output.innerText = "Þú ert fullorðinn");
  } else {
    return (output.innerText = "Þú er barn");
  }
}

function calculate() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const op = document.getElementById("oporator").value;

  let result;
  if (op === "+") {
    result = num1 + num2;
  } else {
    result = num1 - num2;
  }
  const output = document.getElementById("calcOutput");
  output.innerText = result;
}

function compliment() {
  document.getElementById("complimentOutput").innerText =
    "þú ert frábær forritari";
}

function einkunn(stig) {
  if (stig >= 90) {
    return "Frábært";
  } else if (stig >= 70) {
    return "Gott";
  } else if (stig >= 50) {
    return "Staðið";
  } else {
    return "Fall";
  }
}

function showGrade() {
  const stig = Numer(document.getElementById("scoreInput").value);
  document.getElementById("gradeOutput").innerText = Einkunn(stig);
}

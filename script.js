//==============
// Æfing 1 Breytur og týpur
//==============

// 1. Búa til breytur fyrir nafnið okkar, aldur og
// hvort við eigum gæludýr og prenta með console.log

const nafn = "Ásrún";
let aldur = 24;
const gaeludyr = true;
console.log(nafn, aldur, gaeludyr);

// 2. Nota typeof til að prenta út týpuna á breytunum okkar.

console.log(typeof nafn); //string
console.log(typeof aldur); // number
console.log(typeof gaeludyr); // boolean

// 3. Búa til breytu sem er faedingarar og reiknaðu aldurinn út frá árinu 2026

const faedingarar = 2002;
const reiknadurAldur = 2026 - faedingarar;
console.log("Reiknaður aldur:", reiknadurAldur);

//4. prenta "Ég heiti__ og er __ ára"
// með bæði bakkommum og með ${} og með bara+

console.log("Ég heiti " + nafn + " og er " + aldur + " ára!");
console.log(`Ég heiti ${nafn} og er ${aldur} ára!`);

// 5. Prófa að breyta const, hvað gerist í console?
// MUNA commenta línunna út annars mun aefing 2 ekki keyra

//nafn= "jón";

//==============
// aefing 2- if else og föll
//===============

// 1. skila true ef aldurinn er 18 eða meira, annars skil false.
function erFullordin(aldur) {
  return aldur >= 18;
}
console.log(erFullordin(20));
console.log(erFullordin(3));
console.log(erFullordin(18));

// 2. Skila "Fábrært" ef einkunn er 90+,
// "Gott"ef það er (70-89),
//"Staðið" ef það er (50-69),
// "Fall" ef það er undir 50.

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
console.log(einkunn(95));
console.log(einkunn(89));
console.log(einkunn(50));
console.log(einkunn(4));

// 3. Skila hvort að talan sé slétt tala eða oddatala.
// Notuð % en ef það er einhver afgangur þá er það oddatala.

function slettedaodda(tala) {
  if (tala % 2 === 0) {
    return "slétt tala";
  } else {
    return "odda tala";
  }
}
console.log(slettedaodda(6));
console.log(slettedaodda(3));

// 4. Reikna verð eftir afslátt.

function verdEftirAfslatt(verd, afslattur) {
  return verd - (verd * afslattur) / 100;
}
console.log(verdEftirAfslatt(1000, 20));

//5.Skila stærstu tölu af þremur.

function staerst(tala1, tala2, tala3) {
  if (tala1 >= tala2 && tala1 >= tala3) {
    return "tala1";
  } else if (tala2 >= tala3) {
    return "tala 2";
  } else {
    return "tala3";
  }
}
console.log(staerst(3, 5, 9));
console.log(staerst(6, 3, 2));

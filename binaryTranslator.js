// FUNCTIONS
// Convert to Binary function

function toBinary(str) {

  let result = [];

  for (const x of str) {
    let toAscii = x
      .codePointAt()
      .toString(2)
      .padStart(8, "0")
      .padEnd(9);
    result.push(toAscii);
  }

  return result.join("");
}

// Convert from Binary function

function toEnglish(newStr) {
  let newSplit = newStr.match(/.{8}/g);

  let newResult = [];

  for (const y of newSplit) {
    let toEnglish = String.fromCharCode(parseInt(y, 2));
    newResult.push(toEnglish);
  }

  return newResult.join("");

}

console.log(toBinary("hello world"));
console.log(toEnglish(toBinary("hello world")));

// VAR
let input = document.getElementById("input");
let output = document.getElementById("output");
let btnTranslate = document.getElementById("translate");
let btnReset = document.getElementById("form_reset");

// ACTIONS
input.addEventListener("keyup",
  function () {
    output.innerHTML = toBinary(input.value);
  }
)

btnReset.addEventListener("click",
  function () {
    output.innerHTML = ("");
    document.getElementById("form1").reset();
  }
) 
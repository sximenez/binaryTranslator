// Binary Search function

function search(arr, x) {
  arr.sort();

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log(start, end, mid);

    if (arr[mid] === x) {
      return mid;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;

}

// arr = "123456789".split("").reverse().map(function(x) {
//   return Number(x);
// });
// console.log(arr);

// console.log(search(arr, 8));

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
let btnTranslate = document.getElementById("translate");
let btnReset = document.getElementById("formReset");

// EXERCICE
btnTranslate.addEventListener("click",
  function () {
    document.getElementById("output").innerHTML = toBinary(input.value);
  }
)

btnReset.addEventListener("click",
  function () {
    document.getElementById("output").innerHTML = ("");
    document.getElementById("form1").reset();
  }
) 
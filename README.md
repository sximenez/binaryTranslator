# English to binary translator

✅ https://sximenez.github.io/binaryTranslator/


The **idea** was to imitate a translation web service, but with binary<br>(I was being introduced to algorithms at the time of the project).

The **html** is very simple: a header, two buttons and a two ```textarea``` fields with an input and an output.

The **css** is based on the Tailwind framework.

For **js**, I first wrote a function with a ```for``` loop,<br>splitting the input text and looking for the ASCII and binary codes of each character:

```Javascript
function toBinary(str) {

  let result = [];

  for (const x of str) {
    let toAscii = x
      .codePointAt()
      .toString(2)
      .padStart(8, "0");
    result.push(toAscii);
  }

  return result.join("");
}
```

I then created two "click" events,<br>one for the translation button and one for the reset button:

```Javascript
// VAR
let btnTranslate = document.getElementById("translate");
let btnReset = document.getElementById("formReset");

// ACTIONS
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
```

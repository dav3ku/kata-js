/*
Write a JavaScript function that checks whether a passed string is palindrome or not? 
	Note: A palindrome is word, phrase, or sequence that reads 	the same backward as forward
*/

// somos o no somos
// somosonosomos

function palindrome(string) {
  if (typeof string === "string") {
    var caracteres = string.length;
    let aux = caracteres / 2 - 1;
    string = string.replace(/ /g, "").toLowerCase();

    for (let i = 0; i <= caracteres / 2; i++) {
      if (string[i] === string[aux]) {
        aux--;
      } else {
        return "La cadena no es un palindromo";
      }
    }
    return "La cadena es un palindromo";
  } else {
    return "No me pasaste una cadena";
  }
}

console.log(palindrome("somos o no somos"));

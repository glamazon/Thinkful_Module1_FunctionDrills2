function decode(sentence) {
  let words = sentence.split(" ");

  let result = "";
  words.forEach(word => {
    let letter = word[0];

    switch (letter) {
      case 'a': result += word[1];
        break;
      case 'b': result += word[2];
        break;
      case 'c': result += word[3];
        break;
      case 'd': result += word[4];
        break;
      default: result += " ";
    }
  });

  return result;
}

let output = decode('craft block argon meter bells brown croon droop');
console.log(output);
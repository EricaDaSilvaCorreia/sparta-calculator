// console.log("howdy");

// Loop
while (true) {

  // functions
  function multiply(value1,value2) {
    var result = Number(value1) * Number(value2);
    return result;
  }

  var answer = multiply(value1, value2);

  // add
  function add(value1,value2) {
    var result = Number(value1) + Number(value2);
    return result;
  }

  var answer = add(value1, value2);

  // min
  function min(value1,value2) {
    var result = Number(value1) - Number(value2);
    return result;
  }

  var answer = min(value1, value2);

  // divide
  function divide(value1,value2) {
    var result = Number(value1) / Number(value2);
    return result;
  }

  var answer = divide(value1, value2);

  // power
  function power(value1,value2) {
    var result = Math.pow(Number(value1), Number(value1));
    return result;
  }

  var answer = power(value1, value2);

  // root
  function root(value1) {
    var result = Math.sqrt (Number(value1));
    return result;
  }

  var answer = root(value1);

  // Start//
  alert('Welcome to the calculator!');
  var Answer1 = prompt('Choose a mode : [A]dvanced or [B]asic or [E]xit');
  Answer1 = Answer1.toLowerCase();
  //Calc//
  switch (Answer1) {
    // Basic
    case 'b':
    var act1 =prompt('What would you like to do with these values? [+]Add, [-]Subtract, [/]Divide, [*]Multiply');
    
    var value1 =prompt('Enter your first value :');

    var value2 =prompt('Enter your second value :');

    if (act1 === '+') {
      var answer = add(value1, value2);
    }else if (act1 === '-') {
      var answer = min(value1, value2);
    }else if (act1 === '/') {
      var answer = divide(value1, value2);
    }else if (act1 === '*') {
      var answer = multiply(value1, value2);
    }
    alert("the answer is "+answer);

    var Answer2 = prompt('Enter [E] to exit or any other key to recalculate')
    Answer2 = Answer2.toLowerCase();

    break;
    // Advanced
    case 'a':
    var act2 =prompt('What would you like to do? [+]Add, [-]Subtract, [/]Divide, [*]Multiply, [^]Power, [R] Square root');
    act2 = act2.toLowerCase();

    if (act2 === 'r') {
      var value1 =prompt('Enter your value :');
      var answer = root(value1);
      alert("the answer is "+answer);

    }else if (act2 === '+' || act2 === '-' || act2 === '*' || act2 === '/' || act2 === '^') {
      var enter = act2;
      var value1 =prompt('Enter your first value :');
      var value2 =prompt('Enter your second value :');

      if (enter === '+') {
        var answer = add(value1, value2);
      }else if (enter === '-') {
        var answer = min(value1, value2);
      }else if (enter === '/') {
        var answer = divide(value1, value2);
      }else if (enter === '*') {
        var answer = multiply(value1, value2);
      }else if (enter === '^') {
        var answer = power(value1, value2);
      }
      alert("the answer is "+answer);

      var Answer2 = prompt('Enter [E] to exit or any other key to recalculate')
      Answer2 = Answer2.toLowerCase();

    }

    break;

    default:
  }

  // var Answer2 = prompt('Enter [E] to exit the calculator or any other key to recalculate');
  // Answer2 = Answer2.toLowerCase();

  // if (Answer2 === 'c') {
  //   var Answer2 = Answer1;
  // }else if (Answer2 === 'm') {
  //   var Answer2 = act2;
  // }


  if (Answer1 === 'e' || Answer2 ==='e') {
    break;
  }
  }

//   function again(Answer2){
//     var Answer1 = true;
//     do {
//       act1
//     }
//     while (true);
//     Answer2 === 'c';
//   }
// }
// else if (Answer2 === 'c') {
//   again();
// }else if (Answer2 === m) {
//   return Answer1;
// }

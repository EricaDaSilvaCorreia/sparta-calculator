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
    var value1 =prompt('Enter your first value :');

    var value2 =prompt('Enter your second value :');

    var act =prompt('What would you like to do with these values? [+]Add, [-]Subtract, [/]Divide, [*]Multiply');

    if (act === '+') {
      var answer = add(value1, value2);
    }else if (act === '-') {
      var answer = min(value1, value2);
    }else if (act === '/') {
      var answer = divide(value1, value2);
    }else if (act === '*') {
      var answer = multiply(value1, value2);
    }
    alert("the answer is "+answer);

    break;
    // Advanced
    case 'a':
    var act =prompt('What would you like to do? [+]Add, [-]Subtract, [/]Divide, [*]Multiply, [^]Power, [R] Square root');
    act = act.toLowerCase();

    if (act === 'r') {
      var value1 =prompt('Enter your value :');
      var answer = root(value1);
      alert("the answer is "+answer);

    }else if (act === '+' || act === '-' || act === '*' || act === '/' || act === '^') {
      var enter = act;
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


    }

    break;

    default:
    // if (Answer1 === 'e' || Answer1 = false) {
    //   return;
    // }
  }

  // var Answer2 = prompt('Enter [E] to exit the calculator [M] to use a different mode or [C] to do another calculation using the current mode');
  // Answer2 = Answer2.toLowerCase();
  //
  // if (Answer1 === 'e' || Answer2 ==='e') {
  //   break;
  // }else if (Answer1 === 'b' && Answer2 === 'c') {
  //   Answer1.repeat(1);
  // }else if (Answer1 === 'a' && Answer2 === 'c') {
  //   Answer1.repeat(1);
  // }
}

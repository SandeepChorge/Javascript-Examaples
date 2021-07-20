//For Checking If else Loops
//Check(1);

//For Checking Different For loops
//Check(2);

//For Checking if Number is Glimmer or not
//checkGlimmerNo(808);

function Check(check) {
  switch (check) {
    case 1: //if else
      let a = 10;
      let b = 20;
      console.log('Checking if else');
      if (a == b) {
        console.log('This is equal');
      } else {
        console.log('This is not equal');
      }

      //normal equal to
      if (a == '10') {
        console.log('This is the interger and string comparing');

        //triple equal to
        if (a === '10')
          console.log('This is the interger and string comparing');
        else console.log('This is else of === in  interger and string ');
      }
      break;

    case 2: //For loop
      let arr = [10, 20, 30, 40, 50];

      //For loop with basic
      for (let i = 0; i < arr.length; i++) console.log(arr[i]);

      //For in loop
      var person = {
        firstName: 'John',
        lastName: 'Doe',
        ssn: '299-24-2351'
      };

      for (var prop in person) {
        console.log(prop + ':' + person[prop]);
      }

      break;

    case 3:
      break;
  }
}

function checkGlimmerNo(tempNo) {
  /** If the Sum of the fourth power of individual digits in a number are equal to number itself then that number can be called as Glimmer number*/
  var no = tempNo;
  var str = '' + no;
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    let v = str[i];
    sum += v * v * v * v;
  }
  if (tempNo === sum) {
    console.log('No ' + tempNo + ' is Glimmer Number');
  } else {
    console.log('No ' + tempNo + ' is Not Glimmer Number');
  }
}

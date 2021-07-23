const CLASS_TYPE = 1;
const ARRAY_OPERATIOS = 2;
const REDUCE_OPERATIONS = 3;
const IMPORTING_FILE = 4;
const PROTOTYPE_OPERATIOS = 5;
const MAP_REDUCE_COMBO = 6;

const arr = [10, 20, 30, 40, 50, 10];
const hege = ['Cecilie', 'Lone'];
const stale = ['Emil', 'Tobias', 'Linus'];

TryExample(MAP_REDUCE_COMBO);

function TryExample(type) {
  switch (type) {
    case CLASS_TYPE:
      console.log('Experementing with Classes');
      //Creating a class
      class A {
        constructor(name) {
          this.name = name;
        }
        getName() {
          return this.name;
        }
      }

      //Using inheritance and extending properties of Class A
      class B extends A {
        constructor(FirstName, lastName) {
          super(FirstName);
          this.lastName = lastName;
        }
      }

      //Creating an object of derived class B
      let b = new B('First', 'LAst');
      //Calling method of the Base class A
      console.log(b.getName());

      //Filter on Array of class
      const classArr = [
        new A('Sandeep'),
        new A('Sandip'),
        new A('Sandy'),
        new A('Senpai'),
        new A('Zorojuro'),
        new A('Sanjuro')
      ];

      const filterted = classArr.filter(x => x.name == 'Sandeep');
      console.log(filterted);

      break;

    case PROTOTYPE_OPERATIOS:
      console.log('Experementing with Prototype');
      //PROTOTYPE --- The prototype is a global constructor available for all JavaScript objects.prototype referes to the global Array() object.
      Array.prototype.myUcase = function() {
        for (let i = 0; i < this.length; i++) {
          this[i] = this[i].toUpperCase();
        }
      };
      hege.myUcase();
      stale.myUcase();
      console.log('arr', hege);
      console.log('arr', stale);
      break;

    case ARRAY_OPERATIOS:
      console.log(
        'Array Operations:  Push, Pop, JOIN, isArray, Includes, from, LastIndexOf, Findindex, Find, Fill, Every, Concat, Copywithin, Filter'
      );
      //PUSH --- adds element in the array at the end
      //POP --- Removes last element from the array and returns it
      console.log('Before Push ', arr);
      arr.push(100);
      console.log('After Push ', arr);
      console.log('Popping last element ', arr.pop());
      console.log('After Pop ', arr);

      //JOIN --- it returns the single string from array with spererator mentioned
      console.log(stale.join(' and '));

      //Array.isArray --- It validates if the mentioned element is an array or not
      const bb = 's';
      console.log(Array.isArray(bb));

      //INCLUDES --- it returns true if mentioned element is present in array, its case sensitive
      console.log(arr.includes(10));
      console.log(stale.includes('emil'));

      //Array.from --- It converts string into the character array
      const ar = Array.from('1634');
      console.log('Operation is ' + ar);

      //lastIndexOf ---- it returns the last index of the specified element
      console.log(arr.lastIndexOf(10));

      //FINDINDEX --- its same as FIND but in this it returns index of that element if found else it returns -1
      const findOp = arr.findIndex(checkFind);
      function checkFind(item) {
        return item == 90;
      }
      console.log(findOp);

      //FIND --- it checks for the values if present it returns the values and does not continue checking next values if not found till the end then it returns undefined
      const findOp2 = arr.find(checkFind);
      function checkFind(item) {
        return item == 20;
      }
      console.log(findOp2);

      //FILL ---- replaces array elements on specified position with mentioned element, if range not provided it replaces all the elements
      const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
      fruits.fill('Kiwi', 1, 3);
      console.log(fruits);

      //EVERY --- it evaluates the function for every element in array and return true if all the elements satisfies condition
      const everyTest = arr.every(checkAge);
      function checkAge(age) {
        return age >= 10;
      }
      console.log(everyTest);

      //FILTER --- filters the array elements with specified condition and returns filtered output
      const op1 = arr.filter(x => x > 30);
      console.log('Filter > 30 ', op1);

      //CONCAT --- Concatenates multiple arrays
      const children = arr.concat(hege, stale);
      console.log('Find index ', children);

      //COPYWITHIN --- copies the element at the specified index, replacing the existing entry   target, source
      stale.copyWithin(1, 0);
      console.log(stale);
      break;

    case REDUCE_OPERATIONS:
      console.log('Experementing with REDUCE');
      console.log(
        'REDUCE --- gives the single output from processing array elements '
      );
      console.log('GLIMMER NUMBER EXAMPLE WITH Reduce');
      let input = '1634';
      const arr2 = Array.from(input);
      const a = arr2.reduce(function(acc, current) {
        let b = current;
        acc = acc + b * b * b * b;
        return acc;
      }, 0);
      if (input == a) console.log(input, 'is a glimmer number');
      else console.log(input, 'is not a glimmer number');
      break;

    case IMPORTING_FILE:
      console.log('Importing from Different file');
      // import * as wen from './Loops.js';
      // wen.Check(1);
      break;

    case MAP_REDUCE_COMBO:
      console.log('MAP AND REDUCE');
      const arr = [
        {
          FirstName: 'Sandeep',
          LastName: 'Chorge',
          Age: 27
        },
        {
          FirstName: 'Sandeep1 ',
          LastName: 'Chorge1 ',
          Age: 24
        },
        {
          FirstName: 'Sandeep2',
          LastName: 'Chorge2',
          Age: 23
        },
        {
          FirstName: 'Sandeep3',
          LastName: 'Chorge3',
          Age: 24
        }
      ];

      console.log('Initial Array is ', arr);

      const output = arr.map(x => x.FirstName + ' ' + x.LastName);
      console.log('USING MAP TO COMBINE FIRST AND LAST NAME ', output);

      const output2 = arr.reduce(function(acc, curr) {
        if (acc[curr.Age]) {
          acc[curr.Age] = acc[curr.Age] + 1;
        } else {
          acc[curr.Age] = 1;
        }
        return acc;
      }, {});
      console.log('USING REDUCE TO GET AGE WISE CATEGORISED DATA', output2);

      const output3 = arr.filter(x => x.Age < 25).map(x => x.FirstName);
      console.log(
        'USING FILTER AND MAP TO GET FIRST NAME WHOSE AGE < 25 ',
        output3
      );

      const output4 = arr.reduce(function(acc, curr) {
        if (curr.Age < 25) {
          acc.push(curr.FirstName);
        }
        return acc;
      }, []);

      console.log('SAME USING REDUCE ', output4);

      break;

    case 7:
      console.log('Experementing with Classes');

      break;
  }
}

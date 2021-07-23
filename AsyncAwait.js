//string
const helloWorld = 'helloWorld';
//console.log('string example: ', helloWorld);
const helloWorld2 = `helloWorld2 ${helloWorld}`;
//console.log('string example: ', helloWorld2);

//async & await (ES6) / promise
// login page -> auth Api -> token -> profile Api -> data  furtheruse
//callback nightmare
function apicall() {
  //token =
  //token -> js stop;
  function profileCall() {
    //token =>
    //function ca
    ////function callback
  }
}

//callback function
//parameter call which is also arrow functon ()
const testFunction = (call = value => {}) => {
  //invoke
  call(10 + 30);
};

// testFunction(result => {
//   console.log(result);
// });

//number type
const sumofNumber = test1 => test1 + 10;
const sumofNumber1 = () => 30 + 100;

const apiTokenCallback = () => {};
const profileResult = () => {};

//async / await
const asyncExample = async () => {
  const test1 = await apiTokenCallback();
  const test = await profileResult(test1);
  //manualy reject, resolve
  return test;
};

//console.log(asyncExample());

//
// console.log('async start');
// asyncExample().then(result => {
//   console.log('async result: ', result);
// });
// console.log('async end');

//start
//result 15
//end

//promise
//callback function resolve, reject
const promiseClass = new Promise((resolve, reject) => {
  let a = 1000;
  let b = 2000;

  //resolve condition
  resolve(a + b);

  //reject condition
  //reject('rejected promise');
});

const arrayofPromise = [promiseClass, promiseClass];

Promise.all(arrayofPromise)
  .then(resultPromiseAll => {
    console.log(resultPromiseAll);
  })
  .catch(allerror => {
    console.log(allerror);
  });

// const obj = {
//   then:(result) =>{

//   },
//   'catch':(e) =>{
//   }
// }

// promiseClass
//   .then(result => {
//     console.log('promiseResult: ', result);
//   })
//   .catch(e => {
//     console.log('Promise catch', e);
//   });

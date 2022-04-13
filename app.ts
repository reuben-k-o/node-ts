const num1El = document.getElementById('num1') as HTMLInputElement;
const num2El = document.getElementById('num2') as HTMLInputElement
const buttonEl = document.querySelector('button')!

type NumOrString = number | string
type Result = { val: number; timestamp: Date }

interface ResultObj {
  val: number;
  timestamp: Date
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1 + ' ' + num2
  } else {

    return +num1 + +num2;
  }
}
const numRes: number[] = []
const strRes: string[] = []


function printResult(resultObj: Result) {
  console.log(resultObj.val)
}

buttonEl.addEventListener('click', () => {
  const val1 = num1El.value;
  const val2 = num2El.value;
  const resNumber = add(+val1, +val2)
  numRes.push(resNumber as number)
  const resString = add(val1, val2)
  strRes.push(resString as string)
  console.log(resNumber, resString)
  printResult({ val: resNumber as number, timestamp: new Date() })
  console.log(numRes, strRes)
})

// console.log(add(1, 6));

// console.log(add('1', '6'));

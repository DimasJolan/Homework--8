// 1
const arrA = [];
const arrB = [];
while(arrA.length < 50){
    const randomnumber = Math.floor(Math.random()*100) + 1;
    if(arrA.indexOf(randomnumber) > -1) continue;
    arrA[arrA.length] = randomnumber;
}
while(arrB.length < 50){
  const randomnumber = Math.floor(Math.random()*100) + 1;
  if(arrB.indexOf(randomnumber) > -1) continue;
  arrB[arrB.length] = randomnumber;
}
const duplicates = [];

const tempArray = [...arrA].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicates.push(tempArray[i])
  }
}
console.log(arrA)
console.log(arrB)
console.log(duplicates);

//2
const Arr = [3,23,3,2,52,5,34,23,6,246,436];
const Arr1 = [];

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  Arr1.push(element);
}
console.log(Arr.find(isPrime)); 
console.log(Arr1);
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
const Arr1Min = getMinOfArray(Arr1);
const Arr1Max = getMaxOfArray(Arr1);
console.log(Arr1Max);
console.log(Arr1Min);

//3

const Array1 = [34,4,67,54,23,65,32,8,9,21,54,765,45,56,123,543,342];
const ArrayMin = getMinOfArray(Array1);
const IndexMin = Array1.indexOf(ArrayMin);
const ArrayMax = getMaxOfArray(Array1);
const IndexMax = Array1.indexOf(ArrayMax);
const Array2 = Array1.slice (IndexMin + 1, IndexMax);
console.log(Array2);

//4

const Masiv = [345,534,23,234,45,87,45,234,98,7,564,3,12,54,7,9,53,234]
const ArrayMin1 = getMinOfArray(Array1);
const IndexMin1 = Array1.indexOf(ArrayMin);
const ArrayMax1 = getMaxOfArray(Array1);
const IndexMax1 = Array1.indexOf(ArrayMax);
[Masiv[IndexMin1], Masiv[IndexMax1]] = [Masiv[IndexMax1], Masiv[IndexMin1]]
console.log (Masiv);







 






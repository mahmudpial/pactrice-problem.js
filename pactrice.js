const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialValue = 0;
const sumAllValue = number.reduce(
  (previousValue, currrentValue) => previousValue + currrentValue + initialValue
);
console.log(sumAllValue);

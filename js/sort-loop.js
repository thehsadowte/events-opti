/*
 *  Метод sort()
 */

//? Сортування чисел та рядків за замовчуванням
// const numbers = [3, 7, 2, 8, 1, 24, 15, 39];
// const sortedNumbers = [...numbers].sort();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'abs'];
// const sortedWords = [...words].sort();

// console.log('words: ', words);
// console.log('sortedWords: ', sortedWords);

//? Сортування чисел та рядків за умовою
// const numbers = [3, 7, 2, 8, 1, 24, 15, 39];
// const sortedNumbers = [...numbers].sort((a, b) => {
//   return b - a;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const words = ['Maggie', 'Amanda', 'Corey', 'Cora', 'Jordan', 'Abs', 'abs'];
// const sortedWords = [...words].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('words: ', words);
// console.log('sortedWords: ', sortedWords);

/*
? Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований
? по збільшенню значення властивості amount.
*/
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// Повна версія
// const sortByAscendingAmount = cars => {
//   const sortedCars = [...cars].sort((a, b) => {
//     return a.amount - b.amount;
//   });

//   return sortedCars;
// };

// Скорочена версія
// const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

/*
? Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований
? за зменшенням значення властивості price.
*/

// Повна версія
// const sortByDescendingPrice = cars => {
//   return [...cars].sort((a, b) => {
//     return b.price - a.price;
//   });
// };

// Скорочена версія
// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

/*
? Нехай функція sortByModel повертає новий масив автомобілів, відсортований за назвою моделі
? в алфавітному та зворотному алфавітному порядку, залежно від значення параметра order.
*/

// const sortByModel = (cars, order) => {
//   return [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
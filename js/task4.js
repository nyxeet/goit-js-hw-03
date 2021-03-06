console.log('NEW TASK')
const countTotalSalary = function(employees) {
    const values = Object.values(employees);
    console.log(values)
    let total = 0;
    for (let i = 0; i < values.length; i += 1) {
        total += values[i];
    }
    return `Общая сумма зарплаты ${total}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
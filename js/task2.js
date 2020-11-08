console.log('NEW TASK')

const countProps = function (obj) {
    let total = 0;
    for (const key in obj) {
        total += 1;
    }
    return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log("Количество элементов:" , countProps({})); // 0

console.log("Количество элементов:" , countProps({ name: 'Mango', age: 2 })); // 2

console.log("Количество элементов:" , countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        this.transactions.push({ amount, type });
        return this.transactions;
      
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.createTransaction(amount, "deposit");
        for (let i = this.transactions.length - 1; i <= this.transactions.length; i+=1) {
            this.balance = this.balance + this.transactions[i].amount;
            return this.balance;
        }
        
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
      this.createTransaction(amount, "withdraw");
        for (let i = this.transactions.length - 1; i <= this.transactions.length; i+=1) {
            this.balance = this.balance - this.transactions[i].amount;
            return this.balance;
        }
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        console.log(this.transactions)
        for (let i = 0; i <= this.transactions.length; i += 1) {
            if (i + 1 === id ) {
                return this.transactions[i];
            }
        }
    },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let total = 0; 
        for (const element of this.transactions) {
            if (element.type === type) {
                total = total + element.amount;
            }
        }
        return total;
     },
};


account.deposit(2000);
account.deposit(3000);
account.deposit(3000);
account.withdraw(2500);
console.log(account.getBalance());
console.table(account.transactions)
console.log(account.balance);
console.log(account.getTransactionDetails(4))
console.log(account.getTransactionTotal("withdraw"))
console.log(account.getTransactionTotal("deposit"))
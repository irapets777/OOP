
///1=========================================================================
class Clients {
    constructor(name, accountNumber, balance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    ///get balance

    getBalance() {
        return this.balance;
    }
    ///withdraw money

    withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          return true;
        } else {
          return false;
        }
    }
}

///5================================================================

class Bank {
    constructor(name) {
      this.name = name;
      this.customers = [];
    }

    ///add nev client

    addCustomer(name, balance) {
      const customer = {
        name: name,
        balance: balance,
      };
      this.customers.push(customer);
    }

    //remove client

    removeCustomer(name) {
      this.customers = this.customers.filter((customer) => customer.name !== name);
    }
    // get balance

    getCustomerBalance(name) {
      const customer = this.customers.find((customer) => customer.name === name);
      if (customer) {
        return customer.balance;
      } else {
        return "Customer not found";
      }
    }
  }

//============================================================================================

document.addEventListener("DOMContentLoaded", () =>{
    let client1 = new Clients("Iren", "123", 7000);
    let client2 = new Clients("Vasa", "456", 8000);
    let client3 = new Clients("Nazar", "789", 9000);
    console.log(client1.getBalance(), client2.getBalance(), client3.getBalance());
    if (client1.withdraw(200), client2.withdraw(300), client3.withdraw(440)) {
        console.log("Гроші успішно знято  рахунку");
    } else {
        console.log("Недостатньо коштів!");
    }
    console.log(client1.getBalance(), client2.getBalance(), client3.getBalance());
    const bank = new Bank("My Bank");
    bank.addCustomer("Maria", 2000);
    bank.addCustomer("Ivan", 1500);
    console.log(bank.customers);
    bank.removeCustomer("Maria");
    console.log(bank.getCustomerBalance("Ivan")); 
    console.log(bank.getCustomerBalance("Anna"));
});

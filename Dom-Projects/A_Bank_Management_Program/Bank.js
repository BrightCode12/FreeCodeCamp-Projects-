class BankAccount {
	constructor() {
		this.balance = 0;
		this.transactions = [];
	}
	deposit(amount) {
		if (amount > 0) {
			this.transactions.push({ type: "deposit", amount });
			this.balance += amount;
			return `Successfully deposited $${amount}. New balance: $${this.balance}`;
		} else {
			return `Deposit amount must be greater than zero.`;
		}
	}
	withdraw(amount) {
		if (amount > 0 && amount <= this.balance) {
			this.transactions.push({ type: "withdraw", amount });
			this.balance -= amount;
			return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
		} else {
			return `Insufficient balance or invalid amount.`;
		}
	}
	checkBalance() {
		return `Current balance: $${this.balance}`;
	}
	listAllDeposits() {
		const amountDeposited = this.transactions
			.filter((tran) => tran.type === "deposit")
			.map((tran) => tran.amount)
			.join(`,`);
		return `Deposits: ${amountDeposited}`;
	}
	listAllWithdrawals() {
		const amountWithdraw = this.transactions
			.filter((tran) => tran.type === "withdraw")
			.map((tran) => tran.amount)
			.join(`,`);
		return `Withdrawals: ${amountWithdraw}`;
	}
}

const myAccount = new BankAccount();
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.withdraw(30);
myAccount.deposit(40);

console.log(myAccount.listAllDeposits());
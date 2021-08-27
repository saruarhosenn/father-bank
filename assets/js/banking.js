//====================
// Deposit Work
document.getElementById("deposit-btn").addEventListener("click", function () {
	// get deposit input value
	const depositInputField = document.getElementById("deposit-field");
	const getDepositInputText = depositInputField.value;
	const getNewDepositInputAmount = parseFloat(getDepositInputText);
	// cleare input value
	depositInputField.value = " ";

	if (getNewDepositInputAmount > 0) {
		// update deposit amount
		const getTotalDeposit = document.getElementById("total-deposit");
		const getTotalDepositText = getTotalDeposit.innerText;
		const getTotalDepositAmount = parseFloat(getTotalDepositText);
		const totalDepositAmount = getTotalDepositAmount + getNewDepositInputAmount;
		getTotalDeposit.innerText = totalDepositAmount;

		// increase amount main balance from deposite
		const mainBalance = document.getElementById("total-balance");
		const mainBalanceText = mainBalance.innerText;
		const mainBalanceAmount = parseFloat(mainBalanceText);
		const totalMainBalanceAmount = mainBalanceAmount + getNewDepositInputAmount;
		mainBalance.innerText = totalMainBalanceAmount;
	};
});

//=================
// Withdraw Work
document.getElementById("withdraw-btn").addEventListener("click", function () {
	// get withdraw input value
	const withdrawInputField = document.getElementById("withdraw-field");
	const withdrawInputText = withdrawInputField.value;
	const withdrawInputAmount = parseFloat(withdrawInputText);
	// cleare input value
	withdrawInputField.value = " ";

	// decrease amount from main balance
	const mainBalance = document.getElementById("total-balance");
	const mainBalanceAmount = mainBalance.innerText;

	if (withdrawInputAmount > 0 && withdrawInputAmount < mainBalanceAmount) {
		// update withdraw amount
		const getTotalWithdraw = document.getElementById("total-withdraw");
		const getTotalWithdrawText = getTotalWithdraw.innerText;
		const getTotalWithdrawAmount = parseFloat(getTotalWithdrawText);
		const totalWithdrawAmount = getTotalWithdrawAmount + withdrawInputAmount;
		getTotalWithdraw.innerText = totalWithdrawAmount;

		// decrease amount from main balance
		const minus = mainBalanceAmount - withdrawInputAmount;
		mainBalance.innerText = minus;
	};
});
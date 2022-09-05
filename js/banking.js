//Handle Deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    //get ammount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    const depositTotal = document.getElementById('deposit-total');
    const oldDepositText = depositTotal.innerText;
    const oldDepositAmount = parseFloat(oldDepositText)
    const newDepositTotal = oldDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // Update account balance total

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const oldBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = oldBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear
    depositInput.value = '';
})

// Update account withdraw total

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawamountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawamountText);

    // Set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const oldWithdrawText = withdrawTotal.innerText;
    const oldWithdrawTotal = parseFloat(oldWithdrawText);
    const newWithdrawTotal = oldWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

// Update Balance
const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const oldBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = oldBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear
    withdrawInput.value = '';
})
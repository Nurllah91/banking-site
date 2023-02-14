
// deposit section 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getNumberValueFromInput('number-field');
    const previousDepositAmount = getNumberFromText('deposit-amount');
    const previousBalance = getNumberFromText('balance-amount');


    if (isNaN(newDepositAmount)) {
        alert('Please enter a amount');
    }
    else if (newDepositAmount < 0) {
        alert('You cannot deposit negative amount');
    }
    else {

        const newDepositTotal = newDepositAmount + previousDepositAmount;

        setValue('deposit-amount', newDepositTotal);


        const newBalanceTotal = previousBalance + newDepositAmount;

        setValue('balance-amount', newBalanceTotal);
    }
})




// withdraw section 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const previousWithdraw = getNumberFromText('withdraw-amount');
    const newWithdraw = getNumberValueFromInput('withdraw-field');
    const previousBalance = getNumberFromText('balance-amount');

   if(isNaN(newWithdraw)){
    alert('please enter a amount to withdraw')
   }
   
    else if (newWithdraw < 0) {
        alert('You cannot withdraw negative amount. Please enter a valid amount');
    }
    else if (newWithdraw > previousBalance) {
        alert('Insufficient balance');
    }
    else {


        const newWithdrawTotal = previousWithdraw + newWithdraw;
        setValue('withdraw-amount', newWithdrawTotal);


        const newBalanceTotal = previousBalance - newWithdraw;

        setValue('balance-amount', newBalanceTotal);


    }



})
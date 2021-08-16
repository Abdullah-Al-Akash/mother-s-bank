//Setup Deposit and Withdraw Button Validity:
function disableButton(inputID, value, btnId) {
        document.getElementById(inputID).addEventListener(value, function (e) {
                if (e.target.value > 0) {
                        document.getElementById(btnId).removeAttribute('disabled');
                }
                else {
                        document.getElementById(btnId).setAttribute('disabled', true);
                }
        })
}

disableButton('deposit-input', 'keyup', 'deposit-btn');
disableButton('deposit-input', 'change', 'deposit-btn');
disableButton('withdraw-input', 'keyup', 'withdraw-btn');
disableButton('withdraw-input', 'change', 'withdraw-btn');
//End Deposit and Withdraw Button Validity:

//Common Function:
function setInput(inputID) {
        const input = document.getElementById(inputID);
        const inputText = input.value;
        const inputAmount = parseFloat(inputText);
        //Clear Input Field:
        input.value = '';
        return inputAmount;
}

//Balance Update Common Function:
function balanceUpdate(id, amount) {
        const mainBalance = document.getElementById(id);
        const mainBalanceAmount = parseFloat(mainBalance.innerText);
        mainBalance.innerText = mainBalanceAmount + amount;
}

//Total Balance Common Function:
function totalBalance(amount, isAdd) {
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        //Condition for Add or Deduct:
        if (isAdd == true) {
                totalBalance.innerText = totalBalanceAmount + amount;
        }
        else {
                totalBalance.innerText = totalBalanceAmount - amount;
        }
}

//Deposit Balance Setup:
document.getElementById('deposit-btn').addEventListener('click', function () {
        const depositAmount = setInput('deposit-input');//Call setInput function
        balanceUpdate('main-deposit', depositAmount);//Call balanceUpdate Function
        totalBalance(depositAmount, true);//Call totalBalance
        //Disabled Button
        document.getElementById('deposit-btn').setAttribute('disabled', true);
})

//Withdraw Balance Setup:
document.getElementById('withdraw-btn').addEventListener('click', function () {
        const withdrawAmount = setInput('withdraw-input');//Call setInput function

        //Error Message When Input More Balance than Total:
        const total = document.getElementById('total-balance');
        const totalBalanceText = total.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        console.log(totalBalanceAmount)

        if (totalBalanceAmount > withdrawAmount) {
                balanceUpdate('main-withdraw', withdrawAmount);//Call balanceUpdate Function
                totalBalance(withdrawAmount, false);//Call totalBalance
                const exceedAmount = document.getElementById('exceed-amount');
                exceedAmount.innerText = '';
        }
        else {
                const exceedAmount = document.getElementById('exceed-amount');
                exceedAmount.innerText = 'Exceed Amount';
        }
        //Disabled Button
        document.getElementById('withdraw-btn').setAttribute('disabled', true);
})

//Logout Section:
document.getElementById('logout').addEventListener('click', function () {
        window.location.href = 'index.html';
})
//Setup Deposit and Withdraw Button Validity:
document.getElementById('deposit-input').addEventListener('keyup', function (e) {
        if (e.target.value > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }
})
document.getElementById('deposit-input').addEventListener('change', function (e) {
        if (e.target.value > 0) {
                document.getElementById('deposit-btn').removeAttribute('disabled');
        }
        else {
                document.getElementById('deposit-btn').setAttribute('disabled', true);
        }
})


//Deposit Balance Setup:
document.getElementById('deposit-btn').addEventListener('click', function () {
        //Get Amount Input
        const deposit = document.getElementById('deposit-input');
        const depositText = deposit.value;
        const depositAmount = parseFloat(depositText);

        //Button Attribute Format:


        //Set Amount in Deposit Box
        const mainDeposit = document.getElementById('main-deposit');
        const mainDepositAmount = parseFloat(mainDeposit.innerText);
        mainDeposit.innerText = mainDepositAmount + depositAmount;

        //Update Main Balance:
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        totalBalance.innerText = totalBalanceAmount + depositAmount;

        //Clear Input Field:
        deposit.value = '';

        document.getElementById('deposit-btn').setAttribute('disabled', true);
})

//Withdraw Balance Setup:
document.getElementById('withdraw-btn').addEventListener('click', function () {
        //Get withdraw Amount Input:
        const withdraw = document.getElementById('withdraw-input');
        const withdrawText = withdraw.value;
        const withdrawAmount = parseFloat(withdrawText);

        //Update Amount in Withdraw Box:
        const mainWithdraw = document.getElementById('main-withdraw');
        const mainWithdrawAmount = parseFloat(mainWithdraw.innerText);
        mainWithdraw.innerText = withdrawAmount + mainWithdrawAmount;

        //Update Main Balance:
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        totalBalance.innerText = totalBalanceAmount - withdrawAmount;

        //Clear Withdraw Input:
        withdraw.value = '';
})

//Logout Section:
document.getElementById('logout').addEventListener('click', function () {
        window.location.href = 'index.html';
})
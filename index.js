const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('monthly-payment-result');


function calculate() {
    const r = Number(document.getElementById('annual-interest-rate').value) / 100 / 12;
    const n = Number(document.getElementById('number-of-repayment-months').value);
    const k = Number(document.getElementById('loan-amount').value);

    const z = k * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));

    if (isFinite(z)) {
        result.innerText = z.toFixed(2);
    } else {
        alert('Please enter valid values');
    }
}

calculateButton.addEventListener('click', calculate);


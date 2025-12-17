document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultText = document.getElementById('result-text');

    const addBtn = document.getElementById('add-btn');
    const subBtn = document.getElementById('sub-btn');
    const mulBtn = document.getElementById('mul-btn');
    const divBtn = document.getElementById('div-btn');
    const squareBtn = document.getElementById('square-btn');
    const cubeBtn = document.getElementById('cube-btn');

    function getValues() {
        return {
            val1: parseFloat(num1Input.value),
            val2: parseFloat(num2Input.value)
        };
    }

    function showResult(value) {
        resultText.textContent = `Result: ${value}`;
        resultText.style.color = '#38bdf8';
    }

    function showError(msg) {
        resultText.textContent = msg;
        resultText.style.color = '#f87171';
    }

    addBtn.addEventListener('click', () => {
        const { val1, val2 } = getValues();
        if (isNaN(val1) || isNaN(val2)) {
            showError('Please enter both numbers');
            return;
        }
        showResult(val1 + val2);
    });

    subBtn.addEventListener('click', () => {
        const { val1, val2 } = getValues();
        if (isNaN(val1) || isNaN(val2)) {
            showError('Please enter both numbers');
            return;
        }
        showResult(val1 - val2);
    });

    mulBtn.addEventListener('click', () => {
        const { val1, val2 } = getValues();
        if (isNaN(val1) || isNaN(val2)) {
            showError('Please enter both numbers');
            return;
        }
        showResult(val1 * val2);
    });

    divBtn.addEventListener('click', () => {
        const { val1, val2 } = getValues();
        if (isNaN(val1) || isNaN(val2)) {
            showError('Please enter both numbers');
            return;
        }
        if (val2 === 0) {
            showError('Cannot divide by zero');
            return;
        }
        showResult(val1 / val2);
    });

    squareBtn.addEventListener('click', () => {
        const { val1 } = getValues();
        if (isNaN(val1)) {
            showError('Please enter the first number');
            return;
        }
        showResult(val1 * val1);
    });

    cubeBtn.addEventListener('click', () => {
        const { val1 } = getValues();
        if (isNaN(val1)) {
            showError('Please enter the first number');
            return;
        }
        showResult(val1 * val1 * val1);
    });
});

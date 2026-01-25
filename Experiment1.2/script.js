let balance = 0;

const balanceDisplay = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const message = document.getElementById("message");

document.getElementById("depositBtn").addEventListener("click", () => {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        showMessage("Enter a valid deposit amount", "red");
        return;
    }

    balance += amount;
    updateBalance();
    showMessage(`₹${amount} deposited successfully`, "green");
    amountInput.value = "";
});

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const amount = Number(amountInput.value);

    if (amount <= 0) {
        showMessage("Enter a valid withdrawal amount", "red");
        return;
    }

    if (amount > balance) {
        showMessage("Insufficient balance", "red");
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage(`₹${amount} withdrawn successfully`, "green");
    amountInput.value = "";
});

function updateBalance() {
    balanceDisplay.textContent = `₹${balance}`;
}

function showMessage(text, color) {
    message.textContent = text;
    message.style.color = color;
}

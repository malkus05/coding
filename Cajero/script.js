const accounts = {
    cuenta1: { password: '1234', balance: 800 },
    cuenta2: { password: '5678', balance: 800 },
    cuenta3: { password: 'abcd', balance: 800 }
};

let currentAccount = null;

function authenticate() {
    const account = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    
    if (accounts[account] && accounts[account].password === password) {
        currentAccount = account;
        document.getElementById('account-selection').classList.add('hidden');
        document.getElementById('operations').classList.remove('hidden');
    } else {
        document.getElementById('message').textContent = 'Contraseña incorrecta. Intente nuevamente.';
    }
}

function checkBalance() {
    const balance = accounts[currentAccount].balance;
    document.getElementById('result').textContent = `Saldo actual: $${balance}`;
}

function deposit() {
    document.getElementById('transaction').classList.remove('hidden');
    document.getElementById('transaction-type').textContent = 'Ingresar Monto';
}

function withdraw() {
    document.getElementById('transaction').classList.remove('hidden');
    document.getElementById('transaction-type').textContent = 'Retirar Monto';
}

function completeTransaction() {
    const amount = parseFloat(document.getElementById('amount').value);
    
    if (amount <= 0 || isNaN(amount)) {
        document.getElementById('result').textContent = 'Ingrese un monto válido.';
        return;
    }
    
    const balance = accounts[currentAccount].balance;
    
    if (currentAccount) {
        if (document.getElementById('transaction-type').textContent === 'Ingresar Monto') {
            accounts[currentAccount].balance += amount; // Sumar el monto al saldo
            document.getElementById('result').textContent = `Transacción exitosa. Nuevo saldo: $${balance + amount}`;
        } else if (document.getElementById('transaction-type').textContent === 'Retirar Monto') {
            if (amount <= balance) {
                accounts[currentAccount].balance -= amount; // Restar el monto del saldo
                document.getElementById('result').textContent = `Transacción exitosa. Nuevo saldo: $${balance - amount}`;
            } else {
                document.getElementById('result').textContent = 'Saldo insuficiente para el retiro.';
            }
        }
    }
    
    document.getElementById('transaction').classList.add('hidden');
}

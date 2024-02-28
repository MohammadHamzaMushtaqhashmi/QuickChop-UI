{/*
export async function register(data) {
    const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


export async function login(data) {
    const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}


export async function getMessages() {
    const response = await fetch('http://localhost:3000/game/get-messages');
    return response.json();
}


export async function sendMessage(token, newMessage) {
    const response = await fetch('http://localhost:3000/game/send-message-to-chatbox', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newMessage)
    });
    return response.json();
}


export async function deposit(token, amount) {
    const response = await fetch('http://localhost:3000/transaction/deposit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: amount, bonusFlag: true })
    });
    return response.json();
}

export async function verifyDeposit(token, referenceNumber) {
    const response = await fetch('http://localhost:3000/game/verify-deposit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ depositId: referenceNumber })
    });
    return response.json();
}

export async function withdraw(token, amount) {
    const response = await fetch('http://localhost:3000/game/with-draw', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: amount })
    });
    return response.json();
}

export async function getUserGameHistory(userId) {
    const response = await fetch('http://localhost:3000/game/get-user-history', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId })
    });
    return response.json();
}

export async function sendBet(token, betDetails){
    const response = await fetch('http://localhost:3000/game/send-bet',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify(betDetails)
    });
    return response.json();
}
*/}
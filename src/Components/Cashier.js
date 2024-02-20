import React, { useState } from 'react';
import { deposit, verifyDeposit, withdraw } from './APIs';
import { Form, Button, Modal, Alert, Table } from 'react-bootstrap';

function Cashier({ token }) {
    const [activeTab, setActiveTab] = useState('DEPOSIT');
    const [activeDepositTab, setActiveDepositTab] = useState('INSTANT');

    return (
        <div style={{
            backgroundColor: '#2c2d30',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px 0px rgba(0,0,0,0.2)',
            margin: 'auto',
        }}>

            <Modal.Header closeButton className="chat-modal-header" closeLabel="" closeVariant="white" style={{ border: 'none', padding: '0', color: 'white' }}></Modal.Header>
            <h1 style={{ textAlign: 'center' }}>Wallet</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button style={{ border: 'none', margin: '15px', padding: '10px', background: 'none', color: 'white', fontSize: 'large', textDecoration: activeTab === 'DEPOSIT' ? 'underline' : 'none' }} onClick={() => setActiveTab('DEPOSIT')}>DEPOSIT</button>
                <button style={{ border: 'none', margin: '15px', padding: '10px', background: 'none', color: 'white', fontSize: 'large', textDecoration: activeTab === 'WITHDRAW' ? 'underline' : 'none' }} onClick={() => setActiveTab('WITHDRAW')}>WITHDRAW</button>
                <button style={{ border: 'none', margin: '15px', padding: '10px', background: 'none', color: 'white', fontSize: 'large', textDecoration: activeTab === 'HISTORY' ? 'underline' : 'none' }} onClick={() => setActiveTab('HISTORY')}>HISTORY</button>
            </div>
            {activeTab === 'DEPOSIT' && (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <button style={{ background: activeDepositTab === 'INSTANT' ? 'primary' : 'black', color: 'white', padding: '10px' }} onClick={() => setActiveDepositTab('INSTANT')}>Instant Deposit</button>
                        <button style={{ background: activeDepositTab === 'INSTRUCTIONS' ? 'primary' : 'black', color: 'white', padding: '10px' }} onClick={() => setActiveDepositTab('INSTRUCTIONS')}>Deposit Instructions</button>
                    </div>
                    {activeDepositTab === 'INSTANT' && <InstantDeposit token={token} />}
                    {activeDepositTab === 'INSTRUCTIONS' && <DepositInstructions />}
                </>
            )}
            {activeTab === 'WITHDRAW' && <Withdraw token={token} />}
            {activeTab === 'HISTORY' && <History />}
        </div>
    );
}

function InstantDeposit({ token }) {
    const [amount, setAmount] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const handleDeposit = async () => {
        try {
            const data = await deposit(token, amount);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleVerify = async () => {
        try {
            const data = await verifyDeposit(token, referenceNumber);
            console.log(data);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <Form>
                <Form.Group controlId="formAmount">
                    <Form.Label style={{ paddingTop: '5px' }}>AMOUNT (XAF)</Form.Label>
                    <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} />
                    <Form.Text style={{ color: 'white', padding: '15px', }}>
                        <div> <b>Please note:</b> <br></br>
                            The minimum deposit required to get a bonus is <b>XAF 300</b> <br></br>
                            Withdrawals will <b>NOT</b> be possible until the bonus is redeemed.
                        </div>
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" onClick={handleDeposit} disabled={amount < 50} style={{ width: '100%', padding: '10px' }} >
                    DEPOSIT
                </Button>

                <Alert variant="info" style={{ marginTop: '10px' }}>
                    Your deposit is processed within 2 minutes. When there are delays, enter the <b> mobile money transaction code</b> in the form below and press <b>Verify</b>.
                    For assistance, contact us on 237671740606.
                </Alert>
                <div style={{ alignContent: 'center', border: '2px solid #2c2d30' }}>
                    <h2>Verify pending deposit</h2>
                    <p style={{ padding: '10px' }}>We automatically verify all mobile money transactions and you may never have to use this step. ONLY use this if your deposit is delayed for more than a minute.</p>
                </div>
                <Form.Group controlId="formReferenceNumber">
                    <Form.Label>Mobile Money Reference Number</Form.Label>
                    <Form.Control type="text" placeholder="e.g., OLKX12DFM" value={referenceNumber} onChange={e => setReferenceNumber(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleVerify} style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
                    VERIFY
                </Button>
            </Form>
        </>

    )
}

function DepositInstructions() {
    // Deposit Instructions component
    return (
        <>
            <div style={{ border: '2px solid #383a3e', padding: '15px', marginTop: '10px', lineHeight: '1.5' }}>
                <b>NOTE :</b> <br></br>
                <div style={{ padding: '15px' }}> inimum deposit amount is <b>XAF 100</b><br></br>
                    <br></br>
                    You can ONLY deposit using the same phone number you use to login.
                    <br></br>
                    You cannot deposit while you have an active bonus
                </div>
                <h5 style={{ color: '#FFC107', textAlign: 'center' }}>HOW TO DEPOSIT ON QuickChop?</h5>
                <ol>
                    <li>Go to play.tatami.cm</li>
                    <li>Select Cashier</li>
                    <li>Select Deposit</li>
                    <li>Enter the Amount</li>
                    <li>Press Deposit</li>
                </ol>
            </div>
            <Alert variant="info" style={{ marginTop: '10px' }}>
                <p>Your deposit is processed within 2 minutes. When there are delays, enter the <b> mobile money transaction code</b> in the form below and press <b>Verify </b>.</p>
                <p>For assistance, contact us on 237671740606</p>
            </Alert>
        </>
    );
}

function Withdraw({ token }) {
    const [amount, setAmount] = useState('');

    const handleWithdraw = async () => {
        try {
            const data = await withdraw(token, amount);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Alert variant="info">
                <h2> Withholding Tax Notice</h2> As provided for by Cameroon Tax Law, all gaming companies are required to withhold winnings at a rate of 2%. This is the <b>Withholding Tax</b>. In compliance with the law, QuickChop will deduct and remit to 2% of all winnings.
            </Alert>

            <Form>
                <Form.Group controlId="formAmount">
                    <Form.Label>Amount (XAF)</Form.Label>
                    <Form.Control type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </Form.Group>
            </Form>

            <Table striped bordered hover style={{ marginTop: '5px' }}>
                <tbody>
                    <tr>
                        <td>Available Balance</td>
                        <td>24290.46</td>
                    </tr>
                    <tr>
                        <td>Withdraw Amount</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Withholding Tax</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Withdraw Fee</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Disbursed Amount</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </Table>

            <Button variant="primary" onClick={handleWithdraw} style={{ width: '100%' }}>
                WITHDRAW
            </Button>
        </>
    );

}

function History() {
    const historyData = [
        { status: 'pending', amount: 10001, date: '12/9/2023', type: 'withdraw' },
        { status: 'pending', amount: 60, date: '11/22/2023', type: 'withdraw' },
        { status: 'pending', amount: 1500, date: '11/21/2023', type: 'withdraw' },
        { status: 'pending', amount: 10000, date: '11/21/2023', type: 'withdraw' },
        { status: 'pending', amount: 500, date: '11/19/2023', type: 'withdraw' },
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {historyData.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.status}</td>
                        <td>{item.amount}</td>
                        <td>{item.date}</td>
                        <td>{item.type}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Cashier;

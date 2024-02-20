import React, { useState } from "react";
import { sendBet } from "./APIs";
import { Button, Row, Col, Container } from 'react-bootstrap';

function BettingOption({token, isSecond, setIsSecondOptionVisible, isSecondOptionVisible }) {
    const [selectedButton, setSelectedButton] = useState('bet')
    const [amount, setAmount] = useState(1.00);


    const handleBet = async () => {
        try{
            const betDetails = {
                bet_amount : amount,
                payout_multiplier : 2,
                auto_bet_round :1
           };
            const data = await sendBet(token, betDetails);
            console.log(data);
        }catch (error){
            console.error(error);
        }
    }

    const increment = () => {
        setAmount(prevAmount => prevAmount + 0.10)
    }
    const decrement = () => {
        if (amount > 0.10) {
            setAmount(prevAmount => prevAmount - 0.10);
        }
    }
    const styles = {
        container: {
            paddingTop: '5px',
            paddingBottom: '15px',
            marginTop: '10px'
        },
        button: {
            borderRadius: '10px',
            border: '0',
            padding: '0 35px',
            fontSize: '12px',
            color: '#fff',
            position: 'relative',
            zIndex: '1',
            borderColor: '#fff',
            backgroundColor: 'transparent',
        },
        selectedButton: {
            borderRadius: '10px',
            border: '0',
            padding: '0 15px',
            fontSize: '12px',
            position: 'relative',
            zIndex: '1',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
            backgroundColor: '#23757a'
        },
        betbutton: {
            fontSize: '14px',
            width: '64px',
            height: '18px',
            marginTop: '4px',
            lineHeight: '1',
            padding: '0',
            backgroundColor: '#e6be4b',
            border: '1px solid #36363c',
            color: '#000',
            textAlign: 'center',
            fontWeight: '700',
            alignItems: 'center',
            justifyContent: 'center',
        },

        mainBetbutton: {
            padding: '25px 5px',
            fontWeight: '400',
            lineHeight: '1.5',
            fontSize: '20px',
            border: '0',
            borderRadius: '22px',
            backgroundColor: '#567d33',
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 1px 2px rgb(0 0 0 / 50%)',
            width: '100%',
            textTransform: 'uppercase',
            height: '100%',
        },
        spinner: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid #3c3c42',
            backgroundColor: '#23757a',
            borderRadius: '22px',
            textAlign: 'center',
            width: '150px',
        },
        spinnerbut: {
            backgroundColor: '#000',
            padding: '0px',
            borderRadius: '50%',
            textAlign: 'center',
            width: '20px',
            height: '20px',
        },
        col: {
            paddingLeft: '0px',
            paddingRight: '0px'
        }
    };

    return (
        <Container fluid style={{ ...styles.container, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100%', backgroundColor: '#0e2527', borderRadius: '15px' }}>
            {isSecond ? (
                <Button style={{ position: 'absolute', right: 0, top: 0, backgroundColor: '#0e2527', borderRadius: '50%', margin: '10px' }} onClick={() => setIsSecondOptionVisible(false)}>-</Button>
            ) : (
                isSecondOptionVisible || <Button style={{ position: 'absolute', right: 0, top: 0, backgroundColor: '#0e2527', borderRadius: '50%', margin: '10px' }} onClick={() => setIsSecondOptionVisible(true)}>+</Button>
            )}
            <div style={{
                border: '1px solid #3c3c42',
                borderRadius: '22px',
            }}>
                <Row>
                    <Col><Button variant="primary" style={selectedButton === 'bet' ? styles.selectedButton : styles.button} onClick={() => setSelectedButton('bet')} >Bet</Button></Col>
                    <Col><Button variant="primary" style={selectedButton === 'auto' ? styles.selectedButton : styles.button} onClick={() => setSelectedButton('auto')}>Auto</Button></Col>
                </Row>
            </div>
            <Row>
                <Col xs={6} style={{ padding: '0px' }}>
                    <Row >
                        <div style={styles.spinner}>
                            <div><Col>${amount.toFixed(2)}</Col></div>
                            <div style={{display:'flex'}}>
                                <Col><Button variant="primary" onClick={decrement} style={styles.spinnerbut}>-</Button></Col>
                                <Col><Button variant="primary" onClick={increment} style={styles.spinnerbut}>+</Button></Col>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <Col style={styles.col} ><Button variant="secondary" style={styles.betbutton}>$1</Button></Col>
                        <Col style={styles.col}><Button variant="secondary" style={styles.betbutton}>$2</Button></Col>
                        <Col style={styles.col}><Button variant="secondary" style={styles.betbutton}>$5</Button></Col>
                        <Col style={styles.col}><Button variant="secondary" style={styles.betbutton}>$10</Button></Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Button variant="primary" style={styles.mainBetbutton} onClick={handleBet} >BET</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default BettingOption;

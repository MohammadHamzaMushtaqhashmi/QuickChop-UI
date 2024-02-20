import React from "react";


function TopBetsInterface() {
    const styles = {
        maindiv: {
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 78px)',
            borderRadius: '20px 20px 0 0',
            border: '1px solid #2a2b2e',
            backgroundColor: '#0e2527',
            overflow: 'auto'
        },
        button: {
            borderRadius: '10px',
            border: '0',
            padding: '0 15px',
            fontSize: '12px',
            color: '#fff',
            position: 'relative',
            zIndex: '1',
            borderColor: '#fff',
            backgroundColor: 'transparent'
        },
        buttondiv:
        {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#072627',
            border: '1px solid #2a2b2e',
            borderRadius: '22px'
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
        }
    };
    return (
        <div style={styles.maindiv}>
            <div style={styles.buttondiv}>
                <button style={styles.button}>HUGE WINS</button>
                <button style={styles.button}>BIGGEST WINS</button>
                <button style={styles.button}>MULYPILIERS</button>
            </div>
            <div style={styles.buttondiv}>
                <button style={styles.button}> Day</button>
                <button style={styles.button}>Months</button>
                <button style={styles.button}>Year</button>
            </div>
        </div>
    )
}

export default TopBetsInterface;
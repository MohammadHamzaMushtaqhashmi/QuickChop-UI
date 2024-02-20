import React from "react";
import Button from 'react-bootstrap/Button';

function LeftSection({ onButtonClick, selectedButton }) {
    const styles = {
        div : {
            display : 'flex',
            alignItems :'center',
            justifyContents : 'center',
            marginTop :'15px',
            marginBottom :'10px',
            border: '1px solid #3c3c42',
            borderRadius : '22px'
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

    return(
        <div style={styles.div}>
            <Button style={selectedButton === 'all' ? styles.selectedButton : styles.button} onClick={() => onButtonClick('all')}>All Bets</Button>
            <Button style={selectedButton === 'my' ? styles.selectedButton : styles.button} onClick={() => onButtonClick('my')}>My Bets</Button>
            <Button style={selectedButton === 'top' ? styles.selectedButton : styles.button} onClick={() => onButtonClick('top')}>Top Bets</Button>
        </div>
    )
}

export default LeftSection;


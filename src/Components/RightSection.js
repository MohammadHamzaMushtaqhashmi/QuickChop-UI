import React from "react";

function RightSection() {
    const styles = {
        resultHistory: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0px 0px 0px',
            marginTop : '15px',
            marginBottom : '10px',
            justifyContent: 'flex-end',
            background : 'linear-gradient(87deg, rgba(66,85,90,0) 70%, rgba(0,0,0,0.6755077030812324)'
        },
        history: {
            padding: 0,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
            marginBottom : '0px'
        },
        midHistory: {
            color: '#cca52f',
            padding: '7px',
            paddingLeft: '15px',
            paddingRight: '15px',
            backgroundColor: '#223335',
        },
        badge: {
            display: 'inline-block',
            padding: '.35em .65em',
            fontSize: '.75em',
            fontWeight: 700,
            lineHeight: 1,
            color: '#fff',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            borderRadius: '.25rem',
        }
    };

    return (
        <div style={styles.resultHistory}>
            <ul style={styles.history}>
                <li style={{...styles.badge, ...styles.midHistory}}>5.19x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >4.76x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >10.1x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >1.0x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >20.56x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >4.47x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >1.42x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >1.13x</li>
                <li style={{...styles.badge, ...styles.midHistory}} >1.73x</li>
            </ul>
        </div>
    )
}

export default RightSection;

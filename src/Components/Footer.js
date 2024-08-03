import React from "react";

function Foooter(){
    const footerStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#000',
        border: '1px solid #2a2b2e',
        fontSize: '11px',
        color: '#5e6269',
        padding: '0 10px',
        minHeight: '25px',
        maxHeight: '25px',
        fontFamily: 'bpg_arialregular',
        left: '10px'
    };

    return(
        <div style={footerStyle}>
            This Game is <img src="provabyfair.svg" alt="provabyfair.svg"/> Provably Fair .
        </div>
    )
} 

export default Foooter;

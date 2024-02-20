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

    const linkStyle = {
        fontSize: '12px',
        color: '#bbbfc5',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '500'
    };

    return(
        <div style={footerStyle}>
            This Game is <img src="provabyfair.svg"/> <a style={linkStyle}>Provably Fair</a> .
        </div>
    )
} 

export default Foooter;

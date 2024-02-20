
import React from "react";

function AllBetsInterface() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            borderRadius: '20px 20px 0 0',
            border: '1px solid #2a2b2e',
            backgroundColor: '#0e2527',
            overflow: 'auto'
        }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '6px',
                marginBottom: '6px',
                padding: '0 10px',

            }}
            >
                <p style={{padding:'2px'}}> Total Bets: <span style={{ color: '#427f00' }}>0</span></p>
                <p style={{
                    border: '1px solid #3c3c42',
                    borderRadius: '22px',
                    padding: '2px'
                }}><i className="fas fa-history"></i><span style={{ paddingLeft: '2px', }} /> Previous hand </p>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    width: '100%',
                    padding: '5px'
                }}>
                    <li>User</li>
                    <li>Bet</li>
                    <li>Multi.</li>
                    <li>win</li>
                </ul>
            </div>

        </div>
    )
}
export default AllBetsInterface;
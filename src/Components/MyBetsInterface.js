import React, {useEffect} from "react";
import { getUserGameHistory } from "./APIs";



function MyBetsInterface() {
    useEffect(() => {
        getUserGameHistory()
            .then(data => {
                // Do something with the data
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 78px)',
            borderRadius: '20px 20px 0 0',
            border: '1px solid #2a2b2e',
            backgroundColor: '#0e2527',
            overflow: 'auto'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    listStyle: 'none',
                    width: '100%',
                    padding: 4
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

export default MyBetsInterface;
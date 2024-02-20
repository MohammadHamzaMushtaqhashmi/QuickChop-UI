import React, { useEffect, useRef, useState } from "react";
import { getMessages, sendMessage } from "./APIs";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Chat({ username, token }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messageEndRef = useRef(null);
    // Fetch messages from the API when the component mounts
    useEffect(() => {
        getMessages()
            .then(data => {
                setMessages(data.responseData);
            })
            .catch(error => {
                console.error('Error fetching messages:', error);
            });
    }, []);

    const handleSend = () => {
        const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage = { text: input, username, timestamp };

        // Optimistically add the new message to the state
        setMessages([...messages, newMessage]);
        setInput('');

        // Send the new message to the API
        sendMessage(token, newMessage)
            .catch(error => {
                console.error('Error sending message:', error);
                // If the request fails, remove the message from the state
                setMessages(messages);
            });
    };

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages]);
    return (
        <div style={{ height: '400px', overflowY: 'auto', overflowX: 'hidden', backgroundColor: 'rgb(44,45,48)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
                <p>Online: 1</p>
                <p style={{ fontSize: 'larger', fontWeight: 'bold', paddingTop: '10px', }}>Chat lounch</p>
                <Modal.Header closeButton className="chat-modal-header" closeLabel="" closeVariant="white" style={{ border: 'none', padding: '0', color: 'white' }}></Modal.Header>
            </div>
            <hr></hr>
            <div style={{ flex: 1 }}>
                {messages.map((message, index) => (
                    <div key={index}>
                        <p >
                            <span style={{ color: 'lightgrey' }} >{message.timestamp}</span>  <span style={{ color: "orange" }}>{message.username}</span> :
                            {message.text}
                        </p>
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                <input style={{ width: '85%', padding: '10px', paddingLeft: '5px', borderRadius: '5px', border: '1px solid #ccc' }} value={input} onChange={e => setInput(e.target.value)} placeholder="Type into a message..." />
                <button style={{ width: '15%', background: 'none', color: 'white', border: 'none', }} onClick={handleSend}><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
        </div>
    );
}
export default Chat;

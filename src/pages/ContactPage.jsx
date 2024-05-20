import React, { useState, useEffect, useRef } from "react";

export default function ContactPage() {
    const [messages, setMessages] = useState([]);
    const messageMeRef = useRef(null);
    const chatMessagesRef = useRef(null);

    const addMessage = (sender, message) => {
        const newMessage = {
            sender,
            message,
            id: new Date().getTime()
        };
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    const receiveAutomaticMessage = () => {
        const contactInfo = {
            name: "Rifqi Setiawan",
            email: "rifqiaetiawa@gmail.com",
            phone: "0812345678"
        };
        const message = (
            <div>
                <p>Ada yang bisa dibantu? Silahkan hubungi contact di bawah ini:</p>
                <p><strong>Name:</strong> {contactInfo.name}</p>
                <p><strong>Email:</strong> {contactInfo.email}</p>
                <p><strong>Phone:</strong> {contactInfo.phone}</p>
            </div>
        );
        addMessage('Bot', message);
    };

    const handleSendClick = () => {
        const message = messageMeRef.current.value;
        if (message.trim() !== '') {
            addMessage('Me', message);
            messageMeRef.current.value = '';
            // Bot responds automatically after user sends a message
            setTimeout(receiveAutomaticMessage, 1000); // Bot responds after 1 second
        }
    };

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="container-fluid p-0">
            <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
                <div className="chat-container" style={{ maxHeight: '80vh' }}>
                    <div className="chat-header">
                        Chat
                    </div>
                    <div className="chat-messages" ref={chatMessagesRef}>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender === 'Me' ? 'me' : 'bot'}`}>
                                <strong>{msg.sender}:</strong> {msg.message}
                            </div>
                        ))}
                    </div>
                    <div className="chat-inputs">
                        <div className="chat-input-me">
                            <input type="text" id="message-me" placeholder="Type your message..." ref={messageMeRef} />
                            <button id="send-me" onClick={handleSendClick}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

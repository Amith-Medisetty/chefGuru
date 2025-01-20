import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user/get-messages', {
                    headers: {
                        'Authorization': `Bearer ${user?.token}`
                    }
                });
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error.message);
            }
        };

        fetchMessages();
    }, [user?.token]);

    const extractOutput = (text) => {
        // Regular expression to extract text after [/INST]
        const match = text.match(/\[INST\][^\[]*?\[\/INST\](.*)/);
        return match ? match[1] : text; // Return only the output part or original text if no match
    };

    return (
        <div className="chat-container">
            {messages.map((message, index) => (
                <div key={index} className={`message ${message.role}`}>
                    <p>{message.role === 'bot' ? extractOutput(message.text) : message.text}</p>
                    <span>{new Date(message.timestamp).toLocaleString()}</span>
                </div>
            ))}
        </div>
    );
};

export default ChatComponent;




// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../contexts/AuthContext';

// const ChatComponent = () => {
//     const [messages, setMessages] = useState([]);
//     const { user } = useContext(AuthContext);

//     useEffect(() => {
//         const fetchMessages = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/user/get-messages', {
//                     headers: {
//                         'Authorization': `Bearer ${user?.token}`
//                     }
//                 });
//                 setMessages(response.data);
//             } catch (error) {
//                 console.error('Error fetching messages:', error.message);
//             }
//         };

//         fetchMessages();
//     }, [user?.token]);

//     const extractOutput = (text) => {
//         // Regular expression to extract text after [/INST]
//         const match = text.match(/\[INST\][^\[]*?\[\/INST\](.*)/);
//         return match ? match[1] : text; // Return only the output part or original text if no match
//     };

//     return (
//         <div className="chat-container">
//             {messages.map((message, index) => (
//                 <div key={index} className={`message ${message.role}`}>
//                     <p>{message.role === 'bot' ? extractOutput(message.text) : message.text}</p>
//                     <span>{new Date(message.timestamp).toLocaleString()}</span>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChatComponent;

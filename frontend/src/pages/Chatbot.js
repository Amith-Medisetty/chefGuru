
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bot from "../components/Bot";
import Pantry from "../components/Pantry";
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';

const Chatbot = () => {
    const [tags, setTags] = useState([]);

    const handleTagClick = (tag) => {
        setTags(prevTags => [...prevTags, tag]);
    };

    return (
        <div className='chatbot-div'>
            {/* <Link to="/home">
                <h1 className="bujji-title">BUJJI<small>-The Chef</small></h1>
            </Link> */}
            <Navbar/>
            <div className="chatbot">
                <Pantry onTagClick={handleTagClick} />
                <Bot tags={tags} />
            </div>
        </div>
        
    );
};

export default Chatbot;


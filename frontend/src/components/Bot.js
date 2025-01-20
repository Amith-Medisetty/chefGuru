

// import React, { useState, useEffect } from 'react';
// import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Card from './Card';
// import { useAuthContext } from "../hooks/useAuthContext";

// const Bot = ({ tags }) => {
//     const { user } = useAuthContext();

//     const [prompt, setPrompt] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

//     useEffect(() => {
//         setPrompt(tags.join(', '));
//     }, [tags]);

//     const apiCall = async () => {
//         const response = await fetch(`https://api.edamam.com/search?q=${prompt}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
//         if (response.ok) {
//             const data = await response.json();
//             const randomRecipes = getRandomRecipes(data.hits, 5);
//             setRecipes(randomRecipes);
//             setCurrentRecipeIndex(0);
//         }
//     };

//     const getRandomRecipes = (recipes, count) => {
//         const shuffled = recipes.sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, count).map(hit => hit.recipe);
//     };

//     const handlePrevious = () => {
//         setCurrentRecipeIndex((prevIndex) => 
//             prevIndex > 0 ? prevIndex - 1 : recipes.length - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentRecipeIndex((prevIndex) => 
//             prevIndex < recipes.length - 1 ? prevIndex + 1 : 0
//         );
//     };

//     return (
//         <div className="bot">
//             <div className="recipe-container">
//                 {recipes.length > 0 && (
//                     <>
//                         <button className="nav-button prev" onClick={handlePrevious}>
//                             <FaChevronLeft />
//                         </button>
//                         <Card recipe={recipes[currentRecipeIndex]} />
//                         <button className="nav-button next" onClick={handleNext}>
//                             <FaChevronRight />
//                         </button>
//                     </>
//                 )} 
//             </div>
//             <div className="bot-input-container">
//                 <input 
//                     type="text"
//                     className="bot-input"
//                     value={prompt}
//                     placeholder={`Hey ${user ? user.username : "there"}!! Let's cook`}
//                     readOnly
//                     title={prompt} // This will show the full text on hover
//                 />
//                 <button 
//                     className="send-button"
//                     onClick={apiCall}
//                 >
//                     <FaLocationArrow />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Bot;














// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Card from './Card';
// import axios from 'axios';
// import ChatComponent from './ChatComponent'; 

// const Bot = ({ tags }) => {
//     const [prompt, setPrompt] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
//     const [useLLM, setUseLLM] = useState(false);
//     const [UserInfo,setUserInfo] = useState({})
//     const {user} = useContext(AuthContext)


//     console.log(user)
//     useEffect(() => {
//         setPrompt(tags.join(', '));
//     }, [tags]);


//     const apiCall = async () => {
//         const response = await fetch(`https://api.edamam.com/search?q=${prompt}&app_id=7aa516a5&app_key=dc836a223fb788b11ae390504d9e97ce&from=0&to=10`);
//         if (response.ok) {
//             const data = await response.json();
//             const randomRecipes = getRandomRecipes(data.hits, 3);
//             setRecipes(randomRecipes);
//             setCurrentRecipeIndex(0);
//         }
//     };

//     const LLMCall = async () => {
//         // YOUR LLM CALL HERE
//         try{
//             console.log('Processing req please wait...')
//             let test='http://localhost:5000/api/generate'
//         const response = await axios.post(test,{
//             "uid":UserInfo?.id,
//             "text":prompt,
//             "max_length": 50,
//             "role":"user",
//             "timestamp":new Date().toISOString()
//           },{headers:{'Authorization': `Bearer ${user?.token}`}});
//         if (response.status === 200 || response.status === 201) {
//             const data = response.data;
//             console.log('fetched')
//         }}catch(e){
//             alert(e.message)
//         }
//     };
//     const getRandomRecipes = (recipes, count) => {
//         const shuffled = recipes.sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, count).map(hit => hit.recipe);
//     };

//     const handlePrevious = () => {
//         setCurrentRecipeIndex((prevIndex) => 
//             prevIndex > 0 ? prevIndex - 1 : recipes.length - 1
//         );
//     };

//     const handleNext = () => {
//         setCurrentRecipeIndex((prevIndex) => 
//             prevIndex < recipes.length - 1 ? prevIndex + 1 : 0
//         );
//     };

//     const handleSubmit = () => {
//         if (useLLM) {
//             console.log('clicked on LLM call')
//             LLMCall();
//         } else {
//             apiCall();
//         }
//     };

//     return (
//         <div className="bot-div">
//         {/* Boolean useLLM if useLLM false use below div*/}

//             {/* <div className="recipe-container">
//                 {recipes.length > 0 && (
//                     <>
//                         <button className="nav-button prev" onClick={handlePrevious}>
//                             <FaChevronLeft />
//                         </button>
//                         <Card recipe={recipes[currentRecipeIndex]} />
//                         <button className="nav-button next" onClick={handleNext}>
//                             <FaChevronRight />
//                         </button>
//                     </>
//                 )} 
//             </div> */}
//             {useLLM ? (
//                 <ChatComponent />
//             ) : (
//                 <div className="recipe-container">
//                     {recipes.length > 0 && (
//                         <>
//                             <button className="nav-button prev" onClick={handlePrevious}>
//                                 <FaChevronLeft />
//                             </button>
//                             <Card recipe={recipes[currentRecipeIndex]} />
//                             <button className="nav-button next" onClick={handleNext}>
//                                 <FaChevronRight />
//                             </button>
//                         </>
//                     )}
//                 </div>
//             )}


//             {/* OR ELSE USE NEW DIV specifying LLM component so that we can display things in chat format. */}
//             <div className="bot-input-container">
//                 <input 
//                     type="text"
//                     className="bot-input"
//                     value={prompt}
//                     placeholder={`Hey ${user.username}!! Let's Cook`}
//                     onChange={(e) => setPrompt(e.target.value)}
//                     title={prompt} // This will show the full text on hover
//                 />
//                 <div className="toggle-container">
//                     <label className="toggle-switch">
//                         <input 
//                             type="checkbox" 
//                             checked={useLLM} 
//                             onChange={() => setUseLLM(!useLLM)} 
//                         />
//                         <span className="slider"></span>
//                     </label>
//                     <span className="toggle-label">{useLLM ? 'LLM' : 'API'}</span>
//                 </div>
//                 <button 
//                     className="send-button"
//                     onClick={handleSubmit}
//                 >
//                     <FaLocationArrow />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Bot;











// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';
// import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Card from './Card';
// import axios from 'axios';
// import ChatComponent from './ChatComponent'; 
// const Bot=async()=>{
//     const [prompt, setPrompt] = useState('');
//     const response = await fetch('/api/chat', {
//         method: 'POST',
//         body: JSON.stringify(message),
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       })
//     const handleSubmit=(e)=>{
//         setPrompt()
//     }
//     return(
//         <div className='bot-input-container'>
//              <input 
//                     type="text"
//                     className="bot-input"
//                     value={prompt}
//                     onChange={(e) => setPrompt(e.target.value)}
//              />
//              <button 
//                     className="send-button"
//                     onClick={handleSubmit}
//                  >
//                      <FaLocationArrow />
//                </button>

//         </div>

//     )
// }
















// import React, { useState } from 'react';
// import { FaLocationArrow } from "react-icons/fa";
// import axios from 'axios';

// const Bot = () => {
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await axios.post('/api/chat', { message: prompt }, {
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
//       setResponse(result.data);
//     } catch (error) {
//       console.error('Error sending message:', error);
//     }
//   };

//   return (
//     <div className='bot-input-container'>
//       <input 
//         type="text"
//         className="bot-input"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//       />
//       <button 
//         className="send-button"
//         onClick={handleSubmit}
//       >
//         <FaLocationArrow />
//       </button>
//       {response && (
//         <div className="response-container">
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Bot;


import React, { useState, useEffect } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import axios from 'axios';

const Bot = ({ tags }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    if (tags.length) {
      setPrompt(`I have ${tags.join(', ')}`);
    }
  }, [tags]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/chat', { message: prompt }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className='bot-input-container'>
      <input 
        type="text"
        className="bot-input"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button 
        className="send-button"
        onClick={handleSubmit}
      >
        <FaLocationArrow />
      </button>
      {response && (
        <div className="response-container">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default Bot;


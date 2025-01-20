

// import React from 'react';
// import Data from '../Dataset/pantrydata';

// const Pantry = () => {

//     const PantryData = Data.map((eachset) => {

//         const ingredients = eachset.items.map(i => {
//             return (
//                 <button key={eachset.id} className='pantry-button'>{i}</button>
//             )
//         });

//         return (
//             <div className='pantry-category' key={eachset.id}>
//                 <h5>{eachset.category}</h5>
//                 {ingredients}
//             </div>
//         );
//     });

//     return (
//         <div className="pantry">
//             <h2>Pantry</h2>
//             <div className="scrollbar" id="style-5">
//                 <div className="force-overflow">
//                     {PantryData}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pantry;









// import React, { useState} from 'react';
// import { Link } from 'react-router-dom';
// import Data from '../Dataset/pantrydata';

// const Pantry = ({ onTagClick }) => {
//     const PantryData = Data.map((eachset) => {
//         const ingredients = eachset.items.map(i => (
//             <button 
//                 key={i} 
//                 className='pantry-button'
//                 onClick={() => onTagClick(i)}
//             >
//                 {i}
//             </button>
//         ));

//         return (
//             <div className='pantry-category' key={eachset.id}>
//                 <h4>{eachset.category}</h4>
//                 {ingredients}
//             </div>
//         );
//     });

//     return (
//         <div className="pantry">
//             <div className='side-nav'>
//                 <button>
//                     favourites
//                 </button>
//             </div>
            
//             <h2>Pantry</h2>
//             <div className="scrollbar" id="style-5">
//                 <div className="force-overflow">
//                     {PantryData}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Pantry;


import React from 'react';
import Data from '../Dataset/pantrydata';

const Pantry = ({ onTagClick }) => {
    return (
        <div className="pantry">
            <div className='side-nav'>
                <button>
                    Favourites
                </button>
            </div>
            
            <h2>Pantry</h2>
            <div className="scrollbar" id="style-5">
                <div className="force-overflow">
                    {Data.map((eachset) => (
                        <div className='pantry-category' key={eachset.id}>
                            <h4>{eachset.category}</h4>
                            {eachset.items.map((item) => (
                                <button 
                                    key={item} 
                                    className='pantry-button'
                                    onClick={() => onTagClick(item)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pantry;


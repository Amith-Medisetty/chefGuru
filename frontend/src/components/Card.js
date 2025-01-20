
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';



const Card = ({ recipe }) => {
    const [liked, setLiked] = useState(false);
    const { user,token } = useContext(AuthContext);

    const checkIfLiked = async () => {
        if (!user) return;
    
        try {
            const response = await axios.get(`http://localhost:5000/api/liked-recipes`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const RECIPEID = recipe.uri.split('#')[1];
            const isLiked = response.data.some(likedRecipe => likedRecipe.recipeId === RECIPEID);
            setLiked(isLiked);
        } catch (error) {
            console.error('Error checking if recipe is liked:', error);
        }
    };

    useEffect(() => {
        checkIfLiked();
    }, [user, token, recipe.uri]);
    
    const handleLike = async () => {
        if (!user) {
            alert('Please log in to like recipes');
            return;
        }
    
        try {
            let RECIPEID = recipe.uri.split('#')[1];
    
            if (!liked) {
                const response = await axios.post('http://localhost:5000/api/like-recipe', {
                    recipeId: RECIPEID,
                    recipe: recipe
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 201) {
                    setLiked(true);
                }
            } else {
                const response = await axios.delete(`http://localhost:5000/api/unlike-recipe/${RECIPEID}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status === 200) {
                    setLiked(false);
                }
            }
            // Re-check the liked status after the operation
            checkIfLiked();
        } catch (error) {
            console.error('Error liking/unliking recipe:', error);
            alert('An error occurred. Please try again.');
            checkIfLiked();
        }
    };

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label} className="recipe-image" />
            <div className="recipe-details">
                <div className="recipe-header">
                    <h2 className="recipe-title">{recipe.label}</h2>
                    <button 
                        className={`like-button ${liked ? 'liked' : ''}`} 
                        onClick={handleLike}
                    >
                        {liked ? '❤️' : '🤍'}
                    </button>
                </div>
                <p className="recipe-source">Source: {recipe.source}</p>
                <p className="recipe-yield">Yield: {recipe.yield}</p>
                <p className="recipe-ingredients-title">Ingredients:</p>
                <ul className="recipe-ingredients">
                    {recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <a href={recipe.url} className="recipe-link">View Full Recipe</a>
            </div>
        </div>
    );
};

export default Card;
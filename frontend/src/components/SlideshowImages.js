
import { useState, useEffect } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';

const SlideshowImages = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5
        // Add paths to more images as needed
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
            <div className="slideshow">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={index === currentIndex ? 'active' : ''}
                        alt="Slideshow"
                    />
                ))}
            </div>
    );
}

export default SlideshowImages;
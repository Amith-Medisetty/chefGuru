import SlideshowImages from '../components/SlideshowImages';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image5 from '../images/image5.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()

    const nav=()=>{
        navigate('/chatbot')
    }
    return (
        <div className='home-section'>
            <Navbar/>
            {/* <div className='home-top'>
                <h1>Unleashing culinary creativity with AI innovation.</h1>
                <Link to="/chatbot" >
                    <button className='trybot-button'>Try Bot</button>
                </Link>
            </div> */}
            
            <main>
                <section class="hero">
                    {/* <h2>Delicious Recipes. Daily Updated.</h2>
                    <p>Daily new Recipes and Cooking tips.</p> */}
                    <h1>Unleashing culinary creativity with AI innovation.</h1>
                    {/* <Link to="/chatbot" >  */}
                        <button className='trybot-button' onClick={nav}>Try Bot</button>
                    {/* </Link> */}
                </section>
                <section class="cards">
                    <div class="card card-left">
                        <img src={image1} alt="Banana with Chocolate Sauce"/>
                        <h3>Crispy Masala Dosa with coconut chutney</h3>
                    </div>
                    <div class="card card-large">
                        <img src={image2} alt="Tasty Mozarella Buns"/>
                        <h3>homely vegetable curry with rice</h3>
                    </div>
                    <div class="card card-right">
                        <img src={image5} alt="Real American Hamburger"/>
                        <h3>Authentic Hyderabadi Lamp Biryani</h3>
                    </div>
                </section>
            </main>
            
        </div>
    );
}

export default Home;







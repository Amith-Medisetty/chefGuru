import Bujji from "./Bujji"

const About = ()=>{
    return(
        <div className="about">
            {/* <h1 className="typing">Hi! I'm BUJJI</h1> */}
            <div className="about-content">
                <h3>About</h3>
                <p>
                    Welcome to Bujji, your personalised chef, your go-to solution for finding recipes based on the ingredients you have at home. Our mission is to make home cooking easy, fun, and resourceful by helping you create delicious meals without the hustle of endless online searches.
                </p>
                <p>
                    How It Works<br/>
                    Input Ingredients: Enter the ingredients you have.<br/>
                    Recipe Suggestions: Get a list of matching recipes, powered by advanced AI.<br/>
                    Cook and Enjoy: Follow easy instructions to prepare your meal.
                </p>
                <p>
                    {/* Our Technology
                    <ul>
                        <li>MERN Stack: Ensures a robust and scalable platform.</li>
                        <li>AI Integration:Llama 2 for intelligent suggestions.</li>
                        

                    </ul> */}
                    <h3>Let's cook something amazing together!</h3>
                </p>            
            </div>
        </div>
    )
}

export default About





// const About = () => {
//     const content = "There are only three ways to make this work. The first is to let me take care of everything. The second is for you to take care of everything. The third is to split everything 50 / 50. I think the last option is the most preferable, but I'm certain it'll also mean the end of our marriage.";
  
//     return (
//       <section className="about">
//         <h1>About</h1>
//         {[...Array(6)].map((_, index) => (
//           <p key={index}>{content}</p>
//         ))}
//       </section>
//     );
//   };
  
//   export default About;
  
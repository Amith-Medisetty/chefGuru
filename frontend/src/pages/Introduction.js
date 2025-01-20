

//components
// import WorkoutDetails from '../components/WorkoutDetails'
import Login from "../components/Login"
import About from '../components/About'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"

const Introduction = () =>{
    
    return(
        <div className="intro">
            {/* <Link to="/home">
                <h1 className="bujji-title">BUJJI<small>-The Chef</small></h1>
            </Link> */}
            {/* <Navbar2/> */}
        
        <div className="introduction">
            
            {/* <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div> */}
            <Login />
            <About />

        </div>
        </div>
    )
}

export default Introduction




// import { useEffect, useState } from "react";

// // Components
// import WorkoutForm from "../components/WorkoutForm";
// import About from "../components/About";

// const Introduction = () => {
//   const [workouts, setWorkouts] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWorkouts = async () => {
//       try {
//         const response = await fetch("/api/workouts");
//         if (!response.ok) {
//           throw new Error("Failed to fetch workouts");
//         }
//         const json = await response.json();
//         setWorkouts(json);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchWorkouts();
//   }, []);

//   return (
//     <div className="introduction">
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {/* <div className="workouts">
//         {workouts && workouts.map((workout) => (
//           <WorkoutDetails key={workout._id} workout={workout} />
//         ))}
//       </div> */}
//       <About />
//       <WorkoutForm />
//     </div>
//   );
// };

// export default Introduction;

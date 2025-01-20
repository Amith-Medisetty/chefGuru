
// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext';

// //pages and components
// import Introduction from './pages/Introduction'
// import Home from './pages/Home';
// import Navbar from './components/Navbar';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Chatbot from './pages/Chatbot';
// import Test from './components/Test';

// function App() {

//   const {user} = useAuthContext()

//   return (
    
//     <div >
//       <BrowserRouter>
//         {/* <Navbar /> */}
//         <div className='pages'>
//           <Routes>
//             <Route
//               path="/"
//               element={!user ? <Introduction /> : <Navigate to="/home" />}
//             />
//             <Route
//               path='/home'
//               element={ <Home />}
//             />
//             <Route
//               path="/signup"
//               element={!user ? <Signup /> : <Navigate to="/home" />}
//             />
//             <Route
//               path='/chatbot'
//               element={user ? <Chatbot /> : <Navigate to="/" />}
//             />
//             <Route
//               path='/test'
//               element={<Test />}
//             />
//           </Routes>
//         </div>

//         {/* <sathu /> */}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;




import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Introduction from './pages/Introduction';
import Home from './pages/Home';
import Signup from './components/Signup';
import Chatbot from './pages/Chatbot';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!user ? <Introduction /> : <Navigate to="/home" />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/home" />}
          />
          <Route
            path="/chatbot"
            element={user ? <Chatbot /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

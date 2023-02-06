import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Form.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import React   from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
// import Topics from './Components/Topics';
// import Html from './Components/Html';
// import Css from './Components/Css';
import Nopage from './Components/Nopage';
import Profile from './Components/Profile';
import { Authprovider } from './Components/Auth';
import Navbar from './Components/Navbar';

import { RequireAuth } from './Components/Require';
import Login from './Components/Login';





function App() {
  
  
  return (
 
   
      <Authprovider>
      <BrowserRouter>
      <div className='App'>
         <Navbar />
      
        

       
      <Routes>
     
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/service' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        {/* <Route path='/Topics' element={<Topics/>}>
          <Route path='html' element={<Html/>}></Route>
          <Route path='css' element={<Css/>}></Route>
        </Route> */}
        <Route path='/profile' element={< RequireAuth>< Profile/></RequireAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       
  
        <Route path='/*' element={<Nopage/>}/>
      </Routes>
      </div>
     
      </BrowserRouter>
      </Authprovider>
     

   
   



    
  );
}

export default App;


// -------------------------------sidenav bar
// import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
// const Home = () => <h1>Home page</h1>;
// const Profile = () => <h1>Profile page </h1>;
// const Settings = () => <h1>Settings page </h1>;

// const routes = [
//   {
//     path: "/",
//     main: () => <Home />,
//     sidebar: () => (
//       <p style={{padding:50}}>
//         This is your home page. You'll see your feed which is made up of the
//         people you follow.
//       </p>
//     ),
//   },
//   {
//     path: "/profile",
//     main: () => <Profile />,
//     sidebar: () => (
//       <p style={{padding:50}}>
//         This is your profile page. You'll be able to see all your profile
//         information as well as the people you follow.
//       </p>
//     ),
//   },
//   {
//     path: "/settings",
//     main: () => <Settings />,
//     sidebar: () => (
//       <p style={{padding:50}}>
//         This is your settings page. You can change your name, image, and
//         anything else associated with your account.
//       </p>
//     ),
//   },
// ];




// export default function App() {
//   return (
    
//    <BrowserRouter>
//     <div className="wrapper">
//       <div className="sidebar "  style={{display: "flex"}} >
//         <ul className="nav" style={{display: "block"}}>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/settings">Settings</Link>
//           </li>
//         </ul>

       
      

    
//       <Routes>
//           {routes.map(({ path, sidebar }) => (
//             <Route key={path} path={path} element={sidebar()} />
//           ))}
//         </Routes>
//       </div>

//       <Routes>
//         {routes.map(({ path, main }) => (
//           <Route key={path} path={path} element={main()} />
//         ))}
//       </Routes> 
//       </div>
      
//       </BrowserRouter>
   
//   );
// }
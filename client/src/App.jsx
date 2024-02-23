
import './App.css';
// import AboutUs from './pages/AboutUs.jsx'
import Contactus from './pages/ContactUs.jsx'
import Navbar from "./components/Navbar.jsx"
import Footer from './components/Footer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Gallery from './pages/Gallery.jsx';
import { ValidateEmail } from './pages/ValidateEmail.jsx';
import AboutUs from './pages/AboutUs.jsx';
// import { useAuthContext } from './hooks/useAuthContext';

const Layout  = () => {
  
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      {/* <Route path="/aboutus" element={<AboutUs />}></Route>       */}
      <Route path="/contactus" element={<Contactus />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/validate_email" element={<ValidateEmail />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>
    </Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/register" element={<Signup />}></Route>
    </Route>
  ))

function App() {
  // const { user } = useAuthContext()

  // if (!user) {
  //   // Not logged in, show login page
  //   return (
  //     <Login />
  //     )
  // }
  return (

    <>
    <div className="font-bodyFont">
        <RouterProvider router={router} /> 
    </div>
  </>
  );
}

export default App;

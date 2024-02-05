
import './App.css';
import Navbar from "./components/Navbar.jsx"
import HeroSection from './components/HeroSection.jsx';
import AboutUs from './pages/AboutUs.jsx'
import  Footer from './components/Footer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home.jsx';

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
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/aboutus" element={<AboutUs />}></Route>      
    </Route>
  ))

function App() {
  return (
    <>
      <div className="font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;


import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx';
import Services from './components/Services.jsx'
import AboutUs from './components/AboutUs.jsx'
import Client from './components/Client.jsx';
import Offers from './components/Offers.jsx';
import  Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Offers />
      <Client />
      <Footer />
    </>
  );
}

export default App;

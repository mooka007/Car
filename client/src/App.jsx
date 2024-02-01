
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx';
import Services from './components/Services.jsx'
import AboutUs from './components/AboutUs.jsx'
import Client from './components/Client.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
      <Client />
    </>
  );
}

export default App;

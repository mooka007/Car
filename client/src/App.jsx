
import './App.css';
import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx';
import Services from './components/Services.jsx'
import AboutUs from './components/AboutUs.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Services />
    </>
  );
}

export default App;

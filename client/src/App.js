
import './App.css';
import Header from "./components/Home/Header";
import Home from "./pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return ( 
    <div>
      <Header />
      {/* <Footer /> */}
    </div>
  )
}


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Route>
  )
  );

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

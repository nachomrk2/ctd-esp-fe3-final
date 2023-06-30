
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Home from "./Routes/Home"
import Card from './Components/Card'


function App() {
  return (
      <div className="App">
          <Navbar/>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/dentist/:id' element={<Detail/>}/>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;


/* API
La API a utilizar sera la siguiente: https://jsonplaceholder.typicode.com/users

Y para cada dentista en especifico: https://jsonplaceholder.typicode.com/users/:id */
import './App.scss'
import Register from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { AuthContext } from "./components/Context/AuthContext.jsx";
import { useContext } from "react";

function App() {

   const { currentUser } = useContext(AuthContext);
  
   console.log(currentUser)

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

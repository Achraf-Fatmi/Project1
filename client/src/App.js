
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import CompNavbar from './Componentes/NavbarComp';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import Profile from './Pages/Profile/Profile';
import Admin from './Pages/Admin/Admin';
import NotFound from './Pages/NotFound';
import NoAccess from './Pages/NoAccess';
import PrivateRouter from './Componentes/PrivateRouter';
import AdminRouter from './Componentes/AdminRouter';
import ForceRedirect from './Componentes/ForceRedirect';
function App() {
  const user = {
    isConnected : false,
    role : "ADMIN"
  }
  return (
    <div className="App">

      <BrowserRouter>
      <CompNavbar user={user}/>
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={
          <ForceRedirect user={user}>
          <Login />
          </ForceRedirect>
          }/>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={
          <PrivateRouter user ={user}>
            <Profile />
          </PrivateRouter>
        } />
          <Route path="/admin" element={
        <AdminRouter user ={user}>
          <Admin />
          </AdminRouter>
        } />
          <Route path ="*" element={<NotFound />} />
          <Route path ="/noaccess" element={<NoAccess />} />
 
    </Routes>
  </BrowserRouter>,
    </div>
  );
}

export default App;

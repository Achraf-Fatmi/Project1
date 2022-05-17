import React , {useEffect} from "react"
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
import { Logout, setUser } from './redux/actions/authActions';
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './utilities/setAuth';
import { GetProfile } from './redux/actions/profileActions';

if (window.localStorage.jwt){
  const decode = jwt_decode(window.localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate= Date.now / 1000

  if (decode.exp > currentDate){
    store.dispatch(Logout())
  }
}



function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state=> state.auth)
  const user = {
    isConnected : auth.isConnected,
    role : auth.user.role
  }
  useEffect(()=>{
    dispatch(GetProfile())
  }, [])
  return (
    <div className="App">

      <BrowserRouter>
      <div>
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
    </div>
  </BrowserRouter>,
    </div>
  );
}

export default App;

import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthState,addErrorText } from '../../redux/authSlice';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';




export default function Login() {
  const [login, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
const data = useSelector(state => state.auth.students)
const auth = useSelector(state => state.auth.auths)
const error = useSelector(state => state.auth.error)
const dispatch = useDispatch();
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const handleSubmit = e => {
    e.preventDefault()
    let authUser =  data.find(item => item.authCode == password && item.uniqLogin === login);
    if(authUser){
        dispatch(addAuthState(true))
    }
    else{
      dispatch(addAuthState(false));
      dispatch(addErrorText("Login yoki parol mos emas!"));
    }
    setPassword("")
    setUserLogin("")
  
  }

  return(
    <div className="login-wrapper">
      <h1>Iltimos maxsus login va parolingizni kiriting!</h1>
      <form onSubmit={handleSubmit} style={{width:"300px", backgroundColor:"white", padding:"15px"}}>
        <label>
          <p>Login</p>
          <input type="text" value={login} onChange={(e) => setUserLogin(e.target.value)} style={{width:"100%", padding:"5px"}}/>
        </label>
        <label>
          <p>Parol</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"100%", padding:"5px"}}/>
        </label>
        <div>
      
        <button className='loginButton' type="submit">Yuborish</button> 
       {
         auth
       ?
      <Link to="/natijalar" style={{ color:"#438933", marginLeft:"1rem"}}> Natijalarni Ko'rish </Link>
       : 
      <h4 style={{color:"red"}}>{error}</h4>
      }
        </div>
      </form>
    </div>
  )
}

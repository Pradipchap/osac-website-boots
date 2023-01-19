import React  from 'react'

// import Admin from '../admin';
// import Login from './login';
// import Home from '../home';
import { Navigate,Outlet } from 'react-router-dom';

export default function Protected({user}) {
    let username=user();
    // console.log(username)

    

  return (
    username==="pradipcpgn@gmail.com"?<Outlet/>:<Navigate to='./login'/>


  )
}

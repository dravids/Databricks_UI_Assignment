import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../screens/Home/Home';

function Routers() {
  return (
    <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" element={<Navigate replace to="/home"></Navigate>}>
        </Route>
    </Routes>
  )
}

export default Routers;
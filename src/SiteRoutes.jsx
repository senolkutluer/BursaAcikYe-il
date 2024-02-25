import React from 'react'
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Beach from './Components/Beach';
import Hospital from './Components/Hospital';
import Emergency from './Components/Emergency';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';

function SiteRoutes({searchTerm}) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beach" element={<Beach searchTerm={searchTerm} />} />
        <Route path="/Hospital" element={<Hospital searchTerm={searchTerm}/>} />
        <Route path="/emergency" element={<Emergency searchTerm={searchTerm}/>} />
      </Routes>
    );
  }

export default SiteRoutes
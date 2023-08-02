// Dashboard.js
import React, { useState, useEffect } from 'react';
import Siderbar from '../siderbar';
import DashboardView from '../dashboardview';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {


  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh]'>
        <Siderbar/>
      </div>
      <div className='basis-[88%] border'>
        <DashboardView /> 
        <br/>
        <marquee>Welcome to Sped Text to Speech</marquee>

        <div>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

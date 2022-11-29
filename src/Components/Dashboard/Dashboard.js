import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
           <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
  <h1 className='text-4xl text-center font-bold text-primary'>Welcome to your Dashboard</h1>
    <Outlet></Outlet>
    {/* <!-- Page content here --> */}
    
   
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to={'alldetails'}>All Details</Link></li>
      <li><Link to={'review'}>Added an item</Link></li>
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;
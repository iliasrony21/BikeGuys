import React from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import logo1 from '../../../images/logo1.png'

const Header = () => {
  const [user]=useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  if (user){
    console.log(user.displayName)
  }
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About Us</Link>
              </li>
              <li>
                <Link to={'/jacket'}>Jacket</Link>
              </li>
              <li>
                <Link to={'/helmet'}>Helmet</Link>
              </li>
              <li>
                <Link to={'/boots'}>Boots</Link>
              </li>
              <li>
                <Link to={'/gloves'}>Gloves</Link>
              </li>
              <li>
                <Link to={'/manage'}>Manage Inventories</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <a href className='btn btn-ghost normal-case text-xl mb-5'>
            <img src={logo1} alt='' className='' />
            <span className='text-2xl'>BIKE</span>
            <span className='text-primary text-2xl'>GUYS</span>
          </a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to={'/home'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About Us</Link>
            </li>
            <li>
              <Link to={'/jacket'}>Jacket</Link>
            </li>
            <li>
              <Link to={'/helmet'}>Helmet</Link>
            </li>
            <li>
              <Link to={'/boots'}>Boots</Link>
            </li>
            <li>
              <Link to={'/gloves'}>Gloves</Link>
            </li>
            <li>
              <Link to={'/manage'}>Manage Inventories</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {
            user ?<button onClick={()=>signOut()} className='btn btn-primary text-white w-32 rounded-full '>Sign Out</button>
            :<Link to={'/login'}>
            <button className='btn bg-primary border-none text-white w-32 rounded-full'>
              log In
            </button>
          </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Header

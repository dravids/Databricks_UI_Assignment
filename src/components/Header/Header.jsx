//Library import
import React from 'react';

//Import Icon
import { BiDotsVerticalRounded } from 'react-icons/bi';

//Import Styling
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className='header-content'>
        <h2 className='header-title'>Marketplace Comparison</h2>
        <div className='header-actions'>
          <button className='button'>Download Report</button>
          <BiDotsVerticalRounded className='icon' />
        </div>
      </div>
    </header>
  )
}

export default Header
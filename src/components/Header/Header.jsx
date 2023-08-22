import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';
import './header.scss';
function Header() {
  return (
    <header>
        <div className='header-title'>
            Marketplace Comparison
        </div>
        <div className='header-actions'>
            <button>
                Download report
            </button>
            <i>{BiDotsVerticalRounded}</i>
        </div>
    </header>
  )
}

export default Header
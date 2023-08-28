//Library and Component imports
import React from 'react'
import { NavLink } from 'react-router-dom';

//Import Sidnav Data
import { sidebar_data } from './Sidenavdata';

//Import Styling
import './sidenav.scss';
function Sidenav() {
    return (
        <aside className='sidebar' >
            <div className="sidebar-title">
                <span className='sidebar-title-icon'>CX</span><p>CompareX</p>
            </div>
            <div className='sidebar-menu'>
                {sidebar_data.sidebar_main_nav.map(data => (
                    <NavLink to={data.path} className={`sidebar-links ${data.disabled && 'disabled'} `}
                        key={data.page}
                        title={data.title}
                    >
                        {data.icon}
                        <p>{data.title}</p>
                    </NavLink>
                ))}
            </div>
            <div className='sidebar-cta'>
                {sidebar_data.sidebar_cta_nav.map(data => (
                    <NavLink to={data.path} className={`sidebar-links ${data.disabled} && disabled`}
                        key={data.page}
                        title={data.title}
                    >
                        {data.icon}
                        <p>{data.title}</p>
                    </NavLink>
                ))}
            </div>
        </aside>
    )
}

export default Sidenav;
import React from 'react'
import { NavLink } from 'react-router-dom';
import * as Icon from "react-icons/bi";
import sidenavData from "../../assets/data/sidenav.json"
import sidenavData2 from "../../assets/data/sidenav2.json"
import { useState } from 'react';

import './Sidenav_new.scss';
function Sidenav() {
    const [expanded, setExpanded] = useState(false);
    // console.log(expanded)
    return (
        <aside
            className={`sidenav ${expanded ? 'expanded' : 'collapsed'}`}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <div className={`enterprise-logo `}>
                {expanded ? <h2 className="red-cx">CompareX</h2> : <h2>CX</h2>}
                {/* <h2>CX</h2> */}
            </div>
            <nav>
                <div className="nav-list-wrapper">
                    {sidenavData.map((obj) => (
                        <NavLink to={obj.path} className="nav-item" key={obj.path}>
                            <i className="icon">{React.createElement(Icon[`${obj.icon}`])}</i>
                            <p className={`text ${expanded ? 'visible' : 'hidden'}`}>{obj.title}</p>
                        </NavLink>
                    ))}
                </div>
            </nav>
            <nav>
                <div className="nav-list-footer">
                    {sidenavData2.map((obj) => (
                        <NavLink to={obj.path} className="nav-item" key={obj.path}>
                            <i className="icon">{React.createElement(Icon[`${obj.icon}`])}</i>
                            <p className={`text ${expanded ? 'visible' : 'hidden'}`}>{obj.title}</p>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </aside>
        //         <div class="sidebar">
        //     <div class="logo_details">
        //       <i class="bx bxl-audible icon"></i>
        //       <div class="logo_name">Code Effect</div>
        //       <i class="bx bx-menu" id="btn"></i>
        //     </div>
        //     <ul class="nav-list">
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-grid-alt"></i>
        //           <span class="link_name">Dashboard</span>
        //         </a>
        //         <span class="tooltip">Dashboard</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-user"></i>
        //           <span class="link_name">User</span>
        //         </a>
        //         <span class="tooltip">User</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-chat"></i>
        //           <span class="link_name">Message</span>
        //         </a>
        //         <span class="tooltip">Message</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-pie-chart-alt-2"></i>
        //           <span class="link_name">Analytics</span>
        //         </a>
        //         <span class="tooltip">Analytics</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-folder"></i>
        //           <span class="link_name">File Manger</span>
        //         </a>
        //         <span class="tooltip">File Manger</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-cart-alt"></i>
        //           <span class="link_name">Order</span>
        //         </a>
        //         <span class="tooltip">Order</span>
        //       </li>
        //       <li>
        //         <a href="#">
        //           <i class="bx bx-cog"></i>
        //           <span class="link_name">Settings</span>
        //         </a>
        //         <span class="tooltip">Settings</span>
        //       </li>
        //       <li class="profile">
        //         <i class="bx bx-log-out" id="log_out"></i>
        //       </li>
        //     </ul>
        //   </div>
    )
}

export default Sidenav;
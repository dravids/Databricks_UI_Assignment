//Library and Component Imports
import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';

//Import Styling
import './layoutsidetopbottom.scss';

function LayoutSideTopBottom(props) {
    const { children } = props;
    return (
        <div className='layout'>
            <Sidenav></Sidenav>
            <section className='content'>
                <Header></Header>
                {children}
            </section>
        </div>
    )
}

export default LayoutSideTopBottom
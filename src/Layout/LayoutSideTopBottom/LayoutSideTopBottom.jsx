import React from 'react'
import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import './layoutsidetopbottom.scss'
function LayoutSideTopBottom() {
    return (
        <div className='layout-container'>
            <Sidenav></Sidenav>
            <section className='main-container'>
                    <Header></Header>
                    <main className='main-content'>
                        Main Content
                    </main>
            </section>
        </div>
    )
}

export default LayoutSideTopBottom
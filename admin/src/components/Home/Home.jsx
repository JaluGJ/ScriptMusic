import React from 'react';
import NavBar from '../Navbar/NavBar';
import SideBar from '../SideBar/SideBar';
import './Home.scss';


export default function Home(){
    return (
    <div className='home'>
        <SideBar/>
        <div className='homecontainer'>
            <NavBar/>
            homecontainer
        </div>
    </div>
    )
}
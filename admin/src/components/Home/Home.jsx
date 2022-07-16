import React from 'react';
import NavBar from '../Navbar/NavBar';
import SideBar from '../SideBar/SideBar';
import UploadImg from '../../ImageUpload/uploadingImg'
import './Home.scss';


export default function Home({logout}){
    return (
    <div className='home'>
        <SideBar logout={logout}/>
        <div className='homecontainer'>
            <NavBar/>
            homecontainer
            <UploadImg setimgUp={(e)=>console.log(e)}/>
        </div>
    </div>
    )
}
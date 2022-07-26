import React from 'react'
import './AdminProfile.scss'
import SideBar from '../../components/SideBar/SideBar'
import Loading from '../../components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux';

function AdminProfile() {
    const dispatch = useDispatch();
    // const profile = useSelector(state => state.profile);

    return (
        // <Loading />
        <div className="profile">
            <SideBar />
            <div className="container">
                <div className="top">MODIFICAR PERFIL DE ADMINISTRADOR</div>
            {/* { profile.length

                ? <div className="bottomloa">bottom</div>
                : 
            } */}
                <div className="bottom">bottom</div>
            </div>
        </div>
    )
}

export default AdminProfile
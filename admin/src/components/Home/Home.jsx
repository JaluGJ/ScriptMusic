import React from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './Home.module.css';


export default function Home(){
    return (
    <div className={styles.home}>
        <SideBar/>
        <div className={styles.container}>container</div>
    </div>
    )
}
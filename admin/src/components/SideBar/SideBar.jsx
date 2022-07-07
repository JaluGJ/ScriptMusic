import styles from './SideBar.module.css'

export default function SideBar(){
    return(
        <div className={styles.sidebar}>
            <div className={styles.top}> 
            <span className={styles.logo}>ADMIN PANEL</span>
            </div>   
            <hr className={styles.hr}/> 
            <div className={styles.center}>
                <ul className={styles.ul}>
                    <li>
                        <span>BUTTON</span>
                    </li>
                    <li>
                        <span>BUTTON</span>
                    </li>
                    <li>
                        <span>BUTTON</span>
                    </li>
                </ul>    
            </div>    
            <div className={styles}> OPTIONS </div>    
        </div>
    )
}
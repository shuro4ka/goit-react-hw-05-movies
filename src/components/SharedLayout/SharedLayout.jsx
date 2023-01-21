import styles from './SharedLayout.module.css';
import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from 'react';


export const SharedLayout = () => {
    return (
        <>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li className ={styles.listItem}>
                        <NavLink to="/" className={styles.navLink}>
                            Home
                        </NavLink>
                    </li>

                    <li className ={styles.listItem}>
                        <NavLink to="/movies" className={styles.navLink}>
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
            
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>
    );
};
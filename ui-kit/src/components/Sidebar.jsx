import React from 'react';
import styles from '../styles/sidenavigation.module.css';

//Icon imports
import {AiOutlineBarChart, AiOutlineTable, AiTwotoneContainer} from 'react-icons/ai';
import {BiCard, BiJoystickButton, BiMenu, BiNavigation} from 'react-icons/bi';
import {CgProfile, CgScrollH, CgScrollV, CgFormatJustify} from 'react-icons/cg';
import {FaSortNumericUp, FaSpinner} from 'react-icons/fa'
import {GrInProgress} from 'react-icons/gr';
import {MdViewModule} from 'react-icons/md';
import {RiInputMethodLine, RiNotification2Line, RiArrowDropDownLine} from 'react-icons/ri';



const SidenavigationBar = () => {
    return (
        <>
            <div className={styles.nav}> 
                <ul className={styles.navItems}>
                    <button className={styles.navItem}>Avatars<span><CgProfile/></span></button>
                    <button className={styles.navItem}>Buttons<span><BiJoystickButton/></span></button>
                    <button className={styles.navItem}>Cards<span><BiCard/></span></button>
                    <button className={styles.navItem}>Charts<span><AiOutlineBarChart/></span></button>
                    <button className={styles.navItem}>Containers<span><AiTwotoneContainer/></span></button>

                    <button className={styles.navItem}>Dropdowns<span><RiArrowDropDownLine/></span></button>
                    <button className={styles.navItem}>Forms<span><CgFormatJustify/></span></button>

                    <button className={styles.navItem}>Inputs<span><RiInputMethodLine/></span></button>
                    <button className={styles.navItem}>Menus<span><BiMenu/></span></button>
                    <button className={styles.navItem}>Modals<span><MdViewModule/></span></button>

                    <button className={styles.navItem}>Navigations<span><BiNavigation/></span></button>
                    <button className={styles.navItem}>Notifications<span><RiNotification2Line/></span></button>
                    <button className={styles.navItem}>Pagination<span><FaSortNumericUp/></span></button>

                    <button className={styles.navItem}>Progress<span><GrInProgress/></span></button>
                    <button className={styles.navItem}>Scrolls<span><CgScrollV/> <CgScrollH/></span></button>
                    <button className={styles.navItem}>Spinners<span><FaSpinner/></span></button>
                    <button className={styles.navItem}>Tables<span><AiOutlineTable/></span></button>

                </ul>
            </div>
        </>
    )
}

export default SidenavigationBar

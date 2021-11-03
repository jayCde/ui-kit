import React from 'react';
import "../styles/sidenavigation.css"
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
            <div className="nav"> 
                <ul className="navItems">
                    <button className="navItem">Avatars<span><CgProfile/></span></button>
                    <button className="navItem">Buttons<span><BiJoystickButton/></span></button>
                    <button className="navItem">Cards<span><BiCard/></span></button>
                    <button className="navItem">Charts<span><AiOutlineBarChart/></span></button>
                    <button className="navItem">Containers<span><AiTwotoneContainer/></span></button>

                    <button className="navItem">Dropdowns<span><RiArrowDropDownLine/></span></button>
                    <button className="navItem">Forms<span><CgFormatJustify/></span></button>

                    <button className="navItem">Inputs<span><RiInputMethodLine/></span></button>
                    <button className="navItem">Menus<span><BiMenu/></span></button>
                    <button className="navItem">Modals<span><MdViewModule/></span></button>

                    <button className="navItem">Navigations<span><BiNavigation/></span></button>
                    <button className="navItem">Notifications<span><RiNotification2Line/></span></button>
                    <button className="navItem">Pagination<span><FaSortNumericUp/></span></button>

                    <button className="navItem">Progress<span><GrInProgress/></span></button>
                    <button className="navItem">Scrolls<span><CgScrollV/> <CgScrollH/></span></button>
                    <button className="navItem">Spinners<span><FaSpinner/></span></button>
                    <button className="navItem">Tables<span><AiOutlineTable/></span></button>

                </ul>
            </div>
        </>
    )
}

export default SidenavigationBar

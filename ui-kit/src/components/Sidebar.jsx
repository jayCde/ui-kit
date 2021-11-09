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



const SideNavigation = ({allRenders}) => {

    return (
        <>
            <div className="nav"> 
                <ul className="navItems">
                    <button className="navItem" onClick={allRenders.renderAvatars}>Avatars<span><CgProfile/></span></button>
                    <button className="navItem" onClick={allRenders.renderButtons}>Buttons<span><BiJoystickButton/></span></button>
                    <button className="navItem" onClick={allRenders.renderCards}>Cards<span><BiCard/></span></button>
                    <button className="navItem" onClick={allRenders.renderCharts}>Charts<span><AiOutlineBarChart/></span></button>
                    <button className="navItem" onClick={allRenders.renderContainers}>Containers<span><AiTwotoneContainer/></span></button>

                    <button className="navItem" onClick={allRenders.renderDropdowns}>Dropdowns<span><RiArrowDropDownLine/></span></button>
                    <button className="navItem" onClick={allRenders.renderForms}>Forms<span><CgFormatJustify/></span></button>

                    <button className="navItem" onClick={allRenders.renderInputs}>Inputs<span><RiInputMethodLine/></span></button>
                    <button className="navItem" onClick={allRenders.renderMenus}>Menus<span><BiMenu/></span></button>
                    <button className="navItem" onClick={allRenders.renderModals}>Modals<span><MdViewModule/></span></button>

                    <button className="navItem" onClick={allRenders.renderNavigations}>Navigations<span><BiNavigation/></span></button>
                    <button className="navItem" onClick={allRenders.renderNotifications}>Notifications<span><RiNotification2Line/></span></button>
                    <button className="navItem" onClick={allRenders.renderPagination}>Pagination<span><FaSortNumericUp/></span></button>

                    <button className="navItem" onClick={allRenders.renderProgresses}>Progress<span><GrInProgress/></span></button>
                    <button className="navItem" onClick={allRenders.renderScrolls}>Scrolls<span><CgScrollV/> <CgScrollH/></span></button>
                    <button className="navItem" onClick={allRenders.renderSpinners}>Spinners<span><FaSpinner/></span></button>
                    <button className="navItem" onClick={allRenders.renderTables}>Tables<span><AiOutlineTable/></span></button>
                </ul>
            </div>
        </>
    )
}

export default SideNavigation

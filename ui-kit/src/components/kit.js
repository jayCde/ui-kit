import React, { useState } from 'react';
import ItemsLayout from './itemsLayout';
import SideNavigation from './Sidebar'

function Uikit() {

    //Kit state objects
    const [selectedAvatars, setselectedAvatars] = useState(true);
    const [selectedButtons, setselectedButtons] = useState(false);
    const [selectedCards, setselectedCards] = useState(false);
    const [selectedCharts, setselectedCharts] = useState(false);
    const [selectedContainers, setselectedContainers] = useState(false);
    const [selectedDropdowns, setselectedDropdowns] = useState(false);
    const [selectedForms, setselectedForms] = useState(false);

    const [selectedInputs, setselectedInputs] = useState(false);
    const [selectedMenus, setselectedMenus] = useState(false);
    const [selectedModals, setselectedModals] = useState(false);

    const [selectedNavs, setselectedNavs] = useState(false);
    const [selectedNotifications, setselectedNotifications] = useState(false);
    const [selectedPagination, setselectedPagination] = useState(false);

    const [selectedProgresses, setselectedProgresses] = useState(false);
    const [selectedScrolls, setselectedScrolls] = useState(false);
    const [selectedSpinners, setselectedSpinners] = useState(false);
    const [selectedTables, setselectedTables] = useState(false);

    //Render component functions
    const renderAvatars =() =>{
        setselectedAvatars(true);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderButtons =()=>{
        setselectedAvatars(false);
        setselectedButtons(true);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderCards =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(true);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderCharts =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(true);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderContainers =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(true);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderDropdowns =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(true);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderForms =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(true);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderInputs =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(true);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderMenus =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(true);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderModals =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(true);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderNavigations =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(true);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderNotifications =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(true);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderPagination =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(true);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    } 
    const renderProgresses =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(true);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderScrolls =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(true);
        setselectedSpinners(false);
        setselectedTables(false);
    }

    const renderSpinners =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(true);
        setselectedTables(false);
    }

    const renderTables =()=>{
        setselectedAvatars(false);
        setselectedButtons(false);
        setselectedCards(false);
        setselectedCharts(false);
        setselectedContainers(false);
        setselectedDropdowns(false);
        setselectedForms(false);
        setselectedInputs(false);
        setselectedMenus(false);
        setselectedModals(false);
        setselectedNavs(false);
        setselectedNotifications(false);
        setselectedPagination(false);
        setselectedProgresses(false);
        setselectedScrolls(false);
        setselectedSpinners(false);
        setselectedTables(true);
    }

    const allRenders ={
        renderAvatars,
        renderButtons,
        renderCards,
        renderCharts,
        renderContainers,
        renderDropdowns,
        renderForms,
        renderInputs,
        renderMenus,
        renderModals,
        renderNavigations,
        renderNotifications, 
        renderPagination,
        renderProgresses,
        renderScrolls, 
        renderSpinners,
        renderTables
    }

    const showComponents ={
        selectedAvatars,
        selectedButtons,
        selectedCards,
        selectedCharts,
        selectedContainers,
        selectedDropdowns,
        selectedForms,
        selectedInputs,
        selectedMenus,
        selectedModals,
        selectedNavs,
        selectedNotifications,
        selectedPagination,
        selectedProgresses,
        selectedScrolls,
        selectedSpinners,
        selectedTables
    }
    return (
        <div>
            <SideNavigation allRenders={allRenders}/>
            <ItemsLayout showComponents={showComponents}/>
        </div>
    )
}

export default Uikit

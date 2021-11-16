import React from "react";
import "../styles/layout.css";
import AvatarsComponent from "./items/avatars/Avatars";
import ButtonComponent from "./items/button/Button";
import CardsComponent from "./items/cards/Cards";
import ChartsComponent from "./items/charts/Charts";
import ContainersComponent from "./items/Containers/Containers";
import DropdownsComponent from "./items/Dropdowns/dropdowns";
import FormsComponent from "./items/Forms/forms";
import InputsComponent from "./items/inputs/Inputs";
import MenusComponent from "./items/menus/Menus";
import ModalsComponent from "./items/Modals/Modals";
import NavigationBarsComponent from "./items/navigationbars/NavigationBars";
import NotificationsComponent from "./items/notifications/Notifications";
import PaginationComponent from "./items/Pagination/pagination";
import ProgressBarsComponent from "./items/progressbars/ProgressBars";
import ScrollsComponent from "./items/scrolls/Scrolls";
import SpinnersComponent from "./items/spinners/Spinners";
import TablesComponent from "./items/tables/Tables";

function ItemsLayout({showComponents}) {
  return (
    <div className="layoutContainer">
      <div className="layoutItems">
        {showComponents.selectedAvatars && <AvatarsComponent/>}
        {showComponents.selectedButtons && <ButtonComponent/>}
        {showComponents.selectedCards && <CardsComponent/>}
        {showComponents.selectedCharts && <ChartsComponent/>}
        {showComponents.selectedContainers && <ContainersComponent/>}
        {showComponents.selectedDropdowns && <DropdownsComponent/>}
        {showComponents.selectedForms && <FormsComponent/>}
        {showComponents.selectedInputs && <InputsComponent/>}
        {showComponents.selectedMenus && <MenusComponent/>}
        {showComponents.selectedModals && <ModalsComponent/>}
        {showComponents.selectedNavs && <NavigationBarsComponent/>}
        {showComponents.selectedNotifications && <NotificationsComponent />}
        {showComponents.selectedPagination && <PaginationComponent/>}
        {showComponents.selectedProgresses && <ProgressBarsComponent/>}
        {showComponents.selectedScrolls && <ScrollsComponent/>}
        {showComponents.selectedSpinners && <SpinnersComponent/>}
        {showComponents.selectedTables && <TablesComponent/>}
      </div>
    </div>
  );
}

export default ItemsLayout;

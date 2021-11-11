import React from 'react';
import "../../../styles/items/avatars.css";
import { avatarAssets } from '../../assets/assets';
import {FaCode} from "react-icons/fa"





function AvatarsComponent() {
    return (
        <div className="avatarContainer">
            <h5 className="avatarHeading">Avatars...</h5>
            <div className="avatarItems">
                {avatarAssets.map((avatar)=>
                    <div className="avatarItem" key={avatar.id}>
                        <div className="item">
                            <img src={avatar.resource} alt="asset-item"/>
                            {avatar.name}
                        </div>
                        <button className="snippetBtn"><FaCode/></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AvatarsComponent

import React from 'react';
import "../../../styles/items/avatars.css";
import { avatarAssets } from '../../assets/assets';

function AvatarsComponent() {
    return (
        <div className="avatarContainer">
            <h4 className="avatarHeading">Avatars...</h4>
            <div className="avatarItems">
                {avatarAssets.map((avatar)=>
                    <div className="avatarItem" key={avatar.id}>
                        <div className="item">
                            {avatar.name}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AvatarsComponent

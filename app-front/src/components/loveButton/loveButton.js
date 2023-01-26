import React, { useState } from 'react';

import loveIcon from '../../assets/icons/love-icon.png';
import heartIcon from '../../assets/icons/heart-icon.png';

function LoveButton() {
    
    const [Loves, setLoves] = useState(0);

    const [currentIcon, setCurrentIcon] = useState(loveIcon);

    function handleImageChange() {
        setLoves(Loves + 1);
        if (currentIcon === loveIcon) {
            setCurrentIcon(heartIcon);
        } else {
            setCurrentIcon(loveIcon);
        }
    }

    return (
        <div>
            <div className='details-love'>
                <img onClick={handleImageChange} src={ currentIcon } alt="like" />
            </div>
            <p hidden>Loves: {Loves}</p>
        </div>
    );
}

export default LoveButton;
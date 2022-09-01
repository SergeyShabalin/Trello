import React from 'react';
import {FiPlusCircle} from "react-icons/fi";
import './styles/Button.css'

export default function Button({name, style}) {

    function selectIcon(style){
            switch (style) {
                case 'card-creator':
                    return   <FiPlusCircle/>
                default:
                    return null
            }
    }

    return (
        <div className={`button ${style}`}>

            <div className='button-icon'> {selectIcon(style)}</div>
            <div className='button-text'>{name}</div>
        </div>
    );
};


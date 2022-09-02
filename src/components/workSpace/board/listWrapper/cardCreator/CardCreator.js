import React from 'react';
import Button from "../../../../basic/button/Button";
import {FiPlusCircle} from "react-icons/fi";
import classes from './styles/CardCreator.module.css'


export default function CardCreator() {
    return (
        <div className={classes.card_creator}>

            <Button
                name={'Добавить карточку'}
                icon={<FiPlusCircle/>}/>
        </div>
    );
};


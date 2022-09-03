import React from 'react';
import Button from "../../../../basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import classes from './styles/CardCreator.module.css'


export default function CardCreator() {
    return (
        <div className={classes.card_creator}>

            <Button
                name={'Добавить карточку'}
                icon={<AiOutlinePlus/>}
                type={'complete_left'}/>
        </div>
    );
};


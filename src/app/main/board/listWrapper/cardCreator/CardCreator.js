import React from 'react';
import Button from "../../../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import classes from './styles/CardCreator.module.css'



export default function CardCreator() {
    return (
        <div className={classes.card_creator}>
            <Button variant={'text'}
                    label={'Добавить карточку'}
                    startIcon={<AiOutlinePlus/>}>
            </Button>
        </div>
    );
};

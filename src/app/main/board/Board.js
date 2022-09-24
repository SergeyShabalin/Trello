import React from 'react';
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import classes from './styles/Board.module.css'

export default function Board() {
    return (
        <div className={classes.board}>

            <div className={classes.wrapper_list}>
                <ListWrapper header='Предстоит сделать'/>
                <ListWrapper header='В работе'/>
                <ListWrapper header='Готово'/>
            </div>
            <div className={classes.add_list}>
                <Button
                    variant='contained'
                    label='Добавить еще одну колонку'
                    startIcon={<AiOutlinePlus/>}>
                </Button>
            </div>

        </div>
    );
};




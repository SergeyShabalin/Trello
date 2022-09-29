import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";

import classes from './styles/Board.module.css'
import {axiosColumns} from "../../../store/asyncAction/Columns";

export default function Board() {

    const dispatch = useDispatch()
    const columns = useSelector(state => state.columns.columns)

    useEffect(() => {
       dispatch(axiosColumns())
    }, [])

    return (
        <div className={classes.board}>
            <div className={classes.wrapper_list}>
                <div>Наименование доски
                    <div className={classes.columns}>
                        {columns.map(item=>(
                            <ListWrapper key={item.id} header={item.header}/>
                        ))}
                    </div>
                </div>
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




import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";

import classes from './styles/Board.module.css'
import {axiosColumns} from "../../../store/asyncAction/Columns";
import {addAllColumns, addNewColumns, viewAllColumns} from "../../../store/reducers/column-reducer";
import {Api} from "../../../Api";


export default function Board() {

    const dispatch = useDispatch()
    const columns = useSelector(state => state.columns.columns)

    function addColumn(){

            Api.post(`/columns/new`).catch((error) => {
                console.warn(error, 'server error');
            })
        dispatch(addNewColumns())
    }


    useEffect(() => {
       dispatch(axiosColumns())
    }, [columns])

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
                    onClick={addColumn}
                    variant='contained'
                    label='Добавить еще одну колонку'
                    startIcon={<AiOutlinePlus/>}>
                </Button>
            </div>
        </div>
    );
};




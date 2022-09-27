import React, {useState, useEffect} from 'react';
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import axios from "axios";
import classes from './styles/Board.module.css'

export default function Board() {

    const [column, setColumn] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/columns').then((resp) => {
            setColumn(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }, [])


    function addNewColumn() {

        // axios.post('http://localhost:4000/columns/new', 'dededew').then(() => {
        // })

    }


    const columnList = column.map(item => {
        return <ListWrapper key={item.id} header={item.header}/>
    })


    return (
        <div className={classes.board}>

            <div className={classes.wrapper_list}>
                <div>Наименование доски
                    <div className={classes.columns}>{columnList}</div>
                </div>
            </div>
            <div className={classes.add_list}>
                <Button
                    onClick={addNewColumn}
                    variant='contained'
                    label='Добавить еще одну колонку'
                    startIcon={<AiOutlinePlus/>}>
                </Button>
            </div>

        </div>
    );
};




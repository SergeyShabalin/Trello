import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import {addColumn, getAllColumns} from "../../../store/asyncAction/Columns";
import ListCreator from "./listWrapper/listCreator/ListCreator";

import classes from './styles/Board.module.css'

export default function Board() {

    const dispatch = useDispatch()
    const columns = useSelector(state => state.columns.columns)
    const [isCreator, setIsCreator] = useState(true)

    useEffect(() => {
        dispatch(getAllColumns())
    }, [])
    function columnCreator() {
        setIsCreator(!isCreator)
    }

    function addList(header) {
        dispatch(addColumn(header))
        columnCreator()
    }

    return (
        <div className={classes.board}>
            <div className={classes.board_header}>Наименование доски</div>
            <div className={classes.wrapper_list}>
                <div className={classes.columns}>
                    {columns.map(item => (
                        <ListWrapper key={item._id} id={item._id} header={item.header}/>
                    ))}
                </div>

                <div className={classes.add_list}>
                    {isCreator ? <Button
                            onClick={columnCreator}
                            variant='contained'
                            label='Добавить еще одну колонку'
                            startIcon={<AiOutlinePlus/>}>
                        </Button>
                        : <ListCreator
                            columnCreator={columnCreator}
                            addList={addList}/> }
                </div>

            </div>
        </div>
    );
};




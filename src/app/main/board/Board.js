import React, {useState, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ListWrapper from "./listWrapper/ListWrapper";
import Button from "../../../components/basic/button/Button";
import {AiOutlinePlus} from "react-icons/ai";
import {addColumn, getAllColumns} from "../../../store/asyncAction/Columns";
import {getIdColumn} from "../../../store/reducers/column-reducer";
import ListCreator from "./listWrapper/listCreator/ListCreator";

import classes from './styles/Board.module.css'
import OutsideClick from "../../../components/basic/outsideClick/OutsideClick";

export default function Board() {

    const dispatch = useDispatch()
    const columns = useSelector(state => state.columns.columns)
    const [isCreator, setIsCreator] = useState(true)


    useEffect(() => {
        dispatch(getAllColumns())
        setIsCreator(true)
    }, [])

    function columnCreator() {
        setIsCreator(!isCreator)
    }

    function addList(header) {
        dispatch(addColumn(header))
        columnCreator()
    }

    function sendColumnId(columnId) {
        dispatch(getIdColumn(columnId))
    }

    return (
        <div className={classes.board}>
            <div className={classes.board_header}>Наименование доски</div>
            <div className={classes.wrapper_list}>
                <div className={classes.columns}>
                    {columns.map(item => (
                        <ListWrapper
                            onClick={() => sendColumnId(item._id)}
                            key={item._id}
                            header={item.header}
                        />
                    ))}
                </div>

                <div className={classes.add_list}>

                    <OutsideClick
                        external={
                            <Button
                                variant='contained'
                                label='Добавить еще одну колонку'
                                startIcon={<AiOutlinePlus/>}>
                            </Button>
                        }
                        type='replace'>
                        <div>
                            <ListCreator
                                addList={addList}/>
                        </div>
                    </OutsideClick>

                </div>

            </div>
        </div>
    );
};




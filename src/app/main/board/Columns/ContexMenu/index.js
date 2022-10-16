import React, {useEffect, useRef} from 'react';
import Button from "../../../../../components/basic/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteColumn} from "../../../../../store/columns/asyncActions";
import classes from './ListContextMenu.module.css'


function ListContextMenu() {

    const dispatch = useDispatch()
    const columnId = useSelector(state => state.columns.idColumn)

    function columnDelete() {
        dispatch(deleteColumn(columnId))
    }
//TODO УДАЛИТЬ ФОРМУ
      return (
        <form  className={classes.context_form}>
            <div className={classes.context_menu} id='contextMenu'>
                <div className={classes.context_header}>Действия со списком
                </div>
                <hr/>
                <div>
                    <ul className={classes.ul}>
                        <li className={classes.li} onClick={columnDelete}>Удалить список</li>
                        <li className={classes.li}>Добавить карточку</li>
                        <li className={classes.li}>Переместить карточку</li>
                    </ul>
                </div>


            </div>
        </form>
    );
};

export default ListContextMenu
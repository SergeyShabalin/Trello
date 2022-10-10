import React, {useEffect, useRef} from 'react';
import Button from "../../../../../components/basic/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteColumn} from "../../../../../store/asyncAction/Columns";
import classes from './styles/ListContextMenu.module.css'


function ListContextMenu() {

    const dispatch = useDispatch()
    const columnId = useSelector(state => state.columns.idColumn)

    function submit(e) {
        e.preventDefault()
    }

    function columnDelete() {
        dispatch(deleteColumn(columnId))
    }

      return (
        <form onSubmit={submit} className={classes.context_form}>
            <div className={classes.context_menu} id='contextMenu'>
                <div className={classes.context_header}>Действия со списком
                </div>
                <hr/>
                <Button
                    onClick={columnDelete}
                    size='full_sized'
                    label='Удалить список'/>
                <Button
                    size='full_sized'
                    label='Добавить карточку'/>
                <Button
                    size='full_sized'
                    label='Переместить карточку'/>
            </div>
        </form>
    );
};

export default ListContextMenu
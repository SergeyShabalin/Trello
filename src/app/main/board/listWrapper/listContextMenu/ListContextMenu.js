import React from 'react';
import Button from "../../../../../components/basic/button/Button";
import {AiOutlineClose} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {deleteColumn} from "../../../../../store/asyncAction/Columns";
import classes from './styles/ListContextMenu.module.css'


function ListContextMenu({closeModalWindow}) {

    const dispatch = useDispatch()
    const columnId = useSelector(state => state.columns.idColumn)

    function submit(e) {
        e.preventDefault()
    }

    function columnDelete() {
        dispatch(deleteColumn(columnId))
    }

    return (
        <form onSubmit={submit}>
            <div className={classes.context_menu}>
                <div className={classes.context_header}>Действия со списком
                    <Button
                        onClick={closeModalWindow}
                        variant='just_icon'
                        icon={<AiOutlineClose/>}>
                    </Button>
                </div>
                <hr/>
                <Button
                    onClick={columnDelete}
                    size='full_sized'
                    label='Удалить список'/>
                <Button
                    size='full_sized'
                    label='Добавить карточку'/>
            </div>
        </form>
    );
};

export default ListContextMenu;
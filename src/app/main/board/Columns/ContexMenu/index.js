import React, {useEffect, useRef} from 'react';
import Button from "../../../../../components/basic/Button";
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBin5Line} from "react-icons/ri";
import {MdLibraryAdd, MdDriveFileMoveOutline} from "react-icons/md";
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
        <form className={classes.context_form}>
            <div className={classes.context_menu} id='contextMenu'>
                <span className={classes.context_header}>Действия со списком </span>
                <hr/>
                <ul className={classes.ul}>
                    <li className={classes.li}
                        onClick={columnDelete}>
                        <RiDeleteBin5Line/> <span className={classes.li_header}>Удалить список</span>
                    </li>
                    <li className={classes.li}>
                        <MdLibraryAdd/> <span className={classes.li_header}>Добавить карточку</span>
                    </li>
                    <li className={classes.li}>
                        <MdDriveFileMoveOutline/> <span className={classes.li_header}>Переместить карточку</span>
                    </li>
                </ul>
            </div>
        </form>
    );
};

export default ListContextMenu
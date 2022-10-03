import React from 'react';
import Button from "../../../../../components/basic/button/Button";
import {AiOutlineClose} from "react-icons/ai";
import {Api} from "../../../../../Api";
import classes from './styles/ListContextMenu.module.css'

function ListContextMenu({onContextMenu}){

    function submit(e){
        e.preventDefault()
    }

    function deleteColumn(column_id) {
        Api.delete(`/columns/delete`, {id: column_id}).catch((error) => {
            console.warn(error, 'server error');
        })

    }
    return (
        <form onSubmit={submit} >
            <div className={classes.context_menu} >
                <div className={classes.context_header}>Действия со списком
                    <Button
                        onClick={onContextMenu}
                        variant='just_icon'
                        icon={<AiOutlineClose/>}>
                    </Button>
                </div>
                <hr/>
                <Button
                    onClick={deleteColumn}
                    label='Удалить список'/>
                <Button
                    label='Добавить карточку'/>
            </div>
        </form>
    );
};

export default ListContextMenu;
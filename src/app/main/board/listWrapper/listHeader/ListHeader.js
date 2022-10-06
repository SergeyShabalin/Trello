import React, {useState} from 'react';
import {GoKebabHorizontal} from "react-icons/go";
import Button from "../../../../../components/basic/button/Button";
import ListContextMenu from "../listContextMenu/ListContextMenu";
import classes from './styles/ListHeader.module.css'


export default function ListHeader({header}) {

    const [openModal, setOpenModal] = useState(false)

    function openModalWindow() {
        setOpenModal(true)
    }

    function closeModalWindow() {
        setOpenModal(false)
    }

    return (
        <div className={classes.header}>
            <div className={classes.title}>{header}</div>
            <Button
                onClick={openModalWindow}
                variant={'just_icon'}
                icon={<GoKebabHorizontal/>}>
            </Button>

            {openModal
                ?   <ListContextMenu
                    closeModalWindow={closeModalWindow}/>
                : null}

        </div>
    );
};


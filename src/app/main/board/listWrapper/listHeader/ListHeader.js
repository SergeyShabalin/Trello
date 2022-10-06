import React, {useState} from 'react';
import {GoKebabHorizontal} from "react-icons/go";
import Button from "../../../../../components/basic/button/Button";
import ListContextMenu from "../listContextMenu/ListContextMenu";
import classes from './styles/ListHeader.module.css'
import Modal from "../../../../../components/basic/modal/Modal";


export default function ListHeader({header}) {

    const [openModal, setOpenModal] = useState(false)
    const [coordinates, setCoordinates] = useState()

    function openModalWindow(e) {
        setOpenModal(true)
        const currentCoord = e.currentTarget.getBoundingClientRect();
        setCoordinates(currentCoord)
    }

    function closeModalWindow() {
        setOpenModal(false)
    }

    return (
        <div className={classes.header}>
            <div className={classes.title}  >{header}</div>
            <Button
                onClick={openModalWindow}
                variant={'just_icon'}
                icon={<GoKebabHorizontal/>}>
            </Button>

            <Modal
                coordinates = {coordinates}
                open={openModal}
                variant='context_menu'
                onClose={closeModalWindow}>
                <ListContextMenu closeModalWindow={closeModalWindow}/>
            </Modal>
        </div>
    );
};


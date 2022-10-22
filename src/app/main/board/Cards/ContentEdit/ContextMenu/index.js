import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {RiDeleteBin5Line} from "react-icons/ri";
import {MdOutlineDriveFileMoveRtl} from "react-icons/md";
import {BsEnvelopeOpen} from "react-icons/bs";
import {deleteCard} from "../../../../../../store/cards/asyncActions";
import classes from './CardContextMenu.module.css'
import Modal from "../../../../../../components/basic/Modal";
import {deleteColumn} from "../../../../../../store/columns/asyncActions";

export default function CardContextMenu({cardId, closeModalContextMenu}) {

    const dispatch = useDispatch()


    function cardDelete() {
        if (window.confirm('Удалить карточку?')) {
            dispatch(deleteCard(cardId))
            closeModalContextMenu()
        }
    }

    return (
        <form className={classes.contextWrapper}>

            <ul className={classes.ul}>
                <li className={classes.li}>
                    <BsEnvelopeOpen/> <span className={classes.li_title}>Открыть карточку</span>
                </li>
                <li className={classes.li}>
                    <MdOutlineDriveFileMoveRtl/> <span className={classes.li_title}>Переместить</span>
                </li>
                <li className={classes.li} onClick={cardDelete}>
                    <RiDeleteBin5Line/><span className={classes.li_title}
                >Удалить карточку</span>
                </li>
            </ul>
        </form>


    );
};


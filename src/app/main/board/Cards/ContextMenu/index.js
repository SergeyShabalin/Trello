import React from 'react';
import {RiDeleteBin5Line} from "react-icons/ri";
import {MdOutlineDriveFileMoveRtl} from "react-icons/md";
import {BsEnvelopeOpen}  from "react-icons/bs";
import classes from './CardContextMenu.module.css'

export default function CardContextMenu(){

    return (
        <form className={classes.contextWrapper}>

                <ul className={classes.ul} >
                    <li className={classes.li}>
                        <BsEnvelopeOpen/> <span className={classes.li_title}>Открыть карточку</span>
                    </li>
                    <li className={classes.li}>
                      <MdOutlineDriveFileMoveRtl/> <span className={classes.li_title}>Переместить</span>
                    </li>
                    <li className={classes.li}>
                          <RiDeleteBin5Line/><span className={classes.li_title}
                        >Удалить карточку</span>
                    </li>
                </ul>

        </form>
    );
};


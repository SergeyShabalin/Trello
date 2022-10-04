import React, {useState} from 'react';
import {GoKebabHorizontal} from "react-icons/go";
import Button from "../../../../../components/basic/button/Button";
import ListContextMenu from "../listContextMenu/ListContextMenu";
import classes from './styles/ListHeader.module.css'


export default function ListHeader({header, columnId}) {

    const [isContext, setIsContext] = useState(false)

    function onContextMenu() {
        setIsContext(!isContext)
    }

    return (
        <div className={classes.header}>
            <div className={classes.title}>{header}</div>
            <Button
                onClick={onContextMenu}
                variant={'just_icon'}
                icon={<GoKebabHorizontal/>}>
            </Button>
            {isContext ? <ListContextMenu columnId={columnId} onContextMenu={onContextMenu} /> : null}
        </div>
    );
};


import React,{useState} from 'react';
import OutsideClick from "../../../../../components/basic/outsideClick/OutsideClick";
import Button from "../../../../../components/basic/button/Button";
import {GoKebabHorizontal} from "react-icons/go";
import ListContextMenu from "../listContextMenu/ListContextMenu";
import ListHeaderEdit from "./listHeaderEdit/ListHeaderEdit";
import classes from './styles/ListHeader.module.css'

export default function ListHeader({header}) {

    const [isEdit, setIsEdit] = useState(false);

    function toggleEdit(){
        setIsEdit(!isEdit)
    }

    return (
        <div className={classes.header}>
            {isEdit ?
                <ListHeaderEdit toggleEdit={toggleEdit} header={header}/>
                : <div onClick={toggleEdit} className={classes.title}>{header}</div> }
            <OutsideClick
                external={
                    <Button
                        variant={'just_icon'}
                        icon={<GoKebabHorizontal/>}>
                    </Button>
                }>
                <ListContextMenu/>
            </OutsideClick>
        </div>
    );
};


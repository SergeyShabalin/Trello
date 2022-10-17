import React, {useState} from 'react';
import OutsideClick from "../../../../../components/basic/OutsideClick";
import Button from "../../../../../components/basic/Button";
import {GoKebabHorizontal} from "react-icons/go";
import ListContextMenu from "../ContexMenu";
import ListHeaderEdit from "./HeaderEdit";
import classes from './ListHeader.module.css'
import PropTypes from "prop-types";


export default function ListHeader({column}) {


    return (
        <div className={classes.header}>
            <div className={classes.title_wrapper}>
                <OutsideClick
                    type='replace'
                    external={
                        <div className={classes.title}>{column.header}</div>
                    }>
                    <ListHeaderEdit header={column.header}/>
                </OutsideClick>

            </div>
            <div className={classes.context_wrapper}>
                <OutsideClick
                    external={
                        <Button
                            variant={'just_icon'}
                            icon={<GoKebabHorizontal/>}>
                        </Button>
                    }>
                    <ListContextMenu column={column._id}/>
                </OutsideClick>
            </div>
        </div>
    );
};


ListHeader.propTypes = {
    header: PropTypes.string
}


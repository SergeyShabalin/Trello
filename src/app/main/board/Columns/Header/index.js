import React, {useState} from 'react';
import OutsideClick from "../../../../../components/basic/OutsideClick";
import Button from "../../../../../components/basic/Button";
import {GoKebabHorizontal} from "react-icons/go";
import ListContextMenu from "../ContexMenu";
import ListHeaderEdit from "./HeaderEdit";
import classes from './ListHeader.module.css'
import PropTypes from "prop-types";


export default function ListHeader({header}) {

    const slice = header.slice(0, 25);

    return (
        <div className={classes.header}>
            <div className={classes.title_wrapper}>
                <OutsideClick
                    type='replace'
                    external={
                        header.length > 30 ? <div className={classes.title}>{slice}...</div>
                            : <div className={classes.title}>{header}</div>
                    }>
                    <ListHeaderEdit header={header}/>
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
                    <ListContextMenu/>
                </OutsideClick>
            </div>
        </div>
    );
};


ListHeader.propTypes = {
    header: PropTypes.string
}


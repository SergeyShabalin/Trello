import React from 'react';
import PropTypes from "prop-types";
import ListContextMenu from "../ContexMenu";
import ListHeaderEdit from "./HeaderEdit";
import classes from './ListHeader.module.css'



export default function ListHeader({column}) {

    return (
        <div className={classes.header}>
            <div className={classes.title_wrapper}>
                <ListHeaderEdit header={column.header} columnId={column._id}/>
            </div>
            <div className={classes.context_wrapper}>
                <ListContextMenu columnId={column._id}/>
            </div>
        </div>
    );
};


ListHeader.propTypes = {
    header: PropTypes.string
}


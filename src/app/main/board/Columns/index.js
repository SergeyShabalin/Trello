import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from './ColumnWrapper.module.css'


export default function Column({column, cardList}) {

    return (
        <div className={classes.list_wrapper}>
            <ListHeader column={column}/>
            {cardList}
            <CardCreator/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}

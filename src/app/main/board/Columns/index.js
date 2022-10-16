import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from './ColumnWrapper.module.css'

export default function Column({header, onClick, children}) {

    return (
        <div className={classes.list_wrapper}
             onClick={onClick}>
            <ListHeader header={header}/>
            {children} {/*listcard*/}
            <CardCreator/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}


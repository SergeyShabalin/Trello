import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";
import classes from './styles/ListWrapper.module.css'


export default function ListWrapper({header, onClick}) {


    return (
        <div className={classes.list_wrapper}
             onClick={onClick}>
            <ListHeader header={header}/>
            <ListCard/>
            <CardCreator/>
        </div>
    );
};

ListWrapper.propTypes = {
    header: PropTypes.string
}


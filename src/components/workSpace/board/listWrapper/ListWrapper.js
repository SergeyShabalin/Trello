import React from 'react';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";
import classes from './styles/ListWrapper.module.css'

export default function ListWrapper({header}) {
    return (
        <div className={classes.list_wrapper}>

            <ListHeader header ={header}/>
            <ListCard/>

            <CardCreator/>
        </div>
    );
};


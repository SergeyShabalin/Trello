import React from 'react';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";
import classes from './styles/ListWrapper.module.css'

export default function ListWrapper() {
    return (
        <div className={classes.list_wrapper}>
          ListWrapper
            <ListHeader/>
            <ListCard/>
            <CardCreator/>
        </div>
    );
};


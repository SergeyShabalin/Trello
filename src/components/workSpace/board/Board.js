import React from 'react';
import ListWrapper from "./listWrapper/ListWrapper";
import classes from './styles/Board.module.css'

export default function Board(){
    return (
        <div className={classes.board}>
           Board
            <ListWrapper/>
            <ListWrapper/>
            <ListWrapper/>
            <ListWrapper/>
        </div>
    );
};


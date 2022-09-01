import React from 'react';
import ListWrapper from "./listWrapper/ListWrapper";
import './styles/Board.css'

export default function Board(){
    return (
        <div className='board'>
           Board
            <ListWrapper/>
            <ListWrapper/>
            <ListWrapper/>
            <ListWrapper/>
        </div>
    );
};


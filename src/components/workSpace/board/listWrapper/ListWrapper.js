import React from 'react';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";
import './styles/ListWrapper.css'

export default function ListWrapper() {
    return (
        <div className='list-wrapper'>
          ListWrapper
            <ListHeader/>
            <ListCard/>
            <CardCreator/>
        </div>
    );
};


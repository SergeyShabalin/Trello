import React from 'react';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";

export default function ListWrapper() {
    return (
        <div>
          ListWrapper
            <ListHeader/>
            <ListCard/>
            <CardCreator/>
        </div>
    );
};


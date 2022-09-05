import React from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";

import classes from './styles/ListCard.module.css'
export default function ListCard(){
    return (
        <div className={classes.list_card}>
            ListCard
            <Checkout/>
            <ContentEdit/>
        </div>
    );
};

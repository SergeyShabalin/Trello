import React from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";

import classes from './styles/ListCard.module.css'

export default function ListCard() {
    return (
        <div className={classes.list_card}>
            <div className={classes.title}>
                <div>
                    Составление технической документации
                </div>
                <ContentEdit/>
            </div>

            <Checkout/>
        </div>
    );
};

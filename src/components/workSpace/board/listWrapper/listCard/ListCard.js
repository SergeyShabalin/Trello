import React from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";

import classes from './styles/ListCard.module.css'
import DecisionDate from "./decisionDate/DecisionDate";

export default function ListCard() {
    return (
        <div className={classes.list_card}>
            <div className={classes.title}>
                <div>
                    Составление технической документации
                </div>
                <ContentEdit/>
            </div>
            <div className={classes.footer}>
                <DecisionDate/>
                <Checkout/>
            </div>
<hr/>
        </div>
    );
};

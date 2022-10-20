import React from 'react';
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import classes from './ListCard.module.css'

export default function ListCard({header}) {

    return (
        <div className={classes.list_card}>
                <ContentEdit
                    header={header}/>
            <div className={classes.footer}>
                <DecisionDate/>
                <Checkout/>
            </div>
            <hr/>
        </div>

    );
};

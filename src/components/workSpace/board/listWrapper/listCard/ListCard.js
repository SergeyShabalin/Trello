import React, {useState} from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";

import classes from './styles/ListCard.module.css'
import DecisionDate from "./decisionDate/DecisionDate";

export default function ListCard() {

    const [isEdit, setIsEdit] = useState(false)



    return (
        <div className={classes.list_card}>
            <div className={classes.title}>
                {isEdit ? <textarea
                        rows="5" cols="35"
                        className={classes.text_area}>
                        Составление технической документации</textarea> :
                <div>Составление технической документации </div>}

                <ContentEdit setIsEdit = {setIsEdit}/>
            </div>
            <div className={classes.footer}>
                <DecisionDate/>
                <Checkout/>
            </div>
<hr/>
        </div>
    );
};

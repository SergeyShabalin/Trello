import React, {useState} from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";
import DecisionDate from "./decisionDate/DecisionDate";
import classes from './styles/ListCard.module.css'


export default function ListCard() {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className={classes.list_card}>
            <div className={classes.title}>
                {isEdit ? <textarea
                        rows="5" cols="30"
                        className={classes.text_area}>
                        Составление технической документации</textarea> :
                <div>Составление технической документации </div>
                }

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

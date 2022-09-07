import React, {useState} from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";
import DecisionDate from "./decisionDate/DecisionDate";
import Input from "../../../../basic/input/Input";
import classes from './styles/ListCard.module.css'


export default function ListCard() {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className={classes.list_card}>
            <div className={classes.title}>
                {isEdit ?   <Input
                       variant={'textarea'}
                       rows={5} cols={30}
                       value=' Составление технической документации'
                /> :
                <div>Составление технической документации</div>}

                <ContentEdit setIsEdit={setIsEdit}/>
            </div>
            <div className={classes.footer}>
                <DecisionDate/>
                <Checkout/>
            </div>
            <hr/>
        </div>
    );
};

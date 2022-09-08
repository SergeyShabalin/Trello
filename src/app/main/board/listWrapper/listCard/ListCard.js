import React, {useState} from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";
import DecisionDate from "./decisionDate/DecisionDate";
import Input from "../../../../../components/basic/input/Input";
import classes from './styles/ListCard.module.css'


export default function ListCard() {

    const [isEdit, setIsEdit] = useState(false)
    console.log(isEdit)
    function getNewValue({target}) {
        console.log(target.value)
    }

    return (
        <div className={classes.list_card}>
            <div className={classes.title} onClick={() => setIsEdit(false)}>
                {isEdit ?
                    <div className={classes.quick_editor}>
                        <div className={classes.quick_editor_input}>
                            <Input
                                rows={5} cols={30}
                                value='Составление технической документации'
                                onChange={getNewValue}
                            />
                         </div>

                     </div>
                    :
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

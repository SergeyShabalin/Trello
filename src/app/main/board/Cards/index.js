import React, {useState} from 'react';
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";
import Input from "../../../../components/basic/Input";
import classes from './ListCard.module.css'


export default function ListCard({header}) {

    const [isEdit, setIsEdit] = useState(false)

    return (
        <div className={classes.list_card}>
            <div className={classes.title} onClick={() => setIsEdit(false)}>
                {isEdit ?
                    <div className={classes.quick_editor_input}>
                        <Input
                            rows={5} cols={30}
                            value={header}/>
                    </div>
                    :
                    <span className={classes.content}>{header}</span>
                }

                <div className={classes.content_edit}>
                    <ContentEdit setIsEdit={setIsEdit}/>
                </div>
            </div>
            <div className={classes.footer}>
                <DecisionDate/>
                <Checkout/>
            </div>
            <hr/>
        </div>

    );
};

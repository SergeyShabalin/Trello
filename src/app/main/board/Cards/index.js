import React, {useState, useEffect} from 'react';
import Checkout from "./Checkout";
import ContentEdit from "./ContentEdit";
import DecisionDate from "./DecisionDate";

import {Api} from '../../../../Api'
import {useLocation} from 'react-router-dom'
import classes from './ListCard.module.css'
import Select from "../../../../components/basic/Select";
import {useDispatch, useSelector} from "react-redux";

import Button from "../../../../components/basic/Button";
import {MdKeyboardArrowDown} from "react-icons/md";
import Input from "../../../../components/basic/Input";


export default function ListCard({id, card, children }) {

    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch()

    return (

        <div className={classes.list_card}>

                    <div className={classes.title} onClick={() => setIsEdit(false)}>
                        {isEdit ?
                            <div className={classes.quick_editor_input}>
                                <Input
                                    rows={5} cols={30}
                                    value={children}
                                    // onChange={getNewValue}
                                />
                            </div>
                            :
                            <div className={classes.content}>{children}</div>
                        }

                        <div className={classes.content_edit}><ContentEdit setIsEdit={setIsEdit}/></div>
                    </div>
                    <div className={classes.footer}>
                        <DecisionDate/>
                        <Checkout/>

                    </div>
                    <hr/>
        </div>

    );
};

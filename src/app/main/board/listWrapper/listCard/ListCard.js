import React, {useState, useEffect} from 'react';
import Checkout from "./checkout/Checkout";
import ContentEdit from "./contentEdit/ContentEdit";
import DecisionDate from "./decisionDate/DecisionDate";
import Input from "../../../../../components/basic/input/Input";
import {Api} from '../../../../../Api'
import {useLocation} from 'react-router-dom'
import classes from './styles/ListCard.module.css'
import Select from "../../../../../components/basic/select/Select";
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../../../../store/asyncAction/Cards";
import Button from "../../../../../components/basic/button/Button";
import {MdKeyboardArrowDown} from "react-icons/md";




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

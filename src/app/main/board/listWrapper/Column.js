import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./listHeader/ListHeader";
import ListCard from "./listCard/ListCard";
import CardCreator from "./cardCreator/CardCreator";
import classes from './styles/ListWrapper.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllCards} from "../../../../store/asyncAction/Cards";


export default function Column({header, onClick, cards}) {

    const dispatch = useDispatch()



    useEffect(() => {

    }, [])


    // let listCard = cards.map(item => (
    //     <ListCard card = {item.header}/>
    // ))


    return (
        <div className={classes.list_wrapper}
             onClick={onClick}>
            <ListHeader header={header}/>
            <ListCard card={cards}/>
            <CardCreator/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}


import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from './ColumnWrapper.module.css'
import ListCard from "../Cards";


export default function Column({column, cardList}) {

    const [isCreator, setIsCreator] = useState(false)

    function addCardMenuCreate() {
        setIsCreator(true)
    }

    function menuClose() {
        setIsCreator(false)
    }

    return (
        <div className={classes.list_wrapper}>
            <ListHeader column={column}
                        addCardMenuCreate={addCardMenuCreate}/>

        <div className={classes.cards_wrapper}>
            {cardList.map(item =>
                <ListCard
                    key={item._id}
                    cardId={item._id}
                    header={item.header}
                />
            )
            }
        </div>
            <CardCreator
                isCreator={isCreator}
                menuClose={menuClose}
                menuCreate={addCardMenuCreate}
                columnId={column._id}/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}

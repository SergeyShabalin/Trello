import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./Header";
import CardCreator from "../CardCreator";
import classes from './ColumnWrapper.module.css'
import ListCard from "../Cards";


export default function Column({column, cardList}) {

    return (
        <div className={classes.list_wrapper}>
            <ListHeader column={column}/>
            {cardList.map(item =>
                <ListCard
                    key={item._id}
                    header={item.header} />
              )
            }
            <CardCreator columnId={column._id}/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}

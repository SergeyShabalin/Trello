import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import ListHeader from "./listHeader/ListHeader";
import CardCreator from "./cardCreator/CardCreator";
import classes from './styles/ListWrapper.module.css'



export default function Column({header, onClick, children}) {


    return (
        <div className={classes.list_wrapper}
             onClick={onClick}>
            <ListHeader header={header}/>
            {children} {/*listcard*/}
            <CardCreator/>
        </div>
    );
};

Column.propTypes = {
    header: PropTypes.string
}


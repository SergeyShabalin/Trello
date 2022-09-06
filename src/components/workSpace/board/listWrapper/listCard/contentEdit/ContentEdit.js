import React from 'react';
import Button from "../../../../../basic/button/Button";
import {GrEdit} from "react-icons/gr";

import classes from './style/ContentEdit.module.css'

export default function ContentEdit() {
    return (
        <div className={classes.content_edit}>
            <Button
                variant={'only_icon'}
                icon={<GrEdit/>}
            >
            </Button>
        </div>
    );
};


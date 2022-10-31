import React, { useState } from "react";
import PropTypes from "prop-types";
import ListContextMenu from "../ContexMenu";
import ListHeaderEdit from "./HeaderEdit";
import classes from "./ListHeader.module.css";

export default function ListHeader({ column, addCardMenuCreate }) {

  const [isEditHeader, setIsEditHeader] = useState(false);

  function openEditHeader() {
    setIsEditHeader(true);
  }

  function closeEditHeader() {
    setIsEditHeader(false);
  }

  return (
    <div className={classes.header}>
      <div className={classes.title_wrapper} onClick={openEditHeader}>
        <ListHeaderEdit
          openEditHeader={openEditHeader}
          closeEditHeader={closeEditHeader}
          isEditHeader={isEditHeader}
          header={column.header}
          columnId={column._id} />
      </div>
      <div className={classes.context_wrapper}>
        <ListContextMenu
          // addCardMenuCreate={addCardMenuCreate}
          columnId={column._id} />
      </div>
    </div>
  );
};


ListHeader.propTypes = {
  header: PropTypes.string
};


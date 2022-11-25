import React, {  useState } from "react";
import { Link, Outlet, useLocation, } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import useOpenCloseContext from "../../../../../hooks/UseOpenCloseContext";
import Button from "../../../../../components/basic/Button";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "./ContextMenu";
import Editor from "./Editor";
import classes from "./ContentEdit.module.css";

export default function ContentEdit({ header, cardId, columnId, order, boardId }) {

  const location = useLocation();
  const [coordinates, setCoordinates] = useState();
  const {contextOpen, contextClose, isContext} = useOpenCloseContext()

  function openModal(e){
    const coords = e.currentTarget.getBoundingClientRect();
    setCoordinates(coords);
    contextOpen()
  }

  return (
    <div className={classes.header}>
       <Link className={classes.link} state={{ background: location }} to={`/board/${boardId}/card/${cardId}`}>
        <div className={classes.title}>{header}</div>
      </Link>

      <div className={classes.button_edit}>
        <Button
          opacity={true}
          onClick={openModal}
          variant="just_icon"
          icon={<BiEdit />} />

        <Modal
          open={isContext}
          onClose={contextClose}
          coordinates={coordinates}>
          <div className={classes.content_edit}>
            <Editor
              columnId={columnId}
              header={isContext}
              closeModalContextMenu={contextClose}
              cardId={cardId}/>

            <CardContextMenu
              columnId={columnId}
              cardId={cardId}
              order={order}
              closeModalContextMenu={contextClose}/>

          </div>
        </Modal>
        <Outlet/>
      </div>
    </div>
  );
}


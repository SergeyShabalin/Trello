import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "../../../../../components/basic/Button";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "./ContextMenu";
import Editor from "./Editor";
import classes from "./ContentEdit.module.css";
import CardModal from "../../CardModal";

export default function ContentEdit({ header, cardId, columnId, columnHeader, cardIndex, columnIndex }) {

  const location = useLocation();

  const [isModal, setIsModal] = useState(false);

  const [isModalContextMenu, setIsModalContextMenu] = useState(false);
  const [coordinates, setCoordinates] = useState();

  function openCloseModal() {
    setIsModal(!isModal);
  }

  function openModalContextMenu(e) {
    const coords = e.currentTarget.getBoundingClientRect();
    setCoordinates(coords);
    setIsModalContextMenu(true);
  }

  function closeModalContextMenu() {
    setIsModalContextMenu(false);
  }

  return (
      <div className={classes.header}>
        <Link className={classes.link} state={{ background: location }} to={`/card/${cardId}`} >
          <div className={classes.title}>{header}</div>
        </Link>


        <div className={classes.button_edit}>
          <Button
            opacity={true}
            onClick={openModalContextMenu}
            variant="just_icon"
            icon={<BiEdit />} />

          <Modal
            open={isModalContextMenu}
            onClose={closeModalContextMenu}
            coordinates={coordinates}>
            <div className={classes.content_edit}>
              <Editor
                cardIndex={cardIndex}
                columnIndex={columnIndex}
                columnId={columnId}
                header={header}
                closeModalContextMenu={closeModalContextMenu}
                cardId={cardId}
              />
              <CardContextMenu
                columnId={columnId}
                cardId={cardId}
                closeModalContextMenu={closeModalContextMenu}
              />
            </div>
          </Modal>
          <Outlet />
          {/*<Modal*/}
          {/*  open={isModal}*/}
          {/*  onClose={openCloseModal}>*/}
          {/*  <CardModal*/}
          {/*    cardId={cardId}*/}
          {/*    openCloseModal={openCloseModal}*/}
          {/*    columnHeader={columnHeader} />*/}
          {/*</Modal>*/}

        </div>
      </div>
  );
}


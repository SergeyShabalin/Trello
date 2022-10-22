import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Button from "../../../../../components/basic/Button";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "./ContextMenu";
import Editor from "./Editor";
import classes from "./ContentEdit.module.css";

export default function ContentEdit({ header, cardId, columnId }) {

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
    <>
      <div className={classes.header}>
        <div className={classes.title} onClick={openCloseModal}>
          {header}
        </div>

        <div className={classes.button_edit}>
          <Button
            opacity={true}
            onClick={openModalContextMenu}
            variant={"just_icon"}
            icon={<BiEdit />} />

          <Modal
            open={isModalContextMenu}
            onClose={closeModalContextMenu}
            coordinates={coordinates}>
            <div className={classes.content_edit}>
              <Editor
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

          <Modal
            open={isModal}
            onClose={openCloseModal}><span
            className={classes.modal_open}>Окно быстрого редактирования</span>
          </Modal>
        </div>
      </div>

    </>
  );
}


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "../../../../../components/basic/Button";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "./ContextMenu";
import Editor from "./Editor";
import classes from "./ContentEdit.module.css";
import CardModal from "../../CardModal";

export default function ContentEdit({ header, cardId, columnId, columnHeader, description }) {

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
        <Link className={classes.link} to={`/card/${cardId}`}>
          <Modal
            open={isModal}
            onClose={openCloseModal}>
            <CardModal
              openCloseModal={openCloseModal}
              description={description}
              columnHeader={columnHeader} titleCard={header} />
          </Modal>
          <div className={classes.title}
               onClick={openCloseModal}>{header}</div>

        </Link>


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


        </div>
      </div>

    </>
  );
}


import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import Button from "../../../../../components/basic/Button";
import Modal from "../../../../../components/basic/Modal";
import CardContextMenu from "./ContextMenu";
import Editor from "./Editor";
import useOpenModalContextMenu from "./useOpenModalContextMenu";
import classes from "./ContentEdit.module.css";
import MovingCard from "./MovingCard";
import useOpenMovingForm from "./useOpenMovingForm";


export default function ContentEdit({ header, cardId, columnId }) {

  const location = useLocation();

  const [coordinates, setCoordinates] = useState();
  const {isModalContextMenu, openModalContextMenu,closeModalContextMenu} = useOpenModalContextMenu()
  // const {isMoving, openMoving, closeMoving} = useOpenMovingForm()

  function openModal(e){
    const coords = e.currentTarget.getBoundingClientRect();
    setCoordinates(coords);
    openModalContextMenu()
  }

  return (
    <div className={classes.header}>
      <Link className={classes.link} state={{ background: location }} to={`/card/${cardId}`}>
        <div className={classes.title}>{header}</div>
      </Link>


      <div className={classes.button_edit}>
        <Button
          opacity={true}
          onClick={openModal}
          variant="just_icon"
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
              // openMoving={openMoving}
              // closeMoving = {closeMoving}
            />
          </div>
          {/*{isMoving &&  <MovingCard closeMoving={closeMoving}/>}*/}
        </Modal>
        <Outlet />
      </div>
    </div>
  );
}


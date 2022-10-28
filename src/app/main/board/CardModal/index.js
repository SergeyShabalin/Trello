import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck2Square } from "react-icons/bs";
import Description from "./Description";
import classes from "./CardModal.module.css";
import CheckList from "./CheckList";
import { AiOutlineMenuUnfold, AiOutlineCreditCard, AiOutlineClose } from "react-icons/ai";
import Button from "../../../../components/basic/Button";
import { getCardInfo } from "../../../../store/cards/asyncActions";
import CheckListCreator from "./CheckListCreator";
import Modal from "../../../../components/basic/Modal";
import { useNavigate, useParams } from "react-router-dom";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";

//TODO:
// 1.параметры из урла. +++
// 2.Заголовок колонки из запроса к серверу
// 3. Избавиться от пропсов
// 4. Добавить очистку карточки при ее закрытии
export default function CardModal({ columnHeader = "", openCloseModal }) {

  const [isEditDescription, setIsEditDescription] = useState(false);
  const cardInfo = useSelector(state => state.cards.cards);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { cardId } = useParams();

  useEffect(() => {
    dispatch(getCardInfo(cardId));
  }, []);

  function openEditDescription() {
    setIsEditDescription(true);
  }

  function closeEditDescription() {
    setIsEditDescription(false);
  }

  function closeModal() {
    navigate("/");
  }

  const CheckLists = cardInfo.checkList &&
    cardInfo.checkList.map(checkItem => {
      return (
        <CheckList
          cardId={cardId}
          key={checkItem._id}
          checkListId={checkItem._id}
          task={checkItem.task}
          done={checkItem.done} />
      );
    });

  return (
    <Modal onClose={closeModal} open>
      <div className={classes.card_modal_wrapper}>
        <div className={classes.header}>
          <div className={classes.title_wrapper}>
            <div><AiOutlineCreditCard className={classes.icons} /></div>
            <h3 className={classes.title}>{cardInfo.header}</h3>
          </div>
          <div className={classes.form_close}>
            <Button
              onClick={closeModal}
              variant="just_icon"
              icon={<AiOutlineClose />}>
            </Button>
          </div>
        </div>

        {/*<p className={classes.title_column}>в колонке "{columnHeader}"</p>*/}
        <div className={classes.date_wrapper}>

        </div>

        <div className={classes.description_wrapper}>
          <AiOutlineMenuUnfold className={classes.icons} />
          <h4 className={classes.description_title}>Описание</h4>

          <Button label="Изменить"
                  onClick={openEditDescription} />

        </div>
        <Description description={cardInfo.description}
                     openEditDescription={openEditDescription}
                     closeEditDescription={closeEditDescription}
                     isEditDescription={isEditDescription} />

        <div className={classes.checkbox_title_wrapper}>
          <BsCheck2Square className={classes.icons} />
          <h4 className={classes.checkbox_title}>Чек-лист</h4></div>
        <div className={classes.checklists_wrapper}>{CheckLists}</div>
        <CheckListCreator cardId={cardId} />

      </div>
    </Modal>
  );
}


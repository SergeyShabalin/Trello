import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCheckSquare } from "react-icons/fi";
import Description from "./Description";
import classes from "./CardModal.module.css";
import CheckList from "./CheckList";
import { AiOutlineMenuUnfold, AiOutlineCreditCard, AiOutlineClose } from "react-icons/ai";
import Button from "../../../../components/basic/Button";
import { clearCardInfo, getCardInfo } from "../../../../store/cards/asyncActions";
import CheckListCreator from "./CheckListCreator";
import Modal from "../../../../components/basic/Modal";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import Slider from "../../../../components/basic/Input/Slider";
import { Header } from "./Header";

//TODO:
// 1.параметры из урла. +++
// 2.Заголовок колонки из запроса к серверу +++
// 3. Избавиться от пропсов+++
// 4. Добавить очистку карточки при ее закрытии+++


export default function CardModal() {

  const [isEditDescription, setIsEditDescription] = useState(false);
  const cardInfo = useSelector(({ cards }) => cards.cards);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { cardId } = useParams();
  const checkListDone = cardInfo?.checkList.filter(item => item.done);

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
    dispatch(clearCardInfo());
  }

  const CheckLists = cardInfo?.checkList.map(checkItem => (
    <CheckList key={checkItem._id} cardId={cardId} {...checkItem} />));

  return (
    <Modal onClose={closeModal} open>
      <div className={classes.card_modal_wrapper}>

        <Header closeModal={closeModal} title={cardInfo.header} />
        <p className={classes.title_column}>в колонке "{cardInfo?.columnHeader}"</p>

        {/*decisionDate*/}
        <div className={classes.date_wrapper}></div>
        {/*decisionDate*/}

        <Description
          description={cardInfo.description}
          columnId={cardInfo.column_id}
          cardId={cardId}
          openEditDescription={openEditDescription}
          closeEditDescription={closeEditDescription}
          isEditDescription={isEditDescription} />

        {/*CheckLists*/}
        <div className={classes.checkbox_title_wrapper}>
         <FiCheckSquare className={classes.icons} />
          <h4 className={classes.checkbox_title}>Чек-лист</h4>
        </div>

        <div className={classes.slider}>
          <Slider
            allTask={cardInfo?.checkList.length}
            doneTask={checkListDone.length} />
        </div>

        <div className={classes.checklists_wrapper}>{CheckLists}</div>

        <CheckListCreator cardId={cardId} />
        {/*CheckLists*/}
      </div>
    </Modal>
  );
}


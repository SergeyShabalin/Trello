// style //TODO+++
// directores //TODO+++
// убрать id из стора listContextMenu//TODO+++
// сократить санки //TODO+++
// /columns/delete/${columnId}` == /columns/${columnId}`//TODO+++
// убрать dispatch(getAllColumns())//TODO+++
// создать папку api //TODO+++
// придумать как отображать header (transform/tooltip/text)!!! //TODO+++
// isFullSize button //TODO+++
// переписать меню на список !!! //TODO+++
// заменить div на span or p для текста !!! //TODO+++
// создать hook https://usehooks.com/page/3 !!! //TODO+++
// переписать редакс (по желанию) //TODO+++
//  В Board исправить вывод карточек //TODO+++
//Пофиксить несоответсие типов HeaderEdit стр 26//TODO+++
//variant transparent input на boolean//TODO+++
import React from "react";

const Todo = () => {
  return (
    <div>
      TOOOOODOOOO
    </div>
  );
};

export default Todo;

//Разобраться с линком, не нажимаются чекбоксы либо кнопки перезагружают страницу
//Разобраться с открытием модалки через контекстное меню карточки. Попробовать через стейт закрытия инпута
//Удаление карточек вместе с колонками
//Редирект после закрытия модалки на главную страницу
//[…columns][columnIndex][cardIndex]= newCard избавиться от перебора map
//Описание карточек
//Чеклист карточек
// TODO+++ Когда открываю карточку - делаю запрос к серверу на получение всех данных о карточке
//TODO +++ Добавление чеклиста на сервере TODO
//TODO сделай нормальные имена)))

//TODO сделать глобальный стиль скролла

//TODO сделать удаление чеклистов вместе с карточкой
//TODO на бэке стоит запрет на добавление чеклистов с одинаковым описанием, убрать


//TODO переименовать cards на card в asyncAction updateTaskValue

// console.log( 'cardId', cardId,  'title', title,  'columnId', columnId, 'desc', description);
// console.log(newTitle, "cardIndex", cardIndex, "columnIndex", columnIndex);

// const card =(columns[columnIndex].cards[cardIndex]);
// const f = columns;
//
// const newCard = { header: "header", description: "description" };
// const newColumns = [...columns][columnIndex].cards[cardIndex] = newCard;
// console.log("columns", columns);
// console.log("newColumns", newColumns);
//
//
// const copyColumns = [...columns];
// const copyColumn = { ...copyColumns[columnIndex] };
// const copyCards = [...copyColumn.cards];
// const copyCard = { ...copyCards[cardIndex] } = newCard;
//
// console.log('columns', columns);
// console.log('copyColumns', copyColumns);
// console.log('copyColumn', copyColumn);
// console.log('copyCards', copyCards);
// console.log('copyCard', copyCard);
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

//variant transparent input на boolean













//TODO
const dd =  [
    {
        _id: '1',
        header: 'Готово'
    } ,
    {_id: '2',
        header: 'Готово',
        },
    {_id: '3',
        header: 'Готово',
       }
]
console.log(dd)
  const a=  dd.filter(item=> item._id==='2')
console.log(a)
a[0].header='провернуть'
  console.log('новый',dd)

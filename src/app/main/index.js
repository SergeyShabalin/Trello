import Board from "./Board";
import Header from "./Header";
import classes from './Main.module.css'
import '../../GlobalStyles.css'


export default function Main() {

    //TODO
    // const dd =  [
    //     {
    //         _id: '1',
    //         header: 'Готово'
    //     } ,
    //     {_id: '2',
    //         header: 'Готово',
    //         },
    //     {_id: '3',
    //         header: 'Готово',
    //        }
    // ]
    // console.log(dd)
    //   const a=  dd.filter(item=> item._id==='2')
    // console.log(a)
    // a[0].header='провернуть'
    //   console.log('новый',dd)


    return (
        <div className={classes.main}>
            <div className={classes.header_main}>
                <Header/>
                <div className={classes.work_space}>
                    <Board/>
                </div>
            </div>
        </div>

    )
}
import WorkSpace from "../workSpace/WorkSpace";
import Header from "../header/Header";


import './styles/Main.css'
import '../globalStyles/GlobalStyles.css'

export default function Main(){

    return(
        <div className='main'>
           <div className='header-main'>
                <Header/>
                <WorkSpace/>
        </div>
        </div>

    )
}
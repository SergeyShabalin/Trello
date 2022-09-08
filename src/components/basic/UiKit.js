import Button from './button/Button'
import {AiOutlinePlus} from "react-icons/ai";
import {GrEdit} from "react-icons/gr";
import Input from "./input/Input";

import classes from './styles/UiKit.module.css'
import {MdKeyboardArrowDown} from "react-icons/md";


{/*1. кнопки*/
}
{/*2. Поле ввода*/
}
{/*3. Модалка*/
}
{/*4. Чекбокс*/
}
{/*5. Селект*/
}
export default function UiKit() {
    return (
        <div className={classes.buttons}>

            <Button
                label={'double text'}
                startIcon={<AiOutlinePlus/>}>
            </Button>

            <Button
                label={'text'}>
            </Button>

            <Button
                variant={'contained'}
                label={'contained'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant={'outlined'}
                label={'outlined'}
                startIcon={<AiOutlinePlus/>}>
            </Button>

            <Button
                variant={'disabled'}
                disabled={true}
                label={'disabled'}
                endIcon={<MdKeyboardArrowDown/>}>
            </Button>

            <Button
                variant={'only_icon'}
                icon={<GrEdit/>}>
            </Button>

            <Button
                color = {'submit'}
            label={'submit'}>
            </Button>
            {/*<Button>error</Button>*/}
            {/*<Button>primary</Button>*/}
            {/*<Button>secondary</Button>*/}
            {/*<Button disabled>disabled</Button>*/}
            {/*<Button startIcon={<AiOutlinePlus size='22px'/>}>start icon</Button>*/}
            {/*<Button endIcon={<AiOutlinePlus size='22px' />}>end icon</Button>*/}

        </div>


    )
}
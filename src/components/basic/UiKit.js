import React from 'react'

import Button from './button/Button'
import {AiOutlinePlus, AiOutlineBgColors} from "react-icons/ai";
import {HiOutlineSearch} from "react-icons/hi";
import {CgMenuGridO} from "react-icons/cg";
import {MdKeyboardArrowDown, MdOutlineModeEditOutline} from "react-icons/md";
import {GoKebabHorizontal} from "react-icons/go";
import Input from "./input/Input";

import classes from './styles/UiKit.module.css'


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
            <div className={classes.buttons_text}>
                <Button
                    label={'text'}>
                </Button>

                <Button
                    label={'text start icon'}
                    startIcon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    label={'text end icon'}
                    endIcon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    color={'submit'}
                    label={'text submit'}>
                </Button>

                <Button
                    color={'error'}
                    label={'error'}>
                </Button>

                <Button
                    disabled={true}
                    label={'text disabled'}>
                </Button>
            </div>

            <div className={classes.buttons_contained}>
                <Button
                    variant={'contained'}
                    label={'contained'}>
                </Button>

                <Button
                    variant={'contained'}
                    label={'contained start icon'}
                    startIcon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    variant={'contained'}
                    label={'contained end icon'}
                    endIcon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    variant={'contained'}
                    color={'submit'}
                    label={'contained submit'}>
                </Button>

                <Button
                    variant={'contained'}
                    color={'error'}
                    label={'contained error'}>
                </Button>

                <Button
                    variant={'contained'}
                    disabled={true}
                    label={'contained disabled'}>
                </Button>
            </div>

            <div className={classes.buttons_outlined}>
                <Button
                    variant={'outlined'}
                    label={'outlined'}>
                </Button>

                <Button
                    variant={'outlined'}
                    label={'outlined start icon'}
                    startIcon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    variant={'outlined'}
                    label={'outlined end icon'}
                    endIcon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    variant={'outlined'}
                    color={'submit'}
                    label={'outlined submit'}>
                </Button>

                <Button
                    variant={'outlined'}
                    color={'error'}
                    label={'outlined error'}>
                </Button>

                <Button
                    variant={'outlined'}
                    disabled={true}
                    label={'outlined disabled'}>
                </Button>
            </div>


            <div className={classes.buttons_only_icon}>
                <Button
                    variant={'just_icon'}
                    icon={<MdOutlineModeEditOutline/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    icon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    icon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    icon={<GoKebabHorizontal/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    icon={<CgMenuGridO/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    disabled={true}
                    icon={<MdOutlineModeEditOutline/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    disabled={true}
                    icon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    disabled={'true'}
                    icon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    disabled={true}
                    icon={<GoKebabHorizontal/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    disabled={true}
                    icon={<CgMenuGridO/>}>
                </Button>


                <Button
                    variant={'just_icon'}
                    variety={'sized'}
                    icon={<MdOutlineModeEditOutline/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    variety={'sized'}
                    icon={<MdKeyboardArrowDown/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    variety={'sized'}
                    icon={<AiOutlinePlus/>}>
                </Button>

                <Button
                    variant={'just_icon'}

                    variety={'sized'}
                    icon={<GoKebabHorizontal/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    variety={'sized'}
                    icon={<CgMenuGridO/>}>
                </Button>

                <Button
                    variant={'just_icon'}
                    variety={'sized'}
                    color={'changed'}
                    icon={<AiOutlineBgColors/>}>
                </Button>
            </div>

            <hr/>


            <div className={classes.inputs}>


                <Input
                    iconLeft={
                        <Button
                            variant={'just_icon'}
                            variety={'sized'}
                            icon={<HiOutlineSearch/>}>
                        </Button>
                    }
                    value='icon left'>
                </Input>

                <Input
                    iconRight={
                        <Button
                            variant={'just_icon'}
                            variety={'sized'}
                            icon={<HiOutlineSearch/>}>
                        </Button>
                    }
                    value={'icon right'}>
                    ></Input>

                <Input
                    placeholder={'placeholder'}></Input>

                <Input
                    label={'label'}></Input>

                <Input
                    disabled={true}
                    value='disabled'></Input>


                <Input
                    label={'label textarea'}
                    placeholder={'placeholder textarea'}
                    cols={15}
                    rows={3}
                    value='textarea'>
                </Input>

                <Input
                    placeholder={'placeholder textarea'}
                    cols={25}
                    rows={3}>
                </Input>

            </div>

        </div>

    )
}
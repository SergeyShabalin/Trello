import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineBgColors } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { MdKeyboardArrowDown, MdOutlineModeEditOutline } from "react-icons/md";
import { GoKebabHorizontal } from "react-icons/go";

import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";
import Checkbox from "./Сheckbox";
import Select from "./Select";
import Slider from "./Input/Slider";
import classes from "./UiKit.module.css";


export default function UiKit() {

  const [openModal, setOpenModal] = useState(false);
  const [form, setForm] = useState({ name: "" });

  const selectValue = [
    { id: 1, value: "item value 1" },
    { id: 2, value: "item value 2" },
    { id: 3, value: "item value 3" },
    { id: 4, value: "item value 4" },
    { id: 5, value: "item value 5" },
    { id: 6, value: "item value 6" }
  ];

  function submit(e) {
    e.preventDefault();
  }

  function onChange(e) {
    if (e.target) {
      setForm((prev) => ({
        ...prev, [e.target.name]: e.target.value
      }));
    } else setForm((prev) => ({
      ...prev, [e.name]: e.value
    }));
  }

  return (
    <form onSubmit={submit}>
      <div className={classes.buttons}>
        <div className={classes.buttons_text}>
          <Button label="text" />
          <Button label="text start icon" startIcon={<AiOutlinePlus />} />
          <Button label="text end icon" endIcon={<MdKeyboardArrowDown />} />
          <Button color="submit" label="text submit" />
          <Button color="error" label="error" />
          <Button disabled={true} label="text disabled" />
        </div>

        <div className={classes.buttons_contained}>
          <Button variant="contained" label="contained" />
          <Button variant="contained" label="contained start icon" startIcon=<AiOutlinePlus /> />
          <Button variant="contained" label="contained end icon" endIcon=<MdKeyboardArrowDown /> />
          <Button variant="contained" color="submit" label="contained submit" />
          <Button variant="contained" color="error" label="contained error" />
          <Button variant="contained" disabled={true} label="contained disabled" />
        </div>

        <div className={classes.buttons_outlined}>
          <Button variant="outlined" label="outlined" />
          <Button variant="outlined" label="outlined start icon" startIcon=<AiOutlinePlus />/>
          <Button variant="outlined" label="outlined end icon" endIcon={<MdKeyboardArrowDown />} />
          <Button variant="outlined" color="submit" label="outlined submit" />
          <Button variant="outlined" color="error" label="outlined error" />
          <Button variant="outlined" disabled={true} label="outlined disabled" />
        </div>

        <div className="button_full_sized">
          <Button fullSize={true} label="text full size" />
          <Button variant="contained" fullSize={true} label="contained full size" />
          <Button variant="outlined" fullSize={true} label="outlined full size" />
        </div>

        <div className={classes.buttons_only_icon}>
          <Button variant="just_icon" icon=<MdOutlineModeEditOutline />/>
          <Button variant="just_icon" icon=<MdKeyboardArrowDown />/>
          <Button variant="just_icon" icon=<AiOutlinePlus />/>
          <Button variant="just_icon" icon={<GoKebabHorizontal />} />
          <Button variant="just_icon" icon={<CgMenuGridO />} />
          <Button variant="just_icon" disabled={true} icon=<MdOutlineModeEditOutline />/>
          <Button variant="just_icon" disabled={true} icon=<MdKeyboardArrowDown />/>
          <Button variant="just_icon" disabled={true} icon=<AiOutlinePlus />/>
          <Button variant="just_icon" disabled={true} icon=<GoKebabHorizontal />/>
          <Button variant="just_icon" disabled={true} icon=<CgMenuGridO />/>
          <Button variant="just_icon" variety={true} icon=<MdOutlineModeEditOutline />/>
          <Button variant="just_icon" variety={true} icon=<MdKeyboardArrowDown />/>
          <Button variant="just_icon" variety={true} icon=<AiOutlinePlus />/>
          <Button variant="just_icon" variety={true} icon=<GoKebabHorizontal />/>
          <Button variant="just_icon" variety={true} icon=<CgMenuGridO />/>
          <Button variant="just_icon" variety={true} color="changed" icon=<AiOutlineBgColors />/>
        </div>
        <hr />

        <div className={classes.other_content}>
          <div className={classes.inputs}>
            <Input
              iconLeft=<Button variant="just_icon" variety={true} icon={<HiOutlineSearch />} />
            value="icon left"/>

            <Input
              iconRight=<Button variant="just_icon" variety={true} icon={<HiOutlineSearch />} />
            value="icon right"/>

            <Input variant="transparent" container="custom" placeholder="placeholder" />
            <Input placeholder="placeholder" />
            <Input disabled={true} value="disabled" />
            <Input label="label" />
            <Input label="label textarea" placeholder="placeholder textarea" cols={25} rows={3} value="textarea" />
            <Input placeholder="placeholder textarea" cols={25} rows={3} />
            <Input rows={3} cols={36} autoFocus variant="large" container="custom"
                   placeholder="Введите название доски" />
          </div>


          <div className={classes.modal}>
            <div className={classes.container}>
              <Button variant="contained"
                      onClick={() => setOpenModal(true)}
              >
                Модалка
              </Button>
              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}>
                <div>
                  <p>Модальное окно</p>
                </div>
              </Modal>
            </div>
          </div>


          <div className={classes.checkbox}>
            <Checkbox label="checkbox with label" />
            <Checkbox label="contained checkbox" variant="contained" />
            <Checkbox label="outlined checkbox" variant="outlined" />
            <Checkbox label="disabled text" disabled={true} />
            <Checkbox variant="contained" label="disabled contained" disabled={true} />
            <Checkbox variant="outlined" label="disabled outlined" disabled={true} />
          </div>

          <div className={classes.select}>
            <Select
              variant="outlined"
              values={[selectValue[0], selectValue[1], selectValue[2]]}
              onChange={onChange} />

            <Select
              name="test select 2"
              defaultValue="test select 2"
              values={[selectValue[3], selectValue[4], selectValue[5]]}
              onChange={onChange} />
          </div>
        </div>

        <div className={classes.slider}>
          <Slider allTask="12" doneTask="6" />
        </div>

        <div className={classes.slider}>
          <Slider allTask="12" doneTask="12" />
        </div>
      </div>
    </form>
  )
    ;
}
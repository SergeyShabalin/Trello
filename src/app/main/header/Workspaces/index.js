import React, { useState } from "react";
import Button from "../../../../components/basic/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import ContextMenu from "../ContextMenu";

export default function Workspaces() {

  const [isContext, setIsContext] = useState(false);

  function openContextMenu() {
    setIsContext(true);
  }

  function closeContextMenu() {
    setIsContext(false);
  }

  return (
    <div>
      <Button
        onClick={openContextMenu}
        variant="text"
        name="work_area"
        label="Рабочие пространства"
        endIcon={<MdKeyboardArrowDown />}>
      </Button>

      {isContext && <ContextMenu
        closeContextMenu={closeContextMenu}
        title="Рабочие пространства" />
      }
    </div>
  );
};


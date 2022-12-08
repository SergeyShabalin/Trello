import React, { useRef } from "react";

import Button from "../../../../components/basic/Button";
import Modal from "../../../../components/basic/Modal";
import useOpenCloseContext from "../../../../hooks/UseOpenCloseContext";
import useOnClickOutside from "../../../../hooks/UseOnClickOutside";
import InviteModal from "./InviteModal";

export default function Share() {

  const { isContext, contextOpen, contextClose } = useOpenCloseContext();
  const ref = useRef();
  useOnClickOutside(ref, contextClose);

  return (
    <>
      <Button onClick={contextOpen} label="Поделиться" />
      <Modal open={isContext}>
        <div ref={ref}>
          <InviteModal />
        </div>
      </Modal>
    </>
  );
};

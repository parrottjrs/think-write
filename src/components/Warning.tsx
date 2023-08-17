import * as Dialog from "@radix-ui/react-dialog";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { STYLES } from "../utils/constants";

export const Warning = ({ onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger aria-label="Delete this project">
        <Trash2 className={STYLES.TRASH} strokeWidth={1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className={STYLES.DIALOG_CONTENT}>
          <Dialog.Title className={STYLES.WARNING_DIALOG_TITLE}>
            Are you sure?
          </Dialog.Title>
          <Dialog.Description className={STYLES.STANDARD_TEXT}>
            Think carefully! Once you delete a project,{" "}
            <span className={STYLES.RED_TEXT}>
              there's no way to retrieve it
            </span>
            . Click "delete" to confirm your choice. Otherwise, click cancel.
          </Dialog.Description>
          <div className="flex flex-row justify-evenly my-1">
            <button
              id="delete"
              className={STYLES.RED_BUTTON}
              onClick={onDelete}
            >
              Delete
            </button>
            <button
              id="cancel"
              className={STYLES.BLUE_BUTTON}
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

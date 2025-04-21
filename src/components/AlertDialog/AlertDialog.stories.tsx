import type { Meta, StoryObj } from "@storybook/react";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
} from "./index";

const meta = {
  title: "AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAlertDialog: Story = {
  args: {},
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger>Discard draft</AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogBackdrop />
        <AlertDialogPopup>
          <AlertDialogTitle>Discard draft?</AlertDialogTitle>
          <AlertDialogDescription>
            You can’t undo this action.
          </AlertDialogDescription>
          <div className="flex justify-end gap-4">
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose>Discard</AlertDialogClose>
          </div>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialog>
  ),
};

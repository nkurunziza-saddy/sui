"use client";

import { toast } from "sonner";
import { ActionButton } from "../../../registry/new-york/blocks/action-button";

export function ActionButtonExample() {
  const handleAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Action completed!");
    return { error: false };
  };

  return <ActionButton action={handleAction}>Perform Action</ActionButton>;
}

export function ActionButtonWithConfirmationExample() {
  const handleAction = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Item deleted!");
    return { error: false };
  };

  return (
    <ActionButton
      action={handleAction}
      requireAreYouSure
      areYouSureDescription="This will perform a destructive action. Are you sure?"
      variant="destructive"
    >
      Delete Item
    </ActionButton>
  );
}

import * as React from "react";
import { Dialog as DialogPrimitive } from "@base-ui-components/react/dialog";
import { cn } from "../../utils/lib";

const Dialog = ({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

const DialogTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      {...props}
      className={cn(
        "flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100",
        className
      )}
    />
  );
};

const DialogPortal = ({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

const DialogBackdrop = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop>) => {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70",
        className
      )}
      data-slot="dialog-backdrop"
      {...props}
    />
  );
};

const DialogPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) => {
  return (
    <DialogPrimitive.Popup
      data-slot="dialog-popup"
      {...props}
      className={cn(
        "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300",
        className
      )}
    />
  );
};

const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      {...props}
      className={cn("-mt-1.5 mb-1 text-lg font-medium", className)}
    />
  );
};

const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      {...props}
      className={cn("mb-6 text-base text-gray-600", className)}
    />
  );
};

const DialogClose = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) => {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      {...props}
      className={cn(
        "flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100",
        className
      )}
    />
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogBackdrop,
  DialogPopup,
  DialogTitle,
  DialogDescription,
  DialogClose,
};

import * as React from "react";
import { AlertDialog as AlertDialogPrimitive } from "@base-ui-components/react/alert-dialog";
import { cn } from "../../utils/lib";

const AlertDialog = ({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
};

const AlertDialogTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      {...props}
      className="flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-red-800 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100"
    />
  );
};

const AlertDialogPortal = ({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
};

const AlertDialogBackdrop = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Backdrop>) => {
  return (
    <AlertDialogPrimitive.Backdrop
      className={cn(
        "fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70",
        className
      )}
      data-slot="alert-dialog-backdrop"
      {...props}
    />
  );
};

const AlertDialogPopup = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Popup>) => {
  return (
    <AlertDialogPrimitive.Popup
      data-slot="alert-dialog-popup"
      {...props}
      className={cn(
        (className =
          "fixed top-1/2 left-1/2 -mt-8 w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-50 p-6 text-gray-900 outline outline-1 outline-gray-200 transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:outline-gray-300"),
        className
      )}
    />
  );
};

const AlertDialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      {...props}
      className={cn("-mt-1.5 mb-1 text-lg font-medium", className)}
    />
  );
};

const AlertDialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) => {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      {...props}
      className={cn("mb-6 text-base text-gray-600", className)}
    />
  );
};

const AlertDialogClose = ({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Close>) => {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-close"
      {...props}
      className={cn(
        "flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100",
        className
      )}
    />
  );
};

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
};

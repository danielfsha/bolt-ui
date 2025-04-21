"use client";
import * as React from "react";
import { Toast as ToastPrimitive } from "@base-ui-components/react/toast";
import { cn } from "../../utils/lib";

const ToastProvider = ({
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Provider>) => {
  return <ToastPrimitive.Provider aria-label="toast-provider" {...props} />;
};

const ToastViewport = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) => {
  return (
    <ToastPrimitive.Viewport
      aria-label="toast-viewport"
      className={cn(
        "fixed top-auto right-[2rem] bottom-[2rem] mx-auto flex w-full max-w-[300px]",
        className
      )}
      {...props}
    />
  );
};

const Toast = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Root>) => {
  return (
    <ToastPrimitive.Root
      aria-label="toast"
      className={cn(
        "absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 w-[300px] [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(var(--toast-index)*-15px)))_scale(calc(1-(var(--toast-index)*0.1)))] rounded-lg border border-gray-200 bg-gray-50 bg-clip-padding p-4 shadow-lg transition-all [transition-property:opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] select-none after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-[ending-style]:opacity-0 data-[expanded]:[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-[starting-style]:[transform:translateY(150%)] data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))] data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[expanded]:data-[ending-style]:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[expanded]:data-[ending-style]:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))] data-[ending-style]:[&:not([data-limited])]:[transform:translateY(150%)]",
        className
      )}
      {...props}
    />
  );
};

const ToastTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Title>) => {
  return (
    <ToastPrimitive.Title
      aria-label="toast-title"
      className={cn("text-[0.975rem] leading-5 font-medium", className)}
      {...props}
    />
  );
};

const ToastDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) => {
  return (
    <ToastPrimitive.Description
      aria-label="toast-description"
      className={cn("text-[0.925rem] leading-5 text-gray-700", className)}
      {...props}
    />
  );
};

const ToastClose = ({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Close>) => {
  return (
    <ToastPrimitive.Close
      aria-label="toast-close"
      className={cn(
        "absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-700",
        className
      )}
      {...props}
    />
  );
};

export const ExampleToast = () => {
  return (
    <ToastProvider>
      <ToastButton />
      <ToastViewport>
        <ToastList />
      </ToastViewport>
    </ToastProvider>
  );
};

function ToastButton() {
  const toastManager = ToastPrimitive.useToastManager();
  const [count, setCount] = React.useState(0);

  function createToast() {
    setCount((prev) => prev + 1);
    toastManager.add({
      title: `Toast ${count + 1} created`,
      description: "This is a toast notification.",
    });
  }

  return (
    <button
      type="button"
      className="box-border flex h-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 py-0 font-medium text-gray-900 outline-0 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue active:bg-gray-100"
      onClick={createToast}
    >
      Create toast
    </button>
  );
}

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager();
  return toasts.map((toast) => (
    <Toast
      key={toast.id}
      toast={toast}
      style={{
        ["--gap" as string]: "1rem",
        ["--offset-y" as string]:
          "calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))",
      }}
    >
      <ToastTitle />
      <ToastDescription />
      <ToastClose>
        <XIcon className="h-4 w-4" />
      </ToastClose>
    </Toast>
  ));
}

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
};

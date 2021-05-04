import { useState } from "react";

export const useDisclosure = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(() => initialState);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};

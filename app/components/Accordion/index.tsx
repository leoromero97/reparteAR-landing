import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Icon from "@/components/Icon";
import { IAccordionProps } from "./types";
import useTheme from "@/hooks/useTheme";

function Accordion({
  answer,
  className,
  id,
  onChange,
  question,
}: IAccordionProps) {
  const { isDark, isLight } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <button
      ref={wrapperRef}
      className={clsx(
        'flex flex-col rounded-lg py-2 px-3 gap-2 text-start ease-in-out duration-100 ',
        open && isLight && !isDark  && 'bg-skyblue-200',
        !open && isLight && !isDark  && 'bg-white h-fit',
        isLight && 'hover:bg-skyblue-200 shadow-drop-1',
        open && isDark && !isLight && 'bg-skyblue-800 border-none',
        !open && isDark && !isLight  && 'bg-skyblue-900 h-fit border border-skyblue-800 focus:border-skyblue-800',
        isDark && 'hover:bg-skyblue-800',
        className,
      )}
      key={id} onClick={() => {
        setOpen(!open);
        onChange
      }}
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <span className={clsx('text-label w-full flex flex-wrap', open ? 'font-bold' : 'font-normal')}>
          {question}
        </span>
        <Icon icon="AngleDown" className={clsx('', open ? 'rotate-180' : 'rotate-0')} />
      </div>
      {open && (
        <div className="flex flex-wrap w-full ease-in-out duration-100">
          <p className="text-label">{answer}</p>
        </div>
      )}
    </button>
  );
}

export default Accordion;

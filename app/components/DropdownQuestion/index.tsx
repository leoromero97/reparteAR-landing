import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Icon from "@/components/Icon";
import { IDropdownQuestionProps } from "./types";

function DropdownQuestion({
  answer,
  className,
  id,
  onChange,
  question,
}: IDropdownQuestionProps) {
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
        'flex flex-col rounded-lg py-2 px-3 shadow-drop-1 gap-2 text-start',
        open ? 'bg-skyblue-200' : 'bg-white h-fit',
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
        <div className="flex flex-wrap w-full">
          <p className="text-label">{answer}</p>
        </div>
      )}
    </button>
  );
}

export default DropdownQuestion;

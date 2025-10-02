'use client';

import { ParsableValue } from '@DataTypes/parser';
import { parseValue } from '@Lib/utils/parse-value';
import { useState, useRef, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

// T의 지정된 필드만 ParsableValue여야 함
interface SelectProps<T> {
  optionList: T[];
  value: string;
  className?: string;
  isDisabled?: boolean;
  setValue: (value: string) => void;
  labelField?: keyof T;
  valueField?: keyof T;
}

type SelectOption = {
  disabled?: boolean;
};

function Select<T>({
  optionList,
  value,
  setValue,
  className,
  isDisabled = false,
  labelField = 'label' as keyof T,
  valueField = 'value' as keyof T,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption =
    optionList.find(option => parseValue(option[valueField] as ParsableValue) === parseValue(value))?.[labelField] ||
    'Please select value.';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelectOption = (optionValue: string, isDisabledOption?: boolean) => {
    if (isDisabledOption || isDisabled) return;
    setValue(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        ref={buttonRef}
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
        disabled={isDisabled}
        className={twMerge(
          'flex w-full items-center justify-between rounded-md border border-gray-300 bg-white p-2 px-3 text-left text-base transition-all duration-200 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none md:text-lg lg:p-3 lg:text-xl',
          !value && 'text-gray-500',
          isOpen ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-300',
          isDisabled ? 'cursor-not-allowed bg-gray-50 opacity-50' : '',
          className,
        )}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-disabled={isDisabled}
      >
        <span className="truncate text-gray-800">
          {parseValue(selectedOption as ParsableValue, { defaultValue: 'Please select value.' })!}
        </span>
        <MdOutlineKeyboardArrowDown
          size={20}
          className={`ml-2 flex-shrink-0 text-gray-800 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && !isDisabled && (
        <ul
          role="listbox"
          className="ring-opacity-5 absolute z-60 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 shadow-lg ring-1 ring-black"
        >
          {optionList.map(option => {
            const optionValue = parseValue(option[valueField] as ParsableValue, { defaultValue: '' })!;
            const optionLabel = parseValue(option[labelField] as ParsableValue, { defaultValue: '' })!;
            const isDisabled = Boolean((option as SelectOption).disabled);

            return (
              <li
                key={`select-box__link-${optionValue}`}
                role="option"
                aria-selected={parseValue(optionValue) === parseValue(value)}
              >
                <button
                  onClick={() => handleSelectOption(optionValue, isDisabled)}
                  disabled={isDisabled}
                  aria-disabled={isDisabled}
                  className={twMerge(
                    'flex w-full items-center px-3 py-2 text-left text-base transition-colors duration-150 md:text-lg',
                    isDisabled
                      ? 'cursor-not-allowed bg-gray-50 text-gray-400'
                      : parseValue(optionValue) === parseValue(value)
                        ? 'bg-blue-50 font-medium text-blue-600 hover:bg-blue-100'
                        : 'text-gray-800 hover:bg-blue-50',
                  )}
                >
                  <span className="truncate">{optionLabel}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {value && <input type="hidden" aria-hidden="true" value={value} />}
    </div>
  );
}

export default Select;

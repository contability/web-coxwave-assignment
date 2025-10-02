'use client';

import { useState } from 'react';
import Button from '@Components/button';
import { CustomDateRange } from '@DataTypes/date';

interface DatePickerButtonProps {
  isSelected: boolean;
  onDateRangeChange: (range: CustomDateRange | null) => void;
}

const DatePickerButton = ({ isSelected, onDateRangeChange }: DatePickerButtonProps) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempStartDate, setTempStartDate] = useState('');
  const [tempEndDate, setTempEndDate] = useState('');

  const handleButtonClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleCustomDateApply = () => {
    if (tempStartDate && tempEndDate) {
      const startDate = new Date(tempStartDate);
      const endDate = new Date(tempEndDate);

      if (startDate <= endDate) {
        onDateRangeChange({ startDate, endDate });
        setShowDatePicker(false);
      } else {
        alert('시작일은 종료일보다 이전이어야 한다.');
      }
    } else {
      alert('시작일과 종료일을 모두 선택해주세요.');
    }
  };

  const handleCustomDateCancel = () => {
    setShowDatePicker(false);
    setTempStartDate('');
    setTempEndDate('');
  };

  return (
    <div className="relative">
      <Button isSelected={isSelected} onClick={handleButtonClick} className="h-full">
        Custom
      </Button>

      {showDatePicker && (
        <div className="absolute top-full left-0 z-10 mt-2 rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
          <div className="flex items-end gap-4">
            <div>
              <label htmlFor="start-date" className="mb-1 block text-sm font-medium text-gray-700">
                시작일
              </label>
              <input
                id="start-date"
                type="date"
                value={tempStartDate}
                onChange={e => setTempStartDate(e.target.value)}
                className="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="end-date" className="mb-1 block text-sm font-medium text-gray-700">
                종료일
              </label>
              <input
                id="end-date"
                type="date"
                value={tempEndDate}
                onChange={e => setTempEndDate(e.target.value)}
                className="rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button onClick={handleCustomDateApply}>적용</Button>
            <Button onClick={handleCustomDateCancel}>취소</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePickerButton;

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setYearForPaper } from "../../store/slice";

const YearSelection = () => {
  const year = ["1", "2", "3", "4"];
  const dispatch = useDispatch();
  const [selectedYear, setSelectedYear] = useState(year[0]); 

  const handleSelection = (e) => {
    const selectedValue = e.target.value;
    setSelectedYear(selectedValue);
    dispatch(setYearForPaper(selectedValue)); 
  };

  return (
    <div className="rounded-sm mt-10 flex justify-center items-center gap-4 sm:gap-10 px-6">
      <div className="flex sm:gap-5  gap-10 px-5 py-1 rounded-md shadow-md shadow-gray-400">
        {year.map((yearValue, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`year-${index}`}
              name="yearSelection"
              value={yearValue}
              checked={selectedYear === yearValue}
              onChange={handleSelection}
            />
            <label htmlFor={`year-${index}`}> {yearValue} Year</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearSelection;

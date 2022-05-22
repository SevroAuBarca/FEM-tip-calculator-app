import React from "react";

type valueProp = { value: string };

export const RadioInput = ({ value }: valueProp) => {
  return (
    <div className="relative w-full p-4 ">
      <input
        className="block absolute opacity-0 z-50"
        type="radio"
        name="check-substitution-2"
        id={value}
      />
      <label
        className="flex justify-center items-center absolute w-full rounded-ms  top-0 right-0 left-0 bottom-0 z-40 text-Very-light-grayish-cyan bg-Very-dark-cyan md:hover:bg-Strong-cyan md:hover:brightness-125 md:hover:text-Very-dark-cyan md:cursor-pointer "
        htmlFor={value}
      >
        {value}%
      </label>
    </div>
  );
};

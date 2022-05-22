import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { RadioInput } from "./RadioInput";
import { Data } from "../typescript/types.model";
import { useField } from "../hooks/useField";

export const InputTip: FunctionComponent<
  Omit<Data, "title" | "icon" | "value" | "check">
> = ({ setValue }) => {
  const { onChange } = useField(setValue);
  return (
    <article className="my-5">
      <label className="text-Grayish-cyan text-sm">
        Select Tip <span className="text-xs">%</span>
      </label>
      <section
        className="grid grid-cols-2 grid-rows-3 gap-3 mt-3 md:grid-cols-3 md:grid-rows-2"
        onChange={onChange}
      >
        <RadioInput value={"5"} />
        <RadioInput value={"10"} />
        <RadioInput value={"15"} />
        <RadioInput value={"25"} />
        <RadioInput value={"50"} />
        <div className="w-full">
          <input
            className="w-full px-2 py-1 bg-Very-light-grayish-cyan rounded-sm text-right text-xl text-Very-dark-cyan focus:outline-2 focus:outline-Strong-cyan placeholder:text-right placeholder:text-Grayish-cyan"
            type="number"
            placeholder="Custom"
          />
        </div>
      </section>
    </article>
  );
};

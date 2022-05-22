import { FunctionComponent, forwardRef } from "react";
import { useField } from "../hooks/useField";
import { Data } from "../typescript/types.model";

export const InputData: FunctionComponent<Data> = ({
  title,
  icon,
  value,
  setValue,
  check,
}) => {
  const { onChange } = useField(setValue);

  const style =
    "w-full px-2 py-1 bg-Very-light-grayish-cyan bg-no-repeat bg-left bg-sm rounded-ms text-right text-xl text-Very-dark-cyan focus:outline-2 focus:outline-Strong-cyan placeholder:text-right placeholder:text-Grayish-cyan ";
  return (
    <>
      <label className="text-Grayish-cyan text-sm flex justify-between">
        <span>{title}</span>
        <span
          className={`${
            check && !value ? "text-red-400 opacity-100" : "opacity-0"
          }`}
        >
          Can't be Zero
        </span>
      </label>
      <input
        type="number"
        placeholder="0"
        min="0"
        step={"any"}
        className={
          style +
          icon +
          ` ${check && !value && "border-2 border-red-400 rounded-ms"}`
        }
        onChange={onChange}
      />
    </>
  );
};

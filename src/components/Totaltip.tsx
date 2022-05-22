import React, { FunctionComponent } from "react";
import { TotalAmount } from "./TotalAmount";
import { Result } from "../typescript/types.model";
export const Totaltip: FunctionComponent<Result> = ({
  tipTotal,
  totalAmount,
}) => {
  return (
    <div className="w-full mt-5 p-5 bg-Very-dark-cyan rounded-lg flex flex-col md:w-1/2 md:mt-0">
      <TotalAmount Text={"Tip Amount"} Total={tipTotal} />
      <TotalAmount Text={"Total"} Total={totalAmount} />
      <button
        type="submit"
        className="w-full py-1 mt-4 bg-Strong-cyan text-Very-dark-cyan rounded-ms md:mt-auto md:hover:bg-Strong-cyan md:hover:brightness-125 md:hover:text-Very-dark-cyan md:cursor-pointer"
      >
        RESET
      </button>
    </div>
  );
};

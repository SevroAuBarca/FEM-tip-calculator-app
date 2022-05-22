import React from "react";
interface Total {
  Text: string;
  Total: number;
}
export const TotalAmount = ({ Text, Total }: Total) => {
  return (
    <div className="flex justify-between py-3 ">
      <div>
        <p className="text-Very-light-grayish-cyan text-sm">{Text}</p>
        <p className="text-Grayish-cyan text-xs"> /person</p>
      </div>
      <aside>
        <p className="text-Strong-cyan text-2xl">${Total}</p>
      </aside>
    </div>
  );
};

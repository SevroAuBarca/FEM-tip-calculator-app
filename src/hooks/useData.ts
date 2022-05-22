import { useState } from "react";
import { stateData } from "../typescript/types.model";
export const useData = () => {
  const [bill, setBill] = useState<stateData>(0);
  const [people, setPeople] = useState<stateData>(0);
  const [tip, setTip] = useState<stateData>(0);
  const [tipTotal, setTipTotal] = useState<stateData>(0);
  const [Total, setTotal] = useState<stateData>(0);
  const [check, setCheck] = useState(false);

  return [
    { bill, setBill },
    { people, setPeople },
    { tip, setTip },
    { tipTotal, setTipTotal },
    { Total, setTotal },
    { check, setCheck },
  ];
};

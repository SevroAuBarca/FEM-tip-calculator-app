import { Dispatch, LegacyRef, SetStateAction } from "react";
export type Dispatcher<S> = Dispatch<SetStateAction<S>>;
export type stateData = number | undefined;

export interface Data {
  title: string;
  icon: string;
  value: number;
  setValue: Dispatcher<number | undefined>;
  check: boolean;
}

export interface Result {
  tipTotal: number;
  totalAmount: number;
}

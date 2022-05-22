import { Dispatcher } from "../typescript/types.model";

export const useField = (setState: Dispatcher<number | undefined>) => {
  const onChange = (event: React.ChangeEvent<HTMLElement>) => {
    const target = <HTMLTextAreaElement>event.target;
    if (target.type === "number") {
      const { value } = target;
      setState(parseInt(value));
    } else {
      const { id } = target;
      setState(parseInt(id));
    }
  };

  return { onChange };
};

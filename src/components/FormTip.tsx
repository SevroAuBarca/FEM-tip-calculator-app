import React from "react";

export const FormTip = (props: any) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex flex-col md:flex-row md:gap-5"
    >
      {props.children}
    </form>
  );
};

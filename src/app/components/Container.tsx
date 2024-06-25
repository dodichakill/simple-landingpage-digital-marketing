import React from "react";

type Props = {
  children: JSX.Element;
};
function Container({ children }: Props) {
  return <div className="w-full max-w-6xl m-auto p-5">{children}</div>;
}

export default Container;

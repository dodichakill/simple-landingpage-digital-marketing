import { Containers } from "@/utils/types";

function Container({ children }: Containers) {
  return <div className="w-full max-w-6xl m-auto p-5">{children}</div>;
}

export default Container;

import React from "react";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
}
function CardFeatured({ title, description, icon }: Props) {
  return (
    <div className="p-5 w-48 hover:bg-emerald-100 duration-150 rounded-lg bg-sky-100 flex flex-col items-center text-center">
      <div>{icon}</div>
      <p className="text-sm font-semibold mt-3 mb-2 text-slate-800">{title}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default CardFeatured;

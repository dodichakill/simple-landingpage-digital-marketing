export type Featured = {
  title: string;
  description: string;
  icon: JSX.Element;
};

export type Testimony = {
  slides: Array<{ name: string; jobTitle: string; description: string }>;
  currentIndex: number;
};

export type Containers = {
  children: JSX.Element | JSX.Element[];
};

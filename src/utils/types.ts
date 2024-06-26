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

export type Input = {
  text: string;
  type: string;
};

export type Textarea = {
  text: string;
};

export type ButtonType = {
  text: string;
  icon: JSX.Element;
};

export enum ButtonSizes {
  s = "s",
  m = "m",
  l = "l",
}

export enum ButtonTypes {
  classic = "classic",
  contentOnly = "contentOnly",
}

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  text?: string;
  size?: keyof typeof ButtonSizes;
  buttontype?: keyof typeof ButtonTypes;
};

export type ButtonContainerProps = {
  size: keyof typeof ButtonSizes;
  buttontype: keyof typeof ButtonTypes;
};

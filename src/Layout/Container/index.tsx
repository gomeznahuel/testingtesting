import { FC } from "react";
import { ContainerProps } from "../../interface/Interface";

export const Container: FC<ContainerProps> = ({ children, width, height }) => {
  return <main style={{ width, height }}>{children}</main>;
};

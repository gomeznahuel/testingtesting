import { FC } from "react";
import { TitleProps } from "../../interface/Interface";

export const Title: FC<TitleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

import { FC } from "react";
import { LabelProps } from "../../interface/Interface";

export const Label: FC<LabelProps> = ({ textLabel }) => {
  return <label>{textLabel}</label>;
};

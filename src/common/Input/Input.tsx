import { FC } from "react";
import { InputProps } from "../../interface/Interface";

const Input: FC<InputProps> = ({ name, type, value, onChange, placeholder, onClick }) => {
  return <input type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} onClick={onClick} />
};

export default Input;

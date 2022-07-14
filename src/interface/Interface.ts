export interface TitleProps {
  title: string;
}

export interface InputProps {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps {
  textLabel: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
}
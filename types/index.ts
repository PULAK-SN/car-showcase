import { MouseEventHandler } from "react";

export interface CustombuttonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

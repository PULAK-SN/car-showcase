import { MouseEventHandler } from "react";

export interface CustombuttonProps {
  title: string;
  btnType?: "button" | "submit";
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title?: "fuel" | "year";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

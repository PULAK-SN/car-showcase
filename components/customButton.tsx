"use client";
import { CustombuttonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyle,
  btnType,
  handleClick,
}: CustombuttonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`flex flex-row relative justify-center items-center cursor-pointer py-3 px-6 outline-none ${containerStyle}`}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;

import { ButtonProps } from "../types/types";
import "@/styles/CommonButton.scss";

export const CommonButton = ({ title, className = "" }: ButtonProps) => {
  return (
    <button className={`common-button ${className}`}>
      <div>{title}</div>
    </button>
  );
};

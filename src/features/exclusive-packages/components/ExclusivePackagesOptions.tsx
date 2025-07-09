import { IoIosInfinite } from "react-icons/io";
import { ExclusivePackagesOptionsProps } from "../types";

import "@/styles/ExclusivePackagesOptions.scss";

export const ExclusivePackagesOptions = ({
  options,
}: ExclusivePackagesOptionsProps) => {
    
  return (
    <ul className="exclusive-packages-options">
      {options?.map((option) => {
        const isInfinite = option.quantity === "infinity";

        return (
          <li key={option.name} className="exclusive-packages-options-item">
            <div className="quantity">
              {isInfinite ? <IoIosInfinite size={16} /> : `${option.quantity}x`}
            </div>
            <div className="exclusive-packages-options-item__title">
              <span>{option.name}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

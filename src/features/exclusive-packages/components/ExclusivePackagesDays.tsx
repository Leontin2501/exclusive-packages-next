'use client';

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { ExclusivePackagesDaysProps } from "../types";

import "@/styles/ExclusivePackagesDays.scss";

export const ExclusivePackagesDays = ({ days }: ExclusivePackagesDaysProps) => {
  const [selectedDay, setSelectedDay] = useState<number | string>(days?.[0]);

  return (
    <ul className="exclusive-packages-days">
      {days?.map((day: number | string) => {
        const isMore = typeof day === "string";

        return (
          <li
            key={day}
            className={`exclusive-packages-days-item ${
              selectedDay === day ? "active" : ""
            }`}
            onClick={() => setSelectedDay(day)}
          >
            {day} {isMore ? <MdKeyboardArrowDown size={16} /> : "days"}
          </li>
        );
      })}
    </ul>
  );
};

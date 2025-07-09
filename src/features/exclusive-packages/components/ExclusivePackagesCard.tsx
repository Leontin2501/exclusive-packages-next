"use client";

import { JSX } from "react";
import { GiTigerHead } from "react-icons/gi";
import { LuPackage } from "react-icons/lu";
import { IoDiamond } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";

import { CommonButton } from "@/components/UI/CommonButton";
import { ExclusivePackagesOptions } from "./ExclusivePackagesOptions";
import { ExclusivePackagesDays } from "./ExclusivePackagesDays";

import { useGetPostsByUserQuery } from "@/shared/api/postsApi";
import { packages } from "@/shared/api/dataApi";

import "@/styles/ExclusivePackagesCard.scss";

const iconMap: Record<string, JSX.Element> = {
  wild: <GiTigerHead size={32} />,
  classic: <LuPackage size={32} />,
  quality: <IoDiamond size={32} />,
};

export const ExclusivePackagesCard = () => {
  const { data: posts } = useGetPostsByUserQuery(6);

  console.log("posts", posts);

  return (
    <div className="exclusive-packages-card">
      <div className="exclusive-packages-card-arrow">
        <RiArrowRightSLine size={32} />
      </div>
      {packages?.map((pkg) => (
        <div
          key={pkg.title}
          className={`exclusive-packages-card-container ${pkg.type}`}
        >
          <div className="exclusive-packages-card-container__header">
            <div className="logo">{iconMap[pkg.type]}</div>
            <div className="title">{pkg.title}</div>
          </div>
          <div className="exclusive-packages-card-container__subtitle">
            {pkg.subtitle}
          </div>
          <div className="exclusive-packages-card-container__description">
            {pkg.description}
          </div>
          <div className="exclusive-packages-card-content">
            <ExclusivePackagesDays days={pkg.days} />
            <ExclusivePackagesOptions options={pkg.options} />
          </div>
          <div className="exclusive-packages-card-container__footer">
            <div className="price">
              <p className="price-amount">{pkg.price}</p>
              <p className="price-saveUp">save up to {pkg.saveUp}, -</p>
            </div>
            <CommonButton title="See calendar" className="price-button" />
          </div>
          <div className="exclusive-packages-card-container__additionalInfo">
            Price per person in a {pkg.additionalInfo}
          </div>
        </div>
      ))}
    </div>
  );
};

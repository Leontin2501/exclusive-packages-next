export type Option = {
  name: string;
  quantity: string;
};

export interface ExclusivePackagesOptionsProps {
  options: Option[];
}

export interface ExclusivePackagesDaysProps {
  days: (number | string)[];
}

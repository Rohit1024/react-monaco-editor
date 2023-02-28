import { FC } from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { themsObject } from "../constants/defineTheme";
type ThemeDropdownProps = {
    theme: {
      label: string,
      value: string
    }
    handleThemeChange: (option: any) => void
} 

export const ThemeDropdown: FC<ThemeDropdownProps> = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      options={themsObject}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  );
};
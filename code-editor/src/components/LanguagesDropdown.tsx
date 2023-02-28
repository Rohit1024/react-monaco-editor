import { customStyles } from "../constants/customStyles";
import { languageOptions } from "../constants/languageOptions";
import Select from "react-select";

type LanguageProps = {
  onSelectChange : (value: any) => void
}

export const LanguagesDropdown = ({ onSelectChange } : LanguageProps) => {
    return (
        <Select
          placeholder={`Filter By Category`}
          options={languageOptions}
          styles={customStyles}
          defaultValue={languageOptions[0]}
          onChange={(selectedOption: any) => onSelectChange(selectedOption)}
        />
      );
}
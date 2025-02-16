import { FC } from "react";

type InputType = "checkbox" | "radio";

interface InputStyles {
  readonly width: string;
  readonly height: string;
  readonly background: string;
  readonly borderRadius: string;
}

interface SelectInputProps {
  type: InputType;
  optionId: string;
  label: string;
  selectedValues: string[];
  onSelectionChange: (newValues: string[]) => void;
  allowMultiple?: boolean;
}

const INPUT_STYLES: InputStyles = {
  width: "15px",
  height: "15px",
  background: "transparent",
  borderRadius: "0.75rem",
};

const updateSelectedOptions = (option: string, currentSelection: string[], allowMultiple: boolean): string[] => {
  if (!allowMultiple) {
    return [option];
  }

  return currentSelection.includes(option)
    ? currentSelection.filter((item) => item !== option)
    : [...currentSelection, option];
};

const SelectInput: FC<SelectInputProps> = ({
  type,
  optionId,
  label,
  selectedValues,
  onSelectionChange,
  allowMultiple = false,
}) => {
  const handleOptionToggle = (option: string): void => {
    const currentValues = selectedValues || [];
    const updatedValues = updateSelectedOptions(option, currentValues, allowMultiple);
    onSelectionChange(updatedValues);
  };

  return (
    <div className="flex items-center gap-x-2">
      <input
        type={type}
        id={optionId}
        checked={Boolean(selectedValues?.includes(optionId))}
        onChange={() => handleOptionToggle(optionId)}
        style={{
          width: INPUT_STYLES.width,
          height: INPUT_STYLES.height,
          background: INPUT_STYLES.background,
          borderRadius: INPUT_STYLES.borderRadius,
        }}
      />
      <label htmlFor={optionId}>{label}</label>
    </div>
  );
};

export default SelectInput;

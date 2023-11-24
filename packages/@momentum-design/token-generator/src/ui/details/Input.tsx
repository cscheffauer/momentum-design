import React, { useEffect, useState } from 'react';

interface Props {
    placeholder?: string;
    value?: string;
    handleChange?: (value: string) => void;
    handleChangeCheckbox?: (value: boolean) => void;
    label?: string;
    type?: React.HTMLInputTypeAttribute;
    checked?: boolean;
    disabled?: boolean;
}
const Input = (props: Props) => {
  const { placeholder, value, handleChange, handleChangeCheckbox, label, type, checked, disabled } = props;
  const [localValue, setLocalValue] = useState<string | undefined>(value);
  const [localChecked, setLocalChecked] = useState<boolean | undefined>(checked);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(event.target.value);
    handleChange?.(event.target.value);
  };

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalChecked(event.target.checked);
    handleChangeCheckbox?.(event.target.checked);
  };

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    setLocalChecked(checked);
  }, [checked]);

  return (
    <div className="entry">
      <label className="label">{label}</label>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={localValue}
        checked={localChecked}
        onChange={type === 'checkbox' ? onChangeCheckbox : onChange}
        className="input"
      ></input>
    </div>
  );
};
export default Input;

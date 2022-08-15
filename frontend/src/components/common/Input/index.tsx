import React from 'react';

import './styles.scss';

type Props = {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disable?: boolean;
  required?: boolean;
  error?: string;
};

const Input: React.FC<Props> = ({
  type = 'text',
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  className,
  disable,
  required,
  error,
}): React.ReactElement => {
  return (
    <div className="Input">
      <label htmlFor={id}>
        {label}
        {required ? <span className="required-indicator">*</span> : null}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={disable ? undefined : onChange}
          className={`${error ? 'input-error' : ''} ${className}`}
          disabled={disable}
          required={required}
        />
        {error ? <span className="error">{error}</span> : null}
      </label>
    </div>
  );
};

export default Input;

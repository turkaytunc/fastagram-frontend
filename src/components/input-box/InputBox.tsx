import React from 'react';
import './input-box.scss';

const InputBox = ({
  testId,
  item,
  setItem,
  setError,
  isPassword,
  placeholder,
}: {
  testId: string;
  item: string;
  setItem: any;
  setError: any;
  isPassword: boolean;
  placeholder: string;
}) => {
  return (
    <label className="relative w-68 mt-2 border border-gray-200 rounded-sm" htmlFor={placeholder}>
      <span
        className={`absolute left-4 text-xs text-gray-400 ${
          item ? 'trans-effect' : ' top-3 trans-effect-none'
        }`}
      >
        {placeholder}
      </span>
      <input
        data-testid={testId}
        className="input-box"
        type={`${isPassword ? 'password' : 'text'}`}
        id={placeholder}
        onChange={(event) => setItem(event.target.value)}
        onFocus={() => {
          setError('');
        }}
        value={item}
      />
    </label>
  );
};

export default InputBox;

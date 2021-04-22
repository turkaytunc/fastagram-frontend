import React from 'react';
import './input-box.scss';

const InputBox = ({
  item,
  setItem,
  setError,
  isPassword,
  placeholder,
}: {
  item: string;
  setItem: any;
  setError: any;
  isPassword: boolean;
  placeholder: string;
}) => {
  return (
    <label className="relative w-72 border border-gray-200 rounded-sm" htmlFor={placeholder}>
      <span
        className={`absolute left-4 text-sm text-gray-400 ${
          item ? 'trans-effect' : ' top-3 trans-effect-none'
        }`}
      >
        {placeholder}
      </span>
      <input
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

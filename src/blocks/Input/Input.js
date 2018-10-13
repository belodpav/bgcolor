import React from 'react';
import './Input.css';

const Input = ({
  className,
  onChange,
  placeholder,
  value,
  validate
}) => {
  const mixs = className.split(' ');
  let cls = ['Input'].concat(mixs);
  
  if (!validate(value)) {
    cls.push('Input_error');
  }

  return (
    <div className={cls.join(' ')}>
      <input
        className="Input-Control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input;

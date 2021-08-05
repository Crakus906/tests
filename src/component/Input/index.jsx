/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import st from './style.module.scss';

export default function Input(props) {
  const {
    type,
    className,
    name,
    id,
    value,
    isDisabled,
    onChange,
  } = props;

  const [field] = useField(name);

  const handleChange = (e) => {
    if (onChange) onChange(e.target);
    field.onChange(e);
  };

  return (
    <input
      {...field}
      type={type}
      className={`${st.input} ${className}`}
      id={id}
      name={name || field.name}
      value={value || field.value}
      disabled={isDisabled}
      onChange={handleChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  onChange: null,
  value: null,
  isDisabled: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

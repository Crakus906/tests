import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import cx from 'classnames';
import st from './style.module.scss';

export default function Input(props) {
  const {
    type,
    active,
    name,
    id,
    value,
    onClick,
    isDisabled,
    onChange
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
      className={cx(st.cardContainer, {[st.active]: active})}
      id={id}
      name={field.name}
      value={field.value || value}
      disabled={isDisabled}
      onClick={onClick}
      onChange={handleChange}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  className: null,
  onClick: null,
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

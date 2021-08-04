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
    isDisabled
  } = props;
  const [field] = useField(props);

  return (
    <input
      type={type}
      className={cx(st.cardContainer, {[st.active]: active})}
      id={id}
      name={field.name}
      value={field.name}
      disabled={isDisabled}
      onClick={onClick}
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

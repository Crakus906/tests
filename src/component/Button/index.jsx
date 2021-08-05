import React from 'react';
import PropTypes from 'prop-types';
import st from './style.module.scss';

export default function Button(props) {
  const {
    type,
    className,
    children,
    onClick,
  } = props;

  return (
    <button
      type={type}
      className={`${st.button} ${className}`}
      onClick={onClick}
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'submit',
  className: null,
  onClick: null,
};

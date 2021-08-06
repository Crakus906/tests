import React from 'react';
import PropTypes from 'prop-types';
import useTimer from '../../hooks/useTimer';

import st from './style.module.scss';

export default function Timer({ time, handleChange }) {
  useTimer(() => handleChange(time - 1), time && 1000);

  return (
    <div className={st.wrapperTimer}>
      <div>{time}</div>
    </div>
  );
}

Timer.defaultProps = {
  handleChange: null,
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  handleChange: PropTypes.func,
};

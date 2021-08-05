/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../component/Input';

import st from './style.module.scss';

export default function Answers({
  answers, setAnswerId, isDisabled, onChange, inputName,
}) {
  return (
    <div className={st.wrapperAnswers}>
      {answers ? answers.map((e) => (
        <label
          htmlFor={e.value}
          key={e.value}
          className={st.blockAnswer}
        >
          <Input
            id={e.value}
            type="radio"
            value={e.value}
            name={inputName}
            onClick={() => setAnswerId(e.value)}
            onChange={onChange}
            isDisabled={isDisabled}
          />
          <div>{e.label}</div>
        </label>
      ))
        : <Input className={st.input} name={inputName} onChange={onChange} id={inputName} />}
    </div>
  );
}

Answers.propTypes = {
  inputName: PropTypes.string.isRequired,
  isDisabled: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  setAnswerId: PropTypes.func.isRequired,
  answers: PropTypes.string.isRequired,
};

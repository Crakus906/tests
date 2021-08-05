/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import Button from '../../component/Button';
import Answers from '../Answers';
import Timer from '../../component/Timer';

import st from './style.module.scss';

export default function QuizContent(props) {
  const {
    questions,
    count,
    setCount,
    time,
    formValues,
    setFormValues,
    setAnswerData,
    answerData,
    handleChangeTime,
    questionsTime,
    question,
  } = props;

  const [answerId, setAnswerId] = useState('');

  useEffect(() => {
    setAnswerId('');
  }, [count]);

  const handleChange = (target) => {
    setAnswerData({ ...answerData, [target.name]: target.value });
    setAnswerId({ ...answerId, target });
  };

  const handleButton = () => {
    setCount(count + 1);
    setFormValues([...formValues, answerData]);
  };

  if (!questions) return null;

  return (
    <Formik
      initialValues={{ 'question-4': '', 'question-5': '' }}
    >
      <Form className={st.wrapperQuizContent}>
        <div className={st.titleBlock}>
          <h3 className={st.title}>{questions.question}</h3>
          {time && (
          <Timer time={questionsTime[question[0].name]} handleChange={handleChangeTime} />
          )}
        </div>
        {questions?.img && (
        <div className={st.img}>
          <img src={questions.img} alt="" />
        </div>
        )}
        <Answers
          answers={questions.options}
          inputName={questions.name}
          setAnswerId={setAnswerId}
          onChange={handleChange}
          isDisabled={questionsTime[question[0].name] !== 0 ? '' : 'disabled'}
        />
        <Button
          className={answerId && answerId !== '' ? '' : `${st.disabled}` && questionsTime[question[0].name] === 0 ? '' : `${st.disabled}`}
          disabled={answerId && answerId !== '' ? false : !!(true && questionsTime[question[0].name] !== 0)}
          onClick={handleButton}
        >
          Continue
        </Button>
      </Form>
    </Formik>
  );
}

QuizContent.propTypes = {
  questions: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  formValues: PropTypes.node.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setAnswerData: PropTypes.func.isRequired,
  answerData: PropTypes.node.isRequired,
  handleChangeTime: PropTypes.func.isRequired,
  questionsTime: PropTypes.node.isRequired,
  question: PropTypes.node.isRequired,
};

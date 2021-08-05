import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberQuestion from '../NumberQuestion/index';
import QuizContent from '../QuizContent/index';
import Result from '../Result';

import st from './style.module.scss';

export default function Quiz({ dataQuestions }) {
  const [count, setCount] = useState(1);
  const question = dataQuestions.filter((e) => (e.id === count));
  const initialTime = dataQuestions.reduce((res, qst) => ({ ...res, [qst.name]: qst.time }), {});

  const [formValues, setFormValues] = useState([]);
  const [answerData, setAnswerData] = useState({});
  const [result, setResult] = useState({});
  const [questionsTime, setTime] = useState(initialTime);

  const handleChangeTime = (time) => {
    if (time === 0) {
      setResult({ ...result, [question[0].name]: 'No Answer' });
    }
    setTime({ ...questionsTime, [question[0].name]: time });
  };

  return (
    <div className={st.wrapperQuiz}>
      <NumberQuestion
        dataId={dataQuestions}
        count={count}
        setCount={setCount}
        answerData={answerData}
      />
      {formValues.length !== dataQuestions.length
        ? (
          <QuizContent
            dataQuestions={dataQuestions}
            questions={question[0]}
            count={count}
            setCount={setCount}
            time={question[0]?.time}
            setFormValues={setFormValues}
            formValues={formValues}
            setAnswerData={setAnswerData}
            answerData={answerData}
            handleChangeTime={handleChangeTime}
            questionsTime={questionsTime}
            question={question}
          />
        )
        : <Result result={formValues} />}

    </div>
  );
}

Quiz.propTypes = {
  dataQuestions: PropTypes.node.isRequired,
};

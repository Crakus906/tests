/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import NumberQuestion from "../NumberQuestion/index";
import QuizContent from '../QuizContent/index'

import st from "./style.module.scss"

export default function Quiz({dataQuestions}) {
    const [count, setCount] = useState(1);

    const res = dataQuestions.filter((e ) => (e.id === count));

    return (
        <div className={st.wrapperQuiz}>
            <NumberQuestion dataId={dataQuestions} count={count} time={res[0].time}  />
            <QuizContent questions={res[0]} count={count} setCount={setCount} time={res[0].time} />
        </div>
    )
}
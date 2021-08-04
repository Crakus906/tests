import React from "react";
import data from '../../data.json';
import Quiz from "../../modules/Quiz";

import st from './style.module.scss';

export default function Home() {

    return (
        <div className={st.wrapper}>
            <span className={st.title}>{data.title}</span>
            <Quiz dataQuestions={data.question} />
        </div>
    )
}
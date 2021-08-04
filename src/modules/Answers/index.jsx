/* eslint-disable no-unused-expressions */
import React from 'react';
import Input from '../../component/Input';

import st from "./style.module.scss"

export default function Answers({answers, name, setAnswerId, isDisabled, id}) {

    return (
        <div className={st.wrapperAnswers}>
           {answers && answers.map(e => (
                <label 
                    htmlFor={e.value} 
                    key={e.value} 
                    className={st.blockAnswer}
                >
                    <Input
                        id={e.value}
                        type="radio" 
                        value={e.value}
                        name={name}
                        onClick={() => setAnswerId(e.value)}
                        isDisabled={isDisabled}
                    />
                    <div>{e.label}</div>
                </label>
            ))}
        </div>
    )
}
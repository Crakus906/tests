import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../component/Button';
import Answers from '../Answers';
import useTimer from '../../hooks/useTimer';

import st from "./style.module.scss"

export default function QuizContent({questions, count, setCount, time}) {
    const [answerId, setAnswerId] = useState();
    const [answerData, setAnswerData] = useState({});

    useEffect(() => {
        setAnswerId('')
    },[count])

    const {counter} = useTimer(time);

    const btnDisabled = () => {
        if( answerId && answerId!=='') {
            return false
        }        
    }
    const btnClassDisabled = () => {
        if( answerId && answerId !== '') {
            return ``
        } else {return`${st.disabled}`};
    }

    return (
        <Formik 
            initialValues={{}}
            onSubmit={(values, actions) => {
                
              }}
        >
            <Form className={st.wrapperQuizContent}>
                <h3 className={st.title}>{questions.question}</h3>
               
                {questions.img && 
                    (
                        <div className={st.img}>
                            <img src={questions.img} alt="" />
                        </div>
                )}
                
                {/* <Answers answers={questions.options} name={questions.id} setAnswerId={setAnswerId} /> */}
                <Answers 
                    answers={questions.options} 
                    name={questions.id}
                    setAnswerId={setAnswerId}
                    // isDisabled={counter === 0 ?  "disabled" : false} 
                />
                
                <Button 
                    // className={btnClassDisabled()} 
                    // disabled={btnDisabled()}                 
                    className={answerId && answerId!=='' ? ``: `${st.disabled}`} 
                    disabled={answerId && answerId!=='' ? false : true }  
                    onClick={() => setCount(count + 1)}
                >
                    Continue
                </Button>
            </Form>
        </Formik>
    )
}
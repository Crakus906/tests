import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import Button from '../../component/Button';
import Answers from '../Answers';
import useTimer from '../../hooks/useTimer';

import st from "./style.module.scss"
import Result from '../Result';

export default function QuizContent({questions, count, setCount, time, dataQuestions }) {
    const [answerId, setAnswerId] = useState('');
    const [answerData, setAnswerData] = useState({});

    useEffect(() => {
        setAnswerId('')
    },[count])

    const handleChange = (target) => {
        // setAnswerData({ ...answerData, [target.name]: target.value })
        console.log({[target.name]: target.value});
        setAnswerId({...answerId, target})
    }   
    console.log(answerData);
    // const handleChange = (target) => {
    //     setFormValues({ ...formValues, [target.name]: target.value });
    //   };

    if(!questions) return null
    console.log(Object.keys(answerData).length, dataQuestions.length);
    
    return (
        <Formik 
            initialValues={{}}
            onSubmit={(values) => {
                console.log("values", values);
                setAnswerData({...values})
            }}
        >  
                <Form className={st.wrapperQuizContent}>      
                    {Object.keys(answerData).length < dataQuestions.length
                        ? (<>
                            <h3 className={st.title}>{questions.question}</h3>
                            {questions?.img &&  (
                                <div className={st.img}>
                                    <img src={questions.img} alt="" />
                                </div>
                            )}
                            <Answers 
                                answers={questions.options} 
                                name={questions.name}
                                setAnswerId={setAnswerId}
                                onChange={handleChange}
                                // isDisabled={counter === 0 ?  "disabled" : false} 
                            />
                            <Button 
                                    // className={btnClassDisabled()} 
                                    // disabled={btnDisabled()}                 
                                    className={answerId && answerId !=='' ? ``: `${st.disabled}`} 
                                    disabled={answerId && answerId !=='' ? false : true }  
                                    onClick={() => setCount(count + 1)}
                                >
                                    Continue
                                </Button>
                            </>
                            
                        ): <Result/>}
                </Form>   
        </Formik>
    )
}
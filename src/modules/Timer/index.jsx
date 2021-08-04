import React from 'react';
import useTimer from '../../hooks/useTimer';

import st from './style.module.scss';
  
export default function Timer({time}) {
    const {
        counter
    } = useTimer(time)

    return (
        <div className={st.wrapperTimer}>
            <div>Countdown: {counter === 0 ? "Time over" : counter}</div>
        </div>
    );
}
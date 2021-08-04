import React from 'react';
import Timer from '../Timer';

import st from "./style.module.scss"

export default function NumberQuestion({dataId, count, time}) {

    return (
        <div className={st.wrapperNumQuestion}>
            {dataId.map((e) =>(
                <div 
                    key={e.id}
                    className={e.id === count ? `${st.active}` : `${st.number}`}    
                >
                    {e.id}
                </div>
            ))}
            {time && (
                <Timer time={time} />
            )}
        </div>
    )
}
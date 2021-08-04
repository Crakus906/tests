import React, { useState, useEffect } from 'react';

export default function useTimer(time) {
    const [counter, setCounter] = useState(time);

    useEffect(() => {
       counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return {
        counter
    }
}
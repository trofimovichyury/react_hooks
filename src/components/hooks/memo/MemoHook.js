import React, { useState, useMemo } from 'react';

const heavyFunction = num => {
    console.log('Heavy operation');
    let x = 0;
    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
            x += i + j;
        }
    }
    return x;
};

export default () => {
    const [num, setNum] = useState(50);
    const [input, setInput] = useState('');

    const memoizedValue = useMemo(() => heavyFunction(num), [num]);

    const changeValue = (e) => {
        setInput(e.target.value);
    };
    return (
        <React.Fragment>
            <p>
                Memoized Value is {memoizedValue}
                <button onClick={() => setNum(num + 1)}>+</button>
            </p>
            <p>
                <label htmlFor="text">
                    <input
                        value={input}
                        onChange={changeValue}
                    />
                </label>
            </p>
        </React.Fragment>
    )
}
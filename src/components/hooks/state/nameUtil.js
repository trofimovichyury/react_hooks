import { useState } from 'react';

export default (initialValue) => {
    const [inputValue, applyInputValue] = useState(initialValue);

    const onChangeInputValue = (e) => {
        applyInputValue(e.target.value);
    };

    return [
        inputValue,
        onChangeInputValue
    ];
};
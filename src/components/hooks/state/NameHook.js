import React, { useState } from 'react';

import useInput from './nameUtil';

export default () => {
    const [firstName, onFirstNameChange] = useInput('John');
    const [lastName, onLastNameChange] = useInput('Smith');

    return (
        <React.Fragment>
            <div>
                <label
                    htmlFor="first_name"
                >
                    <input
                        name="first_name"
                        value={firstName}
                        onChange={onFirstNameChange}
                    />
                </label>
            </div>
            <div>
                <label
                    htmlFor="last_name"
                >
                    <input
                        name="last_name"
                        value={lastName}
                        onChange={onLastNameChange}
                    />
                </label>
            </div>
            <p>
                User name:
                {`${firstName} ${lastName}`}
            </p>
        </React.Fragment>
    )
}
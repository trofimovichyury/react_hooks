import React, { useState, useEffect } from 'react';

export default () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = e => {
        setWidth(e.target.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        }
    }, []);

    return (
        <React.Fragment>
            <p>
                Width: {width}
            </p>
        </React.Fragment>
    )
}
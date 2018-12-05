import React, { useContext } from 'react';
import { LocaleContext } from './LocaleContext';

export default () => {
    const locale = useContext(LocaleContext);
    return (
        <React.Fragment>
            {locale}
        </React.Fragment>
    )
}
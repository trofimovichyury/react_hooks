import React from 'react';

import { LocaleContext } from './LocaleContext';

export default () => (
    <LocaleContext.Consumer>
        {locale => (
            <div>{locale}</div>
        )}
    </LocaleContext.Consumer>
)
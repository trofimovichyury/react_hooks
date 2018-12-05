import React from 'react';
import { storiesOf } from '@storybook/react';

import ContextComponent from './ContextComponent';

storiesOf('ContextComponent', module)
    .add('simple context Component', () =>
        <ContextComponent />
    );
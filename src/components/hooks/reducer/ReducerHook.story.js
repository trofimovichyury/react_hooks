import React from 'react';
import { storiesOf } from '@storybook/react';

import ReducerHook from './ReducerHook';

storiesOf('ReducerHook', module)
    .add('hook', () =>
        <ReducerHook />
    );
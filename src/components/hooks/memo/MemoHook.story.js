import React from 'react';
import { storiesOf } from '@storybook/react';

import MemoHook from './MemoHook';

storiesOf('MemoHook', module)
    .add('hook', () =>
        <MemoHook />
    );
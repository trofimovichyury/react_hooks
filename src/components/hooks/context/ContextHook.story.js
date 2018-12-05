import React from 'react';
import { storiesOf } from '@storybook/react';

import ContextHook from './ContextHook';

storiesOf('ContextHook', module)
    .add('simple context Hook', () =>
        <ContextHook />
    );
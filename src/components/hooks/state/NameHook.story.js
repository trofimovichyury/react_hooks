import React from 'react';
import { storiesOf } from '@storybook/react';

import NameHook from './NameHook';

storiesOf('NameHook', module)
    .add('simple name Hook', () =>
        <NameHook />
    );
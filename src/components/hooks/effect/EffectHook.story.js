import React from 'react';
import { storiesOf } from '@storybook/react';

import EffectHook from './EffectHook';

storiesOf('EffectHook', module)
    .add('simple name effect Hook', () =>
        <EffectHook />
    );
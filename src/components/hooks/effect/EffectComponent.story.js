import React from 'react';
import { storiesOf } from '@storybook/react';

import EffectComponent from './EffectComponent';

storiesOf('EffectComponent', module)
    .add('simple name effect Component', () =>
        <EffectComponent />
    );
import React from 'react';
import { storiesOf } from '@storybook/react';

import NameComponent from './NameComponent';

storiesOf('NameComponent', module)
    .add('simple name Component', () =>
        <NameComponent />
    );
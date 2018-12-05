import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.story\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
    // You can require as many stories as you need.
}

configure(loadStories, module);
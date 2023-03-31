import React from 'react';
import { render } from '@testing-library/react';

import Recipes from '../src/components/Recipes';

test('Renders the component', () => {
    render(<Recipes />)
})
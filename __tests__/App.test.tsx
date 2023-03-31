import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../src/App';

import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { server } from '../__mocks__/mockApi';

// Start the server before running the tests
beforeAll(() => server.listen());

// Stop the server after the tests are done
afterAll(() => server.close());

describe('Recipe Application', () => {
	it('should render the recipe application containing the App component', async () => {
		
		render(<App />);

		expect(screen.queryByTestId('form-display')).toBeVisible(); //check form is displayed after the component is rendered


	});


	it.skip('renders recipes fetched from the API', async () => {
		// Render the component
		render(<App />);

		await waitFor(() => {
			expect(screen.getByText('Sammie\'s Bacon Tomato Pasta')).toBeInTheDocument(); // This test will fail // TODO: Make it pass ;)
		});
	});
});

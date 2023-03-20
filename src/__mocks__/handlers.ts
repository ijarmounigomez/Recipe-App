import { rest } from 'msw';

import responseData from './response.json';

export const handlers = [
	rest.get('https://api.edamam.com/api/recipes/v2', (req, res, ctx) => {
		const mockData = responseData;

		return res(ctx.delay(), ctx.status(200), ctx.json([mockData]));
	}),
];

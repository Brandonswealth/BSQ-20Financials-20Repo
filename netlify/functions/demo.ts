import { ok, error, handleCors, HandlerEvent } from './_utils/http';
import { demoLogic } from '../../server/routes/demo';
import { initDB } from '../../server/db';


export const handler = async (event: HandlerEvent) => {
	const cors = handleCors(event);
	if (cors) return cors;
	if (event.httpMethod !== 'GET') return error(405, 'Method Not Allowed');


	await initDB();
	const data = await demoLogic();
	return ok(data);
};
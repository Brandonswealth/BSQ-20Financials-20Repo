import { ok, error, handleCors, HandlerEvent } from './_utils/http';


export const handler = async (event: HandlerEvent) => {
	const cors = handleCors(event);
	if (cors) return cors;
	if (event.httpMethod !== 'GET') return error(405, 'Method Not Allowed');


	const ping = process.env.PING_MESSAGE ?? 'ping';
	return ok({ message: ping });
};
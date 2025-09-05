import { error, handleCors, HandlerEvent, parseJSONBody } from "./_utils/http";
import { StripeCheckoutRequest } from "../../server";
import { handleCheckoutConfirm } from "../../server";


export const handler = async (event: HandlerEvent) => {
	const cors = handleCors(event);
	if (cors) return cors;
	if (event.httpMethod !== 'POST') return error(405, 'Method Not Allowed');

	const body = parseJSONBody<StripeCheckoutRequest>(event);
	if (!body) return error(400, 'Invalid JSON body');

	return await handleCheckoutConfirm(body);
};


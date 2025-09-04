import { error, handleCors, HandlerEvent, parseJSONBody } from "./_utils/http";
import { handleCheckoutWithStripe } from "../../server/routes/stripe";
import { initDB } from "../../server/db";


export const handler = async (event: HandlerEvent) => {
	const cors = handleCors(event);
	if (cors) return cors;
	if (event.httpMethod !== 'POST') return error(405, 'Method Not Allowed');

	const body = parseJSONBody<CheckoutRequest>(event);
	if (!body) return error(400, 'Invalid JSON body');
  console.log(body);
  return ;

	/*await initDB();
	return await handleCheckoutWithStripe(body);*/
};


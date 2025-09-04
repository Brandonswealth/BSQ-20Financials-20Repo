	export type HandlerEvent = {
		httpMethod: string;
		headers: Record<string, string | undefined>;
		queryStringParameters: Record<string, string | undefined> | null;
		body: string | null;
		path: string;
	};


	export type HandlerResponse = {
		statusCode: number;
		headers?: Record<string, string>;
		body: string;
	};


	export function json(statusCode: number, data: unknown, extraHeaders: Record<string, string> = {}): HandlerResponse {
		return {
			statusCode,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
				...extraHeaders,
			},
			body: JSON.stringify(data),
		};
	}


	export function error(statusCode: number, message: string, details?: unknown): HandlerResponse {
		return json(statusCode, { error: message, details });
	}


	export function ok(data: unknown): HandlerResponse {
		return json(200, data);
	}


	export function noContent(): HandlerResponse {
		return { statusCode: 204, headers: { 'Access-Control-Allow-Origin': '*' }, body: '' };
	}


	export function parseJSONBody<T = any>(event: HandlerEvent): T | null {
		if (!event.body) return null;
		try {
			return JSON.parse(event.body) as T;
		} catch {
			return null;
		}
	}


	export function handleCors(event: HandlerEvent): HandlerResponse | null {
		if (event.httpMethod === 'OPTIONS') {
			return json(200, {});
		}
		return null;
	}
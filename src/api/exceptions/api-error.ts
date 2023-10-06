export default class ApiError extends Error {
	status;
	errors;

	constructor(status: number, message: string, errors = []) {
		super(message);
		this.status = status;
		this.errors = errors;
	}

	static UnauthorizedError(message: string, errors = []) {
		return new ApiError(401, message || "Unauthorized");
	}

	static BadRequest(message: string, errors = []) {
		return new ApiError(400, message, errors);
	}

	static NotFound(message: string, errors = []) {
		return new ApiError(404, message, errors);
	}

	static ServerError(message: string, errors = []) {
		return new ApiError(500, message, errors);
	}

	static Iamateapot(message: string, errors = []) {
		return new ApiError(418, message, errors);
	}
}

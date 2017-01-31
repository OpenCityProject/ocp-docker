module.exports = {
	client: 'pg', // PostgreSQL
	connection: {
		user: process.env.POSTGRES_USER || "admin_user",
		password: process.env.POSTGRES_PASSWORD || "admin_password",
		host: process.env.POSTGRES_SERVER || "localhost",
		port: process.env.POSTGRES_PORT || 5432,
		database: process.env.POSTGRES_DB || "ocp",
		max: process.env.POSTGRES_MAX_CLIENT || 10, // max number of clients in the pool
		idleTimeoutMillis: process.env.POSTGRES_IDLE_TIMEOUT_MILLIS || 30000, // how long a client is allowed to remain idle before being closed
	}
}
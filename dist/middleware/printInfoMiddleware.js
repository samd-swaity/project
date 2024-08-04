const logRequestMiddleware = (req, res, next) => {
    console.log(`${new Date().toLocaleDateString()} - ${req.path} - ${req.method} - ${res.statusCode} `);
    next();
};
export { logRequestMiddleware };

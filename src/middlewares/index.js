const handleLogin = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password || email.length === 0 || password.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
      }

    return next();
};

const handleError = (err, req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || 'Unexpected error. Try again later';
  
    return res.status(status).json({ message });
  };
  
module.exports = {
    handleLogin,
    handleError,
    };  
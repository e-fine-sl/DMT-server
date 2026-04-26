const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-dmt-api-key'];

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: API key is missing. Include x-dmt-api-key header.'
    });
  }

  if (apiKey !== process.env.DMT_API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized: Invalid API key.'
    });
  }

  next();
};

module.exports = validateApiKey;

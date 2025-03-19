import jwt from 'jsonwebtoken';

const SECRET_KEY_USER = process.env.SECRET_KEY || 'your_secret_key';

export const authenticateJWT = (req, res, next) => {
  // Get token from Authorization header or HTTP-only cookies
  const token =
    req.cookies?.token || req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: 'Access denied. No token provided.' });
  }

  try {
    // Verify JWT
    const decoded = jwt.verify(token, SECRET_KEY_USER);
    req.user = decoded; // Attach decoded payload to request object
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // In production, check database for current subscription status
    res.status(200).json({
      id: decoded.userId,
      email: decoded.email,
      name: 'Demo User', // This would come from database
      subscriptionActive: true
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

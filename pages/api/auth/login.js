import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// This is a simplified example - in production, use a proper database
const users = [
  {
    id: 1,
    email: 'demo@vorteca.com',
    password:'$2b$10$8K1p2JZfvdnVfhwem4B3Tu.a4v7KnJOr5FqJ0g.DVEeNQa6cz/YU.',  // password: demo123',  // password: demo123', // password: demo123
    name: 'Demo User',
    subscriptionActive: true,
    subscriptionEnd: '2025-12-31'
  }
];

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  // Find user
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check password
  const isValidPassword = bcrypt.compareSync(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check subscription
  if (!user.subscriptionActive || new Date(user.subscriptionEnd) < new Date()) {
    return res.status(403).json({ message: 'Subscription expired' });
  }

  // Generate JWT
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  );

  res.status(200).json({
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      subscriptionActive: user.subscriptionActive
    }
  });
}

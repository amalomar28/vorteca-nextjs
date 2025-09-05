export const verifySubscription = async () => {
  const token = localStorage.getItem('vorteca_token');
  if (!token) return null;

  try {
    const response = await fetch('/api/auth/verify', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    console.error('Auth verification error:', error);
    return null;
  }
};

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DashboardLayout({ children, user }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('vorteca_token');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="text-2xl font-bold">
              Vorteca Dashboard
            </Link>
            <div className="flex items-center space-x-4">
              <span className="bg-green-500 px-3 py-1 rounded-full text-sm font-semibold">
                Active Subscriber
              </span>
              <span>Welcome, {user?.name || 'User'}</span>
              <button
                onClick={handleLogout}
                className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}

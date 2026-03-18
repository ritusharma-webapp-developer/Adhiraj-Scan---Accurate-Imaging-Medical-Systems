import { useState } from 'react';
import { Lock, User, FileText, Download, Eye, Search, LogOut } from 'lucide-react';

// Mock data for patient reports
const mockReports = [
  { id: '1', patientName: 'Rahul Sharma', test: 'MRI Brain', date: '2026-03-18', status: 'Ready' },
  { id: '2', patientName: 'Priya Patel', test: 'CT Abdomen', date: '2026-03-17', status: 'Ready' },
  { id: '3', patientName: 'Amit Verma', test: 'PET CT Whole Body', date: '2026-03-16', status: 'Ready' },
  { id: '4', patientName: 'Sunita Singh', test: 'Digital X-Ray Chest', date: '2026-03-15', status: 'Ready' },
  { id: '5', patientName: 'Vikram Malhotra', test: 'USG KUB', date: '2026-03-14', status: 'Ready' },
];

export default function DoctorPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const filteredReports = mockReports.filter(report => 
    report.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.test.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isLoggedIn) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
          <div>
            <div className="mx-auto h-12 w-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
              Doctor Portal Login
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Secure access to patient reports and images
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-slate-50"
                    placeholder="Doctor ID / Username"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-3 pl-10 border border-slate-300 placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-slate-50"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Doctor Dashboard</h1>
            <p className="text-blue-200">Welcome back, Dr. {username || 'Doctor'}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 md:mt-0 flex items-center px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-md transition-colors text-sm font-medium"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          
          {/* Toolbar */}
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Patient Reports
            </h2>
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search patients or tests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-md leading-5 bg-slate-50 placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Test
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredReports.length > 0 ? (
                  filteredReports.map((report) => (
                    <tr key={report.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">{report.patientName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-600">{report.test}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-600">{report.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-3">
                          <button className="text-blue-600 hover:text-blue-900 flex items-center" title="View Images">
                            <Eye className="w-4 h-4 mr-1" /> View
                          </button>
                          <button className="text-slate-600 hover:text-slate-900 flex items-center" title="Download Report">
                            <Download className="w-4 h-4 mr-1" /> Report
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-slate-500">
                      No reports found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

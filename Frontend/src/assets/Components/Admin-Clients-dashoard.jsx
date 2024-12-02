import React, { useState } from 'react';

const Clients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Track which section is active

  const [monetizationModel, setMonetizationModel] = useState('');
  const [tier, setTier] = useState('');

  const clients = [
    { id: 1, name: 'Convergies', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 356, averageTime: '56:22:32', status: 'active' },
    { id: 2, name: 'Genpact', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 230, averageTime: '56:22:32', status: 'active' },
    { id: 3, name: 'Aquire BPO', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 256, averageTime: '56:22:32', status: 'active' },
    { id: 4, name: 'WNS Global', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 6455, averageTime: '56:22:32', status: 'inactive' },
    { id: 5, name: 'Helpware', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 345, averageTime: '56:22:32', status: 'active' },
    { id: 6, name: 'Sykes enterprises', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 78363, averageTime: '56:22:32', status: 'active' },
    { id: 7, name: 'Cience', monetizationModel: 'Monetization Model', totalRevenueEarned: '1,56,897', totalCallReviews: 1234, averageTime: '56:22:32', status: 'inactive' },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle section visibility
  };

  const handleMonetizationModelChange = (event) => {
    setMonetizationModel(event.target.value);
    if (event.target.value === 'Subscription') {
      setTier('Platinum'); // Default to Platinum for subscription selection
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Clients</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded text-sm text-gray-700 hover:bg-gray-300">Export as</button>
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            + Create Client
          </button>
        </div>
      </div>

      {/* Clients Table */}
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Client Name</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Monetization Model</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Total Revenue Earned</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Total Call Reviews</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Average Time</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className={`hover:bg-gray-50 ${client.status === 'active' ? 'bg-green-50' : 'bg-gray-50'}`}>
              <td className="py-3 px-4 text-sm text-gray-700">{client.name}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{client.monetizationModel}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{client.totalRevenueEarned}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{client.totalCallReviews}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{client.averageTime}</td>
              <td className="py-3 px-4 text-sm text-gray-700">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Create Client Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create Client</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <form>
              {/* Company Details Section */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => toggleSection('companyDetails')}
                  className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded"
                >
                  Company Details
                </button>
                {activeSection === 'companyDetails' && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600">Company Name</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Location</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Business Registration Number</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">HQ Location</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Contact Number</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Person Details Section */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => toggleSection('contactPersonDetails')}
                  className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded"
                >
                  Contact Person Details
                </button>
                {activeSection === 'contactPersonDetails' && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600">Full Name</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Title</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Email</label>
                      <input type="email" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Contact Number</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600">Location</label>
                      <input type="text" className="w-full border rounded p-2" />
                    </div>
                  </div>
                )}
              </div>

              {/* Monetization Model Section */}
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => toggleSection('monetizationModel')}
                  className="w-full text-left py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded"
                >
                  Monetization Model
                </button>
                {activeSection === 'monetizationModel' && (
                  <div className="mt-4">
                    <label className="block text-sm text-gray-600">Choose Monetization Model</label>
                    <div className="space-y-4">
                      <div>
                        <input
                          type="radio"
                          id="payPerCall"
                          name="monetizationModel"
                          value="Pay per call"
                          checked={monetizationModel === 'Pay per call'}
                          onChange={handleMonetizationModelChange}
                          className="mr-2"
                        />
                        <label htmlFor="payPerCall">Pay per call</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="subscription"
                          name="monetizationModel"
                          value="Subscription"
                          checked={monetizationModel === 'Subscription'}
                          onChange={handleMonetizationModelChange}
                          className="mr-2"
                        />
                        <label htmlFor="subscription">Choose subscription tier</label>
                        {monetizationModel === 'Subscription' && (
                          <div className="mt-2">
                            <select
                              value={tier}
                              onChange={(e) => setTier(e.target.value)}
                              className="w-full border rounded p-2"
                            >
                              <option value="Platinum">Platinum (500-1000 calls)</option>
                              <option value="Gold">Gold (200-500 calls)</option>
                              <option value="Silver">Silver (0-200 calls)</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-500 text-white rounded mr-4"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;

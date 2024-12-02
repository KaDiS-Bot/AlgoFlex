import React, { useState } from "react";

const Agents = () => {
    const [agents, setAgents] = useState([
        {
          id: 1,
          client: "Convergys",
          name: "Agent Name",
          email: "agent@skilldify.com",
          title: "Agent Title",
          employeeId: "0002",
          department: "Customer Support",
          tenure: "56 hrs | 22 min | 32 sec",
          totalReviews: 145,
          status: true,
        },
        {
          id: 2,
          client: "Genpact",
          name: "John Doe",
          email: "john.doe@skilldify.com",
          title: "Senior Agent",
          employeeId: "0003",
          department: "Sales",
          tenure: "45 hrs | 10 min | 15 sec",
          totalReviews: 230,
          status: false,
        },
        {
          id: 3,
          client: "Acquire BPO",
          name: "Alice Smith",
          email: "alice.smith@skilldify.com",
          title: "Team Leader",
          employeeId: "1000",
          department: "Technical Support",
          tenure: "60 hrs | 50 min | 05 sec",
          totalReviews: 256,
          status: true,
        },
        {
          id: 4,
          client: "WNS Global",
          name: "Mark Spencer",
          email: "mark.spencer@skilldify.com",
          title: "Agent",
          employeeId: "0005",
          department: "Customer Support",
          tenure: "70 hrs | 12 min | 45 sec",
          totalReviews: 6455,
          status: true,
        },
        {
          id: 5,
          client: "Helpware",
          name: "Emily Davis",
          email: "emily.davis@skilldify.com",
          title: "Junior Agent",
          employeeId: "0006",
          department: "Human Resources",
          tenure: "20 hrs | 30 min | 10 sec",
          totalReviews: 345,
          status: false,
        },
        {
          id: 6,
          client: "Sykes Enterprises",
          name: "Liam Johnson",
          email: "liam.johnson@skilldify.com",
          title: "Agent",
          employeeId: "0007",
          department: "Sales",
          tenure: "100 hrs | 5 min | 32 sec",
          totalReviews: 78363,
          status: false,
        },
        {
          id: 7,
          client: "Cience",
          name: "Sophia Lee",
          email: "sophia.lee@skilldify.com",
          title: "Team Leader",
          employeeId: "0008",
          department: "Marketing",
          tenure: "88 hrs | 40 min | 25 sec",
          totalReviews: 5611,
          status: true,
        },
        {
          id: 8,
          client: "Xact",
          name: "Daniel Brown",
          email: "daniel.brown@skilldify.com",
          title: "Agent",
          employeeId: "0009",
          department: "Technical Support",
          tenure: "92 hrs | 10 min | 20 sec",
          totalReviews: 64566,
          status: false,
        },
        {
          id: 9,
          client: "Prialto",
          name: "Mia Wilson",
          email: "mia.wilson@skilldify.com",
          title: "Agent",
          employeeId: "0010",
          department: "Customer Support",
          tenure: "68 hrs | 15 min | 45 sec",
          totalReviews: 5788,
          status: true,
        },
        {
          id: 10,
          client: "Invensis",
          name: "Ethan Martinez",
          email: "ethan.martinez@skilldify.com",
          title: "Senior Agent",
          employeeId: "0001",
          department: "Operations",
          tenure: "75 hrs | 22 min | 50 sec",
          totalReviews: 3466,
          status: true,
        },
      ]);
      

  const toggleStatus = (id) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.id === id ? { ...agent, status: !agent.status } : agent
      )
    );
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Agents</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded text-sm text-gray-700 hover:bg-gray-300">
            Export as
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            + Create Agent
          </button>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Client
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Agent
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Email ID
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Title
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Employee ID
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Department
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Tenure
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Total Reviews
            </th>
            <th className="py-2 px-4 border text-left text-sm font-medium text-gray-500">
              Agent Status
            </th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.client}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.name}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.email}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.title}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.employeeId}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.department}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.tenure}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                {agent.totalReviews}
              </td>
              <td className="py-2 px-4 border text-sm text-gray-700">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agent.status}
                    onChange={() => toggleStatus(agent.id)}
                    className="toggle-checkbox hidden"
                  />
                  <span
                    className={`w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 ${
                      agent.status ? "bg-green-500" : ""
                    }`}
                  >
                    <span
                      className={`bg-white w-4 h-4 rounded-full shadow transform ${
                        agent.status ? "translate-x-4" : ""
                      }`}
                    ></span>
                  </span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agents;

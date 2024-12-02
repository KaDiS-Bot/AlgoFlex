import React, { useState } from "react";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      clientName: "Convergys",
      campaignName: "Very Long Campaign name Very Long Campaign name here",
      totalCallReviews: 356,
      uniqueAgents: 356,
      reviewRating: 58,
    },
    {
      id: 2,
      clientName: "Genpact",
      campaignName: "Campaign name here",
      totalCallReviews: 230,
      uniqueAgents: 230,
      reviewRating: 65,
    },
    {
      id: 3,
      clientName: "Acquire BPO",
      campaignName: "Campaign name Campaign name",
      totalCallReviews: 256,
      uniqueAgents: 256,
      reviewRating: 65,
    },
    {
        id: 4,
        clientName: "WNS Global",
        campaignName: "Campaign name",
        totalCallReviews: 67,
        uniqueAgents: 6455,
        reviewRating: 65,
      },
      {
        id: 5,
        clientName: "Helpware",
        campaignName: "Very Long Campaign name Very Long Campaign name here",
        totalCallReviews: 345,
        uniqueAgents: 345,
        reviewRating: 65,
      },
      {
        id: 6,
        clientName: "Sykes Enterprises",
        campaignName: "Campaign name Campaign name",
        totalCallReviews: 435,
        uniqueAgents: 78363,
        reviewRating: 65,
      },
      {
        id: 7,
        clientName: "Cience",
        campaignName: "Campaign name",
        totalCallReviews: 325,
        uniqueAgents: 5611,
        reviewRating: 65,
      },
      {
        id: 8,
        clientName: "Xact",
        campaignName: "Very Long Campaign name Very Long Campaign name here",
        totalCallReviews: 21,
        uniqueAgents: 64566,
        reviewRating: 65,
      },
      {
        id: 9,
        clientName: "Prialto",
        campaignName: "Campaign name",
        totalCallReviews: 344,
        uniqueAgents: 5788,
        reviewRating: 65,
      },
      {
        id: 10,
        clientName: "Invensis",
        campaignName: "Campaign name",
        totalCallReviews: 534,
        uniqueAgents: 3466,
        reviewRating: 65,
      }
    // Add more campaigns here as needed
  ]);

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Campaigns</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded text-sm text-gray-700 hover:bg-gray-300">
            Export as
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
            + Create Campaign
          </button>
        </div>
      </div>

      {/* Campaigns Table */}
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Client Name</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Campaign Name</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Total Call Reviews</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Unique Agents</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Call Review Rating</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-700">{campaign.clientName}</td>
              <td className="py-3 px-4 text-sm text-gray-700 truncate">{campaign.campaignName}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{campaign.totalCallReviews}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{campaign.uniqueAgents}</td>
              <td className="py-3 px-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-3/4 bg-gray-200 h-3 rounded-lg">
                    <div
                      className={`h-3 rounded-lg ${
                        campaign.reviewRating < 60 ? "bg-red-500" : "bg-green-500"
                      }`}
                      style={{ width: `${campaign.reviewRating}%` }}
                    ></div>
                  </div>
                  <span className="ml-2">{campaign.reviewRating}%</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">
                <button className="text-blue-500 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Campaigns;

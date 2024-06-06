import { CompanyInfo } from "@/types";
import React from "react";

const SSG = async () => {
  const response = await fetch(`http://localhost:4000/companyInfo`, {
    cache: "force-cache",
  });

  if (!response.ok) {
    console.error("Failed to fetch company info");
    return <div>Error fetching company info</div>;
  }

  const companyInfo = await response.json();

  if (!companyInfo || Object.keys(companyInfo).length === 0) {
    console.error("No company info found");
    return <div>No company info available</div>;
  }
  const companyData: CompanyInfo = companyInfo[0];

  return (
    <div className="mt-8">
      <div className="border p-4 my-4">
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl font-bold">{companyData.name}</h2>
            <p className="text-gray-600">{companyData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSG;

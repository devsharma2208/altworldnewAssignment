"use client";
import { useState } from "react";
import AllCandidate from "./allCandidate/allCandidate";
import CandidateDetails from "./candidate-details/CandidateDetails";
import "./rightSideBar.css";
export default function RightSideBar() {
  const [stateData, setStateData] = useState(null);
  console.log(stateData);
  return (
    <div className="right-Side-Bar-container">
      <div>
        <h5>
          <span>Pages</span> / Assignment
        </h5>
        <h3>Sales BDE</h3>
      </div>
      <div>
        <div>
          <AllCandidate setStateData={setStateData} />
        </div>
        <div>
          <CandidateDetails stateData={stateData} />
        </div>
      </div>
    </div>
  );
}

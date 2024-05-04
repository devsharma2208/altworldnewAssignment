"use client";
import { useState } from "react";
import AllCandidate from "./allCandidate/allCandidate";
import CandidateDetails from "./candidate-details/CandidateDetails";
import "./rightSideBar.css";
import { useSelector } from "react-redux";
export default function RightSideBar() {
  const [stateData, setStateData] = useState(null);
  const count = useSelector((state) => state);
  console.log(count);
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

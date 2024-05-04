import AllCandidate from "./allCandidate/allCandidate";
import CandidateDetails from "./candidate-details/CandidateDetails";
import "./rightSideBar.css";
export default function RightSideBar() {
  
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
          <AllCandidate />
        </div>
        <div>
          <CandidateDetails />
        </div>
      </div>
    </div>
  );
}

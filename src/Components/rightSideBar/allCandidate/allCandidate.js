"use client";
import jsonData from "@/app/jsondata/jsonData";
import "./allCandidate.css";
import { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

export default function AllCandidate() {
  const [status, setStatus] = useState(true);
  console.log(jsonData[0]);
  const dispatch = useDispatch();
  const handleLocalStorage = (index) => {
    dispatch({
      type: "ADD_CANDIDTE_DATA",
      candidateDetails: jsonData[index],
    });
  };

  return (
    <div className="allCandidate-container">
      <div className="assignment-details">
        <div>
          <div>
            <h4>Sales BDE</h4>
          </div>
          <div>
            <h5>Assignment Link</h5>
          </div>
          <div>
            <h5>Assignment Hour</h5>
          </div>
          <div>
            <h5>Assignment Ends at</h5>
          </div>
        </div>
        <div>
          <div className="active">
            <h4>Active</h4>
            <img src="https://static-00.iconduck.com/assets.00/edit-icon-2048x2048-6svwfwto.png" />
          </div>
          <div>
            <Link href="https://www.linkedin.com/company/altworld/">
              https://altworld.in/
            </Link>
          </div>
          <div>
            {" "}
            <h5>3 hours </h5>
          </div>
          <div>
            {" "}
            <h5>11 March 2024 </h5>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          className={`${status && "active"}`}
          onClick={() => setStatus(true)}
        >
          <img src="https://cdn-icons-png.freepik.com/512/20/20256.png" /> TO
          REVIEW
        </button>
        <button
          className={`${!status && "active"}`}
          onClick={() => setStatus(false)}
        >
          <img src="https://cdn-icons-png.freepik.com/512/91/91749.png" />{" "}
          SHORTLISTED
        </button>
      </div>
      <div className="candidate-score">
        <div>CANDIDATE</div>
        <div>SCORE</div>
      </div>
      {status ? (
        <div className="candidateDetails">
          {jsonData.map((item, index) => {
            return (
              <div onClick={() => handleLocalStorage(index)}>
                <div>
                  <div>
                    <img src={item.image} />
                  </div>
                  <div>{item.name}</div>
                </div>
                <div className={`${item.score < 40 && "orange"}`}>
                  {item.score}%
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="candidateDetails">
          {jsonData.map((item, index) => {
            return (
              <>
                {item.status == "sortlisted" && (
                  <div onClick={() => handleLocalStorage(index)}>
                    <div>
                      <div>
                        <img src={item.image} />
                      </div>
                      <div>{item.name}</div>
                    </div>
                    <div className={`${item.score < 40 && "orange"}`}>
                      {item.score}%
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

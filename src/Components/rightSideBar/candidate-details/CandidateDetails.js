"use client";
import { useState } from "react";
import "./CandidateDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";

export default function CandidateDetails() {
  const selector = useSelector((state) => state);
  const data = ["Tell me about yourself", "What is Front end development"];
  const [index, setIndex] = useState(0);
  const [showdata, setShowData] = useState(data[index]);

  return (
    <div className="candidate-details-container">
      <div>
        <div>
          <div>
            <div>
              <img
                src={
                  selector
                    ? selector.image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s"
                }
              />
            </div>
            <div>
              <h4>{selector ? selector.name : "Ankita Singh"}</h4>
              <h6>{selector ? selector.email : "ankita@gmail.com"}</h6>
            </div>
          </div>
          <div>
            <h4>{selector ? selector.score : "78"}%</h4>
          </div>
        </div>
        <div>
          <div className="lkfddlkf">
            <p>Behavioural</p>
            <ProgressBar
              variant="success"
              now={70}
              style={{ width: "60%", height: "12px" }}
            />
          </div>
          <div className="lkfddlkf">
            <p>Communication</p>
            <ProgressBar
              variant="warning"
              now={60}
              style={{ width: "60%", height: "12px" }}
            />
          </div>
          <div className="lkfddlkf">
            <p> Situation handling</p>
            <ProgressBar
              variant="danger"
              now={90}
              style={{ width: "60%", height: "12px" }}
            />
          </div>
        </div>
        <div>
          <h4>About</h4>
          <p>
            {selector
              ? selector.about
              : "I am passionate about coding and enjoy building scalable solutions that make a di"}
          </p>
        </div>
        <div>
          <h4>Experience</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            amet.
          </p>
        </div>
        <div>
          <h4>Hobbies</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            amet.
          </p>
        </div>
        <div>
          <h4>Introduction</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            amet.
          </p>
        </div>
        <div>
          <button>SHORTLIST</button>
        </div>
      </div>
      <div className="video-container">
        <div>
          <iframe
            width="330"
            height="450"
            src="https://www.youtube.com/embed/XR4Vy2a3MqY?autoplay=1&mute=1"
          ></iframe>
        </div>
        <div>
          <div>
            <h6>{showdata}</h6>
          </div>
          <div>
            <button
              onClick={() => {
                setIndex(0);
                setShowData(data[0]);
              }}
            >
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-left-double-arrow-2361280-1992001.png" />
            </button>
            <p>{index + 1} / 2</p>
            <button
              onClick={() => {
                setIndex(1);
                setShowData(data[1]);
              }}
            >
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-left-double-arrow-2361280-1992001.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

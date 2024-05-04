"use client";
import jsonData from "@/app/jsondata/jsonData";
import "./allCandidate.css";

export default function AllCandidate() {
  console.log(jsonData[0]);
  const handleLocalStorage = (index) => {
    localStorage.setItem("selectedItem", JSON.stringify(jsonData[index]));
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
            <h5>https://tiny.url/asknakdna/</h5>
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
        <button className="active">
          <img src="https://cdn-icons-png.freepik.com/512/20/20256.png" /> TO
          REVIEW
        </button>
        <button className="active">
          <img src="https://cdn-icons-png.freepik.com/512/91/91749.png" />{" "}
          SHORTLISTED
        </button>
      </div>
      <div className="candidate-score">
        <div>CANDIDATE</div>
        <div>SCORE</div>
      </div>
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

        {/* <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>78%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>78%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>78%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>32%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>80%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>25%</div>
        </div>
        <div>
          <div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7YBAz_b5aBQNgs0pq81o4oxDzSfda5w7-0Q9UyYtQpg&s" />
            </div>
            <div>Ankita Singh</div>
          </div>
          <div>78%</div>
        </div> */}
      </div>
    </div>
  );
}

import  "./create-assignment.css";
export default function CreateAssignment() {
  return (
    <div>
      <div className="name_arrow">
        <div className="altworld-icon">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/27/27365.png"
              alt="arrow-symbol"
            />
            <img
              src="https://static-00.iconduck.com/assets.00/arrow-down-square-icon-1024x1024-u43buipo.png"
              alt="icon"
            />
          </div>
          <h5> Hi, AltWorld</h5>
        </div>
        <div className="dashboard-con">
          <div className="home-container">
            <div className="home_Deshboard">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzXaw59uhmVo3iUojMDfUqGX9r47wK2XRLM4vfpUYLssA2JEyBvl6LjnE5XQcERcp6B0&usqp=CAU"
                alt="icon"
              />
            </div>
            <h2>Dashboard</h2>
          </div>
          <div className="newAssignment-container">
            <div>
              <div className="plus-Icon">
                <div>
                  <img
                    src="https://static-00.iconduck.com/assets.00/plus-icon-512x512-1ksw3ncc.png"
                    alt="add"
                  />
                </div>
              </div>
              <div className="newAssignment-text-container">
                <div>
                  <h5>New Assignment?</h5>
                </div>
                <div>
                  <p>
                    Select from pre-defined questions to have quick turnaround.
                  </p>
                </div>
                <div>
                  <button>Create new Assignment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

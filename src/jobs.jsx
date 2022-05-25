import React from "react";

const Jobs = ({ jobs }) => {
  let sample = jobs.slice(0, 4);

  const calDiffInDays = (date) => {
    var date1 = new Date(date);
    var date2 = new Date();
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.round(Difference_In_Days);
  };
  return (
    <div className="ui grid">
      <div className="ui eleven wide column">
        <div className="ui container">
          <p>
            We have <span className="count">....</span> potential jobs for you.
          </p>
          <div className="ui top attached tabular menu">
            <a className="item active">ALL JOBS</a>
            <a className="item">FULL TIME</a>
            <a className="item">TEMPORARY</a>
            <a className="item">INTERNSHIP</a>
          </div>
          <div className="ui bottom attached segment">
            {sample.map((job) => (
              <div className="ui four column grid br">
                <div className="seven wide column align-content">
                  <div className="ui items">
                    <div className="item">
                      <a className="ui tiny image">
                        <img
                          className="myImg"
                          src="https://semantic-ui.com/images/avatar/large/stevie.jpg"
                        />
                      </a>
                      <div className="content align-content">
                        <div className="header">{job.jobtitle}</div>
                        <div className="description smallFont">
                          <p>{job.companyName}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="three wide column align-content smallFont">
                  <div className="smallFont">
                    <p>
                      <i class="map marker alternate icon" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <div className="three wide column align-content smallFont">
                  <i class="clock outline icon" />
                  {calDiffInDays(job.createdAt)} days ago
                </div>
                <div className="three wide column align-content smallFont">
                  {job.jobType}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ui five wide column">
        <div class="ui card brZ">
          <div class="ui action input">
            <button class="ui icon button brZ">
              <i class="search icon brZ"></i>
            </button>
            <input
              type="text"
              placeholder="Start Searching"
              className="brZ w-50"
            />
          </div>
          <div class="content">
            <h5 class="ui">Activity</h5>
            <div class="ui input fluid">
              <input type="text" placeholder="Jobs, title, keywords" />
            </div>
            <h5 class="ui">Location</h5>
            <div class="ui input fluid">
              <input type="text" placeholder="Jobs, title, keywords" />
            </div>
            <h5 class="ui">Category</h5>
            <div class="ui input fluid">
              <input type="text" placeholder="Jobs, title, keywords" />
            </div>
            <div class="ui secondary vertical menu fluid">
              <div class="ui dropdown item">
                <i class="dropdown icon"></i>
                Contract Type
                <div class="menu">
                  <div class="header">Op 1</div>
                  <a class="item">Op 2</a>
                  <a class="item">Op 3</a>
                </div>
              </div>
              <div class="ui dropdown item">
                <i class="dropdown icon"></i>
                Specialisms
                <div class="menu">
                  <div class="header">Op 1</div>
                  <a class="item">Op 2</a>
                  <a class="item">Op 3</a>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content">
            <button className="ui secondary button search_btn">
              <i className="search icon"></i>Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

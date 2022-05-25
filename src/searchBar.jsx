import React from "react";

const Searchbar = () => {
  return (
    <div className="ui container">
      <div className="searchBar">
        <div className="ui top attached tabular menu">
          <a className="item searchItem active">FIND A JOB</a>
          <a className="item searchItem">FIND RESUME</a>
        </div>
        <div className="ui bottom attached ">
          <div className="ui stackable celled grid search_bar">
            <div className="four column row">
              <div className="column search-col">
                <h6 className="search_title">JOB</h6>
                <input
                  className="ui segment input search_input"
                  type="text"
                  placeholder="Job title"
                />
              </div>
              <div className="column search-col">
                <h6 className="search_title">LOCATION</h6>
                <input
                  className="ui segment input search_input"
                  type="text"
                  placeholder="City, province"
                />
              </div>
              <div className="column search-col">
                <h6 className="search_title">CATEGORY</h6>
                <select className="ui dropdown segment fluid search_input">
                  <option value="">SELECT INDUSTRY</option>
                  <option value="1">OPTION 1</option>
                  <option value="0">OPTION 2</option>
                </select>
              </div>
              <div className="column search-col">
                <button className="ui secondary button search_btn">
                  <i className="search icon"></i>Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;

{
}

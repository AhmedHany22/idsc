import React, { useState, useEffect } from "react";
import GoogleMaps from "./API/google_maps/maps";
import Searchbar from "./searchBar";
import JobsApi from "./API/jobs";
import Jobs from "./jobs";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const { data } = await JobsApi.get();
      setJobs(data);
    };

    getJobs();
    console.log(jobs);
  }, []);

  return (
    <div>
      <div className="ui vertical masthead center aligned ">
        <GoogleMaps />
        <Searchbar />
      </div>
      <div className="ui container">
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
};

export default App;

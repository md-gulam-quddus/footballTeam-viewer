import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <div className="team">
      <Banner title="Football Team Viewer" />
      <div className="team-container">
        <div className="all-team">
          {teams.map((team) => (
            <Team team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

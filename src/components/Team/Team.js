import React from "react";
import { useHistory } from "react-router";
import "./Team.css";

const Team = ({ team }) => {
  const { strTeam, idTeam, strTeamBadge, strSport } = team;
  const history = useHistory();
  const showTeamDetails = (id) => {
    history.push(`/team/${id}`);
  };
  return (
    <div className="single-team">
      <img src={strTeamBadge} alt="" />
      <h1>{strTeam}</h1>
      <h4>Sports Type : {strSport}</h4>
      <button onClick={() => showTeamDetails(idTeam)}>Explore</button>
    </div>
  );
};

export default Team;

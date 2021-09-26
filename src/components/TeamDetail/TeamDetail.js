import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faceBook from "../../images/Facebook.png";
import twitter from "../../images/Twitter.png";
import youtube from "../../images/YouTube.png";
import {
  faFlag,
  faMapMarkerAlt,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router";
import Banner from "../Banner/Banner";
import "./TeamDetail.css";
import maleImg from "../../images/male.png";
import femaleImg from "../../images/female.png";
import { Link } from "react-router-dom";

const TeamDetail = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);

  const {
    strTeam,
    strTeamBadge,
    strDescriptionEN,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strFacebook,
    strTwitter,
    strYoutube,
  } = team;
  console.log(strFacebook);
  //const genderSelect = strGender.toLowerCase();
  return (
    <div className="team">
      <Banner logo={strTeamBadge} />
      <div className="teamContainer">
        <div className="team-details">
          <div className="team-details-left">
            <h1>{strTeam}</h1>
            <p>
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
              Founded : {intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faFlag} />
              Country : {strCountry}
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faFutbol} />
              Sport Type : {strSport}
            </p>
            <p>
              <FontAwesomeIcon className="icon" icon={faMars} />
              Gender : {strGender}
            </p>
          </div>
          <div className="team-details-right">
            {strGender === "Male" ? (
              <img src={maleImg} alt="" />
            ) : (
              <img src={femaleImg} alt="" />
            )}
          </div>
        </div>
        <div className="team-description">
          <p>{strDescriptionEN}</p>
          <div className="social-icons">
            <Link to={{ pathname: `https://${strFacebook}` }} target="_blank">
              <img src={faceBook} alt="" />
            </Link>
            <Link to={{ pathname: `https://${strTwitter}` }} target="_blank">
              <img src={twitter} alt="" />
            </Link>
            <Link to={{ pathname: `https://${strYoutube}` }} target="_blank">
              <img src={youtube} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;

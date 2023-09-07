/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../redux/footballSlice';
import NavBar from './NavBar';
import '../styles/Teams.css';

function Teams() {
  const teamsList = useSelector((state) => state.teams.teams);
  const isLoading = useSelector((state) => state.teams.loading);
  const isError = useSelector((state) => state.teams.error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <>
      <NavBar />
      <div className="teams">
        {teamsList.map((team) => (
          <Link to={`/team/${team.idTeam}`} key={team.idTeam}>
            <div className="team" key={team.id}>
              <img src={team.strTeamFanart3} alt="Fan" />
              <p>{team.strTeam}</p>
              <span>{team.strTeamShort}</span>
            </div>
          </Link>
        ))}
      </div>
    </>

  );
}

export default Teams;

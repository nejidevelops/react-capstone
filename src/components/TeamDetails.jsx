import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TeamDetails() {
  const { teamId } = useParams();
  const teamsList = useSelector((state) => state.teams.teams);
  const team = teamsList.find((team) => team.idTeam === teamId);

  if (!team) {
    return <h1>Team not found</h1>;
  }

  return (
    <div>
      <h2>{team.strTeam}</h2>
      <p>{team.strDescriptionEN}</p>
    </div>
  );
}

export default TeamDetails;

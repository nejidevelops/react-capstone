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
      <img src={team.strTeamBadge} alt={team.strTeam} />
      <h2>
        Team Name:
        {' '}
        {team.strTeam}
      </h2>
      <h4>
        Year Formed:
        {' '}
        {team.intFormedYear}
      </h4>
      <h4>
        Stadium:
        {' '}
        {team.strStadium}
      </h4>
      <h4>
        Stadium Capacity:
        {' '}
        {team.intStadiumCapacity}
      </h4>
      <p>{team.strDescriptionEN}</p>
    </div>
  );
}

export default TeamDetails;

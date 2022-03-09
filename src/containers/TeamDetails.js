import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const TeamDetails = () => {
  const { code } = useParams();
  // const team = useSelector((state) => state.team);
  // const dispatch = useDispatch();
  // const fetchLeague = async () => {
  //   const response = await axios.get(`https://api.football-data.org/v2/competitions/${code}/teams`, {
  //     mode: 'cors',
  //     headers: {
  //       'X-Auth-Token': '995e00e077394014bbba95a191625b10',
  //     },
  //   }).catch((err) => err);
  //   dispatch(getTeam(response.data));
  // };

return (
  <div>Team Details </div>
);

export default TeamDetails;

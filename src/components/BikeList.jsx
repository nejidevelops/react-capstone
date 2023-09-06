import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../redux/bike';
import HomeNavbar from './HomeNavbar';

function BikeList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log('first', state);

  if (state.bike.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <HomeNavbar />
      <p>BikeList</p>
      <button type="button" onClick={() => dispatch(fetchBikes())}>Fetch Bikes</button>
      <div className="grid gap-2 px-5 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
        state.bike.bikes.networks.map((e) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg" key={e.id}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{e.name}</div>
              <p className="text-gray-700 text-base">
                {e.location.latitude}
              </p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default BikeList;

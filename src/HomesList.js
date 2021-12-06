import React, { useState, useEffect } from 'react';

import axios from 'axios';

const HomesList = () => {
    const [ homes, refreshHomes ] = useState([]) 

useEffect(() => {
    fetchHomes();
    }, []);

const fetchHomes = () => {
    axios
    .get('https://api-dot-rentchairs.ew.r.appspot.com/v1/homes/by-postal_code?postal_code=08338')
    .then((res) => {
        console.log(res);
        refreshHomes(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
};

return (
    <div>
      <h1>List of homes</h1>
      <div className='homes-container'>
          {homes.map((home) => (
              <div className='card' key={home.id}>
                    <img src={home.main_image_url} alt='' />
                    <h3>{home.name}</h3>
                    <p>{home.id}</p>
              </div>
          ))}

      </div>
    </div>
  );
};

export default HomesList;
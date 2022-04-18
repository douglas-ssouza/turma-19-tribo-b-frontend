import { useState, useEffect } from 'react';

function useDigimon() {
  const [endpoint, setEnpoint] = useState(
    'https://digimon-api.herokuapp.com/api/digimon/level/intraining'
  );
  const [digimons, setDigimons] = useState(null);

  useEffect(() => {
    const fetchDigimons = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setDigimons(data);
    }
    fetchDigimons();
  }, [endpoint]);

  return [digimons, setEnpoint];
}

export default useDigimon;

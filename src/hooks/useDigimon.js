import { useState, useEffect } from 'react';

function useDigimon() {
  const [digimons, setDigimons] = useState(null);
  const [level, setLevel] = useState('');

  useEffect(() => {
    const fetchDigimons = async () => {
      const response = await fetch('https://digimon-api.herokuapp.com/api/digimon');
      const data = await response.json();
      setDigimons(data);
    };

    const fetchDigimonsByLevel = async () => {
      const response = await fetch(`https://digimon-api.herokuapp.com/api/digimon/level/${level}`);
      const data = await response.json();
      setDigimons(data);
    };

    level ? fetchDigimonsByLevel() : fetchDigimons();
  }, [level]);

  return [digimons, level, setLevel];
}

export default useDigimon;

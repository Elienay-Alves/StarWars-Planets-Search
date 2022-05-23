const fetchPlanets = async () => {
  const ONE_NEGATIVE = -1;
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(URL);
  const dataJ = await response.json();
  const { results } = dataJ;
  results.sort((a, b) => {
    if (a.name < b.name) {
      return ONE_NEGATIVE;
    } if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return results;
};

export default fetchPlanets;

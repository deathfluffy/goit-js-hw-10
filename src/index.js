const refs = {
  selectEl: document.querySelector('.breed-select'),
  catEl: document.querySelector('.cat-info'),
};
function searchCat(Cat) {
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  const END_POINT = '/api/';
  const PARAMS = `?Cat=${Cat}`;
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {
    headers: {
      'X-RapidAPI-Key':
        'live_Jis8kGSdDCDda0iKXYdGFX08MrIC3BdzhJaeI84ITrE84nvrKBqaW2rBULtlGU6q',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

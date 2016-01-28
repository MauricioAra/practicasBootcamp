function starWarsApi() {

  function getAll(page) {
    var url = 'http://swapi.co/api/people/?page='+page
    var data = testHTTP(url);
    var results = data.results;

    var customs = [];
    var custom = {
      name: '',
      height: '',
      mass: '',
      hair_color: '',
      skin_color: '',
      eye_color: '',
      birth_year: '',
      gender: '',
    };

    for(var result of results) {
      custom.name = result.name;
      custom.height = result.height;
      custom.mass = result.mass;
      custom.hair_color = result.hair_color;
      custom.skin_color = result.skin_color;
      custom.eye_color = result.eye_color;
      custom.birth_year = result.birth_year;
      custom.gender = result.gender;
    }

    return customs;
  };

  function testHTTP(url) {
    // body...
    var req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    req.setRequestHeader("Accept", "application/json; charset=utf-8");
    req.send(null);
    return JSON.parse(req.response)
  };


  function getOne(person) {
    var url = 'http://swapi.co/api/people/'+person+'/';
    var result = testHTTP(url);
    return result;
  };

  function getPlanets() {
    return 'planets';
  };

  return {
    getAll: getAll,
    getOne: getOne,
    getPlanets: getPlanets
  }
};

var testingApi = starWarsApi();

console.log(testingApi.getOne(1));

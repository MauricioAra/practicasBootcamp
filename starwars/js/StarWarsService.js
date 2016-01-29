var starWarsApi = (function(){

  function getAll(page) {
    var url = 'http://swapi.co/api/people/?page='+page
    var data = testHTTP(url);
    var results = data.results;

    var customs = [];


    for(var i =0; i< results.length; i++) {
      var custom  = {};
      custom.name = results[i].name;
      custom.height = results[i].height;
      custom.mass = results[i].mass;
      custom.hair_color = results[i].hair_color;
      custom.skin_color = results[i].skin_color;
      custom.eye_color = results[i].eye_color;
      custom.birth_year = results[i].birth_year;
      custom.gender = results[i].gender;
      custom.id = results[i].url;

      customs.push(custom);
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


  function getOne(personUrl) {
    //var url = 'http://swapi.co/api/people/'+person+'/';
    var result = testHTTP(personUrl);
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
})();

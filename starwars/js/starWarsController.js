var starWarsCtrl = (function(){

  function getOne(id){
    var character = starWarsService.getOne(id);
    return character;
  }

  function setTable(index){
    $('#characters-table').DataTable( {
        data: starWarsService.getAll(index),
        columns: [
          { title: "Name" },
          { title: "Height" },
          { title: "Mass" },
          { title: "Hair Color" },
          { title: "Skin Color" },
          { title: "Eye Color" },
          { title: "Birthday" },
          { title: "Gender" }
        ]
    });
  }

  function init(){
    setTable(1);
  }

  return {
    getCharacter: getOne,
    getAll: setTable,
    initialize: init
  };

})();

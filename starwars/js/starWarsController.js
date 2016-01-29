var starWarsCtrl = (function(){

  var page = 1;

  $('#previous-page').click(function(evt){
    previousPage();
  })
  $('#next-page').click(function(evt){
    nextPage();
  });

  function getOne(id){
    var character = starWarsApi.getOne(id);
    return character;
  }

  function nextPage(){
    page ++;
    setTable(page);
  }
  function previousPage(index){
    page --;
    if(page == 1){
      alert("No hay menos paginas!");
    }else{
    setTable(index);
    }
  }

  function setTable(index){

   var characterList = starWarsApi.getAll(index);

      var content;
      var id;
      for(i=0; i<characterList.length; i++){

        content += '<tr>' +
                        '<td>' + characterList[i].name + '</td>'+
                        '<td>' + characterList[i].height +'</td>'+
                        '<td>' + characterList[i].mass + '</td>'+
                        '<td>' + characterList[i].hair_color + '</td>'+
                        '<td>' + characterList[i].skin_color + '</td>'+
                        '<td>' + characterList[i].eye_color + '</td>'+
                        '<td>' + characterList[i].birth_year + '</td>'+
                        '<td>' + characterList[i].gender + '</td>'+
                        '<td>' + '<button id="'+(id = i + 1 )+'" class="button-view">View</button>' + '</td>'+
                      '</tr>';
      }
      $('#characters-table').append(content);

      $('.button-view').click(function(evt){

        var character =  getOne(evt.target.id);

        $('#myModal').modal('show');

        $('#modalTittle').text(character.name);
        $('#character-height').text(character.height);
        $('#character-mass').text(character.mass);
        $('#character-hair-color').text(character.hair_color);
        $('#character-skin-color').text(character.skin_color);
        $('#character-eye-color').text(character.eye_color);
        $('#character-birth-year').text(character.birth_year);
        $('#character-gender').text(character.gender);

      });
  }
  function init(){
    setTable(1);
  }

  return {
    nextPage: nextPage,
    prevPage: previousPage,
    getAll: setTable,
    initialize: init
  };

})();

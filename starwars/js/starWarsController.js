var starWarsCtrl = (function(){

  var page = 1;

  $('#previous-page').click(function(evt){
    previousPage();
  })
  $('#next-page').click(function(evt){
    nextPage();
  });

  function getOne(id){
    starWarsApi.getOne(id, processRequestForSelected);
  };

  /*
  * allows to process request for one star wars character
  */
  function processRequestForSelected(req) {
    var httpReq = req.target;
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      if(httpReq.status === 200) {
        var character = JSON.parse(httpReq.response);
        $('#myModal').modal('show');
        $('#modalTittle').text(character.name);
        $('#character-height').text(character.height);
        $('#character-mass').text(character.mass);
        $('#character-hair-color').text(character.hair_color);
        $('#character-skin-color').text(character.skin_color);
        $('#character-eye-color').text(character.eye_color);
        $('#character-birth-year').text(character.birth_year);
        $('#character-gender').text(character.gender);
      }
    }else{

    }
  }

  function nextPage(){
    page ++;
    $('.pagination'+(page-1)).remove();
    getAll(page);
  }
  function previousPage(){
    if(page == 1){
      alert("No hay menos paginas!");
    }else{
      $('.pagination'+(page)).remove();
      page --;
    getAll(page);
    }
  }
  /*
  * function to process the main request
  */
  function processRequestForAll(req) {
    var httpReq = req.target;
    if (httpReq.readyState === XMLHttpRequest.DONE) {
      if (httpReq.status === 200) {
        var results = JSON.parse(httpReq.response);
        results = results.results;
        buildTable(results);
      }else{
        console.log('Something wrong');
      }
    }
  };

  function buildTable(customs) {

    var content;
    var id;
    for(i=0; i<customs.length; i++){

      content += '<tr class=pagination'+page+'>' +
                      '<td>' + customs[i].name + '</td>'+
                      '<td>' + customs[i].height +'</td>'+
                      '<td>' + customs[i].mass + '</td>'+
                      '<td>' + customs[i].hair_color + '</td>'+
                      '<td>' + customs[i].skin_color + '</td>'+
                      '<td>' + customs[i].eye_color + '</td>'+
                      '<td>' + customs[i].birth_year + '</td>'+
                      '<td>' + customs[i].gender + '</td>'+
                      '<td>' + '<button id="'+customs[i].url+'" class="button-view btn btn-success">View</button>' + '</td>'+
                    '</tr>';
    }
    $('#characters-table').append(content);

    $('.button-view').click(function(evt){
      getOne(evt.target.id);
    });
  }
  function getAll(index){
   var characterList = starWarsApi.getAll(index, processRequestForAll);
  }
  function init(){
    getAll(1);
  }

  return {
    nextPage: nextPage,
    prevPage: previousPage,
    getAll: getAll,
    initialize: init
  };

})();

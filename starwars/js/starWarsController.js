var starWarsCtrl = (function(){

  function getOne(id){
    var character = starWarsService.getOne(id);
    return character;
  }



  function setTable(index){

   var characterList = [{name:"pedro",height:"18ocm",mass:"20",hair_color:"brown",
   skin_color:"white",eye_color:"green",
   birth_year:"1990",gender:"male"},{name:"pedro",height:"18ocm",mass:"20",hair_color:"brown",
   skin_color:"white",eye_color:"green",
   birth_year:"1990",gender:"male"}];

      var content;

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
                        '<td>' + '<button id="'+i+'" class="button-view">View</button>' + '</td>'+
                      '</tr>';
      }
      $('#characters-table').append(content);

      $('.button-view').click(function(evt){
         getOne(evt.target.id);
         $('#myModal').on('shown.bs.modal', function () {
           
         })
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

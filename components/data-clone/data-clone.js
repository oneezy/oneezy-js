

/* Clone Links
*********************************/
function dataClone() {


  $('[data-clone]').each(function (){
    
      var e          =   $(this);
      var dataCLONE  =   $(this).data("clone");

      for (var i = 0; i < dataCLONE; i++) {
        e.clone().insertAfter(e);
      }

  });

}

$(document).ready(function() {
  dataClone();
});
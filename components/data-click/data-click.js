

/* Auto Click
*********************************/
function dataClick() {

  $('[data-click]').each(function (){
    
    var dataCHANGE     =   $(this).data("change");
    var dataCLICK      =   $(this).data("click");

    $(dataCHANGE).each(function (){

      $(this).on( 'change', function () {
          setTimeout(function() {
              $(dataCLICK)[0].click();
          }, 2000);
      });
      
    });

  });

}


$(document).ready(function() {
  dataClick();
});


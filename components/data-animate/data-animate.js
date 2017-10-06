/* Remove Item
*********************************/
function dataAnimate() {
  
      // Change Title
      $('[data-animate]').each(function (){
  
          var dataANIMATE    =   $(this).data("animate");
          var dataTARGET     =   $(this).data("animate--target");
          var dataCLOSEST    =   $(this).data("animate--closest");
          var dataTHEME      =   $(this).data("animate--theme");
          var dataCOLOR      =   $(this).data("animate--color");
            

          $(this).on( 'click', function () {

            if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
              $(this).closest(dataCLOSEST).addClass('animate-' + dataANIMATE);

            } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
                $(dataTARGET).addClass('animate-' + dataANIMATE);
            }

          });
  
      });
  
  }
  
  $(document).ready(function() {
      dataAnimate();
  });
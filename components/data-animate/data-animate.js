/* Remove Item
*********************************/
function dataAnimate() {
  
      // Change Title
      $('[data-animate]').each(function (){
  
          var dataANIMATE    =   $(this).data("animate");
          var dataTARGET     =   $(this).data("target");
          var dataCLOSEST    =   $(this).data("closest");
          var dataTHEME      =   $(this).data("theme");
          var dataCOLOR      =   $(this).data("color");
            

          $(this).on( 'click', function () {

            if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
              $(this).closest(dataCLOSEST).addClass('animate-' + dataANIMATE);

            } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
                $(dataTARGET).addClass('animate-' + dataANIMATE);
            }

          }); 

          // $(this).on( 'click', function () {
          //     $(this).closest(dataTARGET).addClass('slide-' + dataANIMATE);
          //     $(this).closest(dataTARGET).parent().css('background-color','var(--mdc-theme-bg-' +dataTHEME+ '),' + dataCOLOR);
          // });
  
      });
  
  }
  
  $(document).ready(function() {
      dataAnimate();
  });
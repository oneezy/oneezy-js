

/* Auto Click
*********************************/
function dataEvent() {

  $('[data-event]').each(function (){
    
    var dataEVENT      =   $(this).data("event");
    var dataTARGET     =   $(this).data("event--target");
    var dataCLOSEST    =   $(this).data("event--closest");
    var dataCLASS      =   $(this).data("event--class");
    var dataHIDE       =   $(this).data("event--hide");
    var dataACTION     =   $(this).data("event--action");
    var actionTARGET   =   $(this).data("event--action-target");
    var classTARGET    =   $(dataTARGET).attr("event--target-class");
    var classCLOSEST   =   $(dataCLOSEST).attr("event--closest-class");

    
    if (dataEVENT === 'click-toggle') {

        $(this).on( 'click', function () {
          if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
            $(this).closest(dataCLOSEST).toggleClass(dataCLASS);

          } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
              $(dataTARGET).toggleClass(dataCLASS);
          }

        });

    } else if (dataEVENT === 'hover-toggle') {
      
        $(this).hover(function () {
          if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
            $(this).closest(dataCLOSEST).toggleClass(dataCLASS);

          } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
              $(dataTARGET).toggleClass(dataCLASS);
          }

        });

    } else if (dataEVENT === 'hover') {
      
        $(this).hover(function () {
          if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
            $(this).closest(dataCLOSEST).addClass(dataCLASS);

          } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
              $(dataTARGET).addClass(dataCLASS);
          }

        });

    } else if (dataEVENT === 'click') {
      
        $(this).on( dataEVENT, function () {
          if (typeof dataCLOSEST !== typeof undefined && dataCLOSEST !== false) {
            $(this).closest(dataCLOSEST).addClass(dataCLASS);

          } else if (typeof dataTARGET !== typeof undefined && dataTARGET !== false) {
              $(dataTARGET).addClass(dataCLASS);
          }

        });

    } else if (dataEVENT === 'change' && dataACTION === 'click') {

        $(dataTARGET).on( dataEVENT, function () {

            setTimeout(function() {
              $(actionTARGET)[0].click();
            }, 2000);
            
        });
    }

    if (typeof dataHIDE !== typeof undefined && dataHIDE !== false) {
        $(dataHIDE).hide();
    } 

    /* Visual Cues... 
    **************************/

    // $(this).parent().prepend('<h2>' +dataEVENT+ ' (' +dataTARGET+dataCLOSEST+ ')' + '</h2>');
    // $(this).text(dataEVENT);
    
    // $( 'h2:contains("undefined")' ).each(function(){
    //   $(this).html($(this).html().split("undefined").join(""));
    // });
    
  });

}


$(document).ready(function() {
  dataEvent();
});


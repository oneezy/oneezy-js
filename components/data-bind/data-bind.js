/* Create Binding
*************************************************************************/
function dataBind() {
    
    var dataBIND       =   $(this).data("bind");
    var dataTARGET     =   $(this).data("bind--target");
    var dataCLOSEST    =   $(this).data("bind--closest");
    var dataCLASS      =   $(this).data("bind--class");
    var dataACTION     =   $(this).data("bind--action");
    var actionTARGET   =   $(this).data("bind--action-target");
    var classTARGET    =   $(dataTARGET).attr("bind--target-class");
    var classCLOSEST   =   $(dataCLOSEST).attr("bind--closest-class");

    // 2 way data-binding
    $("*[bind]").on('change keyup', function(e) {
        var to_bind = $(this).attr('bind');
        
        $("*[bind='" + to_bind + "']").html($(this).val());
        $("*[bind='" + to_bind + "']").val($(this).val());
    });

}


$(document).ready(function() {
    dataBind();
});
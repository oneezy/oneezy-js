/* Remove Item
*********************************/
function dataAnimate() {

    // Change Title
    $('[data-animate]').each(function (){

        var dataANIMATE    =   $(this).data("animate");
        var dataTARGET     =   $(this).data("target");
        var dataCLOSEST    =   $(this).data("closest");
        var dataBG         =   $(this).data("bg");

        $(this).on( 'click', function () {
            $(this).closest(dataTARGET).addClass('slide-' + dataANIMATE);
            $(this).closest(dataTARGET).parent().css('background-color','var(--mdc-theme-bg-' + dataBG);
        });

    });

}

$(document).ready(function() {
    dataAnimate();
});
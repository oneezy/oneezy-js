/* Remove Item
*********************************/
function mdcTable() {

    $('.mdc-table').each(function (){

        var mdcTABLE         =   $(this);
        var mdcTHEAD         =   $('thead');
        var mdcTHEAD_ROW     =   $("thead tr");
        var mdcTHEAD_CELL    =   $("thead tr th");
        var mdcTBODY         =   $("tbody");
        var mdcTBODY_ROW     =   $("tbody tr");
        var mdcTBODY_CELL    =   $("tbody tr td");


        $(mdcTABLE).addClass('flex-vertical');
        $(mdcTHEAD).addClass('flex-vertical');
        $(mdcTHEAD_ROW).addClass('flex-horizontal between-start');
        $(mdcTBODY).addClass('flex-vertical');
        $(mdcTBODY_ROW).addClass('flex-horizontal between-start');


        $(mdcTHEAD_CELL).each(function (i){
            $(this).addClass('mdc-table--col-' + (i+1));
        });


        $('table thead th[class]').each(function () {
            $('table tbody td:nth-child(' + ($(this).index() + 1) + ')').addClass(this.className)
        });

        // TD (Static)
        $('.mdc-table--body-static').each(function () {
            $(this).addClass('flex-horizontal flex-1 mobile-flex-none');
        });

        // TD (Fit)
        $('.mdc-table--body-fit').each(function () {
            $(this).addClass('mobile-flex-horizontal mobile-between-base');
        });


    });

}

$(document).ready(function() {
    mdcTable();
});
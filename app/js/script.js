// Load Sheetsu
function navigationLINKS() {
    return $.ajax({
        url: "https://sheetsu.com/apis/v1.0su/b1990aff7e3e"
    });
}

// When Ready...
$(document).ready(function() {

    dataAJAX();

    $.when( dataAJAX(), navigationLINKS() ).done(function(){
        setTimeout(function(){

            // All functions=
            mdcTOOLBAR();
            dataBind();
            initCodeMirror();
            mdc.autoInit();

        }, 1000);

    });

});
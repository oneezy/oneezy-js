// Navigation Data (Sheetsu)
function navigationLINKS() {
    return $.ajax({
        url: "https://sheetsu.com/apis/v1.0su/b1990aff7e3e"
    });
}

// Form Data (Sheetsu)
function loadFORMS() {
    return $.ajax({
        url: "https://sheetsu.com/apis/v1.0su/f64238fdcb17"
    });
}

// When ready...
$(document).ready(function() {

    // Run these functions first
    dataAJAX();

    // When data is finished loading...
    $.when( dataAJAX(), navigationLINKS(), loadFORMS() ).done(function(){
        setTimeout(function(){

            // Run these functions next
            mdcTOOLBAR();
            dataTABS();
            mdcFORMS();
            dataTITLE();
            dataBIND();
            dataCLIPBOARD();
            dataCHART();
            dataCOUNT();
            dataACCORDION();
            // Initialize UI last
            mdc.autoInit();

        }, 1000);

    });

});


$( "input, textarea" ).change(function() {
    dataCOUNT();
});
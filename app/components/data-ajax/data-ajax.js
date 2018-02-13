/* AJAX files on page load
*********************************/
function dataAJAX() {

    $('[data-ajax]').each(function (){
        
        var dataAJAX    = $(this).data("ajax");

        $(this).load(dataAJAX);
        // $(this).children(":first").unwrap();
    });

}


/* Load AJAX files on click
*********************************/
function dataAJAXlink() {

    $('[data-ajax--link]').each(function (){
        
        var dataLINK    = $(this).data("ajax--link");
        var dataTARGET  = $(this).data("ajax--target");
    
        // $(this).click(function(){
        //     $(dataTARGET).load(dataLINK); 
        // });

        $(this).on('click', function () {
            $(dataTARGET).load(dataLINK);
        });

    });

}

function dataAJAXtest() {

    $('[data-ajax--link]').each(function (){
        
        var dataLINK    = $(this).data("ajax--link");
        var dataTARGET  = $(this).data("ajax--target");
    
        $(this).on("click", function() {
            $(dataTARGET).html("Loading...");

            $.ajax({
                url: dataLINK,
                dataType: "html",
                success: function(html) {
                    $(dataTARGET).html(html);
                }
            });

            return false;
        });

    });

}
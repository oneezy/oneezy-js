/* Create Binding
*************************************************************************/
// function dataBIND() {
    
//     $('[data-bind]').each(function (){
//         $(this).on('change keyup keydown mousemove mousedown mouseup', function() {
        

//             var mdcTEXTFIELD  =   $(this).hasClass("mdc-text-field__input");
//             var mdcTEXTAREA   =   $(this).hasClass("mdc-text-field__input");
//             var mdcSLIDER     =   $(this).hasClass("mdc-slider");
//             var mdcSWITCH     =   $(this).hasClass("mdc-switch__native-control");
//             var mdcRADIO      =   $(this).hasClass("mdc-radio__native-control");
//             var mdcCHECKBOX   =   $(this).hasClass("mdc-checkbox__native-control");
    
//             var dataBIND      =   $(this).data("bind");
//             var dataATTR      =   $(this).attr("aria-valuenow");
//             var dataVAL       =   $(this).attr("value");
    
//             /* Text Fields
//             **************************/
//             if (mdcSLIDER) {
//                 $("[data-bind='" +dataBIND+ "']").not(this).html(dataATTR);
//             } 
            
        
//         });

//     });
// }












/* Create Binding
*************************************************************************/
function dataBIND() {
    
    $('[data-bind]').each(function (){

        $(this).on('change keyup keydown mousemove mouseup', function() {

            var mdcTEXTFIELD  =   $(this).hasClass("mdc-text-field__input");
            var mdcTEXTAREA   =   $(this).hasClass("mdc-text-field__input");
            var mdcSLIDER     =   $(this).hasClass("mdc-slider");
            var mdcSWITCH     =   $(this).hasClass("mdc-switch__native-control");
            var mdcRADIO      =   $(this).hasClass("mdc-radio__native-control");
            var mdcCHECKBOX   =   $(this).hasClass("mdc-checkbox__native-control");
    
            var dataBIND      =   $(this).data("bind");
            var dataATTR      =   $(this).attr("aria-valuenow");
            var dataVAL       =   $(this).attr("value");
        
            /* Text Fields
            **************************/
            if (mdcTEXTFIELD) {
                $("[data-bind='" +dataBIND+ "']").html($(this).val());
        

            /* Sliders
            **************************/
            } else if (mdcSLIDER) {
                $("span[data-bind='" +dataBIND+ "']").html(dataATTR);


            /* Switches
            **************************/
            } else if (mdcSWITCH) {

                if ($(this).is(':checked')) {
                    $(this).val("true");

                } else {
                    $(this).val("false");
                }
                
                $("[data-bind='" +dataBIND+ "']").html($(this).val());



            /* Radio
            **************************/
            } else if (mdcRADIO) {

                if ( $(this).is(':checked') ) {
                    $(this).val("HIII");

                } else if ( !$(this).is(':checked') ) {
                    $(this).val("hooooo");
                }
                
                $("[data-bind='" +dataBIND+ "']").html($(this).val());


            /* Checkbox
            **************************/
            } else if (mdcCHECKBOX) {

                if ( $(this).is(':checked') ) {
                    $(this).val("HIII");

                } else if ( !$(this).is(':checked') ) {
                    $(this).val("hooooo");
                }
                
                $("[data-bind='" +dataBIND+ "']").html($(this).val());

            }
            
        
        });

    });
}
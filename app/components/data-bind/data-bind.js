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

 




// demoReady(function() {
//     [].forEach.call(document.querySelectorAll('.mdc-checkbox[data-js]'), function(checkbox) {
//       var formField = checkbox.parentElement;
//       var formFieldInstance = new mdc.formField.MDCFormField(formField);
//       var checkboxInstance = new mdc.checkbox.MDCCheckbox(checkbox);
//       formFieldInstance.input = checkboxInstance;
//       var row = formField.parentElement;
//       var indeterminateToggle = row.querySelector('.toggle-indeterminate');
//       if (indeterminateToggle) {
//         indeterminateToggle.addEventListener('click', function() {
//           checkboxInstance.indeterminate = !checkboxInstance.indeterminate;
//         });
//       }
//       var disabledToggle = row.querySelector('.toggle-disabled');
//       if (disabledToggle) {
//         disabledToggle.addEventListener('click', function() {
//           checkboxInstance.disabled = !checkboxInstance.disabled;
//         });
//       }
//     });
//   });

  

 
   /* Radio Buttons
   *********************************/
  (function(global) {
    'use strict';/* Make <input> to <button> 
 ***********************************/
function createRadioButton() { 
    
       // Change <input> to <button> 
       $('.mdc-radio-wrapper input[type="radio"]').each(function (){ 
   
           // Old Wrapper
           var wrapperOLD 		= $(this).parent();
           
           // Radio Input
           var radioINPUT		= $(this);
           var radioID			= $(this).attr("id");
           var radioNAME		= $(this).attr("name");
           var radioLABEL		= $(this).siblings("label");
           var labelTEXT		= $(this).siblings("label").text();
           var labelID		    = $(this).siblings("label").attr("id");
           
           var mdcTEMPLATE 		= `
                                    <div class="mdc-form-field">
                                        <div class="mdc-radio">
                                            <input class="mdc-radio__native-control" type="radio" id="` +radioID+ `1" name="` +radioNAME+ `1">

                                            <div class="mdc-radio__background">
                                                <div class="mdc-radio__outer-circle"></div>
                                                <div class="mdc-radio__inner-circle"></div>
                                            </div>
                                        </div>

                                        <label id="` +labelID+ `1" for="` +radioID+ `1">` +labelTEXT+ ` Go!</label>
                                    </div>`;
           
           
            $('.mdc-radio-wrapper').after(mdcTEMPLATE);
           
           // $('table').remove();
           // $('.mdc-radio-wrapper').remove();
           
       });
    }
   
    /* Clone Links
    *********************************/
    function cloneMe() {
        var e = $('.clone-me');
        for (var i = 0; i < 2; i++) {
            e.clone().insertAfter(e);
        }
    }

   $(document).ready(function() {
       cloneMe();
       createRadioButton();
       // mdcRadio();
   });
   
    /* MDC Input
    *********************************/
    function mdcInput() {
        var tfs = document.querySelectorAll(".mdc-textfield");
        for (var i = 0, tf; (tf = tfs[i]); i++) {
            mdc.textfield.MDCTextfield.attachTo(tf);
        }
    }

     var MDCFormField = global.mdc.formField.MDCFormField;
     var MDCRadio = global.mdc.radio.MDCRadio;
   
     var formFields = document.querySelectorAll('.mdc-form-field');
     for (var i = 0, formField; formField = formFields[i]; i++) {
        var formFieldInstance = new MDCFormField(formField);
   
        var radio = formField.querySelector('.mdc-radio:not([data-demo-no-js])');
        if (radio) {
           var radioInstance = new MDCRadio(radio);
           formFieldInstance.input = radioInstance;
        }
     }
   })(this);
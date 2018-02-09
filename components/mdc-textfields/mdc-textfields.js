/*
TO DO
***********************************************************

	1. Fix "mdc-textfield--box"
	2. Dynamically insert "<div class="mdc-textfield__bottom-line"></div>"
	3. Fix Textarea

*/


/* Text Input
***********************************/
function textInput() {
    
      // Update Textfield
      $('.mdc-text-field-wrapper input, .mdc-text-field-wrapper textarea').each(function (){
    
          // Wrapper
          var wrapperCLASS        = $(this).parent().data("wrapper--class");

          // Input
          var inputID	          = $(this).attr("id");
          var inputCLASS          = $(this).parent().data("input--class");
          var inputTYPE           = $(this).parent().data("input--type");
          var inputAUTOCOMPLETE   = $(this).parent().data("input--autocomplete");
          var inputMIN            = $(this).parent().data("input--min");
          var inputMAX            = $(this).parent().data("input--max");
          var inputARIA           = $(this).parent().data("input--aria");
          var inputREQUIRED       = $(this).parent().data("required");
    
          // Label
          var labelTEXT           = $(this).parent().data("label--text");
          var labelICON           = $(this).parent().data("label--icon");
          var labelCLASS          = $(this).parent().data("label--class");
    
          // Help Message
          var requiredMESSAGE     = $(this).parent().data("message--text");
    
          this.className = '';
          $(this).parent().addClass(wrapperCLASS);
          $(this).parent().attr("data-mdc-auto-init", "MDCTextField");
          $(this).addClass(inputCLASS);
          
    
          /* Input
          ***********************************/
          // Input Type
          if (typeof inputTYPE !== typeof undefined && inputTYPE !== false) {
              $(this).attr("type", inputTYPE);
          }
    
          // Required
          if (typeof inputREQUIRED !== typeof undefined && inputREQUIRED !== false) {
              $(this).prop(inputREQUIRED, true);
          }
    
          // Auto Complete
          if (typeof inputAUTOCOMPLETE !== typeof undefined && inputAUTOCOMPLETE !== false) {
              $(this).attr("autocomplete", inputAUTOCOMPLETE);
          }
    
          // Min
          if (typeof inputMIN !== typeof undefined && inputMIN !== false) {
              $(this).attr("min", inputMIN);
          }
    
          // Max
          if (typeof inputMAX !== typeof undefined && inputMAX !== false) {
              $(this).attr("max", inputMAX);
          }
    
          /* Label
          ***********************************/
          // Label Text
          if (typeof labelTEXT !== typeof undefined && labelTEXT !== false) {
              $(this).parent().append('<label class="mdc-text-field__label" for="' +inputID+ '">' +labelTEXT+ '</label>');
          }
          
           // Label Icon
          if (typeof labelICON !== typeof undefined && labelICON !== false) {
              $(this).parent().append('<i class="material-icons mdc-text-field__label">' +labelICON+ '</i>');
                
                 $('.material-icons.mdc-text-field__label').each(function (){
                    $(this).css({"left":"auto", "bottom": "6px", "right": "calc(100% + 4px)"});
                 });
          }
          
           // Label Class
          if (typeof labelCLASS !== typeof undefined && labelCLASS !== false) {
              $(this).parent().find("label").addClass(labelCLASS);
          }
          
          /* Help Message + Aria Controls
          ***********************************/
          // Help Message
          if (typeof requiredMESSAGE !== typeof undefined && requiredMESSAGE !== false) {
              $(this).parent().parent().append('<p class="mdc-text-field-helper-text" id="' +inputID+ 'Helptext" aria-hidden="true">' +requiredMESSAGE+ '</p>');
              $(this).attr("aria-controls", requiredMESSAGE);
          }
          
      });
    }
    
    /* MDC Input
    *********************************/
    // function mdcInput() {
    //     var tfs = document.querySelectorAll(".mdc-text-field");
    //     for (var i = 0, tf; (tf = tfs[i]); i++) {
    //         mdc.textfield.MDCTextfield.attachTo(tf);
    //     }
    // }
    

    /* Run Functions
    *********************************/
    // $(document).ready(function() {
    //     textInput();
    //     mdcInput();
    // });

    // $(document).ready(function() {
    //     textInput();
    //     mdc.autoInit();
    // });
    
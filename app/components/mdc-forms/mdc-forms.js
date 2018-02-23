/* Text Input
***********************************/
function mdcFORMS() {
    
    // Update Textfield
    $('[data-form]').each(function (){
  
        // Wrapper
        var wrapperIF           = $(this).data("wrapper--if");
        var wrapperINIT         = $(this).data("wrapper--init");
        var wrapperCLASS        = $(this).data("wrapper--class");

        // Input
        var inputTYPE           = $(this).data("input--type");
        var inputID	            = $(this).data("input--id");
        var inputNAME           = $(this).data("input--name");
        var inputAUTO           = $(this).data("input--autocomplete");
        var inputMIN            = $(this).data("input--min");
        var inputMAX            = $(this).data("input--max");
        var inputSTEP           = $(this).data("input--step");
        var inputVALUE          = $(this).data("input--value");
        var inputARIA           = $(this).data("input--aria");
        var inputCHECKED        = $(this).data("input--checked");
        var inputREQUIRED       = $(this).data("input--required");
        var inputDISABLED       = $(this).data("input--disabled");
  
        // Label
        var labelTEXT           = $(this).data("label--text");
        var labelICON           = $(this).data("label--icon");

        // Message
        var messageTEXT         = $(this).data("message--text");
        var messageCLASS        = $(this).data("message--class");
  


        /* TEMPLATES
        ***********************************************************************************/

        /* Text Fields
        ****************************/
        var mdcTEXTFIELD = `
        <div class="${ wrapperCLASS }" data-mdc-auto-init="${ wrapperINIT }">
            <input type="${ inputTYPE }" 
                   id="${ inputID }" 
                   class="mdc-text-field__input" 
                   autocomplete="${ inputAUTO }" 
                   min="${ inputMIN }" 
                   max="${ inputMAX }" 
                   aria-controls="${ inputARIA }" 
                   value="${ inputVALUE }" 
                   data-bind="${ inputID }" 
                   ${ inputCHECKED } 
                   ${ inputREQUIRED } 
                   ${ inputDISABLED }>

            <div class="mdc-line-ripple"></div>
            <label class="mdc-text-field__label" for="${ inputID }">${ labelTEXT }</label>
            <i class="material-icons mdc-text-field__label">${ labelICON }</i>
        </div>
        <p id="${ inputARIA }" class="mdc-text-field-helper-text ${ messageCLASS }" style="display: block;" aria-hidden="true">${ messageTEXT }</p>
        `;


        /* Text Box
        ****************************/
        var mdcTEXTBOX = `
        <div class="${ wrapperCLASS }" data-mdc-auto-init="${ wrapperINIT }">
            <input type="${ inputTYPE }" 
                    id="${ inputID }" 
                    class="mdc-text-field__input" 
                    autocomplete="${ inputAUTO }" 
                    min="${ inputMIN }" 
                    max="${ inputMAX }" 
                    aria-controls="${ inputARIA }" 
                    value="${ inputVALUE }" 
                    data-bind="${ inputID }" 
                    ${ inputCHECKED } 
                    ${ inputREQUIRED } 
                    ${ inputDISABLED }>

            <div class="mdc-line-ripple"></div>
            <label class="mdc-text-field__label" for="${ inputID }">${ labelTEXT }</label>
            <i class="material-icons mdc-text-field__icon">${ labelICON }</i>
        </div>
        <p id="${ inputARIA }" class="mdc-text-field-helper-text ${ messageCLASS }" style="display: block;" aria-hidden="true">${ messageTEXT }</p>
        `;



        /* Text Outline
        ****************************/
        var mdcTEXTOUTLINE = `
        <div class="${ wrapperCLASS }" data-mdc-auto-init="${ wrapperINIT }">
            <i class="material-icons mdc-text-field__icon">${ labelICON }</i>
            <input type="${ inputTYPE }" 
                    id="${ inputID }" 
                    class="mdc-text-field__input" 
                    autocomplete="${ inputAUTO }" 
                    min="${ inputMIN }" 
                    max="${ inputMAX }" 
                    aria-controls="${ inputARIA }" 
                    value="${ inputVALUE }" 
                    data-bind="${ inputID }" 
                    ${ inputCHECKED } 
                    ${ inputREQUIRED } 
                    ${ inputDISABLED }>

            <label class="mdc-text-field__label" for="${ inputID }">${ labelTEXT }</label>

            <div class="mdc-text-field__outline">
                <svg>
                    <path class="mdc-text-field__outline-path" d="M84.533,1h79.267a4,4 0 0 1 4,4v35.6a4,4 0 0 1 -4,4h-158.6a4,4 0 0 1 -4,-4v-35.6a4,4 0 0 1 4,-4h5.8"></path>
                </svg>
            </div>
            <div class="mdc-text-field__idle-outline"></div>
        </div>
        <p id="${ inputARIA }" class="mdc-text-field-helper-text ${ messageCLASS }" style="display: block;" aria-hidden="true">${ messageTEXT }</p>
        `;
        


        /* Textareas
        ****************************/
        var mdcTEXTAREA = `
        <div class="${ wrapperCLASS }" data-mdc-auto-init="${ wrapperINIT }">
            <textarea id="${ inputID }" 
                      class="mdc-text-field__input" 
                      rows="4" 
                      cols="40" 
                      value="${ inputVALUE }" 
                      data-bind="${ inputID }" 
                      ${ inputREQUIRED } 
                      ${ inputDISABLED }>${ inputVALUE }</textarea>

            <label class="mdc-text-field__label" for="${ inputID }">${ labelTEXT }</label>
        </div>
        `;


        /* Sliders
        ****************************/
        var mdcSLIDER = `
        <div>
            <h5>${ labelTEXT }</h5>
            <div class="${ wrapperCLASS }"
                 tabindex="0"
                 role="slider"
                 aria-valuemin="${ inputMIN }" 
                 aria-valuemax="${ inputMAX }" 
                 aria-valuenow="${ inputVALUE }" 
                 data-step="${ inputSTEP }" 
                 aria-label="${ labelTEXT }" 
                 aria-${ inputDISABLED }  
                 id="${ inputID }" 
                 data-bind="${ inputID }" 
                 data-mdc-auto-init="${ wrapperINIT }">

                <div class="mdc-slider__track-container">
                    <div class="mdc-slider__track"></div>
                    <div class="mdc-slider__track-marker-container"></div>
                </div>
                
                <div class="mdc-slider__thumb-container">
                    <div class="mdc-slider__pin">
                        <span class="mdc-slider__pin-value-marker"></span>
                    </div>
                    <svg class="mdc-slider__thumb" width="21" height="21">
                        <circle cx="10.5" cy="10.5" r="7.875"></circle>
                    </svg>
                    <div class="mdc-slider__focus-ring"></div>
                </div>
            </div>
        </div>
        `;



        /* Switches
        ****************************/
        var mdcSWITCH = `
        <div class="mdc-form-field">
            <div class="${ wrapperCLASS }">
                <input type="checkbox" 
                       id="${ inputID }" 
                       class="mdc-switch__native-control" 
                       data-bind="${ inputID }"
                       value="${ inputVALUE }" 
                       ${ inputCHECKED } 
                       ${ inputDISABLED }>

                <div class="mdc-switch__background">
                    <div class="mdc-switch__knob"></div>
                </div>
            </div>
            
            <label for="${ inputID }">${ labelTEXT }</label>
        </div>
        `;


        /* Radio Buttons
        ****************************/
        var mdcRADIO = `
        <div class="mdc-form-field" data-mdc-auto-init="${ wrapperINIT }">
            <div class="${ wrapperCLASS }">
                <input type="${ inputTYPE }" 
                       id="${ inputID }" 
                       name="${ inputNAME }" 
                       class="mdc-radio__native-control" 
                       value="${ inputVALUE }" 
                       data-bind="${ inputID }"
                       ${ inputCHECKED } 
                       ${ inputREQUIRED } 
                       ${ inputDISABLED }>

                <div class="mdc-radio__background">
                    <div class="mdc-radio__outer-circle"></div>
                    <div class="mdc-radio__inner-circle"></div>
                </div>
            </div>

            <label for="${ inputID }">${ labelTEXT }</label>
        </div>
        `;



        /* Checkboxes
        ****************************/
        var mdcCHECKBOX = `
        <div class="mdc-form-field" data-mdc-auto-init="${ wrapperINIT }">
            <div class="${ wrapperCLASS }">
                <input type="${ inputTYPE }" 
                       id="${ inputID }" 
                       class="mdc-checkbox__native-control" 
                       value="${ inputVALUE }" 
                       data-bind="${ inputID }"
                       ${ inputCHECKED } 
                       ${ inputREQUIRED } 
                       ${ inputDISABLED }>

                <div class="mdc-checkbox__background">
                    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path class="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div class="mdc-checkbox__mixedmark"></div>
                </div>
            </div>

            <label for="${ inputID }">${ labelTEXT }</label>
        </div>
        `;



        this.className = '';
        
  
        /* Input
        ***********************************/
        // Textfields
        if (inputTYPE == "text" && wrapperIF !== "MDCTextFieldBox" && wrapperIF !== "MDCTextFieldOutlined" && wrapperIF !== "MDCTextFieldTextarea") {
            $(this).append(mdcTEXTFIELD);
        } 

        // Text Box
        if (inputTYPE == "text" && wrapperIF == "MDCTextFieldBox") {
            $(this).append(mdcTEXTBOX);
        } 

        // Text Outline
        if (inputTYPE == "text" && wrapperIF == "MDCTextFieldOutlined") {
            $(this).append(mdcTEXTOUTLINE);
        } 

        // Textareas
        else if (inputTYPE == "text" && wrapperIF == "MDCTextFieldTextarea") {
            $(this).append(mdcTEXTAREA);
        }



        // Sliders
        else if (inputTYPE == "slider") {
            $(this).append(mdcSLIDER);

            // $('[role]').each(function (){
  
            //     // Continuous Slider
            //     var sliderELEMENT   =   $(this);
            //     var sliderVALUE     =   $("#continuous-slider-value");
            //     var slider          =   new mdc.slider.MDCSlider(sliderELEMENT);
                    
            //     slider.listen('MDCSlider:input', function() {
            //         sliderVALUE.textContent = slider.value;
            //     });
                
            // });
        }



        // Switches
        else if (inputTYPE == "switch") {
            $(this).append(mdcSWITCH);
        }

        // Radios
        else if (inputTYPE == "radio") {
            $(this).append(mdcRADIO);
        }

        // Checkboxes
        else if (inputTYPE == "checkbox") {
            $(this).append(mdcCHECKBOX);
        }

  
        
    });
  }

/* Data Titles
***********************************/
function dataTITLE() {
    
    // Update Title
    $('[data-title]').each(function (){

        // Title
        var dataTITLE       =   $(this).data("title");
        var templateTITLE   =   `<h3>${ dataTITLE }</h3>`

        $(this).prepend(templateTITLE);
        
    });
}
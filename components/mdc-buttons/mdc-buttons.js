    /* Make <input> to <button>
    ***********************************/
    function createButton() {
    
      // Change <input> to <button>
      $('.mdc-button-wrapper input[type="submit"], .mdc-button-wrapper input[type="reset"]').each(function (){
          
          $(this).replaceWith(function(){
              return this.outerHTML.replace("input", "button");
         });
          
      });
    }
    
    /* Update <button>
    ***********************************/
    function updateButton() {

        $('.mdc-button-wrapper button, .mdc-button-wrapper a').each(function (){

            // Input
            var buttonID	         = $(this).attr("id");
            var buttonVAL            = $(this).val();

            // Link
            var buttonLINK           = $(this).text();

            // Button
            var buttonCLASS          = $(this).parent().data("button--class");
            var buttonTEXT           = $(this).parent().data("button--text");
            var buttonICON           = $(this).parent().data("button--icon");
            var buttonTYPE           = $(this).parent().data("button--type");
            var buttonARIA           = $(this).parent().data("button--aria");
            var buttonDIRECTION      = $(this).parent().data("button--direction");

            this.className = 'mdc-button';
            $(this).addClass(buttonCLASS);
            $(this).css("height","auto");
            $(this).css("height","unset");

            /* Button Properties
            ***********************************/
            // Button Type
            if (typeof buttonTYPE !== typeof undefined && buttonTYPE !== false) {
                $(this).attr("type", buttonTYPE);
            }

            // Button Value
            if (typeof buttonVAL !== typeof undefined && buttonVAL !== false) {
                $(this).attr("aria-controls", buttonVAL);
                $(this).append('<span>' +buttonVAL+ '</span>');
            }

            // Button Link
            if (typeof buttonLINK !== typeof undefined && buttonLINK !== false) {
                $(this).attr("aria-controls", buttonLINK);
                $(this).wrapInner("<span></span>");
            }

            // Button Text
            if (typeof buttonTEXT !== typeof undefined && buttonTEXT !== false) {
                $(this).attr("aria-controls", buttonTEXT);
                $(this).find("span").text(buttonTEXT);
            }

            // Button ARIA
            if (typeof buttonARIA !== typeof undefined && buttonARIA !== false) {
                $(this).attr("aria-controls", buttonARIA);
            }

            // Button Icon
            if (typeof buttonICON !== typeof undefined && buttonICON !== false) {
                $(this).append('<i class="material-icons">' +buttonICON+ '</i>');
                // $(this).css({
                //     "display": "-ms-flexbox",
                //     "-ms-flex-direction": "row",
                //     "display": "-webkit-flex",
                //     "-webkit-flex-direction": "row",
                //     "display": "flex",
                //     "flex-direction": "row",

                //     "-ms-flex-pack": "center",
                //     "-webkit-justify-content": "center",
                //     "justify-content": "center",
                //     "-ms-flex-align": "center",
                //     "-webkit-align-items": "center",
                //     "align-items": "center"
                // });
            }

            // Button Direction
            if (buttonDIRECTION === "horizontal") {
                $(this).css({
                    "display": "-ms-flexbox",
                    "-ms-flex-direction": "row",
                    "display": "-webkit-flex",
                    "-webkit-flex-direction": "row",
                    "display": "flex",
                    "flex-direction": "row"
                });
            } else if (buttonDIRECTION === "vertical") {
                $(this).css({
                    "height": "auto",
                    "display": "-ms-flexbox",
                    "-ms-flex-direction": "column",
                    "display": "-webkit-flex",
                    "-webkit-flex-direction": "column",
                    "display": "flex",
                    "flex-direction": "column"
                });
            } else if (buttonDIRECTION === "horizontal-reverse") {
                $(this).css({
                    "display": "-ms-flexbox",
                    "-ms-flex-direction": "row",
                    "display": "-webkit-flex",
                    "-webkit-flex-direction": "row-reverse",
                    "display": "flex",
                    "flex-direction": "row-reverse"
                });
            } else if (buttonDIRECTION === "vertical-reverse") {
                $(this).css({
                    "height": "auto",
                    "display": "-ms-flexbox",
                    "-ms-flex-direction": "column",
                    "display": "-webkit-flex",
                    "-webkit-flex-direction": "column-reverse",
                    "display": "flex",
                    "flex-direction": "column-reverse"
                });
            } else {
                
            }

        });
    }
    
    /* MDC Button 
    *********************************/
    function mdcButton() {
        var pollId = 0;

        pollId = setInterval(function() {
            var pos = getComputedStyle(document.querySelector('.mdc-button')).position;
            if (pos === 'relative') {
                init();
                clearInterval(pollId);
            }
    }, 250);

    function init() {
        var btns = document.querySelectorAll('.mdc-button:not([data-demo-no-js])');
            for (var i = 0, btn; btn = btns[i]; i++) {
                mdc.ripple.MDCRipple.attachTo(btn);
            }
        }
    }
    
    $(document).ready(function() {
        createButton();
        updateButton();
        mdcButton();
    });
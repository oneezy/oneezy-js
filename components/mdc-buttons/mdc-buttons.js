    /* Make <input> to <button>
    ***********************************/
    function createButton() {
    
      // Change Input to Button
      $('.mdc-button-wrapper input[type="submit"], .mdc-button-wrapper input[type="reset"]').each(function (){
          
          $(this).replaceWith(function(){
              return this.outerHTML.replace("input", "button");
         });
          
      });
    }
    
    /* Update <button>
    ***********************************/
    function updateButton() {
    
      // Change Input to Button
      $('.mdc-button-wrapper button, .mdc-button-wrapper a').each(function (){
          
          // Input
          var buttonID	           = $(this).attr("id");
          var buttonVAL            = $(this).val();
          var buttonLINK           = $(this).text();
          var buttonCLASS          = $(this).parent().data("button--class");
          var buttonTEXT           = $(this).parent().data("button--text");
          var buttonICON           = $(this).parent().data("button--icon");
          var buttonTYPE           = $(this).parent().data("button--type");
          var buttonARIA           = $(this).parent().data("button--aria");
    
          this.className = 'mdc-button flex-horizontal start-center';
          $(this).addClass(buttonCLASS);
          $(this).css({"white-space": "nowrap"});
    
          /* Button
          ***********************************/
          // Button Type
          if (typeof buttonTYPE !== typeof undefined && buttonTYPE !== false) {
              $(this).attr("type", buttonTYPE);
          }
          
           // Button Value
          if (typeof buttonVAL !== typeof undefined && buttonVAL !== false) {
                $(this).attr("aria-controls", buttonVAL);
                $(this).append(`<span class="input-value">` +buttonVAL+ `</span>`);
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
          
           // ARIA Controls
          if (typeof buttonARIA !== typeof undefined && buttonARIA !== false) {
                 $(this).attr("aria-controls", buttonARIA);
          }
          
           // Button Icon
          if (typeof buttonICON !== typeof undefined && buttonICON !== false) {
              $(this).append(`<i class="material-icons">` +buttonICON+ `</i>`);
              $(this).find(".material-icons").css("padding","0 8px 0 0");
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
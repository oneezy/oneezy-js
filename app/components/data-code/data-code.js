[
  // CodeMirror Dependencies
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/codemirror.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/htmlmixed/htmlmixed.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/javascript/javascript.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/css/css.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/mode/xml/xml.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/edit/matchbrackets.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/edit/closebrackets.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/hint/show-hint.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/hint/anyword-hint.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/addon/hint/javascript-hint.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.30.0/keymap/sublime.min.js"

].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});



/* WORKING: Initialize Code Mirror
***********************************/
function initCodeMirror() {
  
    var codeEDITOR = document.getElementsByClassName("code");
    var dataCODE   = $(this).data("code");
    
    $('[data-code]').each(function (){
      $(this).clone().addClass('temp').appendTo(this);
    });

    $('.temp').each(function (){
      $(this).replaceWith('<textarea class="code">' + $(this).html() +'</textarea>');
    });

    Array.prototype.forEach.call(codeEDITOR, function(el) {
        var editor = CodeMirror.fromTextArea(el, {
            mode: "htmlmixed",
            htmlMode: true,
            lineNumbers: false,
            styleActiveLine: true,
            theme: 'dracula',
            lineNumbers: true
          });

        // Update textarea
        function updateTextArea() {
          editor.save();
        }
        editor.on('change', updateTextArea);
    });
  
  }
  
  
  $(document).ready(function() {

    setTimeout(function() {
      initCodeMirror();
    }, 250);

  });
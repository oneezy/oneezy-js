/*
Oneezy JS (JS)
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
[
  /* Dependencies 
  *************************/
  "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js",
  "https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",
  "https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.4/jszip.min.js",

  /* Data Components 
  *************************/
  "../data-ajax/data-ajax.js",
  "../data-accordion/data-accordion.js",
  "../data-count/data-count.js",
  // "../data-clone/data-clone.js",
  // "../data-animate/data-animate.js",
  "../data-bind/data-bind.js",
  // "../data-code/data-code.js",
  "../data-clipboard/data-clipboard.js",
  // "../data-event/data-event.js",

  /* MDC Components 
  *************************/
  "../mdc-toolbar/mdc-toolbar.js",
  // "../mdc-buttons/mdc-buttons.js",
  // "../mdc-image/mdc-image.js",
  // "../mdc-table/mdc-table.js",
  // "../mdc-textfields/mdc-textfields.js",
  "../mdc-tabs/mdc-tabs.js",
  "../mdc-forms/mdc-forms.js",

  /* Run functions
  *************************/
  "../../js/script.js"

].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);
});
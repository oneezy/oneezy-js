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
    "components/data-ajax/data-ajax.js",
    "components/data-count/data-count.js",
    "components/data-bind/data-bind.js",

    /* MDC Components 
    *************************/
    "components/mdc-toolbar/mdc-toolbar.js",
    "components/mdc-buttons/mdc-buttons.js",
    "components/mdc-image/mdc-image.js",
    "components/mdc-table/mdc-table.js",

    /* Run functions
    *************************/
    "js/script.js"

].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
});
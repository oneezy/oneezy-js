/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Oneezy JS (JS)
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
[
    /* Dependencies 
    *************************/
    "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",

    /* Data Components 
    *************************/
    "components/data-clone/data-clone.js",
    "components/data-animate/data-animate.js",
    "components/data-bind/data-bind.js",
                // "components/data-code/data-code.js",
    "components/data-event/data-event.js",

    /* MDC Components 
    *************************/
    "components/mdc-accordion/mdc-accordion.js",
    "components/mdc-buttons/mdc-buttons.js",
    "components/mdc-image/mdc-image.js",
                // "components/mdc-radio/mdc-radio.js",
    "components/mdc-table/mdc-table.js",
    "components/mdc-textfields/mdc-textfields.js"

].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});
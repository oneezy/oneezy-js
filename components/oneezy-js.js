/*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Oneezy JS (JS)
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
[
    /* Dependencies 
    *************************/
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
    // "https://unpkg.com/material-components-web@0.22.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.23.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.24.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.25.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.26.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.27.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.28.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.29.0/dist/material-components-web.min.js",
    // "https://unpkg.com/material-components-web@0.30.0/dist/material-components-web.min.js",
    "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",

    /* Data Components 
    *************************/
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-clone/data-clone.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-animate/data-animate.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-bind/data-bind.js",
    // "https://rawgit.com/oneezy/oneezy-js/master/components/data-code/data-code.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-event/data-event.js",

    /* MDC Components 
    *************************/
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-accordion/mdc-accordion.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-buttons/mdc-buttons.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-image/mdc-image.js",
    // "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-radio/mdc-radio.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-table/mdc-table.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-textfields/mdc-textfields.js",
    "data-count.js" 

    

].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
});
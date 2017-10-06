/* Dynamically Load JS
********************************************/
[
    // Dependencies
    "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",

    // Data Functions
    "../data-clone/data-clone.js",
    "../data-animate/data-animate.js",
    "../data-bind/data-bind.js",
    "../data-code/data-code.js",
    "../data-event/data-event.js",

    // MDC Components (Dynamic)
    "../mdc-accordion/mdc-accordion.js",
    "../mdc-buttons/mdc-buttons.js",
    "../mdc-image/mdc-image.js",
    // "../mdc-radio/mdc-radio.js",
    "../mdc-table/mdc-table.js",
    "../mdc-textfields/mdc-textfields.js"

].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});
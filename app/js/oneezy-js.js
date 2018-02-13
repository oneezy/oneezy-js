/*
Oneezy JS (JS)
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
[
    /* Dependencies 
    *************************/
    "https://cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.6/enquire.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js",
    "https://fastcdn.org/FileSaver.js/1.1.20151003/FileSaver.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.4/jszip.min.js",

    /* Data Components 
    *************************/
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-clone/data-clone.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-animate/data-animate.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-bind/data-bind.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-code/data-code.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/data-event/data-event.js",

    /* MDC Components 
    *************************/
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-accordion/mdc-accordion.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-buttons/mdc-buttons.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-image/mdc-image.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-table/mdc-table.js",
    "https://rawgit.com/oneezy/oneezy-js/master/components/mdc-textfields/mdc-textfields.js" 

].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.appendChild(script);
});
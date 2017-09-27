
function mdcAccordion() {
    
    $('[data-accordion]').each(function (){

        var dataACCORDION  =   $(this).data("accordion");
        var dataTARGET     =   $(this).data("target");
        var dataCONTAINER  =   $(this).data("container");

        $(this).addClass('mdc-accordion');
        $(this).find(dataTARGET).addClass('accordion-' + dataACCORDION);
        $(this).find(dataCONTAINER).addClass('accordion-container');

    });
}


/* Accordion Toggle
*********************************/
function accordionFixed() {
  $('.mdc-accordion .accordion-fixed').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('active')) {
      $this.next().toggleClass('active');
      $this.next().slideToggle(350);
    } else {
      $this.next().toggleClass('active');
      $this.next().slideToggle(350);
    }
  });	
}

/* Accordion Toggle
*********************************/
function accordionToggle() {
  $('.mdc-accordion .accordion-toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('active')) {
      $this.next().removeClass('active');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('.accordion-container').removeClass('active');
      $this.parent().parent().find('.accordion-container').slideUp(350);
      $this.next().toggleClass('active');
      $this.next().slideToggle(350);
    }
  });
}

$(document).ready(function() {
	mdcAccordion();
	accordionFixed();
	accordionToggle();
});
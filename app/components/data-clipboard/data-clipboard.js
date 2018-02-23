/* Data Copy
***********************************/
function dataCLIPBOARD() {
  
  $('[data-clipboard]').each(function (){

    var dataCLIP         =   $(this);
    var dataCLIPBOARD    =   $(this).data("clipboard");
    var clip             =   new Clipboard(this);

    console.log("initialized");

    // Success
    clip.on("success", function() {
      console.log("success");
      $(dataCLIP).addClass("success").delay(3000).queue(function() {
          $(this).removeClass("success").dequeue();
      });
    });
  
    // Failure
    clip.on("error", function() {
      console.log("error");
      $(dataCLIP).addClass("error").delay(3000).queue(function() {
          $(this).removeClass("error").dequeue();
      });
    });

  });
}
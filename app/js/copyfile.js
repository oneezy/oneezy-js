function copyFILE() {
    var clip = new Clipboard('.copy-btn');
    clip.on("success", function() {
      $(".fab-text-success").addClass("active");
    });
    clip.on("error", function() {
      $(".fab-text-error").addClass("active");
    });
  }
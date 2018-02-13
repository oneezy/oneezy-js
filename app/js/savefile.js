document.querySelector(".download-file").addEventListener("click",function () {
    var zip = new JSZip();
    var folder = zip.folder("folder");
    
    zip.file("hello.txt", "Hello World\n");
    folder.file("message.txt","Hello World, This is message form wapgee!");
    
    zip.generateAsync({type:"blob"})
      .then(function(zip) {
      saveAs(zip, "test.zip");
    });
  });
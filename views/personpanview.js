exports.personpanview = function (err) {
  return `<!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>?</title>
      <link href="https://cdn.jsdelivr.net/npm/froala-editor@3.1.0/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

      
    </head>
    <body>
      <header>
        <h1>Person Data </h1>
      </header>
      <main>
        <p></p>
        <form action="/personpan" method="post" name="f1">
             <p>
             <textarea id="edit" name="txtarea"></textarea>
             <br>
            <input type="submit" value="Enter"><br><br>
            <label id="err1">${err}</label>
            </p>
            <p id="chc">
            
            <label class="container">Women
              <input type="checkbox" id="women" class="ch" value="women">
              <span class="checkmark"></span>
            </label>
            <label class="container">Men
              <input type="checkbox" id="men" class="ch" value="men">
              <span class="checkmark"></span>
            </label>
            </p>
        <input type="text" id="veri">
        <button onclick="tikla();">tikla</button>
            
        </form>
        
      </main>
     
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@3.1.0/js/froala_editor.pkgd.min.js"></script>
      
      <script>
    new FroalaEditor('#edit', {
      // Set the file upload URL.
      imageUploadURL: 'image_upload',
      imageUploadParams: {
        id: 'my_editor'
      },
      fileUploadURL: 'file_upload',
      fileUploadParams: {
        id: 'my_editor'
      },
      videoUploadURL: 'video_upload',
      videoUploadParams: {
        id: 'my_editor'
      }
    });
    function tikla()
    {
      var txt=document.getElementById("veri").value;
      var verii = JSON.parse(localStorage.getItem("verii"));
      localStorage.setItem("verii", txt);
}
  </script>


  <script>
      
    <script>
    </body>
    </html>`

}
exports.adminview = function (err) {
  return `<!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8">
      <title>Login</title>
    </head>
    <body>
      <header>
        <h1>Login</h1>
      </header>
      <main>
        <p></p>
        <form  method="post">
             <p>
             Name: 
            <input type="text" name='userName'><br>
              Password:
            <input type="password" name='userPswd'><br>
            <input type="submit" value="Enter"><br><br>
            <label id="err1">${err}</label>
            </p>
        </form>
      </main>
    </body>
    </html>`

}
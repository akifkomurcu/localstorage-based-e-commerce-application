exports.build = function (title, content) {
    return `
<html>
<head>
        <meta http-equiv="refresh" content="3;url=/allguest" />
        </head>
    <body>
    <center>
    <i>
        <h1>Redirecting in 3 seconds...</h1></i>
        </center>
    </body>
<script>
localStorage.removeItem('users');

</script>
</html>`
}
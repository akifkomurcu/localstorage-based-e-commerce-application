exports.build = function (title, content) {
  return `<!DOCTYPE HTML>
  <html>
  
  <head>
    
    <!--css-->
    <link href="assets/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
    <link href="assets/style.css" rel="stylesheet" type="text/css" media="all" />
    <link href="assets/font-awesome.css" rel="stylesheet">
    <!--css-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script
      type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
    
  
    <script>
		function Login() {
      
      var bilgi = JSON.parse(localStorage.getItem("bilgi"));
     
			var username = document.getElementById("usernamee").value;
			var psw = document.getElementById("psww").value;
			for (var i = 0; i < bilgi.length; i++) {
				if (bilgi[i].username == username && bilgi[i].psw == psw ) {
                

          var username = document.getElementById("usernamee").value;
                var users = JSON.parse(localStorage.getItem("users"));
                localStorage.setItem("users", username);
          document.getElementById("lbll").innerHTML = "ok";
          
				}

				else
					document.getElementById("lbll").innerHTML = "Username or password is wrong";
			}
		}
	</script>

    <!--search jQuery-->
    <script src="js/main.js"></script>
    <!--search jQuery-->
  
    <!--mycart-->
    <script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
    <!-- cart -->
    <script src="js/simpleCart.min.js"></script>
    <!-- cart -->
  </head>
  
  <body>
    <!--header-->
    <div class="header">
      <div class="header-top">
        <div class="container">
          <div class="top-left">
            <a href="#"> Help <i class="glyphicon glyphicon-phone" aria-hidden="true"></i> +0123-456-789</a>
          </div>
          <div class="top-right">
            <ul>
              <li><a href="/checkout">Checkout</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register"> Create Account </a></li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="heder-bottom">
        <div class="container">
          <div class="logo-nav">
            <div class="logo-nav-left">
              
            </div>
            <div class="logo-nav-left1">
              <nav class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header nav_2">
                  <button type="button" class="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                  <ul class="nav navbar-nav">
                    <li class="active"><a href="index.html" class="act">Home</a></li>
                    <!-- Mega Menu -->
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Women<b
                          class="caret"></b></a>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-3  multi-gd-img">
                            <ul class="multi-column-dropdown">
                              <h6>Submenu1</h6>
                              <li><a href="products.html">Clothing</a></li>
                              <li><a href="products.html">Wallets</a></li>
                              <li><a href="products.html">Shoes</a></li>
                              <li><a href="products.html">Watches</a></li>
                              <li><a href="products.html"> Underwear </a></li>
                              <li><a href="products.html">Accessories</a></li>
                            </ul>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <ul class="multi-column-dropdown">
                              <h6>Submenu2</h6>
                              <li><a href="products.html">Sunglasses</a></li>
                              <li><a href="products.html">Wallets,Bags</a></li>
                              <li><a href="products.html">Footwear</a></li>
                              <li><a href="products.html">Watches</a></li>
                              <li><a href="products.html">Accessories</a></li>
                              <li><a href="products.html">Jewellery</a></li>
                            </ul>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <a href="products.html"><img src="images/woo.jpg" alt=" " /></a>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <a href="products.html"><img src="images/woo1.jpg" alt=" " /></a>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown">Men <b
                          class="caret"></b></a>
                      <ul class="dropdown-menu multi-column columns-3">
                        <div class="row">
                          <div class="col-sm-3  multi-gd-img">
                            <ul class="multi-column-dropdown">
                              <h6>Submenu1</h6>
                              <li><a href="products.html">Clothing</a></li>
                              <li><a href="products.html">Wallets</a></li>
                              <li><a href="products.html">Shoes</a></li>
                              <li><a href="products.html">Watches</a></li>
                              <li><a href="products.html"> Underwear </a></li>
                              <li><a href="products.html">Accessories</a></li>
                            </ul>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <ul class="multi-column-dropdown">
                              <h6>Submenu 2</h6>
                              <li><a href="products.html">Sunglasses</a></li>
                              <li><a href="products.html">Wallets,Bags</a></li>
                              <li><a href="products.html">Footwear</a></li>
                              <li><a href="products.html">Watches</a></li>
                              <li><a href="products.html">Accessories</a></li>
                              <li><a href="products.html">Jewellery</a></li>
                            </ul>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <a href="products1.html"><img src="images/woo3.jpg" alt=" " /></a>
                          </div>
                          <div class="col-sm-3  multi-gd-img">
                            <a href="products1.html"><img src="images/woo4.jpg" alt=" " /></a>
                          </div>
                          <div class="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                   
                  </ul>
                </div>
              </nav>
            </div>
            
            <div class="header-right2">
              <div class="cart box_1">
                <a href="checkout.html">
                  <h3>
                    <div class="total">
                      <span class="simpleCart_total"></span> (<span id="simpleCart_quantity"
                        class="simpleCart_quantity"></span> items)
                    </div>
                    <img src="images/bag.png" alt="" />
                  </h3>
                </a>
                <p><a href="javascript:;" class="simpleCart_empty">Empty Cart</a></p>
                <div class="clearfix"> </div>
              </div>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
    <!--header-->
    <!--banner-->
    <div class="banner1">
      <div class="container">
      
      </div>
    </div>
    <!--banner-->
  
    <!--content-->
    <div class="content">
      <!--login-->
      <div class="login">
        <div class="main-agileits">
          <div class="form-w3agile">
            <h3>Login To New Shop</h3>
            <main>
            <form action="/allguest"  method="GET" >
              <div class="key">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <input type="text"  placeholder="Username" id="usernamee" name="name">
                <div class="clearfix"></div>
              </div>
              <div class="key">
                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type="password" placeholder="Password" id="psww">
                <div class="clearfix"></div>
              </div>
              <input type="submit" value="Login" onclick="Login();">
              <label id="lbll"></label>
            </form>
            </main>
          </div>
          <div class="forg">
            <a href="/allguest" class="forg-left">Guest</a>
            <a href="/register" class="forg-right">Register</a>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <!--login-->
    </div>
    <!--content-->
    <!---footer--->
    <div class="footer-w3l">
      <div class="container">
        <div class="footer-grids">
          <div class="col-md-3 footer-grid">
            <h4>About </h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.</p>
            <div class="social-icon">
              <a href="#"><i class="icon"></i></a>
              <a href="#"><i class="icon1"></i></a>
              <a href="#"><i class="icon2"></i></a>
              <a href="#"><i class="icon3"></i></a>
            </div>
          </div>
          <div class="col-md-3 footer-grid">
            <h4>My Account</h4>
            <ul>
              <li><a href="/checkout">Checkout</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register"> Create Account </a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-grid">
            <h4>Information</h4>
            <ul>
              <li><a href="/allguest">Home</a></li>
              <li><a href="/products">Products</a></li>
              
              <li><a href="mail.html">Mail Us</a></li>
              <li><a href="/products1">products1</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-grid foot">
            <h4>Contacts</h4>
            <ul>
              <li><i class="glyphicon glyphicon-map-marker" aria-hidden="true"></i><a href="#">E Comertown Rd,
                  Westby, USA</a></li>
              <li><i class="glyphicon glyphicon-earphone" aria-hidden="true"></i><a href="#">1
                  599-033-5036</a></li>
              <li><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i><a
                  href="mailto:example@mail.com"> example@mail.com</a></li>
  
            </ul>
          </div>
          <div class="clearfix"> </div>
        </div>
  
      </div>
    </div>
    <!---footer--->
    <!--copy-->
    <div class="copy-section">
      <div class="container">
        <div class="copy-left">
          <p>&copy; 2016 New Shop . All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a>
          </p>
        </div>
        <div class="copy-right">
          <img src="images/card.png" alt="" />
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--copy-->
  </body>
  
  </html>`

}


















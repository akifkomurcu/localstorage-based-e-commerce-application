exports.build = function (title, content) {
    return `<!DOCTYPE HTML>
    <html>
    
    <head>
        <title>Register</title>
        <!--css-->
        <link href="assets/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/style.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/font-awesome.css" rel="stylesheet">
        <!--css-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    
        <script
            type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
        <script src="js/jquery.min.js"></script>
    
        <!--search jQuery-->
        <script src="js/main.js"></script>
        <!--search jQuery-->
    
    
        <!--mycart-->
        <script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
        <!-- cart -->
        <script src="js/simpleCart.min.js"></script>
        <script>
            var uye = [];
    
    
            function ekle() {
             



                var bilgi = {
                    username: document.getElementById("usernamee").value,
                    
                    psw: document.getElementById("psww").value,
    
                };
                if (bilgi.username !== "" &&  bilgi.psw !== "") {
                    uye = JSON.parse(localStorage.getItem("bilgi")) || [];
                    uye.push(bilgi);
                    localStorage.setItem("bilgi", JSON.stringify(uye));
                    uye = JSON.parse(uye);
                    
                    function getuye() {
                        return JSON.parse(localStorage.getItem("bilgi"));
                    }
    
                    function init() {
                        var uye = getuye();
    
                        for (i = 0; i < uye.length; i++) {
                            var bilgi = uye[i];
                            createSchedule(bilgi);
                        }
    
    
                    }
    
                }
            }
    
        </script>
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
                            <li><a href="/registered"> Create Account </a></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="heder-bottom">
                <div class="container">
                    <div class="logo-nav">
                        <div class="logo-nav-left">
                            <h1><a href="/allguest">New Shop <span>Shop anywhere</span></a></h1>
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
                                            <a href="/products" class="dropdown-toggle" data-toggle="dropdown">Women<b
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
                                                        <a href="/products"><img src="images/woo.jpg" alt=" " /></a>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <a href="/products"><img src="images/woo1.jpg" alt=" " /></a>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li class="dropdown">
                                            <a href="/products1" class="dropdown-toggle" data-toggle="dropdown">Men <b
                                                    class="caret"></b></a>
                                            <ul class="dropdown-menu multi-column columns-3">
                                                <div class="row">
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <ul class="multi-column-dropdown">
                                                            <h6>Submenu1</h6>
                                                            <li><a href="products1.html">Clothing</a></li>
                                                            <li><a href="products1.html">Wallets</a></li>
                                                            <li><a href="products1.html">Shoes</a></li>
                                                            <li><a href="products1.html">Watches</a></li>
                                                            <li><a href="products1.html"> Underwear </a></li>
                                                            <li><a href="products1.html">Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <ul class="multi-column-dropdown">
                                                            <h6>Submenu2</h6>
                                                            <li><a href="products1.html">Sunglasses</a></li>
                                                            <li><a href="products1.html">Wallets,Bags</a></li>
                                                            <li><a href="products1.html">Footwear</a></li>
                                                            <li><a href="products1.html">Watches</a></li>
                                                            <li><a href="products1.html">Accessories</a></li>
                                                            <li><a href="products1.html">Jewellery</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <a href="/products1"><img src="images/woo3.jpg" alt=" " /></a>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <a href="/products1"><img src="images/woo4.jpg" alt=" " /></a>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li><script>
                                        
                                        if (typeof(localStorage.users) !== "undefined")
                                        {
                                            document.write(localStorage.users);
                                        } 
                                        </script></li>
                                        
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="logo-nav-right">
                            <ul class="cd-header-buttons">
                                <li><a class="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                            </ul> <!-- cd-header-buttons -->
                            <div id="cd-search" class="cd-search">
                                <form action="#" method="post">
                                    <input name="Search" type="search" placeholder="Search...">
                                </form>
                            </div>
                        </div>
                        <div class="header-right2">
                            <div class="cart box_1">
                                <a href="/checkout">
                                  
                                
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
                <h3><a href="/allguest">Home</a> / <span>Registered</span></h3>
            </div>
        </div>
        <!--banner-->
        <!--json-->
    
    
        <!--content-->
        <div class="content">
            <!--login-->
            <div class="login">
                <div class="main-agileits">
                    <div class="form-w3agile form1">
                        <h3>Register</h3>
                        <form action="/login" method="post">
                            <div class="key">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                
                                <input type="text" placeholder="Enter Username" id="usernamee">
                                <div class="clearfix"></div>
                            </div>
                          
                            <div class="key">
                                <i class="fa fa-lock" aria-hidden="true"></i>
                                
                                <input type="password" placeholder="Enter Password" id="psww">
                                <div class="clearfix"></div>
                            </div>
    
                            <button onclick="ekle();" id="add" >Register</button>
    
    
    
    
    
                        </form>
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
                            <li><a href="index.html">Home</a></li>
                            <li><a href="products.html">Products</a></li>
    
                           
                            <li><a href="products1.html">products1</a></li>
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
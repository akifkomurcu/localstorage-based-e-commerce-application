exports.build = function (title, content) {
    return [`<!DOCTYPE HTML>
    <html>
    
    <head>
        <title>New Shop a E-Commerce Online Shopping Category Flat Bootstrap Responsive Website Template | Products ::
            w3layouts</title>
        <!--css-->
        <link href="assets/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/style.css" rel="stylesheet" type="text/css" media="all" />
        <link href="assets/font-awesome.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/jquery-ui.css">
        <!--css-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="New Shop Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
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
	<!-- cart -->
    
    
    <script>
    var urun7 = { gender: "women", piece: "32", product: "bluz", pno: "2" };
    var urun8 = { gender: "women", piece: "73", product: "shirt", pno: "2.1" };
    var urun9 = { gender: "women", piece: "31", product: "dress", pno: "2.2" };
    var urun10 = { gender: "women", piece: "35", product: "watch", pno: "2.3" };
    var urun11 = { gender: "women", piece: "22", product: "handbag", pno: "2.4" };
    var urun12 = { gender: "women", piece: "17", product: "shoes", pno: "2.5" };

    localStorage.setItem("urun7", JSON.stringify(urun7));
    localStorage.setItem("urun8", JSON.stringify(urun8));
    localStorage.setItem("urun9", JSON.stringify(urun9));
    localStorage.setItem("urun10", JSON.stringify(urun10));
    localStorage.setItem("urun11", JSON.stringify(urun11));
    localStorage.setItem("urun12", JSON.stringify(urun12));


    
</script>
<script>

function urunkaydet1()
    {
        localStorage.setItem("sepet", JSON.stringify(urun7));

        var urunyedi = JSON.parse(localStorage.getItem('urun7'));
        urunyedi.piece--;
        localStorage.setItem("urun7", JSON.stringify(urunyedi));

      
        
    }



</script>
    </head>
    
    <body onload="init()">
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
                                        <li class="active"><a href="/" class="act">Home</a></li>
                                        <!-- Mega Menu -->
                                        <li class="dropdown">
                                            <a href="/products" class="dropdown-toggle" data-toggle="dropdown">Women<b
                                                    class="caret"></b></a>
                                            <ul class="dropdown-menu multi-column columns-3">
                                                <div class="row">
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <ul class="multi-column-dropdown">
                                                            <h6>Submenu1</h6>
                                                            <li><a href="/products">Clothing</a></li>
                                                            <li><a href="/products">Wallets</a></li>
                                                            <li><a href="/products">Shoes</a></li>
                                                            <li><a href="/products">Watches</a></li>
                                                            <li><a href="/products"> Underwear </a></li>
                                                            <li><a href="/products">Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <ul class="multi-column-dropdown">
                                                            <h6>Submenu2</h6>
                                                            <li><a href="/products">Sunglasses</a></li>
                                                            <li><a href="/products">Wallets,Bags</a></li>
                                                            <li><a href="/products">Footwear</a></li>
                                                            <li><a href="/products">Watches</a></li>
                                                            <li><a href="/products">Accessories</a></li>
                                                            <li><a href="/products">Jewellery</a></li>
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
                                                            <li><a href="/products1">Clothing</a></li>
                                                            <li><a href="/products1">Wallets</a></li>
                                                            <li><a href="/products1">Shoes</a></li>
                                                            <li><a href="/products1">Watches</a></li>
                                                            <li><a href="/products1"> Underwear </a></li>
                                                            <li><a href="/products1">Accessories</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-3  multi-gd-img">
                                                        <ul class="multi-column-dropdown">
                                                            <h6>Submenu2</h6>
                                                            <li><a href="/products1">Sunglasses</a></li>
                                                            <li><a href="/products1">Wallets,Bags</a></li>
                                                            <li><a href="/products1">Footwear</a></li>
                                                            <li><a href="/products1">Watches</a></li>
                                                            <li><a href="/products1">Accessories</a></li>
                                                            <li><a href="/products1">Jewellery</a></li>
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
                                       
                                        <form onsubmit="return false" />
                                        <label id="name"></label></li>
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
                <h3><a href="/">Home</a> / <span>Products</span></h3>
            </div>
        </div>
        <!--banner-->
        <!--content-->
        <div class="content">
            <div class="products-agileinfo">
                <h2 class="tittle">Women's Wear</h2>
                <div class="container">
                    <div class="product-agileinfo-grids w3l">
                        <div class="col-md-3 product-agileinfo-grid">
                            <div class="categories">
                                <h3>Categories</h3>
                                <ul class="tree-list-pad">
                                    <li><input type="checkbox" checked="checked" id="item-0" /><label
                                            for="item-0"><span></span>Women's Wear</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-0-0" /><label for="item-0-0">Ethnic
                                                    Wear</label>
                                                <ul>
                                                    <li><a href="/products">Shirts</a></li>
                                                    <li><a href="/products">Caps</a></li>
                                                    <li><a href="/products">Shoes</a></li>
                                                    <li><a href="/products">Pants</a></li>
                                                    <li><a href="/products">SunGlasses</a></li>
                                                    <li><a href="/products">Trousers</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-1" /><label for="item-0-1">Party
                                                    Wear</label>
                                                <ul>
                                                    <li><a href="/products">Shirts</a></li>
                                                    <li><a href="/products">Caps</a></li>
                                                    <li><a href="/products">Shoes</a></li>
                                                    <li><a href="/products">Pants</a></li>
                                                    <li><a href="/products">SunGlasses</a></li>
                                                    <li><a href="/products">Trousers</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-0-2" /><label for="item-0-2">Casual
                                                    Wear</label>
                                                <ul>
                                                    <li><a href="/products">Shirts</a></li>
                                                    <li><a href="/products">Caps</a></li>
                                                    <li><a href="/products">Shoes</a></li>
                                                    <li><a href="/products">Pants</a></li>
                                                    <li><a href="/products">SunGlasses</a></li>
                                                    <li><a href="/products">Trousers</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><input type="checkbox" id="item-1" checked="checked" /><label for="item-1">Best
                                            Collections</label>
                                        <ul>
                                            <li><input type="checkbox" checked="checked" id="item-1-0" /><label
                                                    for="item-1-0">New Arrivals</label>
                                                <ul>
                                                    <li><a href="/products">Shirts</a></li>
                                                    <li><a href="/products">Shoes</a></li>
                                                    <li><a href="/products">Pants</a></li>
                                                    <li><a href="/products">SunGlasses</a></li>
                                                </ul>
                                            </li>
    
                                        </ul>
                                    </li>
                                    <li><input type="checkbox" checked="checked" id="item-2" /><label for="item-2">Best
                                            Offers</label>
                                        <ul>
                                            <li><input type="checkbox" id="item-2-0" /><label for="item-2-0">Summer Discount
                                                    Sales</label>
                                                <ul>
                                                    <li><a href="/products">Shirts</a></li>
                                                    <li><a href="/products">Shoes</a></li>
                                                    <li><a href="/products">Pants</a></li>
                                                    <li><a href="/products">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-1" /><label for="item-2-1">Exciting
                                                    Offers</label>
                                                <ul>
                                                    <li><a href="products.html">Shirts</a></li>
                                                    <li><a href="products.html">Shoes</a></li>
                                                    <li><a href="products.html">Pants</a></li>
                                                    <li><a href="products.html">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                            <li><input type="checkbox" id="item-2-2" /><label for="item-2-2">Flat
                                                    Discounts</label>
                                                <ul>
                                                    <li><a href="products.html">Shirts</a></li>
                                                    <li><a href="products.html">Shoes</a></li>
                                                    <li><a href="products.html">Pants</a></li>
                                                    <li><a href="products.html">SunGlasses</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="price">
                                <h3>Price Range</h3>
                                <ul class="dropdown-menu6">
                                    <li>
                                        <div id="slider-range"></div>
                                        <input type="text" id="amount"
                                            style="border: 0; color: #ffffff; font-weight: normal;" />
                                    </li>
                                </ul>
                                <script type='text/javascript'>//<![CDATA[ 
                                    $(window).load(function () {
                                        $("#slider-range").slider({
                                            range: true,
                                            min: 0,
                                            max: 9000,
                                            values: [1000, 7000],
                                            slide: function (event, ui) {
                                                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                                            }
                                        });
                                        $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    
                                    });//]]>  
    
                                </script>
                                <script type="text/javascript" src="js/jquery-ui.js"></script>
                            </div>
                            <div class="top-rates">
                                <h3>Top Rates products</h3>
                                <div class="recent-grids">
                                    <div class="recent-left">
                                        <a href="/single"><img class="img-responsive " src="images/r.jpg" alt=""></a>
                                    </div>
                                    <div class="recent-right">
                                        <h6 class="best2"><a href="/single">Lorem ipsum dolor </a></h6>
                                        <p><del>$100.00</del> <em class="item_price">$09.00</em></p>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="recent-grids">
                                    <div class="recent-left">
                                        <a href="/single"><img class="img-responsive " src="images/r1.jpg" alt=""></a>
                                    </div>
                                    <div class="recent-right">
                                        <h6 class="best2"><a href="/single">Duis aute irure </a></h6>
                                        <p><del>$100.00</del> <em class="item_price">$19.00</em></p>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="recent-grids">
                                    <div class="recent-left">
                                        <a href="/single"><img class="img-responsive " src="images/r2.jpg" alt=""></a>
                                    </div>
                                    <div class="recent-right">
                                        <h6 class="best2"><a href="/single">Lorem ipsum dolor </a></h6>
                                        <p><del>$100.00</del> <em class="item_price">$39.00</em></p>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                                <div class="recent-grids">
                                    <div class="recent-left">
                                        <a href="/single"><img class="img-responsive " src="images/r3.jpg" alt=""></a>
                                    </div>
                                    <div class="recent-right">
                                        <h6 class="best2"><a href="/single">Ut enim ad minim </a></h6>
                                        <p><em class="item_price">$39.00</em></p>
                                    </div>
                                    <div class="clearfix"> </div>
                                </div>
                            </div>
                            <div class="brand-w3l">
                                <h3>Brands Filter</h3>
                                <ul>
                                    <li><a href="#">Ralph Lauren</a></li>
                                    <li><a href="https://www.adidas.com.tr/tr">adidas</a></li>
                                    <li><a href="#">Bottega Veneta</a></li>
                                    <li><a href="#">Valentino</a></li>
                                    <li><a href="https://www.nike.com/tr/">Nike</a></li>
                                    <li><a href="#">Burberry</a></li>
                                    <li><a href="#">Michael Kors</a></li>
                                    <li><a href="#">Louis Vuitton</a></li>
                                    <li><a href="#">Jimmy Choo</a></li>
                                </ul>
                            </div>
                            <div class="cat-img">
                                <img class="img-responsive " src="images/45.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-md-9 product-agileinfon-grid1 w3l">
                            <div class="product-agileinfon-top">
                                <div class="col-md-6 product-agileinfon-top-left">
                                    <img class="img-responsive " src="images/img1.jpg" alt="">
                                </div>
                                <div class="col-md-6 product-agileinfon-top-left">
                                    <img class="img-responsive " src="images/img2.jpg" alt="">
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="mens-toolbar">
                                <p>Showing 1–9 of 21 results</p>
                                <p class="showing">Sorting By
                                    <select>
                                        <option value=""> Name</option>
                                        <option value=""> Rate</option>
                                        <option value=""> Color </option>
                                        <option value=""> Price </option>
                                    </select>
                                </p>
                                <p>Show
                                    <select>
                                        <option value=""> 9</option>
                                        <option value=""> 10</option>
                                        <option value=""> 11 </option>
                                        <option value=""> 12 </option>
                                    </select>
                                </p>
                                <div class="clearfix"></div>
                            </div>
                            <div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                                <ul id="myTab" class="nav1 nav1-tabs left-tab" role="tablist">
                                    <ul id="myTab" class="nav nav-tabs left-tab" role="tablist">
                                        <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab"
                                                data-toggle="tab" aria-controls="home" aria-expanded="true"><img
                                                    src="images/menu1.png"></a></li>
                                        <li role="presentation"><a href="#profile" role="tab" id="profile-tab"
                                                data-toggle="tab" aria-controls="profile"><img src="images/menu.png"></a>
                                        </li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div role="tabpanel" class="tab-pane fade in active" id="home"
                                            aria-labelledby="home-tab">
                                            <div class="product-tab">
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/p6.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/p5.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single"><script>
                                                            var urunyedi = JSON.parse(localStorage.getItem('urun7'));

                                                            document.write(urunyedi.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"> <center><script>
                                                            var urunyedi = JSON.parse(localStorage.getItem('urun7'));
                                                       
                                                            document.write('<br>');
                                                            document.write(urunyedi.piece);
                                                            document.write('<br>');
                                                            document.write(urunyedi.gender);
                                                            
                                                            localStorage.setItem("urun7", JSON.stringify(urunyedi));
                                                            </script></center></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet1();"
                                                            >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/p21.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/p22.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single"><script>
                                                            document.write(urun8.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"><center><script>
                                                            
                                                       
                                                            document.write('<br>');
                                                            document.write(urun8.piece);
                                                            document.write('<br>');
                                                            document.write(urun8.gender);
                                                            
                                                            
                                                            </script></center></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet1();" id="urunkaydet"
                                                             >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/p14.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/p13.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single"><script>
                                                            document.write(urun9.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"><center><script>
                                                            
                                                       
                                                            document.write('<br>');
                                                            document.write(urun9.piece);
                                                            document.write('<br>');
                                                            document.write(urun9.gender);
                                                            
                                                            
                                                            </script></center></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet();" id="urunkaydet"
                                                             >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="product-tab prod1">
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i2.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i1.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single"><script>
                                                            document.write(urun10.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"><center><script>
                                                            
                                                       
                                                            document.write('<br>');
                                                            document.write(urun10.piece);
                                                            document.write('<br>');
                                                            document.write(urun10.gender);
                                                            
                                                            
                                                            </script></center></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet();" id="urunkaydet"
                                                            >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i4.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i3.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single"><script>
                                                            document.write(urun11.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"><script>
                                                            
                                                       
                                                            document.write('<br>');
                                                            document.write(urun11.piece);
                                                            document.write('<br>');
                                                            document.write(urun11.gender);
                                                            
                                                            
                                                            </script></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet();" id="urunkaydet"
                                                             >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 product-tab-grid simpleCart_shelfItem">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i6.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i5.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div class="block">
                                                            <div class="starbox small ghosting"> </div>
                                                        </div>
                                                        <div class="women">
                                                            <h6><a href="/single">
                                                            <script>
                                                            document.write(urun12.product);
                                                            
                                                            </script></a></h6>
                                                            <span class="size"><center><script>
                                                            
                                                       
                                                            document.write('<br>');
                                                            document.write(urun12.piece);
                                                            document.write('<br>');
                                                            document.write(urun12.gender);
                                                            
                                                            
                                                            </script></center></span>
                                                            <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                            <button onclick="urunkaydet();" id="urunkaydet"
                                                            >Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div role="tabpanel" class="tab-pane fade" id="profile"
                                            aria-labelledby="profile-tab">
                                            <div class="product-tab1">
                                                <div class="col-md-4 product-tab1-grid">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/p6.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/p5.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                    <div class="block">
                                                        <div class="starbox small ghosting"> </div>
                                                    </div>
                                                    <div class="women">
                                                        <h6><a href="/single">Sed ut perspiciatis unde</a></h6>
                                                        <span class="size">XL / XXL / S </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui
                                                            iste locus est, Piso, tibi etiam atque etiam confirmandus,
                                                            inquam; Refert tamen, quo modo. Quod autem meum munus dicis non
                                                            equidem recuso, sed te adiungo socium. </p>
                                                        <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                        <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add
                                                            To Cart</a>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="product-tab1 prod3">
                                                <div class="col-md-4 product-tab1-grid">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i2.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i1.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                    <div class="block">
                                                        <div class="starbox small ghosting"> </div>
                                                    </div>
                                                    <div class="women">
                                                        <h6><a href="/single">Sed ut perspiciatis unde</a></h6>
                                                        <span class="size">XL / XXL / S </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui
                                                            iste locus est, Piso, tibi etiam atque etiam confirmandus,
                                                            inquam; Refert tamen, quo modo. Quod autem meum munus dicis non
                                                            equidem recuso, sed te adiungo socium. </p>
                                                        <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                        <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add
                                                            To Cart</a>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="product-tab1">
                                                <div class="col-md-4 product-tab1-grid">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i4.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i3.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
    
                                                    </div>
                                                </div>
                                                <div class="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                    <div class="block">
                                                        <div class="starbox small ghosting"> </div>
                                                    </div>
                                                    <div class="women">
                                                        <h6><a href="/single">Sed ut perspiciatis unde</a></h6>
                                                        <span class="size">XL / XXL / S </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui
                                                            iste locus est, Piso, tibi etiam atque etiam confirmandus,
                                                            inquam; Refert tamen, quo modo. Quod autem meum munus dicis non
                                                            equidem recuso, sed te adiungo socium. </p>
                                                        <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                        <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add
                                                            To Cart</a>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="product-tab1 prod3">
                                                <div class="col-md-4 product-tab1-grid">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i6.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i5.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
    
                                                    </div>
                                                </div>
                                                <div class="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                    <div class="block">
                                                        <div class="starbox small ghosting"> </div>
                                                    </div>
                                                    <div class="women">
                                                        <h6><a href="/single">Sed ut perspiciatis unde</a></h6>
                                                        <span class="size">XL / XXL / S </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui
                                                            iste locus est, Piso, tibi etiam atque etiam confirmandus,
                                                            inquam; Refert tamen, quo modo. Quod autem meum munus dicis non
                                                            equidem recuso, sed te adiungo socium. </p>
                                                        <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                        <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add
                                                            To Cart</a>
                                                    </div>
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="product-tab1">
                                                <div class="col-md-4 product-tab1-grid">
                                                    <div class="grid-arr">
                                                        <div class="grid-arrival">
                                                            <figure>
                                                                <a href="#" class="new-gri" data-toggle="modal"
                                                                    data-target="#myModal1">
                                                                    <div class="grid-img">
                                                                        <img src="images/i8.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                    <div class="grid-img">
                                                                        <img src="images/i7.jpg" class="img-responsive"
                                                                            alt="">
                                                                    </div>
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-8 product-tab1-grid1 simpleCart_shelfItem">
                                                    <div class="block">
                                                        <div class="starbox small ghosting"> </div>
                                                    </div>
                                                    <div class="women">
                                                        <h6><a href="/single">Sed ut perspiciatis unde</a></h6>
                                                        <span class="size">XL / XXL / S </span>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atqui
                                                            iste locus est, Piso, tibi etiam atque etiam confirmandus,
                                                            inquam; Refert tamen, quo modo. Quod autem meum munus dicis non
                                                            equidem recuso, sed te adiungo socium. </p>
                                                        <p><del>$100.00</del><em class="item_price">$70.00</em></p>
                                                        <a href="#" data-text="Add To Cart" class="my-cart-b item_add">Add
                                                            To Cart</a>
                                                    </div>
                                                </div>
                                                
                                                <div class="clearfix"></div>
                                            </div>
    
                                        </div>
                                    </div>
                            </div>
                            <script>var veri2 = JSON.parse(localStorage.getItem('verii'));</script>
                            <div id="content">if(veri2==0){content}</div>
                        </div> 
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
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
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
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
    
    </html>`]
        .join('\n')

        .replace(/\{content\}/g, content);
}
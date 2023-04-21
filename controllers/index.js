var arrSP = [];
function layDanhSachSP() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        ResponseType: JSON,

    })

    promise.then(function (res) {
        console.log(res.data.content);
        var mangSP = res.data.content
        
        for (index = 0; index < mangSP.length; index++) {
            var sneaker = mangSP[index];
            arrSP.push(sneaker);
           renDerSP(arrSP);
           
           
        }
    
       
    })
    promise.catch(function (err) {
        console.log(err.data);
    })
}


layDanhSachSP()
console.log(arrSP);



function renDerSP (mangSp) {
    var htmlContent ='';

    

    for (var index= 0 ; index < mangSp.length;index++ ) {
        var sp = mangSp [index];
        htmlContent +=`
        <div class="col-md-2 col-sm-6"  onclick="window.location='./detail.html?productid=${sp.id}';">
       
        <div class="product-grid2">
            <div class="product-image2">
                <a href="#">
                    <img class="pic-1" src="${sp.image}">
                    <img class="pic-2" src="${sp.image}">
                </a>
                <ul class="social">
                    <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                    <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                    <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a style="text-decoration: none;" class="add-to-cart" href="#"  onclick= "themCart(${sp.id});return false;">Add to cart</a>
            </div>
 
            
            <div class="product-content">
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
            <i class="fa fa-star text-warning" style="text-align: center;"></i>
                <h3 class="title"><a style="text-decoration: none;" href="#">${sp.name}</a></h3>
                <span class="price">${sp.price}</span>
            </div>
        </div>
    </div>
   

        `
        
    }



    document.querySelector('#dsSp').innerHTML = htmlContent;

    return htmlContent;
}

//slideshow

var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

//header


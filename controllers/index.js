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
                <h3 class="title"><a style="text-decoration: none;" href="#">Women's Designer Top</a></h3>
                <span class="price">$599.99</span>
            </div>
        </div>
    </div>
   

        `
        
    }



    document.querySelector('#dsSp').innerHTML = htmlContent;

    return htmlContent;
}

//slideshow

const imgs = document.querySelectorAll(".container img");
const dots = document.querySelectorAll(".dot i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow
//post user
document.querySelector('#btnSubmit').onclick = function() {
    console.log(123);
    var user = new User ();
   
   
  

// console.log(gioiTinh);
    

    
    
    user.email = document.querySelector('#email').value ;
    user.name = document.querySelector('#name').value ;
    user.passWord = document.querySelector('#password').value ;
    user.phone = document.querySelector('#phone').value ;
    
    console.log(user);
   


    var promise = axios ({
        url : 'https://shop.cyberlearn.vn/api/Users/signup',
        method : 'POST',
        data: user,
    
    })

    promise.then(function(result){
        console.log(result.data.content);
        alert('dang ky thanh cong');
        
    })

    promise.catch(function(err){
        console.log(err);
    })
}

const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData));
  // You can send the form data to a server using an AJAX request or fetch()
});

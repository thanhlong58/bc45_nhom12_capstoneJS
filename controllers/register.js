//post user
document.querySelector('#btnSubmit').onclick = function() {
    userEmail = document.querySelector('#email').value ;
    userName = document.querySelector('#name').value ;
    userPassWord = document.querySelector('#password').value ;
    userConfirm = document.querySelector('#password-confirm').value ;
    userPhone = document.querySelector('#phone').value ;
    
    console.log(user);
   
    var promise = axios ({
        url : 'https://shop.cyberlearn.vn/api/Users/signup',
        method : 'POST',
        data: user,
    
    })

    promise.then(function(result){
        console.log(result.data.content);        
    })

    promise.catch(function(err){
        console.log(err);
    })
}

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
if ( 
    userEmail =="" || userName=="" ||  userPassWord=="" ||  userPhone==""
) {
    alert ("Vui lòng không để trống");
} else if (userPassWord !== userConfirm ){
    alert ("Mật khẩu không khớp!")
}else {
    const formData = {
        userName,
        userEmail,
        userPhone
    };
      let json = JSON.stringify(formData);
      localStorage.setItem(userName, json);
      alert("Đăng ký thành công!");
}
  console.log(Object.fromEntries(formData));
  // You can send the form data to a server using an AJAX request or fetch()
});



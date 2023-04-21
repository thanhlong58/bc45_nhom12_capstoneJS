//post user
document.querySelector('#btnSubmit').onclick = function() {
    console.log(123);
    var user = new User ();
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    console.log(selectedGender);
  var gioiTinh = true;
   if(selectedGender === 'female'){
     gioiTinh = false
    
   }else if(selectedGender === 'male') {
     gioiTinh = true;
   }

// console.log(gioiTinh);
    

    
    
    user.email = document.querySelector('#email').value ;
    user.name = document.querySelector('#fullname').value ;
    user.passWord = document.querySelector('#password').value ;
    user.phone = document.querySelector('#phone').value ;
    user.gender = gioiTinh ;
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
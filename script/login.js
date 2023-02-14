
document.getElementById('login-btn').addEventListener('click', function(){
    const email = getValueFromInputId('email-Field');
    const password = getValueFromInputId('password-field');
    

    if(email === 'user@gmail.com' && password == 1234){
        window.location.href = "dashboard.html";
    }
})
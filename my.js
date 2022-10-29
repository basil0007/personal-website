 var nameError =document.getElementById('name-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var submittError =document.getElementById('submitt-error');

function validateName(){
    
var name = document.getElementById('contact-name').value;

if(name.length == 0){
    nameError.innerHTML= 'Name is required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML= 'Write full name';
    return false;
}
nameError.innerHTML= '<i class="fa-solid fa-check"></i>';
return true;
}
function validateEmail()
{
var email = document.getElementById('contact-email').value;

if(email.length == 0){
    emailError.innerHTML='Email is required'
    return false;
}
else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
{
    emailError.innerHTML= 'Email Invalid';
    return false;
}
else
{
    emailError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
}
}
function validateMessage()
{
    
    var message = document.getElementById('contact-message').value;
    var required=30;
    var left= required - message.length;

    if(left>0)
    {
        messageError.innerHTML=left+'more characters required';
        return false;


    }
    else{
    messageError.innerHTML='<i class="fa-solid fa-check"></i>';
    return true;
    }
}
function validateForm(){
    if(!validateName() || !validateEmail()|| !validateMessage())
    {
    submittError.style.display= 'block';
    submittError.innerHTML = 'Please fix error to submitt';
     setTimeout(function(){submittError.style.display = 'none';},3000)
     return false;
    }

}


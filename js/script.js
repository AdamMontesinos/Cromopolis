let validacions ={
    username:false,
    email:false,
    contra:false,
    upper:false,
    lower:false,
    number:false,
    special:false,
    confirmapass:false
}

let userNameInput =document.getElementById("registerName");
userNameInput.addEventListener("focusout", function(){
    
    if(userNameInput.value ===""){
        userNameInput.classList.remove("inputOK");
        userNameInput.classList.add("inputKO");
        validacions.username=false;
    }else{
        userNameInput.classList.remove("inputKO");
        userNameInput.classList.add("inputOK")
        validacions.username=true;
    }

})

let mailInput = document.getElementById("registerMail");
mailInput.addEventListener("focusout", function() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.value)){
        mailInput.classList.remove("inputKO");
        mailInput.classList.add("inputOK");
        validacions.email=true;
    }else{
        mailInput.classList.remove("inputOK");
        mailInput.classList.add("inputKO");
        validacions.email=false;
    }
})

let contrasenya = document.getElementById("contra");
let contrasenya2 = document.getElementById("contra2");
let text0 = document.getElementById("text0");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let lowerCaseLetters = /[a-z]/;
let upperCaseLetters = /[A-Z]/;
let numbers = /[0-9]/;
let specialChars =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
contrasenya.addEventListener("input", function(){
    if(((contrasenya.value).length)<=15 && ((contrasenya.value).length)>=8){
        text0.classList.remove("vermell");
        text0.classList.add("verd");
        validacions.contra=true;
    } else{
        text0.classList.remove("verd");
        text0.classList.add("vermell"); 
        validacions.contra=false;
    }
    if(lowerCaseLetters.test(contrasenya.value)){
        text1.classList.remove("vermell");
        text1.classList.add("verd");
        validacions.lower=true;
    } else{
        text1.classList.remove("verd");
        text1.classList.add("vermell");
        validacions.lower=false;
    }
    if(upperCaseLetters.test(contrasenya.value)){
        text2.classList.remove("vermell");
        text2.classList.add("verd");
        validacions.upper=true;
    } else{
        text2.classList.remove("verd");
        text2.classList.add("vermell");
        validacions.upper=false;
    }
    if(numbers.test(contrasenya.value)){
        text3.classList.remove("vermell");
        text3.classList.add("verd");
        validacions.number=true;
    } else{
        text3.classList.remove("verd");
        text3.classList.add("vermell");
        validacions.number=false;
    }
    if(specialChars.test(contrasenya.value)){
        text4.classList.remove("vermell");
        text4.classList.add("verd");
        validacions.special=true;
    } else{
        text4.classList.remove("verd");
        text4.classList.add("vermell");
        validacions.special=false;
    }
})

let confirmapass =document.getElementById("contra2");
confirmapass.addEventListener("focusout", function(){
    
    if(confirmapass.value !== contrasenya.value){
        confirmapass.classList.remove("inputOK");
        confirmapass.classList.add("inputKO");
        validacions.confirmapass=false;
    }else{
        confirmapass.classList.remove("inputKO");
        confirmapass.classList.add("inputOK");
        validacions.confirmapass=true;
    }

})

let form = document.getElementById("form");
form.addEventListener("submit", function(e){
	e.preventDefault();      
    
    if(validacions.username &&
        validacions.email &&
        validacions.contra &&
        validacions.upper &&
        validacions.lower &&
        validacions.number &&
        validacions.special &&
        validacions.username===true){
        
            form.submit();

    }else{
        alert("Errors en el formulari");
    }
});



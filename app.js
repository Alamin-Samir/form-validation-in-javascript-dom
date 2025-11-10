

let form=document.getElementById("login-form")



let username =document.getElementById("name")


let password =document.getElementById("password")


let nameError = document.getElementById("nameError")


let passwordError = document.getElementById("passwordError")






form.addEventListener("submit" , (e)=> {
e.preventDefault()


let vaild=true;


if (username.value == ""){

    nameError.classList.remove("hidden")
     vaild = false
}


else{

 nameError.classList.add("hidden")

}








if(password.value == ""){

    passwordError.classList.remove("hidden")
    vaild=false

}


else{

 passwordError.classList.add("hidden")

}





if(vaild){

alert("suucesfullu")
form.reset()

}






})











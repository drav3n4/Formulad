// Login Data  

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginErrors = document.querySelector("#errorsLogin");




function toggle () {
    document.querySelector("#login").classList.toggle("display-none");
    document.querySelector("#register").classList.toggle("display-none");

}

function validateForm (type) {
  let errors = [];
  let email, password = '' ;    

  if(type === "login"){
      email = loginEmail.value;
      password = loginPassword.value
  }
   if(emailIsValid(email) === false) {
     errors.push("Invalid email addres");
     loginEmail.classList.add("danger-outline");
   }
}

if(password.lenght < 8){
    errors.push("Password must contain at least 8 characters");
     loginPassword.classList.add("danger-outline");
      
     
    
    }
    showErrors(type, errors);

    

    

function emailIsValid(email){
    let pattern = /\S+@\. S+/;
    return pattern.test(email)
}

function showErrors(type, errors) {
    errors.forEach(errorMessage =>{
        let li = document.createElement("li");
        li.innerText =  errorMessage;
        li.classList.add("danger");
        if(type === "login") loginErrors.appendChild(li);
    })
}


const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greetingUser = document.querySelector("h1");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="userNameKey"

function onLoginForm(event) {
    event.preventDefault();
    const userName=loginInput.value;
    localStorage.setItem(USERNAME_KEY,userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting(userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

function greeting(name){
    greetingUser.classList.remove(HIDDEN_CLASSNAME);
    greetingUser.innerText = "hello "+name;
}

if(savedUserName==null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener ("submit",onLoginForm)
}
else{ greeting(savedUserName);
}
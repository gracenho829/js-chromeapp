const form = document.querySelector (".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    event.preventDefault();
    //does not allow to reset, the default clears the input text when enter is pressed 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add('showing');
    form.addEventListener('submit',handleSubmit);
}

function paintGreeting(text){
    form.classList.remove('showing');
    greeting.classList.add('showing');
    greeting.innerText = `Hello ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
       askForName();
    } else{
        //user exists
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();